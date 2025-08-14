import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./markdoc/**/*.{md,mdx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // SoundHound-inspired color palette
        primary: {
          50: '#f3f0ff',
          100: '#e9e5ff',
          200: '#d6cfff',
          300: '#b8a9ff',
          400: '#a58bfe', // Main lavender accent
          500: '#8b63ff',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#280654', // Deep purple primary
          950: '#1a0436',
        },
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e2e8f0',
          300: '#cbd5e0',
          400: '#a0aec0',
          500: '#718096',
          600: '#4a5568',
          700: '#2d3748',
          800: '#1a202c',
          900: '#171923',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        'border-color': "var(--border-color)",
        'text-muted': "var(--text-muted)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#1a202c',
            '--tw-prose-headings': '#280654',
            '--tw-prose-links': '#a58bfe',
            '--tw-prose-bold': '#1a202c',
            '--tw-prose-code': '#280654',
            '--tw-prose-pre-code': '#e9e5ff',
            '--tw-prose-pre-bg': '#280654',
            '--tw-prose-borders': '#e2e8f0',
          },
        },
        dark: {
          css: {
            '--tw-prose-body': '#e2e8f0',
            '--tw-prose-headings': '#a58bfe',
            '--tw-prose-links': '#a58bfe',
            '--tw-prose-bold': '#e2e8f0',
            '--tw-prose-code': '#e9e5ff',
            '--tw-prose-pre-code': '#e9e5ff',
            '--tw-prose-pre-bg': '#280654',
            '--tw-prose-borders': '#4a5568',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;