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
					'0%': { boxShadow: '0 0 2px #808080' },
					'50%': { boxShadow: '0 0 4px #808080, 0 0 10px #808080' },
					'100%': { boxShadow: '0 0 2px #808080' },
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
			fontSize: {
				'body-lg': '1rem',
				'body': '.875rem',
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