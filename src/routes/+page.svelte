<script lang="ts">
	import { onMount } from 'svelte';

	let initialCommand = 'npx terminaljobs --help';
	let initialCommand2 = 'npx terminaljobs --level=senior --lang=python';

	let displayedCommand = '$';
	let displayedCommand2 = '$ ';

	let i1 = 0;
	let i2 = 0;

	const typeWriter1 = () => {
		if (i1 < initialCommand.length) {
			displayedCommand = displayedCommand + initialCommand.charAt(i1);
			i1++;
			setTimeout(typeWriter1, 30);
		} else {
			typeWriter2();
		}
	};

	const typeWriter2 = () => {
		if (i2 < initialCommand2.length) {
			displayedCommand2 = displayedCommand2 + initialCommand2.charAt(i2);
			i2++;
			setTimeout(typeWriter2, 30);
		}
	};

	onMount(typeWriter1);
</script>

<div class="container h-full mx-auto flex justify-center mt-20 lg:mt-80">
	<div class="space-y-32 lg:space-y-36 items-center text-center">
		<div class="text-4xl lg:text-6xl text-white">opportunities for top engineers.</div>

		<div class="typewriters space-y-10 pl-5 lg:pl-0 text-center justify-left lg:justify-center">
			<div class="typewriter-container text-1xl text-left lg:text-2xl text-gray-300 max-w-full">
				<span class="typewriter"><span>{displayedCommand}</span><span class="caret">|</span></span>
			</div>
			<div
				class="typewriter-container text-left text-1xl lg:text-2xl text-gray-300 max-w-full last-typewriter"
			>
				<span class="typewriter">
					<span>{displayedCommand2}</span>
					<span class="caret">|</span>
				</span>
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

	.typewriters {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.typewriter-container {
		position: relative;
		display: inline-block;
		font-family: monospace;
		margin-left: 0;
		margin-right: auto;
		letter-spacing: 0.15em;
		white-space: pre-wrap;
	}

	.last-typewriter {
		white-space: normal;
		word-wrap: break-word;
	}

	.typewriter {
		display: inline;
	}

	.caret {
		position: absolute;
		animation: blink 1s infinite;
		color: cyan;
	}

	.text-left {
		display: inline-flex;
		align-items: baseline;
	}
</style>
