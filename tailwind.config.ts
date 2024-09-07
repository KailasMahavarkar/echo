import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {}
    },

    daisyui: {
        themes: ["dracula"],
    },

    plugins: [require("@tailwindcss/typography"), daisyui]
} as Config;
