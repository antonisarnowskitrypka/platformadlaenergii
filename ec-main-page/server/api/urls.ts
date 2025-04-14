import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'

async function fetchSanityPosts(retries: number = 3, delay: number = 1000): Promise<{ slug: string }[]> {
    const query = `*[_type == "post"]{_id, title, slug, description, keywords}`;  // Pobieramy slugi postów z typu blog_posts

    let attempts = 0;
    let result = null;

    while (attempts < retries) {
        try {
            const response = await fetch('https://g2jhiv3d.api.sanity.io/v1/data/query/blog_posts?query=' + encodeURIComponent(query));
            if (!response.ok) {
                throw new Error(`Failed to fetch Sanity data, status: ${response.status}`);
            }
            const data = await response.json();
            result = data.result;
            break; // Jeśli fetch jest udany, przerywamy próbę
        } catch (error) {
            attempts++;
            console.error(`Attempt ${attempts} failed:`, error);

            if (attempts < retries) {
                // Jeśli mamy jeszcze próby, poczekaj przed kolejną próbą
                console.log(`Retrying in ${delay / 1000} seconds...`);
                await new Promise(resolve => setTimeout(resolve, delay)); // Czekaj na retry
            } else {
                throw new Error(`Failed to fetch data after ${retries} attempts`);
            }
        }
    }

    return result || [];
}

export default defineSitemapEventHandler(async () => {
    try {
        const posts = await fetchSanityPosts(); // Ta funkcja teraz zwraca listę postów z Sanity
        const routes = posts.map((post: any) => {
            return { loc: `/blog/${post.slug.current}`, _sitemap: 'pages', 
            title: post.title,
            description: post.description,
            keywords: post.keywords };
        });
        routes.push(...[{
            title: 'Platforma dla Energii - Kompleksowe rozwiązania dla spółdzielni energetycznych',
            description: 'Platforma dla Energii oferuje eksperckie analizy i innowacyjne rozwiązania dla zrównoważonej energii w Polsce. Odkryj technologie odnawialnych źródeł energii, aktualności z branży i zasoby dla czystszego, ekologicznego jutra.',
            keywords: 'spółdzielnie energetyczne, energia odnawialna, wspólnota energetyczna, energetyka rozproszona, spółdzielnia energetyczna, energia lokalna, współpraca energetyczna, instalacje fotowoltaiczne, energetyka wiatrowa, zielona energia, energia słoneczna, OZE, odnawialne źródła energii, panele fotowoltaiczne, sieci energetyczne, wspólne inwestycje w energię, efektywność energetyczna, zarządzanie energią, audyt energetyczny, zrównoważony rozwój, energia dla społeczności, ekosystem energetyczny, energetyka wspólnotowa, energia geotermalna, magazynowanie energii, systemy zarządzania energią, rozwój rynku energii odnawialnej, integracja OZE, rynki energii, zmiana klimatu, zielona transformacja, alternatywne źródła energii, transformacja energetyczna, wspólne rozwiązania energetyczne, mikroinstalacje OZE, dotacje na fotowoltaikę, edukacja energetyczna, polityka energetyczna, zarządzanie zasobami energetycznymi, nowoczesne technologie energetyczne, samowystarczalność energetyczna, energooszczędność, transformacja w kierunku OZE, innowacje w energetyce, inteligentne sieci energetyczne, mikroenergetyka, zielona energia dla społeczności, lokalna produkcja energii, spółdzielnia odnawialnych źródeł energii, energetyka prosumencka, infrastruktura energetyczna, zrównoważona energia, inteligentne zarządzanie energią, inteligentne domy, przyszłość energii odnawialnej, platforma zarządzania energią, zarządzanie fakturami w spółdzielni energetycznej, platforma do rozliczeń energetycznych, rozliczenia energetyczne, fakturowanie OZE, system fakturowania w spółdzielniach energetycznych, rozliczenia za energię, zarządzanie kosztami energii, systemy rozliczeń energetycznych, fakturowanie wspólnot energetycznych, rozliczenia energii elektrycznej, automatyczne rozliczenia energii, zarządzanie fakturami OZE',
            loc: '/',
            _sitemap: 'pages'
        },
        {
            _sitemap: 'pages',
            loc: '/blog',
            title: 'Blog - Platforma dla Energii',
            description: 'Zapoznaj się z najnowszymi artykułami na blogu naszej platformy dla spółdzielni energetycznych. Dowiedz się, jak zarządzać energią odnawialną, rozliczać zużycie energii, wdrażać technologie OZE i efektywnie wspierać zrównoważony rozwój w Twojej wspólnocie.',
            keywords: 'blog energetyczny, spółdzielnia energetyczna, energia odnawialna, OZE, zarządzanie energią, rozliczenia energetyczne, fakturowanie OZE, technologie OZE, zarządzanie energią w spółdzielniach, energia dla wspólnot, ekosystem energetyczny, efektywność energetyczna, zrównoważony rozwój, energia słoneczna, fotowoltaika, energia wiatrowa, rozliczenia energii, zarządzanie kosztami energii'
        }
    
    ])
        return routes satisfies SitemapUrlInput[];
    } catch (error) {
        console.error('Error fetching Sanity posts:', error);
        return []; // Zwracamy pustą listę w przypadku błędu
    }
});
