import flowbitePlugin from "flowbite/plugin";
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/lib/esm/**/*.js",
		"./node_modules/flowbite/**/*.js",
		// flowbite.content(),
	],
	theme: {
		extend: {},
	},
	plugins: [flowbitePlugin],
};
