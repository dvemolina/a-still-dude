<script lang="ts">
	import ModeSwitcher from '$src/components/ModeSwitcher.svelte';
	import { onMount } from 'svelte';
	
	const social = [
		{
			tag: 'IG: @astillfella',
			svg: '/svg/instagram.svg',
			link: 'https://instagram.com/astillfella'
		},
		{
			tag: 'TikTok: @astillfella',
			svg: '/svg/tiktok.svg',
			link: 'https://tiktok.com/@astillfella'
		}
	];

	let isScrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 0;
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="flex w-full flex-row justify-center">
	<div 
		class="{isScrolled ? "glass" : ""} fixed m-6 flex w-fit flex-row items-center justify-between gap-10 rounded-lg px-3 py-2"
		>
		<a href="/" aria-label="Home - A Still Fella">
			<img src="/svg/stilmen.svg" alt="A Still Fella" class="size-12 rounded-full shadow-md" />
		</a>
		Search...
		<div class="flex flex-row items-center justify-center gap-2">
			{#each social as { tag, svg, link }}
				<a href={link} aria-label={tag}>
					<img
						class="size-8 opacity-65 invert-0 hover:opacity-95 dark:invert"
						src={svg}
						alt={tag}
					/>
				</a>
			{/each}
		</div>
		<ModeSwitcher />
	</div>
</div>


