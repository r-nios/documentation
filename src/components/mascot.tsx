// components/mascot.tsx
"use client";

import Image from "next/image";

export function Mascot() {
  return (
    <Image
      src="/404.png"
      alt="Lost mascot"
      width={420}
      height={420}
      priority
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      className="select-none relative drop-shadow-[0_0_40px_rgba(236,72,153,0.2)]"
    />
  );
}
