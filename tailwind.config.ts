import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
	darkMode: "selector",
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [],
	theme: {
		extend: {
			fontFamily: {
				headings: ['Vesper Libre', ...fontFamily.serif],
				subheadings: ['Nunito Sans Variable', ...fontFamily.sans],
				body: ['Noto Sans', ...fontFamily.sans],
			},
			colors: {
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
			'responsive-cards': 'repeat(auto-fit, minmax(375px, 450px))'
			}
		}
	}
} satisfies Config;
