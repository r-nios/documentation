"use client";

import { useParams } from "next/navigation";
import { type ReactNode, useId } from "react";
import { cn } from "@/lib/cn";
import { getSection } from "@/lib/source/navigation";

export function Body({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  const mode = useMode();

  return (
    <body className={cn(mode, "relative flex min-h-screen flex-col")}>
      {children}
    </body>
  );
}

export function useMode(): string | undefined {
  const { slug = [] } = useParams();
  if (Array.isArray(slug)) return getSection(slug[0]);
}

export function FumadocsIcon(props: React.SVGProps<SVGSVGElement>) {
  const id = useId();

  return (
    <svg
      viewBox="0 0 180 180"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Base */}
      <circle
        cx="90"
        cy="90"
        r="88"
        fill={`url(#${id}-grad)`}
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Slash cut (negative space) */}
      <rect
        x="78"
        y="35"
        width="16"
        height="110"
        rx="8"
        transform="rotate(20 86 90)"
        fill="var(--color-fd-background)"
      />

      {/* Inner core (negative space) */}
      <circle cx="90" cy="90" r="34" fill="var(--color-fd-background)" />

      <defs>
        <linearGradient id={`${id}-grad`} gradientTransform="rotate(135)">
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}
