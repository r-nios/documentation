// src/app/not-found.tsx

import Image from "next/image";
import Link from "next/link";
import { Mascot } from "@/components/mascot";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_40%)]" />

      {/* Glow blobs */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Floating sparkles */}
      <div className="absolute left-1/4 top-1/4 text-pink-300/30">✦</div>
      <div className="absolute right-1/3 top-1/3 text-blue-300/30">✧</div>
      <div className="absolute bottom-1/4 left-1/3 text-pink-300/30">✦</div>

      <div className="relative z-10 flex max-w-5xl flex-col items-center gap-10 lg:flex-row">
        {/* Mascot */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-blue-500/20 blur-3xl" />

          {/* <Image
            src="/404.png"
            alt="Lost mascot"
            width={420}
            height={420}
            priority
            className="relative drop-shadow-[0_0_40px_rgba(236,72,153,0.2)]"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          /> */}
          <Mascot />
        </div>

        {/* Content */}
        <div className="max-w-lg -mt-8 sm:-mt-4 md:mt-0 text-center lg:text-left">
          <div className="mb-4 inline-flex rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-1 text-sm text-pink-300">
            Error 404
          </div>
          <h1 className="bg-gradient-to-r from-pink-300 via-fuchsia-300 to-blue-300 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent md:text-7xl">
            Page Not Found
          </h1>
          <p className="mt-6 text-lg text-neutral-400">
            I checked all my notes...
            <br />
            but I still couldn't find this page.
          </p>
          <p className="mt-3 text-neutral-500">
            The document may have been moved, renamed, or hasn't been written
            yet.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link
              href="/docs"
              className="
  group inline-flex items-center gap-2
  rounded-xl
  border border-pink-500/20
  bg-pink-500/10
  px-5 py-3
  font-medium
  text-pink-200
  transition-all duration-300
  hover:gap-3
  hover:border-pink-400/30
  hover:bg-pink-500/15
  hover:text-pink-100
"
            >
              Continue Reading
              <svg
                className=" h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" /> <path d="m13 5 7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/"
              className="
  group inline-flex items-center gap-2
  rounded-xl
  border border-pink-500/20
  bg-pink-500/10
  px-5 py-3
  font-medium
  text-pink-200
  transition-all duration-300
  hover:gap-3
  hover:border-pink-400/30
  hover:bg-pink-500/15
  hover:text-pink-100
"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
