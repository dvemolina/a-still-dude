<script lang="ts">
	import MailInput from '$src/components/MailInput.svelte';
import PostCard from '$src/components/PostCard.svelte';

	let { data } = $props();
	const posts = data.posts;
</script>

<section>
	<div class="mt-48 flex w-full flex-col items-center justify-center text-center mb-36">
		<h1 class="w-full font-headings xl:text-7xl lg:text-6xl md:text-5xl sm:text-3xl font-semibold">
			Test & Free science-backed knowledge<br> we weren't taught at school
		</h1>
		<div class="w-1/2 mt-8">
			<MailInput />
		</div>
	</div>
</section>

<section
	class="grid auto-rows-auto grid-cols-responsive-cards items-center justify-center gap-8 px-20 mb-36"
>
	{#each posts as { title, description, slug }}
		<PostCard {title} {description} {slug} />
	{/each}
</section>
