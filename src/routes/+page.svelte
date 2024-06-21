<script lang="ts">
	import { onMount } from 'svelte';

	let initialCommand = 'npx terminaljobs --help';
	let initialCommand2 =
		'npx terminaljobs --level=senior title=devops --tech=aws,kubernetes,terraform';

	let command = 'npx terminaljobs --location=remote';
	let command2 = 'npx terminaljobs --help';
	let command3 = 'npx terminaljobs --lang=typescript --location=on-site';
	let command4 = 'npx terminaljobs --level=junior --title=devops --remote=false';
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

	function copyToClipboard() {
		navigator.clipboard.writeText(command);
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-36 text-center flex flex-col items-center">
		<div class="text-6xl text-white">opportunities for top engineers.</div>

		<div class="typewriters space-y-10">
			<div class="card-wrapper">
				<div class="card-content text-2xl text-gray-300">
					{displayedCommand}
				</div>
			</div>
			<div class="card-wrapper">
				<div class="card-content text-2xl text-gray-300">
					{displayedCommand2}
				</div>
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

	.card-wrapper {
		position: relative;
		padding: 0.25rem; /* Padding to make space for the border */
		border-radius: 1rem;
	}

	.button {
		border-radius: 1rem;
	}

	.white {
		background: rgb(255, 255, 255);
		font-weight: bold;
	}
</style>
