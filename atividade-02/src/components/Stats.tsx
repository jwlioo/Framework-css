import { Card } from './Card'

const concepts = [
  {
    title: 'Cores',
    description:
      'Controle de cores para textos, fundos, bordas e estados.',
    color: 'bg-blue-600',
  },
  {
    title: 'Tipografia',
    description:
      'Tamanhos, pesos, espaçamento e altura das linhas.',
    color: 'bg-purple-600',
  },
  {
    title: 'Espaçamento',
    description:
      'Margens, padding, gap e organização dos elementos.',
    color: 'bg-green-600',
  },
  {
    title: 'Dimensões',
    description:
      'Largura, altura, largura máxima e mínima.',
    color: 'bg-orange-500',
  },
  {
    title: 'Flexbox',
    description:
      'Alinhamento e distribuição dos elementos.',
    color: 'bg-pink-600',
  },
  {
    title: 'Grid',
    description:
      'Construção de layouts utilizando CSS Grid.',
    color: 'bg-cyan-600',
  },
  {
    title: 'Bordas',
    description:
      'Bordas, raios, divisórias e estilos visuais.',
    color: 'bg-red-600',
  },
  {
    title: 'Responsividade',
    description:
      'Layouts adaptáveis para diferentes tamanhos de tela.',
    color: 'bg-yellow-500',
  },
]

export function Stats() {
  return (
    <section
      id="cards"
      className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Conceitos
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            O que estamos estudando
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Cada componente abaixo utiliza diferentes recursos
            disponíveis no Tailwind CSS.
          </p>
        </div>

        <div
          id="conceitos"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {concepts.map((concept) => (
            <Card
              key={concept.title}
              title={concept.title}
              description={concept.description}
              color={concept.color}
            />
          ))}
        </div>

      </div>
    </section>
  )
}