import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
	darkMode: "selector",
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				headings: ['Vesper Libre', ...fontFamily.serif],
				subheadings: ['Nunito Sans Variable', ...fontFamily.sans],
				body: ['Noto Sans', ...fontFamily.sans],
			},
			colors: {
				primary: "var(--primary)",
				background: "var(--background)",
				text: "var(--text)",
				textNeutral: "var(--text-neutral)",
				border: "var(--border)",
				borderActive: "var(--border-active)",
				card: "var(--card)",
				cta: "var(--cta)",
				ctaActive: "var(--cta-active)",
				ctaText: "var(--cta-text)",
				ctaTextActive: "var(--cta-text-active)"
			},
			gridTemplateColumns: {
				'responsive-cards': 'repeat(auto-fit, minmax(335px, 400px))'
			}
		}
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require('@tailwindcss/typography')
	],
} satisfies Config;
