export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">

        <p>
          © 2026 TailwindLab
        </p>

        <div className="flex gap-5">
          <a
            href="#inicio"
            className="transition hover:text-blue-600"
          >
            Início
          </a>

          <a
            href="#conceitos"
            className="transition hover:text-blue-600"
          >
            Conceitos
          </a>
        </div>

      </div>
    </footer>
  )
}