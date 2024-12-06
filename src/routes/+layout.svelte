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
</script>

<div class="wrapper">
	<div class="gradient">
		<div class="grain">
			<div class="content">
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
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCIgb3BhY2l0eT0iMC4yMyI+PGRlZnM+PGZpbHRlciBpZD0iYmJibHVycnktZmlsdGVyIiB4PSItMTAwJSIgeT0iLTEwMCUiIHdpZHRoPSI0MDAlIiBoZWlnaHQ9IjQwMCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgcHJpbWl0aXZlVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgoJPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOTkiIHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgaW49IlNvdXJjZUdyYXBoaWMiIGVkZ2VNb2RlPSJub25lIiByZXN1bHQ9ImJsdXIiPjwvZmVHYXVzc2lhbkJsdXI+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbHRlcj0idXJsKCNiYmJsdXJyeS1maWx0ZXIpIj48ZWxsaXBzZSByeD0iMjUxLjUiIHJ5PSIxNzAuNSIgY3g9IjQxNS4yOTgxODE2NTg5Njg4IiBjeT0iNDk5LjA3NTgwNzY1MjkxNDUiIGZpbGw9ImhzbGEoMzcsIDkxJSwgNTUlLCAxLjAwKSI+PC9lbGxpcHNlPjxlbGxpcHNlIHJ4PSIyNTEuNSIgcnk9IjE3MC41IiBjeD0iNDAwLjA5Mzc1MTQ0NDU3ODg2IiBjeT0iLTE4OS4xNzk0MDM0NTU0NDMyNiIgZmlsbD0iaHNsYSgyNzIsIDEwMCUsIDU3JSwgMC4zNykiPjwvZWxsaXBzZT48ZWxsaXBzZSByeD0iMjUxLjUiIHJ5PSIxNzAuNSIgY3g9IjM4Ni4yMDQ5NDE0Mjc0NzU2NiIgY3k9IjUxMC43OTE1NTIzMDMwNDYzMyIgZmlsbD0iaHNsYSgyODYsIDkxJSwgNTUlLCAwLjI1KSI+PC9lbGxpcHNlPjxlbGxpcHNlIHJ4PSIyNTEuNSIgcnk9IjE3MC41IiBjeD0iOTEzLjAyMzE5NTE2NjgwMjYiIGN5PSIyMzEuNDc3MTI2MjU1Mzc3MjEiIGZpbGw9ImhzbGEoMzksIDk0JSwgNDclLCAwLjEzKSI+PC9lbGxpcHNlPjxlbGxpcHNlIHJ4PSIyNTEuNSIgcnk9IjE3MC41IiBjeD0iLTEzNy4xNzEyOTM5MDI4NjEzIiBjeT0iMjYxLjU0OTcwNzUzNzg3NSIgZmlsbD0iaHNsYSgzOSwgOTQlLCA0NyUsIDAuMTIpIj48L2VsbGlwc2U+PC9nPjwvc3ZnPg==');
		background-repeat: none;
		background-size: cover;
		background-position: center bottom;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		opacity: 0.3;
		z-index: -1;
	}

	.grain:before {
		content: '';
		background-color: var(--background);
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
		background-repeat: repeat;
		background-size: 200px;
		opacity: 0.2;
		top: 0;
		left: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -2;
	}
	.content {
		z-index: 2;
	}
</style>
