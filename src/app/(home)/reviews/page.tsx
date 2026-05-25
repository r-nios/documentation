export default function Page() {
  const reviews = [
    {
      name: "Aarav",
      role: "NIOS Class 12 (Science)",
      text: "This site explained NIOS way better than some other youtubers. Especially the admission and exam flow — saved me from making mistakes.",
    },
    {
      name: "Sneha",
      role: "NIOS Class 10",
      text: "I was super confused about subjects and assignments. Everything here is written in simple language, not like confusing PDFs.",
    },
    {
      name: "Rahul",
      role: "Drop year student",
      text: "Honestly feels like a senior guiding you. The FAQs and explanations are on point.",
    },
    {
      name: "Pooja",
      role: "NIOS + Competitive exams",
      text: "I check this site almost weekly. Much cleaner and more reliable than random YouTube comments.",
    },
    {
      name: "Aditya",
      role: "NIOS Class 12 (Commerce)",
      text: "The fee breakdown and timelines were extremely helpful. No unnecessary fear-mongering.",
    },
    {
      name: "Neha",
      role: "Parent",
      text: "As a parent, this site made the NIOS process very clear for me and my child. Thank you for keeping it simple.",
    },
  ];

  return (
    <main className="relative mx-auto w-full max-w-page px-4 py-28 overflow-hidden">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-blue-400/15 blur-3xl dark:bg-purple-400/15" />
      </div>

      {/* header */}
      <header className="text-center">
        <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-pink-300/40 bg-pink-500/10 px-4 py-1.5 text-xs text-pink-600 dark:border-pink-300/20 dark:bg-pink-400/10 dark:text-pink-300">
          <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
          community feedback
        </div>

        <h1 className="relative text-4xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-fd-foreground via-sky-400 to-blue-500 bg-clip-text text-transparent">
            What students say
          </span>

          <span
            className="
      pointer-events-none
      absolute
      left-1/2
      -bottom-2
      h-[3px]
      w-16
      -translate-x-1/2
      rounded-full
      bg-gradient-to-r
      from-sky-400/60
      to-blue-500/60
    "
          />
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm text-fd-muted-foreground">
          Honest experiences from NIOS students, parents, and learners using
          r/NIOS Docs.
        </p>
      </header>

      {/* rating summary */}
      <div className="mt-10 flex justify-center items-center gap-2 text-sm">
        <div className="flex gap-1 text-blue-400">★★★★★</div>
        <span className="text-fd-muted-foreground">
          4.9 average from community feedback
        </span>
      </div>

      {/* reviews grid */}
      <section className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, i) => (
          <article
            key={i}
            style={{ transitionDelay: `${i * 50}ms` }}
            className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border border-fd-border
        bg-fd-card
        p-6
        shadow-sm
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:shadow-lg
        hover:border-blue-300/40
        dark:hover:border-blue-300/20
        focus-within:ring-2
        focus-within:ring-blue-400/30
      "
          >
            {/* sheen sweep */}
            <div
              className="
          pointer-events-none
          absolute inset-0
          translate-x-[-120%]
          bg-gradient-to-r
          from-transparent
          via-blue-300/20
          to-transparent
          opacity-0
          transition-all
          duration-700
          group-hover:translate-x-[120%]
          group-hover:opacity-100
        "
            />

            {/* subtle top accent */}
            <div
              className="
          pointer-events-none
          absolute inset-x-0 top-0 h-px
          bg-gradient-to-r
          from-transparent
          via-blue-300/40
          to-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
            />

            <p className="relative z-10 text-sm leading-relaxed">
              “{review.text}”
            </p>

            <div className="relative z-10 mt-5 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-fd-foreground">
                  {review.name}
                </span>
                <span className="mt-0.5 text-[11px] text-fd-muted-foreground">
                  {review.role}
                </span>
              </div>

              <div className="flex gap-0.5 text-blue-400">★★★★★</div>
            </div>
          </article>
        ))}
      </section>

      {/* divider */}
      <div className="my-20 h-px w-full bg-gradient-to-r from-transparent via-fd-border to-transparent" />

      {/* call to action */}
      <section className="text-center">
        <h2 className="text-lg font-medium">Want to share your experience?</h2>
        <p className="mt-2 text-sm text-fd-muted-foreground">
          Your feedback helps improve this resource for everyone.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-pink-300/40 bg-pink-500/10 px-4 py-2 text-xs text-pink-600 dark:border-pink-300/20 dark:bg-pink-400/10 dark:text-pink-300">
          <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
          reviews are community-submitted
        </div>
      </section>
    </main>
  );
}
