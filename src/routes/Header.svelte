<script lang="ts">
	import ModeSwitcher from '$src/components/ModeSwitcher.svelte';

	const social = [
		{
			tag: 'IG: @astilldude',
			svg: 'svg/instagram.svg',
			link: 'https://instagram.com/astilldude'
		},
		{
            tag: 'TikTok: @astilldude',
			svg: 'svg/tiktok.svg',
			link: 'https://tiktok.com/@astilldude'
        }
	];
</script>

<div class="flex w-full flex-row justify-center">
	<div
		class="m-6 flex w-fit flex-row items-center justify-between gap-4 rounded-full p-2 shadow-md"
	>
		<img src="svg/stilmen.svg" alt="A still man" class="size-14 rounded-full shadow-md" />
		Search...
		<div class="flex flex-row items-center justify-center gap-2">
			{#each social as {tag, svg, link}}
            <a href={link} aria-label={tag}>
				<img class="size-8 invert-0 dark:invert opacity-65 hover:opacity-95" src={svg} alt={tag} />
			</a>
			{/each}
		</div>
		<ModeSwitcher />
	</div>
</div>
