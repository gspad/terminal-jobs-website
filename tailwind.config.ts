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
				'border-spin': {
					'100%': { transform: 'rotate(-360deg)' },
				}
			},
			animation: {
				glow: 'glow 2s ease-in-out infinite',
				'border-spin': 'border-spin 7s linear infinite',
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
						name: 'wintry',
						enhancements: true,
					},
				],
			},
		}),
	],
} satisfies Config;