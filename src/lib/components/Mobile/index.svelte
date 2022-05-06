<script lang="ts">
	import { scrollStore } from '$lib/store';
	import { getStage } from '$lib/utils/landing';
	import AddTeam from './AddTeam.svelte';

	$: stage = getStage($scrollStore);
</script>

<div id="mobile" class:stage-2={stage === 2} class:stage-3={stage === 3}>
	<header>
		<span>9:41</span>
		<span>{$scrollStore} Vodafone</span>
	</header>
	<h1>Hello Ann</h1>
	<h2>Welcome back!</h2>
	<div class="card green" />
	<div class="card purple" />
	<div class="card" />
	<div class="bottom" />
	<AddTeam />
</div>

<style>
	#mobile {
		display: flex;
		flex-direction: column;

		position: absolute;
		top: 2rem;
		left: 70%;

		background-color: #fcfaf2;
		border-radius: 1rem;
		width: 300px;
		min-height: 700px;
		padding: 1rem;

		--duration: 1.5s;
		transition: transform var(--duration) ease;
	}

	.bottom {
		align-self: center;
		margin-top: auto;
		width: 120px;
		height: 6px;
		border-radius: 1rem;
		background-color: var(--black);
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
		transform: translateX(-200px) translateY(30px) rotateX(10deg) rotateY(-20deg) rotateZ(5deg);
	}

	#mobile.stage-3 {
		--duration: 1.5s;
		transform: translateX(-635px) translateY(30px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	}

	#mobile.stage-2 .card {
		opacity: 0;
		transform: translateY(-300px);
	}
</style>
