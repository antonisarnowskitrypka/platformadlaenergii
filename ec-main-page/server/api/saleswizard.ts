import {type H3Event, getRequestIP, getRequestHeader, readBody, createError, defineEventHandler} from 'h3';

const SALESWIZARD_WEBHOOK_URL = 'https://platformadlaenergii.saleswizard.pl/webhook/praxnw1747814736';
const SALESWIZARD_HTML_KEY = 'hkld74e5p';
const IS_TEST_LEAD = true;

interface RateLimitRecord {
    count: number;
    firstRequestTime: number;
}

const ipRequestCounts = new Map<string, RateLimitRecord>();
const MAX_REQUESTS_PER_PERIOD = 2; // 2 requests per half a minute
const LIMITING_PERIOD = 30 * 1000;
const MAX_REQUESTS_UNKNOWN_IP_PER_WINDOW = 2;

function getClientIp(event: H3Event): string {
    const xForwardedForHeader = getRequestHeader(event, 'x-forwarded-for');
    if (xForwardedForHeader) {
        const firstIp = xForwardedForHeader.split(',')[0].trim();
        if (firstIp) {
            return firstIp;
        }
    }
    const directIp = event.node.req.socket?.remoteAddress;
    if (directIp) {
        return directIp;
    }
    const h3Ip = getRequestIP(event, {xForwardedFor: true});
    if (h3Ip) {
        return h3Ip;
    }
    return '';
}

function generateLeadId(): string {
    return Array.from(crypto.getRandomValues(new Uint8Array(4)))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

let cleanupInterval: NodeJS.Timeout | undefined = undefined;
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'test') {
    cleanupInterval ??= setInterval(() => {
        const now = Date.now();
        for (const [ip, record] of ipRequestCounts.entries()) {
            if ((now - record.firstRequestTime) > LIMITING_PERIOD * 2) {
                ipRequestCounts.delete(ip);
            }
        }
    }, LIMITING_PERIOD * 5);
}

export default defineEventHandler(async (event: H3Event) => {
    const ip = getClientIp(event) || 'unknown-ip';

    const now = Date.now();
    let ipRecord = ipRequestCounts.get(ip);

    const currentMaxRequests = (ip === 'unknown-ip')
        ? MAX_REQUESTS_UNKNOWN_IP_PER_WINDOW
        : MAX_REQUESTS_PER_PERIOD;

    if (ipRecord && (now - ipRecord.firstRequestTime) < LIMITING_PERIOD) {
        if (ipRecord.count >= currentMaxRequests) {
            console.warn(`Rate limit exceeded for IP (${ip === 'unknown-ip' ? 'unknown' : 'known'}): ${ip}. Count: ${ipRecord.count}, Max: ${currentMaxRequests}`);
            throw createError({
                statusCode: 429, // Too Many Requests
                statusMessage: 'Zbyt wiele żądań. Spróbuj ponownie później.',
            });
        }
        ipRecord.count++;
    } else {
        ipRequestCounts.set(ip, {count: 1, firstRequestTime: now});
    }

    try {
        const clientFormData = await readBody(event);

        const leadId = generateLeadId();

        const salesWizardPayload = {
            lead_ip: ip,
            lead_id: leadId,
            html_key: SALESWIZARD_HTML_KEY,
            is_test: IS_TEST_LEAD,
            user_column_data: [
                {string_value: clientFormData.title, column_id: 'FULL_NAME'},
                {string_value: clientFormData.phone, column_id: 'PHONE'},
                {string_value: clientFormData.email, column_id: 'EMAIL'},
                {string_value: clientFormData.body, column_id: 'MESSAGE_BODY'},
            ].filter(field => field.string_value !== '' && field.string_value !== null),
        };

        // console.log('Sending to SalesWizard:', JSON.stringify(salesWizardPayload, null, 2)); // Uncomment for debugging

        const salesWizardResponse = await $fetch.raw(SALESWIZARD_WEBHOOK_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: salesWizardPayload,
        });

        if (salesWizardResponse.ok && (salesWizardResponse._data === '' || salesWizardResponse._data === null || Object.keys(salesWizardResponse._data || {}).length === 0)) {
            return {success: true, message: 'Formularz wysłany poprawnie!'};
        } else {
            const responseData = salesWizardResponse._data;
            let extractedErrorMessage: string | undefined;
            if (responseData && typeof responseData === 'object' && 'message' in responseData && typeof responseData.message === 'string') {
                extractedErrorMessage = responseData.message;
            } else if (typeof responseData === 'string' && responseData.trim() !== '') {
                extractedErrorMessage = responseData;
            }
            const finalErrorMessage = extractedErrorMessage ?? `SalesWizard responded with status: ${salesWizardResponse.status}`;
            console.error('SalesWizard Error Data:', responseData);
            throw createError({
                statusCode: salesWizardResponse.status || 500,
                statusMessage: `Błąd podczas komunikacji z SalesWizard: ${finalErrorMessage}`,
            });
        }
    } catch (error: any) {
        console.error(`Error in /api/saleswizard: IP: ${ip}, Error Details:`, error.message, error.data || error.statusMessage || error);
        // If it's already an H3Error (from createError), re-throw it, otherwise create a new one.
        if (error.statusCode && error.statusMessage) {
            throw error;
        }
        throw createError({
            statusCode: 500,
            statusMessage: 'Wystąpił wewnętrzny błąd serwera podczas przetwarzania żądania.',
        });
    }
});