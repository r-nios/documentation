export default function Page() {
  return (
    <main className="relative mx-auto w-full max-w-page px-4 py-32 text-center overflow-hidden">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-pink-400/15 blur-3xl dark:bg-purple-400/15" />
      </div>

      {/* floating toe beans */}
      <svg
        className="pointer-events-none absolute bottom-2 right-10 w-24 opacity-60 animate-bounce"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="60"
          cy="78"
          rx="22"
          ry="18"
          fill="currentColor"
          className="text-pink-400 dark:text-pink-300"
        />
        <ellipse
          cx="34"
          cy="48"
          rx="8"
          ry="10"
          fill="currentColor"
          className="text-pink-400 dark:text-pink-300"
        />
        <ellipse
          cx="56"
          cy="40"
          rx="8"
          ry="10"
          fill="currentColor"
          className="text-pink-400 dark:text-pink-300"
        />
        <ellipse
          cx="78"
          cy="40"
          rx="8"
          ry="10"
          fill="currentColor"
          className="text-pink-400 dark:text-pink-300"
        />
        <ellipse
          cx="100"
          cy="48"
          rx="8"
          ry="10"
          fill="currentColor"
          className="text-pink-400 dark:text-pink-300"
        />
      </svg>

      {/* sparkle */}
      <svg
        className="pointer-events-none absolute top-14 left-4 sm:left-34 w-14 opacity-60 animate-pulse"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 10L58 42L90 50L58 58L50 90L42 58L10 50L42 42Z"
          fill="currentColor"
          className="text-yellow-300 dark:text-yellow-200"
        />
      </svg>

      {/* main text */}
      <h1 className="text-4xl font-mono font-semibold tracking-tight">
        Blog coming soon… ฅ^•ﻌ•^ฅ
      </h1>

      <p className="mx-auto mt-5 max-w-xl text-sm text-fd-muted-foreground">
        The kitty is still writing posts very carefully so nothing breaks.
        Please wait a little… 🐾
      </p>

      {/* neko ascii */}
      <div className="mx-auto mt-10 max-w-xs">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-300/40 to-transparent" />
        <p className="mt-3 text-xs text-fd-muted-foreground">
          still polishing things behind the scenes
        </p>
      </div>

      {/* status */}
      <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-pink-300/40 bg-pink-500/10 px-3 py-1.5 text-xs font-medium text-pink-600 dark:border-pink-300/20 dark:bg-pink-400/10 dark:text-pink-300">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-400" />
        </span>
        work in progress
      </div>
    </main>
  );
}
