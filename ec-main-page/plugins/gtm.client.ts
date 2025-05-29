declare global {
    interface Window {
        dataLayer: any[];
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const gtmId = config.public.gtmId;

    if (!gtmId) {
        if (import.meta.env.DEV) {
            console.warn('GTM_ID is not configured in runtimeConfig.public. GTM will not be initialized.');  //look for it in nuxt.config.ts
        }
        return;
    }

    // Ensure this code runs only in the browser
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
    }

    // Initialize dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || [];

    // GTM script for <head>
    // Using 'w' for window and 'd' for document as in the original GTM snippet
    (function (
        w: Window,
        d: Document,
        s: string,
        l: string,
        i: string
    ) {
        w[l as 'dataLayer'].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        let f = d.getElementsByTagName(s)[0],
            j = d.createElement(s) as HTMLScriptElement,
            dl = l !== 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;

        // Safer insertion: Check if 'f' and 'f.parentNode' exist
        if (f.parentNode && f) {
            f.parentNode.insertBefore(j, f);
        } else {
            // Fallback: if 'f' (the first script tag) isn't found, append to <head>
            d.head.appendChild(j);
        }
    })(window, document, 'script', 'dataLayer', gtmId);

    // GTM <noscript> snippet for <body>
    const noscriptTag = document.createElement('noscript');
    const iframeTag = document.createElement('iframe');
    iframeTag.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
    iframeTag.height = '0';
    iframeTag.width = '0';
    iframeTag.style.display = 'none';
    iframeTag.style.visibility = 'hidden';
    noscriptTag.appendChild(iframeTag);

    // Prepend the noscript tag to the body.
    // Using requestAnimationFrame to ensure the body element is available.
    window.requestAnimationFrame(() => {
        if (document.body) {
            document.body.insertBefore(noscriptTag, document.body.firstChild);
        } else {
            // Fallback if body is not available even after rAF.
            document.addEventListener('DOMContentLoaded', () => {
                if (document.body) { // Check again after DOMContentLoaded
                    document.body.insertBefore(noscriptTag, document.body.firstChild);
                } else if (import.meta.env.DEV) {
                    console.warn('GTM noscript: document.body not found even after DOMContentLoaded.');
                }
            });
        }
    });
});