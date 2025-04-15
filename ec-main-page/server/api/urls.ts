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
            return { loc: `/blog/${post.slug.current}`, _sitemap: 'pages'}
        });
        return routes satisfies SitemapUrlInput[];
    } catch (error) {
        console.error('Error fetching Sanity posts:', error);
        return []; // Zwracamy pustą listę w przypadku błędu
    }
});
