<script lang="ts">
	import type { Snippet } from "svelte";
    import { fade } from "svelte/transition";

    interface Props {
        children: Snippet,
        url: string
    }

    let { url, children } = $props()

</script>

{#key url}
    <div class="h-full" in:fade>
        {@render children?.()}
    </div>
{/key}