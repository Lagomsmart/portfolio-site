/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		animation: {
			marquee: "marquee 25s linear infinite",
			marquee2: "marquee2 25s linear infinite",
		},
		keyframes: {
			marquee: {
				"0%": { transform: "translateX(0%)" },
				"100%": { transform: "translateX(-100%)" },
			},
			marquee2: {
				"0%": { transform: "translateX(100%)" },
				"100%": { transform: "translateX(0%)" },
			},
		},
		extend: {
			colors: {
				bgprimary: "#282a36",
				"green-color": "#50fa7b",
				"green-primary": "#50fa7b",
			},
			fontFamily: {
				ysab: ["Ysabeau Infant", "sans-serif"],
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
