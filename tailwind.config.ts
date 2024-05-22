import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'

const nextConfig = {
  assetPrefix: '/continental-next/',
  basePath: '/continental-next',
};

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
        'accent': '#DA0A0A'
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
        'header-pattern': `url('${nextConfig.basePath}/img/header-pattern.png')`,
        'hero-mobile': `url('${nextConfig.basePath}/img/hero-mobile.png')`,
        'welcome-pattern': `url('${nextConfig.basePath}/img/welcome-pattern.png')`,
        'banner': `url('${nextConfig.basePath}/img/banner-bg.png')`,
        'achievements-pattern': `url('${nextConfig.basePath}/img/achievements-pattern.png')`,
        'socials-pattern': `url('${nextConfig.basePath}/img/socials-pattern.png')`,
        'getintouch-pattern': `url('${nextConfig.basePath}/img/getintouch-pattern.png')`,
        'footer-pattern': `url('${nextConfig.basePath}/img/footer-pattern.png')`,
      }
    },
  },
  plugins: [],
};
export default config;
