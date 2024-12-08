<script lang="ts">
    let { data } = $props()
</script> 

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title}/>
</svelte:head>

<div class="flex flex-col w-full h-full mt-40 justify-center items-center">
    <article class=" prose xl:prose-lg lg:prose-lg dark:prose-invert w-full h-full">
        <hgroup>
            <h1>{data.meta.title}</h1>
            <p></p>
        </hgroup>
    
        <div class="tags">
            {#each data.meta.categories as category}
                <span class="border border-border px-8 py-2 rounded-full">&num;{category}</span>
            {/each}
        </div>
    
        <div>
            <data.content />
        </div>
    </article>
</div>
