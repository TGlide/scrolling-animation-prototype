<script lang="ts">
	import { scrollStore } from '$lib/store';
	import '../styles/index.css';

	const onScroll = (e: UIEvent & { currentTarget: EventTarget & Window }) => {
		$scrollStore = e.currentTarget.scrollY;
	};
</script>

<svelte:window on:scroll={onScroll} />

<main>
	<slot />
</main>
