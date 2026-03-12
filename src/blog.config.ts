import { clientEnv } from "@/lib/env/client.env";

const env = clientEnv();

export const blogConfig = {
  title: env.VITE_BLOG_TITLE || "Flare Stack Blog",
  name: env.VITE_BLOG_NAME || "blog",
  author: env.VITE_BLOG_AUTHOR || "作者",
  description:
    env.VITE_BLOG_DESCRIPTION || "一位数字媒体技术专业的大学生",
  social: {
    github: env.VITE_BLOG_GITHUB || "https://github.com/example",
    email: env.VITE_BLOG_EMAIL || "demo@example.com",
  },
  theme: {
    default: {
      background: {
        homeImage: env.VITE_DEFAULT_HOME_IMAGE || "", // R2 path or external URL (hero on homepage)
        globalImage: env.VITE_DEFAULT_GLOBAL_IMAGE || "", // R2 path or external URL (all other pages + scroll target)
        light: { opacity: env.VITE_DEFAULT_LIGHT_OPACITY ?? 0.15 }, // opacity in light mode
        dark: { opacity: env.VITE_DEFAULT_DARK_OPACITY ?? 0.1 }, // opacity in dark mode
        backdropBlur: env.VITE_DEFAULT_BACKDROP_BLUR ?? 8, // px, Gaussian blur
        transitionDuration: env.VITE_DEFAULT_TRANSITION_DURATION ?? 600, // ms, route crossfade (0-3000)
      },
    },
    fuwari: {
      homeBg: env.VITE_FUWARI_HOME_BG || "/images/home-bg.webp",
      avatar: env.VITE_FUWARI_AVATAR || "/images/avatar.png",
    },
  },
};

export type BlogConfig = typeof blogConfig;
