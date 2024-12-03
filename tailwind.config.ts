import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin'

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
				primary: {
						DEFAULT: '#732D7C',
						50: '#CD8CD5',
						100: '#C67DD0',
						200: '#B95FC5',
						300: '#AB43B8',
						400: '#8F389A',
						500: '#732D7C',
						600: '#5E2566',
						700: '#491D4F',
						800: '#351539',
						900: '#200C22',
						950: '#150817'
				},
				secondary: {
					DEFAULT: '#B37951',
					50: '#EBE7D1',
					100: '#E5DEC3',
					200: '#D8C9A6',
					300: '#CCB28A',
					400: '#BF976D',
					500: '#B37951',
					600: '#995D43',
					700: '#7C4536',
					800: '#60302A',
					900: '#431E1D',
					950: '#351718'
				  },
				  neutral: {
					DEFAULT: '#BFBFBF',
					50: '#FFFFFF',
					100: '#F7F7F7',
					200: '#DBDBDB',
					300: '#BFBFBF',
					400: '#A3A3A3',
					500: '#878787', 
					600: '#6B6B6B',
					700: '#4F4F4F',
					800: '#333333',
					900: '#171717',
					950: '#090909'
				},

				//Semantic color tokens
				background: {
					light: '#EBE7D1',
					dark: '#150817',
				  },
				  text: {
					light: '#F7F7F7',
					dark: '#090909',
				  }
			},
			// Typography configuration
			typography: (theme) => ({
				// Default prose styles
				DEFAULT: {
				  css: {
					// Headings styling
					'h1, h2, h3': {
					  fontFamily: theme('fontFamily.headings'),
					  fontWeight: '600',
					  color: 'var(--color-text-heading)',
					},
					// Smaller headings
					'h4, h5, h6': {
					  fontFamily: theme('fontFamily.subheadings'),
					  fontWeight: '500',
					  color: 'var(--color-text-subheading)',
					},
					// Body text
					'p, ul, ol, blockquote': {
					  fontFamily: theme('fontFamily.body'),
					  color: 'var(--color-text-body)',
					},
					// Link styling
					'a': {
					  color: 'var(--color-primary-500)',
					  textDecoration: 'none',
					  fontWeight: '500',
					  transition: 'color 0.2s ease',
					  '&:hover': {
						color: 'var(--color-primary-600)',
						textDecoration: 'underline',
					  }
					},
					// Code styling
					'code': {
					  fontFamily: theme('fontFamily.mono'),
					  backgroundColor: 'var(--color-neutral-100)',
					  padding: '0.2rem 0.4rem',
					  borderRadius: '0.25rem',
					  fontWeight: '400',
					},
					// Blockquote styling
					'blockquote': {
					  borderLeftColor: 'var(--color-primary-500)',
					  fontStyle: 'italic',
					  quotes: 'none',
					}
				  }
				},
				// Dark mode typography
				invert: {
				  css: {
					color: 'var(--color-text-body)',
					'a': {
					  color: 'var(--color-primary-300)',
					  '&:hover': {
						color: 'var(--color-primary-200)',
					  }
					}
				  }
				}
			  }),

		}
	},

	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require('@tailwindcss/typography'),

		// Custom theme and CSS variable plugin
		plugin(({ addBase, theme }) => {
			// Base CSS variables for light mode
			const lightModeVars = {
			  '--color-text-heading': theme('colors.text.light'),
			  '--color-text-subheading': theme('colors.neutral.800'),
			  '--color-text-body': theme('colors.neutral.700'),
			  '--color-background': theme('colors.background.light'),
			};
	  
			// Dark mode CSS variables
			const darkModeVars = {
			  '--color-text-heading': theme('colors.text.dark'),
			  '--color-text-subheading': theme('colors.neutral.200'),
			  '--color-text-body': theme('colors.neutral.300'),
			  '--color-background': theme('colors.background.dark'),
			};
	  
			// Add base styles with CSS variables
			addBase({
			  ':root': lightModeVars,
			  '.dark': darkModeVars,
			});
		})
	]
} satisfies Config;
