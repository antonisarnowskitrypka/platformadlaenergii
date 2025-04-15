// server/api/post/[slug].ts

export default defineEventHandler(async (event) => {
    const { slug } = event.context.params!;
    const query = `*[_type == "post" && slug.current == $slug][0]`;
    
    const sanityUrl = `https://g2jhiv3d.api.sanity.io/v1/data/query/blog_posts?query=${encodeURIComponent(query)}&$slug="${slug}"`;
    
    const res = await fetch(sanityUrl);
    const json = await res.json();
    return json.result;
  });
  