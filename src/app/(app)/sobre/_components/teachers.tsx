import { SectionHeader } from '@/components/section-header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { WidthWrapper } from '@/components/width-wrapper'

const TEACHERS = [
  {
    name: 'Yomara Pires',
    lattes: 'http://lattes.cnpq.br/5304797342599931',
    role: 'Coordenadora',
    image: '/images/teachers/yomara.webp',
  },
  {
    name: 'Igor Ruiz',
    lattes: 'http://lattes.cnpq.br/5538297000388112',
    role: 'Vice-coordenador',
    image: '/images/teachers/igor.webp',
  },
  {
    name: 'Tássio Carvalho',
    lattes: 'http://lattes.cnpq.br/4772364162256162',
    role: 'Coordenador de Estágios',
    image: '/images/teachers/tassio.webp',
  },
  {
    name: 'Tiago Corqueiro',
    lattes: 'http://lattes.cnpq.br/7138516629071389',
    role: 'Coordenador de ACC',
    image: '/images/teachers/tiago.webp',
  },
  {
    name: 'João Chamma',
    lattes: 'http://lattes.cnpq.br/0180042946685458',
    role: 'Docente',
    image: '/images/teachers/chamma.webp',
  },
  {
    name: 'Clenilson Silveira',
    lattes: 'http://lattes.cnpq.br/7008131394082394',
    role: 'Docente',
    image: '/images/teachers/clenilson.webp',
  },
  {
    name: 'José Jailton',
    lattes: 'http://lattes.cnpq.br/9031636126268760',
    role: 'Docente',
    image: '/images/teachers/jailton.webp',
  },
  {
    name: 'Hieda Silva',
    lattes: 'http://lattes.cnpq.br/8183567481192474',
    role: 'Docente',
    image: '/images/teachers/hieda.webp',
  },
  {
    name: 'Diogo Acatauassú',
    lattes: 'http://lattes.cnpq.br/1972007941497086',
    role: 'Docente',
    image: '/images/teachers/diogo.webp',
  },
  {
    name: 'Penha Abi Harb',
    lattes: 'http://lattes.cnpq.br/9096423264882104',
    role: 'Docente',
    image: '/images/teachers/penha.webp',
  },
  {
    name: 'Bruno Lyra',
    lattes: 'http://lattes.cnpq.br/1897829604434609',
    role: 'Docente',
    image: '/images/teachers/bruno.webp',
  },
  {
    name: 'Fábio Nogueira',
    lattes: 'http://lattes.cnpq.br/0823046872278775',
    role: 'Docente',
    image: '/images/teachers/fabio.webp',
  },
  {
    name: 'Adonney Alan',
    lattes: 'http://lattes.cnpq.br/2201652617167877',
    role: 'Docente',
    image: '/images/teachers/alan.webp',
  },
  {
    name: 'Evellin Nanana',
    lattes: 'http://lattes.cnpq.br/XXX',
    role: 'Docente',
    image: '/images/teachers/evellin.webp',
  },
  {
    name: 'Evellin Nanana',
    lattes: 'http://lattes.cnpq.br/XXX',
    role: 'Docente',
    image: '/images/teachers/evellin.webp',
  },
  {
    name: 'Williane Brasil',
    lattes: 'http://lattes.cnpq.br/0265469819491358',
    role: 'Secretaria',
    image: '/images/teachers/williane.webp',
  },
]

export function Teachers() {
  return (
    <section>
      <WidthWrapper>
        <SectionHeader.Root>
          <SectionHeader.Title>Corpo operacional</SectionHeader.Title>
          <SectionHeader.Description>
            Saiba tudo sobre a Faculdade de Computação Campus Castanhal
          </SectionHeader.Description>
        </SectionHeader.Root>

        <div className="mt-8 grid w-full grid-cols-1 justify-items-center gap-12 min-[320px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {TEACHERS.map((teacher, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center"
            >
              <Avatar className="size-28 md:size-36">
                <AvatarImage src={teacher.image} alt={teacher.name} />
                <AvatarFallback>
                  {teacher.name
                    .split(' ')
                    .map((word) => word.charAt(0).toUpperCase())
                    .join('')}
                </AvatarFallback>
              </Avatar>

              <h3 className="mb-1 mt-3 text-lg font-semibold">
                {teacher.name}
              </h3>

              <p className="text-sm text-muted-foreground">{teacher.role}</p>
            </div>
          ))}
        </div>
      </WidthWrapper>
    </section>
  )
}
