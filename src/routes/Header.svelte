<script lang="ts">
	import ModeSwitcher from '$src/components/ModeSwitcher.svelte';
</script>

<div class="flex w-full flex-row justify-center">
    <div
        class="m-6 flex w-fit flex-row items-center justify-between gap-8 rounded-lg border-4 p-2"
    >
        <img src="svg/triskel.svg" alt="Dvemolina" class="size-10" />
        <ModeSwitcher />
    </div>
    
</div>
