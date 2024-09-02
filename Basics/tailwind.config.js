/** @type {import('tailwindcss').Config} */
module.exports = {
	/**
	 * this basically defines under our src folder and if there is
	 * any file with the below extension name we'll be using our css in those files
	 */
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
};
