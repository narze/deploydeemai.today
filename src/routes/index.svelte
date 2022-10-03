<script context="module" lang="ts">
	// export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	import { getReasons } from '$lib/helper';
	import { page } from '$app/stores';

	const day = $page.url.searchParams.get('day');
	const { reasons } = getReasons(day ? +day : undefined);

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

<section on:click={random} class="select-none text-3xl font-sans text-center w-full h-full">
	<h2 class="text-gray-600">Deploy ดีไหม?</h2>

	{#key reason}
		<h1 class="w-full bounce font-bold">{reason}</h1>
	{/key}

	<p>
		กด <span class="border-2 border-gray-400 rounded-lg px-4 py-2 mx-2">SPACE</span> หรือคลิก
	</p>
</section>

<style lang="postcss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		@apply gap-4 md:gap-8;
	}

	h2 {
		@apply text-gray-500 text-xl md:text-2xl;
	}

	p {
		@apply text-gray-500 text-xl md:text-2xl;
	}

	h1 {
		@apply px-4 my-8 tracking-wider text-3xl md:text-6xl;
	}

	@keyframes bounce-once {
		0%,
		100% {
			transform: translateY(0%);
			animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
		}
		50% {
			transform: translateY(-25%);
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
		}
	}

	.bounce {
		animation: bounce-once 0.4s;
	}
</style>
