<script lang="ts">
	import { goto } from '$app/navigation';

	interface Props {
		title: string;
		description: string;
		slug: string;
	}

	let { title, description, slug }: Props = $props();
</script>

<a href="/posts/{slug}" aria-label={title} class="group">
	<div
		class=" group-hover:border-4 flex h-[475px] flex-col justify-between rounded-3xl border border-border border-opacity-5 bg-card px-7 py-8 shadow-md transition-all group-hover:scale-105"
	>
		<p class="font-subheadings text-4xl font-bold text-text transition-all group-hover:text-text">
			{title}
		</p>
		<p
			class="mb-6 mt-auto font-body text-2xl text-textNeutral transition-all group-hover:text-text"
		>
			{description}
		</p>
		<button
			aria-label={title}
			class="peer w-full rounded-full border border-border border-opacity-50 bg-cta p-3 font-medium text-ctaText transition-all group-hover:bg-ctaActive group-hover:text-ctaTextActive"
			onclick={() => goto(`/posts/${slug}`)}>Read More</button
		>
	</div>
</a>
