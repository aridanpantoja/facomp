const createSiteConfig = () => {
  const url = 'https://facomp.vercel.app'

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
  ]

  const footerNav = [
    {
      title: 'Páginas',
      links: [
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
      ],
    },
    {
      title: 'Atalhos',
      links: [
        {
          label: 'Docentes',
          href: '/sobre#professores',
        },
        {
          label: 'Calendários',
          href: '/noticas?filter=calendarios',
        },
        {
          label: 'Bolsas',
          href: '/noticas?filter=bolsas',
        },
        {
          label: 'Eventos',
          href: '/noticas?filter=eventos',
        },
      ],
    },
    {
      title: 'Comunidade',
      links: [
        {
          label: 'Link Júnior',
          href: '/sobre/sistemas',
        },
        {
          label: 'RECOMP',
          href: '/sobre/engenharia',
        },
        {
          label: 'CASI',
          href: '/sobre/sistemas',
        },
        {
          label: 'DAEX',
          href: '/sobre/sistemas',
        },
      ],
    },
    {
      title: 'Contato',
      links: [
        {
          label: 'Facebook',
          href: '/sobre/sistemas',
        },
        {
          label: 'Instagram',
          href: '/sobre/sistemas',
        },
        {
          label: 'Discord',
          href: '/sobre/sistemas',
        },
      ],
    },
  ]

  const links = {
    github: 'https://github.com/aridanpantoja/leaf',
  }

  return {
    name: 'Facomp Castanhal',
    description: 'Site da Faculdade de Computação',
    ogImage: `${url}/og.jpg`,
    links,
    mainNav,
    footerNav,
    url,
  }
}

export const siteConfig = createSiteConfig()
