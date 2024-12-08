<script lang="ts">
	//Fonts
	import '@fontsource/vesper-libre'; //Headings
	import '@fontsource-variable/nunito-sans'; //Subheadings
	import '@fontsource-variable/noto-sans'; //Paragraphs

	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Header from './Header.svelte';
	import PageTransition from './PageTransition.svelte';
	import Footer from './Footer.svelte';
	let { children, data } = $props();

	$effect(()=> {
		console.log(data.url.includes("/posts"))
	})

</script>

<div class="wrapper flex flex-col">
	<div class="{data.url.includes("/posts/") ? "no-gradient" : "gradient"}">
		<div class="grain">
			<div class="content flex flex-col px-4">
				<ModeWatcher lightClassNames={['light']} defaultMode="dark" />
				<ParaglideJS {i18n}>
					<Header />
					<PageTransition url={data.url}>
						{@render children()}
					</PageTransition>
					<Footer />
				</ParaglideJS>
			</div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		height: 100%;
		width: 100%;
		position: relative;
		display: flex;
	}

	.grain,
	.gradient {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.gradient:before {
		content: '';
		background-color: var(--background);
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCIgb3BhY2l0eT0iMC4xNSI+PGRlZnM+PGZpbHRlciBpZD0iYmJibHVycnktZmlsdGVyIiB4PSItMTAwJSIgeT0iLTEwMCUiIHdpZHRoPSI0MDAlIiBoZWlnaHQ9IjQwMCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgcHJpbWl0aXZlVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgoJPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTI2IiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGluPSJTb3VyY2VHcmFwaGljIiBlZGdlTW9kZT0ibm9uZSIgcmVzdWx0PSJibHVyIj48L2ZlR2F1c3NpYW5CbHVyPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWx0ZXI9InVybCgjYmJibHVycnktZmlsdGVyKSI+PGVsbGlwc2Ugcng9IjE2MSIgcnk9IjE1OS41IiBjeD0iNDA2LjA4NTE4MzIyODAxOTMzIiBjeT0iLTE1OS41MzAwMzk3NzE3NzUwOCIgZmlsbD0iaHNsYSgyOTAsIDg3JSwgNDclLCAwLjc0KSI+PC9lbGxpcHNlPjxlbGxpcHNlIHJ4PSIxNjEiIHJ5PSIxNTkuNSIgY3g9IjQyNS45NDMwMDc5NzI2OTg4IiBjeT0iNDkwLjE2NTMzNTM4OTM4NDQiIGZpbGw9ImhzbGEoMzcsIDkxJSwgNTUlLCAwLjc3KSI+PC9lbGxpcHNlPjxlbGxpcHNlIHJ4PSIxNjEiIHJ5PSIxNTkuNSIgY3g9IjQwNS43Mzc5NDgyNjQzNzM3IiBjeT0iNDk0LjYyMjc0MzUwNjY0NjMiIGZpbGw9ImhzbGEoNDMsIDk0JSwgNTQlLCAwLjcxKSI+PC9lbGxpcHNlPjxlbGxpcHNlIHJ4PSIxNjEiIHJ5PSIxNTkuNSIgY3g9IjQxNC42MDgyODI2ODk3NzU3NiIgY3k9IjU3OS45ODAxNjUwMTg3OTc1IiBmaWxsPSJoc2xhKDI4MywgOTklLCA1NCUsIDAuNTQpIj48L2VsbGlwc2U+PC9nPjwvc3ZnPg==');
		background-repeat: none;
		background-size: cover;
		background-position: center bottom;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		opacity: 1;
		z-index: -2;
	}

	.no-gradient:before {
		content: '';
		background-color: var(--background);
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCIgb3BhY2l0eT0iMC4xNSI+PGRlZnM+PGZpbHRlciBpZD0iYmJibHVycnktZmlsdGVyIiB4PSItMTAwJSIgeT0iLTEwMCUiIHdpZHRoPSI0MDAlIiBoZWlnaHQ9IjQwMCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgcHJpbWl0aXZlVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgoJPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTI2IiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGluPSJTb3VyY2VHcmFwaGljIiBlZGdlTW9kZT0ibm9uZSIgcmVzdWx0PSJibHVyIj48L2ZlR2F1c3NpYW5CbHVyPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWx0ZXI9InVybCgjYmJibHVycnktZmlsdGVyKSI+PGVsbGlwc2Ugcng9IjE2MSIgcnk9IjE1OS41IiBjeD0iNDA2LjA4NTE4MzIyODAxOTMzIiBjeT0iLTE1OS41MzAwMzk3NzE3NzUwOCIgZmlsbD0iaHNsYSgyOTAsIDg3JSwgNDclLCAwLjc0KSI+PC9lbGxpcHNlPjxlbGxpcHNlIHJ4PSIxNjEiIHJ5PSIxNTkuNSIgY3g9Ijk1NC4yODYwNjE2NjUyOTI0IiBjeT0iMjI0LjE3Njk3NTc2OTI4MzEiIGZpbGw9ImhzbGEoMzcsIDkxJSwgNTUlLCAwLjc3KSI+PC9lbGxpcHNlPjxlbGxpcHNlIHJ4PSIxNjEiIHJ5PSIxNTkuNSIgY3g9Ii0xNDUuMTM0MTM1MDQ5MzM1IiBjeT0iMjM1LjkwMTg0MjY0ODk2NTY3IiBmaWxsPSJoc2xhKDQzLCA5NCUsIDU0JSwgMC43MSkiPjwvZWxsaXBzZT48ZWxsaXBzZSByeD0iMTYxIiByeT0iMTU5LjUiIGN4PSI0MDguMDY3NjMyNzMxNDM5OTciIGN5PSI2MTEuMjMwMTQ2MjM5MjczOCIgZmlsbD0iaHNsYSgyODMsIDk5JSwgNTQlLCAwLjU0KSI+PC9lbGxpcHNlPjwvZz48L3N2Zz4=');
		background-repeat: none;
		background-size: cover;
		background-position: center bottom;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		opacity: 1;
		z-index: -2;
	}

	.grain:before {
		content: '';
		background-color: var(--background);
		background-image: var(--bg-grain);
		background-repeat: repeat;
		background-size: 185px;
		opacity: 0.15;
		top: 0;
		left: 0;
		position: fixed;
		width: 100%;
		height: 100vh;
		z-index: -1;
	}
	.content {
		z-index: 2;
	}
</style>
