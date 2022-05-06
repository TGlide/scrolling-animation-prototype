<script>
	import Mobile from '$lib/components/Mobile/index.svelte';
</script>

<section class="container">
	<div id="screen">
		<div />
		<div />
		<div />
		<div />
	</div>
	<Mobile />
</section>

<style>
	section {
		background-color: #f0f0f0;
		min-height: 1000vh;
	}

	#screen {
		position: absolute;
		width: 100%;
		border: 1px solid var(--palette-grey-90);
		border-radius: 1rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 250px);
		gap: 2rem;
		padding: 1rem;
	}

	#screen div {
		background-color: var(--palette-grey-90);
		border-radius: 1rem;
	}

	#screen div:nth-child(1) {
		background-color: var(--palette-green-30);
	}

	#screen div:nth-child(2) {
		background-color: var(--palette-purple-60);
	}
</style>
