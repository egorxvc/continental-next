import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'
const isGithubActions = process.env.GITHUB_ACTIONS || false

let basePath = ''

if (isGithubActions) {
  // trim off `<owner>/`
  // @ts-ignore
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  basePath = `/${repo}`
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'accent': '#DA0A0A',
        'accent-hover': '#BC0808',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        mono: ['Russo One', ...defaultTheme.fontFamily.mono]
      },
      fontSize: {
        'small': '14px',
        'lg': '20px',
        'xl': '24px',
        '2xl': '28px',
        '4xl': '36px',
        '5xl': '46px',
        '6xl': '60px',
        '7xl': '80px',
        '8xl': '110px',
      },
      backgroundImage: {
        'header-pattern': `url('${basePath}/img/header-pattern.png')`,
        'hero-mobile': `url('${basePath}/img/hero-mobile.png')`,
        'welcome-pattern': `url('${basePath}/img/welcome-pattern.png')`,
        'banner': `url('${basePath}/img/banner-bg.png')`,
        'achievements-pattern': `url('${basePath}/img/achievements-pattern.png')`,
        'socials-pattern': `url('${basePath}/img/socials-pattern.png')`,
        'getintouch-pattern': `url('${basePath}/img/getintouch-pattern.png')`,
        'footer-pattern': `url('${basePath}/img/footer-pattern.png')`,
      }
    },
  },
  plugins: [],
};
export default config;
