<script lang="ts">
	import { onMount } from 'svelte';
	
	let displayedCommand = '$ ';
	let finalCommand = 'npx terminaljobs --level=senior --lang=python';
	let currentIndex = 0;
	
	const typeWriter = () => {
	  if (currentIndex < finalCommand.length) {
		displayedCommand += finalCommand[currentIndex];
		currentIndex++;
		setTimeout(typeWriter, 30);
	  }
	};
	
	onMount(typeWriter);
  </script>
  
  <div class="flex min-h-screen items-start justify-center bg-black pt-20 md:pt-32">
	<div class="space-y-28 md:space-y-40 text-center w-full px-4 md:px-0">
	  <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
		opportunities for top engineers.
	  </h1>
	  
	  <div class="font-mono text-lg md:text-xl text-gray-300">
		<div class="break-words md:whitespace-nowrap md:overflow-x-auto py-2 inline-block text-left">
		  <span>{displayedCommand}</span>
		  <span class="caret">|</span>
		</div>
	  </div>
	  
	  <div class="space-y-3 md:space-y-4">
		<p class="text-xl md:text-2xl text-white">Want to find the best talent? Contact us:</p>
		<a href="mailto:hire@terminaljobs.com" 
		   class="text-lg md:text-xl text-cyan-400 hover:text-cyan-300 block">
		  hire@terminaljobs.com
		</a>
	  </div>
	</div>
  </div>
  
  <style>
	@keyframes blink {
	  0%, 100% { opacity: 1; }
	  50% { opacity: 0; }
	}
	
	.caret {
	  color: cyan;
	  animation: blink 1s infinite;
	}
  
	:global(html), :global(body) {
	  overflow-x: hidden;
	  position: relative;
	}
  </style>