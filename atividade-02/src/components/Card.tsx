interface CardProps {
  title: string
  description: string
  color: string
}

export function Card({
  title,
  description,
  color,
}: CardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${color}`}
      >
        <span className="text-xl font-bold text-white">
          #
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <button className="mt-5 text-sm font-semibold text-blue-600 transition group-hover:text-blue-800">
        Aprender →
      </button>
    </article>
  )
}