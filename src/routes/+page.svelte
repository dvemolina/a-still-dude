<script lang="ts">
	import PostCard from '$src/components/PostCard.svelte';

	let { data } = $props();
	const posts = data.posts;
</script>

<section>
	<div class="mt-28 flex w-full flex-col items-center justify-center text-center">
		<h1 class="w-full font-headings text-7xl font-medium">
			Science-backed stillness <br />to keep us going places
		</h1>
		<h2 class="mt-5 font-subheadings text-3xl text-neutral-500">
			Open-access knowledge we weren't taught at school
		</h2>
	</div>
</section>

<section class="grid auto-rows-auto grid-cols-responsive-cards gap-8 px-20 justify-center items-center">
	{#each posts as { title, description, slug }}
		<PostCard {title} {description} {slug} />
	{/each}
</section>

<style>
	section {
		margin-bottom: 8rem;
	}
</style>
