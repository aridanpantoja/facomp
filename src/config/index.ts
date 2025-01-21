const createSiteConfig = () => {
  const mainNav = [
    {
      label: 'Sobre',
      href: '/sobre',
    },
    {
      label: 'Notícias',
      href: '/noticias',
    },
    {
      label: 'Documentos',
      href: '/documentos',
    },
    {
      label: 'Estágio',
      href: '/estagio',
    },
    {
      label: 'Projetos',
      href: '/projetos',
    },
  ]

  const footerNav = [
    {
      title: 'Tools',
      links: [
        {
          label: 'Desktop apps',
          href: '/blog',
        },
        {
          label: 'Figma to Framer',
          href: '/blog',
        },
        {
          label: 'Desktop apps',
          href: '/blog',
        },
        {
          label: 'Desktop apps',
          href: '/blog',
        },
        {
          label: 'Desktop apps',
          href: '/blog',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'Desktop apps',
          href: '/blog',
        },
        {
          label: 'Desktop apps',
          href: '/blog',
        },
        {
          label: 'Desktop apps',
          href: '/blog',
        },
        {
          label: 'Desktop apps',
          href: '/blog',
        },
        {
          label: 'Desktop apps',
          href: '/blog',
        },
      ],
    },
    {
      title: 'Compare',
      links: [
        {
          label: 'Desktop apps',
          href: '/blog',
        },
        {
          label: 'Desktop apps',
          href: '/blog',
        },
        {
          label: 'Desktop apps',
          href: '/blog',
        },
        {
          label: 'Desktop apps',
          href: '/blog',
        },
        {
          label: 'Desktop apps',
          href: '/blog',
        },
      ],
    },
  ]

  const links = {
    github: 'https://github.com/aridanpantoja/leaf',
  }

  return {
    name: 'Website Name',
    url: 'https://leaf.com.br',
    description: 'Description of your website',
    ogImage: 'https://leaf.com.br/og.jpg',
    links,
    mainNav,
    footerNav,
  }
}

export const siteConfig = createSiteConfig()
