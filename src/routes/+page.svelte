<script lang="ts">
	import { onMount } from 'svelte';

	let initialCommand = 'npx terminaljobs --help';
	let initialCommand2 = 'npx terminaljobs --level=senior title=devops';

	let displayedCommand = '$ ';
	let displayedCommand2 = '$ ';
	let i = 0;

	const typeWriter1 = () => {
		if (i < initialCommand.length) {
			displayedCommand += initialCommand.charAt(i);
			i++;
			setTimeout(typeWriter1, 30);
		} else {
			i = 0;
			typeWriter2();
		}
	};

	const typeWriter2 = () => {
		if (i < initialCommand2.length) {
			displayedCommand2 += initialCommand2.charAt(i);
			i++;
			setTimeout(typeWriter2, 30);
		}
	};

	onMount(typeWriter1);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-20 lg:space-y-36 items-center text-center">
		<div class="text-2xl lg:text-6xl text-white">opportunities for top engineers.</div>

		<div class="typewriters space-y-10 pl-5 lg:pl-0 text-center justify-left lg:juistify-center">
			<div class="typewriter first-command centered text-md lg:text-2xl text-gray-300">
				<span class="inline-block text-left w-full">{displayedCommand}</span>
			</div>
			<div class="typewriter second-command text-1xl lg:text-2xl text-gray-300 whitespace-normal">
				<span class="inline-block text-left w-full">{displayedCommand2}</span>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	@keyframes gradient-border {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
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
		overflow: hidden;
		border-right: 0.15em solid orange;
		margin-left: 0;
		margin-right: auto;
		letter-spacing: 0.15em;
	}

	/* .first-command {
		margin-left: 25%;
	}

	.second-command {
		margin-left: 3%;
	} */
</style>
