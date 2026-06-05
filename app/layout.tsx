import type { Metadata } from "next";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import "./globals.css";
import { stackSansNotch } from "./fonts";

export const metadata: Metadata = {
  title: "Daniel Frontend Developer",
  description:
    "Frontend web and mobile developer crafting performant, accessible, and beautiful web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${stackSansNotch.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
