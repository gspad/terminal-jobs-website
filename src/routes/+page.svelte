<script lang="ts">
	import { onMount } from 'svelte';

	let initialCommand = 'coming soon';
	let initialCommand2 = 'npx terminaljobs --level=senior --lang=python';

	let displayedCommand = '$ ';
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

<div class="container flex justify-center h-full mx-auto lg:mt-40">
    <div class="space-y-20 lg:space-y-48 items-center text-center">
        <div class="text-5xl lg:text-6xl text-white">opportunities for top engineers.</div>

        <div class="typewriters space-y-10 pl-5 lg:pl-0">
            <div class="typewriter-container font-mono text-2xl text-gray-300 flex justify-center">
                <div class="typewriter text-left w-84 block">
                    {displayedCommand}
					<span class="caret">|</span>
				</div>
            </div>
        </div>

		<div class="wrapper space-y-20 lg:space-y-10 mt-44">
        	<div class="text-3xl text-white">Want to find the best talent? Contact us:</div>
        	<div class="text-2xl">hire@terminaljobs.com</div>
		</div>
    </div>
</div>

<style>
	@keyframes blink {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}

	.caret {
		position: absolute;
		animation: blink 1s infinite;
		color: cyan;
	}

	.typewriter {
		min-width: 200px;
	}
</style>
