export function Hero() {
  return (
    <section
      id="inicio"
      className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        <div>
          <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-400">
            Tailwind CSS
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Aprenda Tailwind
            <span className="text-blue-500"> na prática.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Um projeto criado para demonstrar cores, tipografia,
            espaçamento, dimensões, bordas, Flexbox, Grid e responsividade.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold shadow-lg shadow-blue-600/20 transition hover:bg-blue-500">
              Explorar projeto
            </button>

            <button className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-300 transition hover:bg-slate-800">
              Ver componentes
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <div className="space-y-4">
            <div className="h-4 w-32 rounded bg-blue-500" />
            <div className="h-4 w-full rounded bg-slate-700" />
            <div className="h-4 w-5/6 rounded bg-slate-700" />

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="h-20 rounded-lg bg-blue-500/20" />
              <div className="h-20 rounded-lg bg-purple-500/20" />
              <div className="h-20 rounded-lg bg-green-500/20" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}