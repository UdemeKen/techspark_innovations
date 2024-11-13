import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'25': '#FCFAFF',
  				'50': '#F9F5FF',
  				'100': '#F4EBFF',
  				'200': '#E9D7FE',
  				'300': '#D6BBFB',
  				'400': '#B692F6',
  				'500': '#9E77ED',
  				'600': '#7F56D9',
  				'700': '#6941C6',
  				'800': '#53389E',
  				'900': '#42307D',
  				'950': '#2C1C5F'
  			},
  			secondary: {
  				'25': '#FAFAFF',
  				'50': '#F4F3FF',
  				'100': '#EBE9FE',
  				'200': '#D9D6FE',
  				'300': '#BDB4FE',
  				'400': '#9B8AFB',
  				'500': '#7A5AF8',
  				'600': '#6938EF',
  				'700': '#5925DC',
  				'800': '#4A1FB8',
  				'900': '#3E1C96',
  				'950': '#27115F'
  			},
  			white: '#FFFFFF',
  			black: '#1f1f1f',
  			transparent: '#FFFFFF',
  			heading: '#1f1f1f',
  			paragraphe: '4b5563',
  			label: '#1f1f1f',
  			placeholder: '#9ca3af',
  			table: colors.gray[900],
  			backgroundDisable: '#F3F4F6',
  			border: '#E5E7EB',
  			'input-border': colors.gray[300],
  			'icon': colors.gray[500]
  		},
  		fontSize: {
  			sm: '0.8rem',
  			base: '1rem',
  			xl: '1.25rem',
  			'2xl': '1.563rem',
  			'3xl': '1.953rem',
  			'4xl': '2.441rem',
  			'5xl': '3.052rem',
			h1: [
				"4rem",
				{
					lineHeight: "5rem",
					letterSpacing: "0.0375rem",
					fontWeight: "700",
				},
			],
			h2: [
				"3rem",
				{
					lineHeight: "2rem",
					letterSpacing: "0.035rem",
					fontWeight: "700",
				},
			],
			h3: [
				"2.5rem",
				{
					lineHeight: "3.5rem",
					letterSpacing: "0.05rem",
					fontWeight: "700",
				},
			],
			h4: [
				"2rem",
				{
					lineHeight: "2.75rem",
					letterSpacing: "0rem",
					fontWeight: "700",
				},
			],
			h5: [
				"1.5rem",
				{
					lineHeight: "2.5rem",
					letterSpacing: "0rem",
					fontWeight: "600",
				},
			],
			h6: [
				"1.25rem",
				{
					lineHeight: "2rem",
					letterSpacing: "0rem",
					fontWeight: "500",
				},
			],
			p: [
				"0.875rem",
				{
					lineHeight: "1.5rem",
					letterSpacing: "0rem",
					fontWeight: "400",
				},
			],
			body: [
				"1rem",
				{
					lineHeight: "1.5rem",
					letterSpacing: "0rem",
					fontWeight: "400",
				},
			],
			span: ["0.75rem",
				{
					lineHeight: "1.5rem",
					letterSpacing: "0rem",
					fontWeight: "400",
				},
			]
  		},
  		screens: {
  			xs: '360px',
  			sm: '575px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1480px',
  			'3xl': '1680px',
  			'4xl': '1920px'
  		},
  		container: {
  			center: true,
  			screens: {
  				xs: '360px',
  				sm: '640px',
  				md: '768px',
  				lg: '1024px',
  				xl: '1280px',
  				'2xl': '1480px',
  				'3xl': '1680px',
  				'4xl': '1920px'
  			},
  			padding: {
  				DEFAULT: '0rem',
  				xs: '0rem',
  				sm: '0rem',
  				md: '0rem',
  				lg: '0rem',
  				xl: '0rem',
  				'2xl': '2rem',
  				'3xl': '2rem',
  				'4xl': '2rem'
  			}
  		},
  		fontWeight: {},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
