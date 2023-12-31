import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        "pri-blue": "#010587",
        "compli-1": "#79D601",
        "compli-2": "#F15756",

        "bg-col-1": "#F2F6FC",
        "bg-col-2": "#F1F1F1",

        "light-1": "#CCCDE7",
        "light-2": "#999BCF",
        "light-3": "#6769B7",
        "light-4": "#34379F",

        "dark-1": "#00011B",
        "dark-2": "#000236",
        "dark-3": "#010351",

        "gray-4": "#333333",
        "gray-5": "#666666",
        "gray-6": "#999999",
        "gray-7": "#CCCCCC",
        "gray-9": "#6A6A6A",

        "error-1": "#FF7070"
      },
      boxShadow: {
        "s1": "0px 1px 3px 0px rgba(0, 0, 0, 0.25)",
        "s2": "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
        "s3": "2px 2px 6px 0px rgba(0, 0, 0, 0.25)",
        "s4": "-1px 2px 4px -1px rgba(0, 0, 0, 0.25)",
        // "fh-inner": "0px 0px 4px 0px rgba(31, 41, 55, 0.15) inset",
      },
      fontFamily: {
        outfit: ["'Poppins'", "sans-serif"]
      },
      spacing: {
        cont1350: "calc((100% - 1350px) / 2)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
