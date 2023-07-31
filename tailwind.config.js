/** @type {import('tailwindcss').Config} */
import { themes } from "./daisyui.config.js";
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	// safelist is used to allow classes to not be purged by tailwind
	safelist: ["alert-info", "alert-success", "alert-warning", "alert-error"],
	daisyui: {
		themes: themes,
	},
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
