<script lang="ts">
	import { onMount } from 'svelte';

	let initialCommand = 'npx terminaljobs --help';
	let initialCommand2 = 'npx terminaljobs --level=senior';
	let initialCommand3 = 'npx terminaljobs --level=senior title=devops';

	let displayedCommand = '$ ';
	let displayedCommand2 = '$ ';
	let displayedCommand3 = '$ ';

	let i1 = 0;
	let i2 = 0;
	let i3 = 0;

	const typeWriter1 = () => {
		if (i1 < initialCommand.length) {
			displayedCommand += initialCommand.charAt(i1);
			i1++;
			setTimeout(typeWriter1, 30);
		} else {
			typeWriter2();
		}
	};

	const typeWriter2 = () => {
		if (i2 < initialCommand2.length) {
			displayedCommand2 += initialCommand2.charAt(i2);
			i2++;
			setTimeout(typeWriter2, 30);
		} else {
			typeWriter3();
		}
	};

	const typeWriter3 = () => {
		if (i3 < initialCommand3.length) {
			displayedCommand3 += initialCommand3.charAt(i3);
			i3++;
			setTimeout(typeWriter3, 30);
		}
	};

	onMount(typeWriter1);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-36 items-center text-center">
		<div class="text-8xl lg:text-6xl text-white">opportunities for top engineers.</div>

		<div class="typewriters space-y-10 pl-5 lg:pl-0 text-center justify-left lg:justify-center">
			<div class="typewriter text-3xl lg:text-2xl text-gray-300 max-w-full">
				<span class="text-left">{displayedCommand}<span class="caret">|</span></span>
			</div>
			<div class="typewriter text-3xl lg:text-2xl text-gray-300 max-w-full">
				<span class="text-left">{displayedCommand2}<span class="caret">|</span></span>
			</div>
			<div class="typewriter text-3xl lg:text-2xl text-gray-300 overflow-wrap last-typewriter">
				<span class="text-left">{displayedCommand3}<span class="caret">|</span></span>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	@keyframes blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.button {
		border-radius: 1rem;
	}

	.white {
		background: rgb(255, 255, 255);
		font-weight: bold;
	}

	.typewriters {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.card-content {
		display: flex;
		justify-content: center;
		left: 50%;
	}

	.typewriter {
		font-family: monospace;
		margin-left: 0;
		margin-right: auto;
		letter-spacing: 0.15em;
		white-space: nowrap;
	}

	.last-typewriter {
		white-space: normal;
		word-wrap: break-word;
		max-width: 100%;
	}

	.caret {
		display: inline;
		animation: blink 1s infinite;
		font-size: 2rem;
		color: orange;
	}

	.text-left {
		display: inline-flex;
		align-items: baseline;
	}
</style>
