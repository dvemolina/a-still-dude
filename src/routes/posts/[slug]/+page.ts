import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({params}) => {
    try  {
        const post = await import(`$src/posts/${params.slug}.md`)
    
        return {
            content: post.default,
            meta: post.metadata
        }
    } catch(e) {
        error(404, `Error: ${e}. Could not find ${params.slug}`)
    }
};