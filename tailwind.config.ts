import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			keyframes: {
				glow: {
					'0%': { boxShadow: '0 0 2px #00ffea' },
					'50%': { boxShadow: '0 0 4px #00ffea, 0 0 10px #00ffea' },
					'100%': { boxShadow: '0 0 2px #00ffea' },
				},
			},
			animation: {
				glow: 'glow 2s ease-in-out infinite',
			},
			animationDelay: {
				'1': '1s',
				'2': '2s',
				'3': '3s',
				'4': '4s',
			},
		},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'crimson',
						enhancements: true,
					},
				],
			},
		}),
	],
} satisfies Config;