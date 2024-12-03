<script lang="ts">
	import { toggleMode, mode } from 'mode-watcher';

</script>

<button aria-label="Mode Switcher" onclick={toggleMode} class="flex flex-row justify-center items-center p-1 cursor-pointer opacity-65 hover:opacity-90">
    {#if $mode === "light"}
	<img class="size-8" src="svg/lamp.svg" alt="Light Mode Switch" />
    {:else}
	<img class="size-8" src="svg/candle-flame.svg" alt="Dark Mode Switch" />
    {/if}
</button>
