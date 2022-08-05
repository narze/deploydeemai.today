<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	const reasons = ['จัดไป', 'ไม่ Deploy ตอนนี้แล้วจะ Deploy ตอนไหน', 'กดเลย'];

	let reason = '';

	onMount(() => {
		reason = reasons[Math.floor(Math.random() * reasons.length)];

		document.addEventListener('keypress', (e) => {
			if (e.key === ' ') {
				random();
			}
		});
	});

	function random() {
		reason = reasons[Math.floor(Math.random() * reasons.length)];
	}
</script>

<svelte:head>
	<title>Deploy ดีไหม?</title>
	<meta name="description" content="Deploy ดีไหม?" />
</svelte:head>

<section on:click={random} class="select-none text-6xl font-sans text-center w-full h-full">
	<h2 class="text-gray-600">Deploy ดีไหม?</h2>

	<h1 class="w-full">{reason}</h1>

	<p>
		กด <span class="border-2 border-gray-400 rounded-lg px-4 py-2">SPACE</span> หรือคลิก
	</p>
</section>

<style lang="postcss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		gap: 4rem;
	}
</style>
