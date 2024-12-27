import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			// eslint-disable-next-line
			"@": path.resolve(__dirname, "./src"),
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "test.setup.js",
		coverage: {
			reporter: ["text", "json", "html"],
			reportsDirectory: "./tests/coverage",
		},
	},
});