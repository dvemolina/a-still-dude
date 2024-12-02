<script lang="ts">
	//Fonts
	import '@fontsource/vesper-libre'; //Headings
	import '@fontsource-variable/nunito-sans' //Subheadings
	import '@fontsource-variable/noto-sans' //Paragraphs


	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Header from './Header.svelte';
	let { children } = $props();
</script>

<ModeWatcher/>
<ParaglideJS {i18n}>
	<Header/>
	{@render children()}
</ParaglideJS>

