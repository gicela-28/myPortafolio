/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				pulsoSutil: {
					'0%, 100%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.1)', opacity: '0.8' },
				},
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				'pulso-icono': 'pulsoSutil 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
		},
	},
	plugins: [],
}