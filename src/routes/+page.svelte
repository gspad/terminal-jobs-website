<script lang="ts">
	import { onMount } from 'svelte';

	let initialCommand = 'npx terminaljobs --help';
	let initialCommand2 =
		'npx terminaljobs --level=senior title=devops --tech=aws,kubernetes,terraform --remote=true';
	let command = 'npx terminaljobs --location=remote';
	let command2 = 'npx terminaljobs --help';
	let command3 = 'npx terminaljobs --lang=typescript --location=on-site';
	let command4 = 'npx terminaljobs --level=junior title=devops --remote=false';
	let displayedCommand = '$ ';
	let displayedCommand2 = '$ ';
	let i = 0;

	const typeWriter1 = () => {
		if (i < initialCommand.length) {
			displayedCommand += initialCommand.charAt(i);
			i++;
			setTimeout(typeWriter1, 50);
		} else {
			i = 0;
			typeWriter2();
		}
	};

	const typeWriter2 = () => {
		if (i < initialCommand2.length) {
			displayedCommand2 += initialCommand2.charAt(i);
			i++;
			setTimeout(typeWriter2, 50);
		}
	};

	onMount(typeWriter1);

	function copyToClipboard() {
		navigator.clipboard.writeText(command);
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-48 text-center flex flex-col items-center">
		<img src="/logo-transparent.png" alt="Logo" class="h-16" />
		<div class="text-6xl">opportunities for top engineers.</div>

		<div class="typewriters space-y-10">
			<div class="card-wrapper">
				<div class="card-content text-2xl">
					{displayedCommand}
				</div>
			</div>

			<div class="card-wrapper">
				<div class="card-content text-2xl">
					{displayedCommand2}
				</div>
			</div>
		</div>

		<div class="wrapper space-y-16">
			<div class="text-4xl">no nonsense. try us out:</div>

			<div class="flex h-full space-x-9">
				<div class="flex-1 flex flex-col space-y-10">
					<div
						class="bg-transparent text-white p-4 rounded-md flex items-center space-x-4 border border-white animate-glow h-20 button"
					>
						<span class="flex-grow select-all">{'$ ' + command}</span>
						<button
							class="green text-white px-4 py-2 rounded hover:bg-blue-600"
							on:click={copyToClipboard}
						>
							Copy
						</button>
					</div>

					<div
						class="bg-transparent text-white p-4 rounded-md flex items-center space-x-4 border border-white animate-glow h-20 button"
					>
						<span class="flex-grow select-all">{'$ ' + command2}</span>
						<button
							class="green text-white px-4 py-2 rounded hover:bg-blue-600"
							on:click={copyToClipboard}
						>
							Copy
						</button>
					</div>
				</div>

				<div class="flex-1 flex flex-col space-y-10">
					<div
						class="bg-transparent text-white p-4 rounded-md flex items-center space-x-4 border border-white animate-glow h-20 button"
					>
						<span class="flex-grow select-all">{'$ ' + command3}</span>
						<button
							class="green text-white px-4 py-2 rounded hover:bg-blue-600"
							on:click={copyToClipboard}
						>
							Copy
						</button>
					</div>

					<div
						class="bg-transparent text text-white p-4 rounded-md flex items-center space-x-4 border border-white animate-glow h-20 button"
					>
						<span class="flex-grow select-all">{'$ ' + command4}</span>
						<button
							class="green text-white px-4 py-2 rounded hover:bg-blue-600"
							on:click={copyToClipboard}
						>
							Copy
						</button>
					</div>
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

	.green {
		background: rgb(82, 220, 163);
		font-weight: bold;
	}
</style>
