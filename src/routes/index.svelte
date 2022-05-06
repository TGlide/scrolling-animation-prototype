<script lang="ts">
	import bg from '$lib/assets/bg.svg';
	import fg from '$lib/assets/fg.svg';
	import Mobile from '$lib/components/Mobile/index.svelte';
	import { scrollStore } from '$lib/store';
	import { getStage } from '$lib/utils/landing';

	$: stage = getStage($scrollStore);
</script>

<section id="first-section" class="container" class:stage-3={stage === 3}>
	<div id="screen">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="container wrapper">
		<div class="rollout" class:stage-2={stage === 2} class:stage-3={stage === 3}>
			<h1>No more brokers.<br />No more admin.</h1>
			<p>
				Create your program and max <br /> contributions, enrol your people and <br /> let them take
				control.
			</p>
			<ul>
				<li>Compete on compensation</li>
				<li>Customizable to your needs</li>
				<li>Simple and fast</li>
			</ul>
		</div>
		<Mobile />
	</div>
</section>
<section id="second-section" class="container">
	<div class="pocket-fg">
		<img src={fg} alt="a" srcset="" />
	</div>
	<div class="pocket-bg">
		<img src={bg} alt="a" srcset="" />
	</div>
</section>

<style>
	#first-section {
		background-color: #f0f0f0;
		height: 6000px;
		transition: background 0.5s ease;
	}

	#first-section.stage-3 {
		background-color: hsla(var(--palette-purple-30-hsl), 0.75);
		transition: background 1.5s ease;
	}

	#second-section {
		position: relative;
		z-index: 1001;

		background-color: #8659f3;
		height: 7000px;
	}

	#second-section :is(.pocket-fg, .pocket-bg) {
		position: absolute;
		left: 0;
		top: -695px;
		width: 100vw;
	}

	#second-section .pocket-fg img {
		width: 100%;
	}

	#second-section .pocket-bg {
		z-index: 1000;
	}

	#second-section .pocket-bg img {
		width: 100%;
	}

	#screen {
		position: absolute;
		width: 97.5%;
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

	.wrapper {
		position: sticky;
		top: 70px;
		z-index: 100;
	}

	.rollout {
		margin-top: 9rem;
		transform: translateY(30rem);
		opacity: 0;

		--delay: 0s;
		--duration: 0.5s;
		transition: opacity var(--duration) ease-out var(--delay),
			transform var(--duration) ease-out var(--delay);
	}

	.rollout.stage-2 {
		--delay: 0s;
		--duration: 1.5s;

		transform: translateY(0);
		opacity: 1;
	}

	.rollout.stage-3 {
		--delay: 0s;
		--duration: 1.5s;
		transform: translateY(-10rem);
		opacity: 0;
	}

	.rollout h1 {
		font-size: 4rem;
		font-weight: 600;
	}

	.rollout p {
		margin-top: 1.25rem;
		line-height: 1.25rem;
	}

	.rollout ul {
		margin-top: 2rem;
	}

	.rollout li {
		margin-top: 1rem;
	}
</style>
