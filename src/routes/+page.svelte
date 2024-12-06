<script lang="ts">
	import PostCard from '$src/components/PostCard.svelte';

	let { data } = $props();
	const posts = data.posts;
</script>

<section>
	<div class="mt-48 flex w-full flex-col items-center justify-center text-center mb-36">
		<h1 class="w-full font-headings text-7xl font-semibold">
			Free science-backed knowledge<br> we weren't taught at school
		</h1>
		<h2 class="mt-5 font-subheadings text-3xl text-neutral-500">
		</h2>
	</div>
</section>

<section
	class="grid auto-rows-auto grid-cols-responsive-cards items-center justify-center gap-8 px-20 mb-36"
>
	{#each posts as { title, description, slug }}
		<PostCard {title} {description} {slug} />
	{/each}
</section>
