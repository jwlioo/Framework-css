
export function Header() {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <div className="text-xl font-bold text-blue-600">
          TailwindLab
        </div>

        <nav className="hidden gap-6 md:flex">
          <a
            href="#inicio"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Início
          </a>

          <a
            href="#conceitos"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Conceitos
          </a>

          <a
            href="#cards"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Cards
          </a>
        </nav>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
          Começar
        </button>
      </div>
    </header>
  )
}