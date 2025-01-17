const createSiteConfig = () => {
  const mainNav = [
    {
      label: 'Sobre',
      href: '/sobre',
    },
    {
      label: 'Blog',
      href: '/blog',
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
  }
}

export const siteConfig = createSiteConfig()
