import { type SanityDocument } from "@sanity/client";
import groq from 'groq'

const POSTS_QUERY = groq`*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

export async function fetchPosts(): Promise<SanityDocument[]> {
  const { data } = await useSanityQuery(POSTS_QUERY);
  if (data?.value) {
    return data.value as SanityDocument[];
  } else {
    throw new Error('No posts found');
  }
}
