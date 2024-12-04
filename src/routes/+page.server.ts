import type { Post } from "$src/lib/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
  const response = await event.fetch('api/posts');
  const posts: Post[] = await response.json();
  return { posts }
};