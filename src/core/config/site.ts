export const siteConfig = {
  name: 'Rafael Couto Silva',
  url: 'https://portfolio-blush-eta-35.vercel.app',
  ogImage: 'https://portfolio-blush-eta-35.vercel.app/og.png',
  description: 'Desenvolvedor de Software focado em performance e custo inteligente.',
  links: {
    github: 'https://github.com/rafaelcsilvadev',
    linkedin: 'https://www.linkedin.com/in/rafa-couto',
    youtube: 'https://www.youtube.com/@rafa_couto_dev',
    freelas: 'https://www.99freelas.com.br/dashboard',
  },
} as const

export type SiteConfig = typeof siteConfig
