<script lang="ts">
	import AddTeam from './AddTeam.svelte';

	let scroll = 0;
	const onScroll = (e: UIEvent & { currentTarget: EventTarget & Window }) => {
		scroll = e.currentTarget.scrollY;
	};

	$: stage2 = scroll > 600;
</script>

<svelte:window on:scroll={onScroll} />

<div id="mobile" class:stage-2={stage2}>
	<header>
		<span>9:41</span>
		<span>{scroll} Vodafone</span>
	</header>
	<h1>Hello Ann</h1>
	<h2>Welcome back!</h2>
	<div class="card green" />
	<div class="card purple" />
	<div class="card" />
	<AddTeam active={stage2} />
</div>

<style>
	#mobile {
		position: sticky;
		top: 70px;
		left: 70%;

		background-color: var(--white);
		border-radius: 1rem;
		width: 300px;
		padding: 1rem;

		transition: transform 1.5s ease;
	}

	#mobile header {
		display: flex;
		justify-content: space-between;
		font-weight: 600;
		font-size: 0.75rem;
	}

	#mobile > h1 {
		color: var(--palette-grey-50);
		margin-top: 1rem;
		font-weight: 500;
	}

	#mobile > h2 {
		margin-top: 0.25rem;
		font-weight: 500;
	}

	#mobile .card {
		background-color: var(--palette-grey-90);
		border-radius: 1rem;
		padding: 1rem;
		width: 100%;
		height: 150px;
		margin-top: 1rem;
		transition: 0.5s ease;
	}

	#mobile .card.green {
		background-color: var(--palette-green-30);
	}

	#mobile .card.purple {
		background-color: var(--palette-purple-60);
	}

	#mobile.stage-2 {
		transform: translateX(-200px) translateY(30px) rotateX(15deg) rotateY(20deg) rotateZ(5deg);
	}

	#mobile.stage-2 .card {
		opacity: 0;
		transform: translateY(-300px);
	}
</style>
