import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import { Body } from "./layout.client";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://r-nios.in"),
  title: {
    default: "r-NIOS Documentation",
    template: "%s | r-NIOS",
  },
  description:
    "Community-driven NIOS documentation covering admissions, examinations, results, certificates, and student services.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <Body>
        <RootProvider>{children}</RootProvider>
      </Body>
    </html>
  );
}
