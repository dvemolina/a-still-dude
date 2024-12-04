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
		class="group-hover:scale-105 flex h-[475px] flex-col justify-between rounded-3xl border border-secondary-200 border-opacity-5 bg-neutral-900 px-7 py-8 transition-all group-hover:border-secondary-300"
	>
		<p
			class="font-subheadings text-4xl font-bold text-neutral-200 transition-all group-hover:text-neutral-50"
		>
			{title}
		</p>
		<p
			class="mb-6 mt-auto font-body text-2xl text-neutral-600 transition-all group-hover:text-neutral-400"
		>
			{description}
		</p>
		<button
			aria-label={title}
			class="peer w-full rounded-full border border-secondary-500 border-opacity-50 p-3 font-medium transition-all0 group-hover:bg-secondary-500"
			onclick={() => goto(`/posts/${slug}`)}>Read More</button
		>
	</div>
</a>
