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
  
  <div class="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
	<div class="space-y-16 text-center">
	  <h1 class="text-4xl font-bold text-white sm:text-6xl">
		opportunities for top engineers.
	  </h1>
	  
	  <div class="font-mono text-xl text-gray-300">
		<span>{displayedCommand}</span>
		<span class="caret">|</span>
	  </div>
	  
	  <div class="space-y-4">
		<p class="text-2xl text-white">Want to find the best talent? Contact us:</p>
		<a href="mailto:hire@terminaljobs.com" class="text-xl text-cyan-400 hover:text-cyan-300">
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
  </style>