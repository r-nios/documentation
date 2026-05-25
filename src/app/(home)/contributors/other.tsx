export default function Page() {
  const contributors = [
    {
      name: "Aeryk",
      role: "Maintainer",
      description: "Built and maintains r/NIOS Docs.",
    },
    {
      name: "Sneha",
      role: "Content Contributor",
      description: "Helped improve admission and exam explanations.",
    },
    {
      name: "Rahul",
      role: "Community Helper",
      description: "Provided feedback and student perspective.",
    },
    {
      name: "Neha",
      role: "Reviewer",
      description: "Reviewed content for clarity and accuracy.",
    },
  ];

  return (
    <main className="relative mx-auto w-full max-w-page px-4 py-28 overflow-hidden">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-sky-400/15 blur-3xl dark:bg-blue-400/15" />
      </div>

      {/* header */}
      <header className="text-center">
        <h1 className="relative text-4xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-fd-foreground via-sky-400 to-blue-500 bg-clip-text text-transparent">
            Contributors
          </span>
          <span className="pointer-events-none absolute left-1/2 -bottom-2 h-[3px] w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/60 to-blue-500/60" />
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm text-fd-muted-foreground">
          r/NIOS Docs is built by students and community members who care about
          making NIOS easier to understand.
        </p>
      </header>

      {/* contributors list */}
      <section className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contributors.map((contributor, i) => (
          <article
            key={i}
            className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border border-fd-border
        bg-fd-card
        p-6
        transition-all
        duration-300
        ease-out
        hover:-translate-y-0.5
        hover:shadow-md
        hover:border-sky-300/40
        dark:hover:border-blue-300/20
      "
          >
            {/* subtle top accent */}
            <div
              className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-sky-400/40
          to-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
            />

            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-fd-foreground">
                {contributor.name}
              </span>
              <span className="text-[11px] uppercase tracking-wide text-sky-500 dark:text-sky-400">
                {contributor.role}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-fd-muted-foreground">
              {contributor.description}
            </p>
          </article>
        ))}
      </section>

      {/* footer note */}
      <div className="mt-20 text-center">
        <p className="text-sm text-fd-muted-foreground">Want to contribute?</p>
        <p className="mt-1 text-xs text-fd-muted-foreground">
          You can help by improving docs, fixing typos, or sharing feedback 🐾
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-500/10 px-4 py-2 text-xs text-sky-600 dark:border-sky-300/20 dark:bg-sky-400/10 dark:text-sky-300">
          <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
          contributions are welcome
        </div>
      </div>
    </main>
  );
}
