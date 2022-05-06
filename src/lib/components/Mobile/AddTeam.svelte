<script lang="ts">
	import person from '$lib/assets/person-1.png';
	import { scrollStore } from '$lib/store';
	import { getStage } from '$lib/utils/landing';
	$: stage = getStage($scrollStore);
</script>

<div class="add-team" class:active={stage === 2}>
	<h3>Add your team</h3>
	<h1>From the tools connected or manually.</h1>
	<button>Add people</button>
	<div class="avatar">
		<img src={person} alt="Smiling guy" />
	</div>
</div>

<style>
	.add-team {
		background-color: var(--white);
		border-radius: 1rem;
		box-shadow: var(--shadow);
		opacity: 0;

		padding: 1rem;

		position: absolute;
		left: -40%;
		top: 30%;

		--delay: 0s;
		transition: opacity 0.25s ease var(--delay), transform 0.5s ease var(--delay);
	}

	h3 {
		color: var(--palette-grey-70);
		font-size: 0.75rem;
	}

	h1 {
		margin-top: 0.25rem;
		font-weight: 500;
	}

	button {
		background-color: var(--black);
		color: var(--white);
		text-align: center;
		padding: 0.75rem 1rem;

		border-radius: 0.75rem;
		width: 100%;
		margin-top: 1rem;
	}

	button:hover {
		cursor: pointer;
		opacity: 0.75;
	}

	.active {
		opacity: 1;
		transform: translateY(-20px);
		--delay: 0.5s;
	}

	.avatar {
		display: grid;
		place-items: center;

		position: absolute;
		right: 1rem;
		bottom: -3rem;

		background-color: var(--white);
		border-radius: 100%;
		border-top-left-radius: 16px;
		box-shadow: var(--shadow);

		padding: 0.25rem;
		opacity: 0;

		--delay: 0s;
		transition: opacity 0.25s ease var(--delay), transform 0.5s ease var(--delay);
	}

	.active .avatar {
		--delay: 1s;
		opacity: 1;
		transform: translateY(-10px);
	}
</style>
