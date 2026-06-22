import type { Metadata } from "next";
import ResponsiveHome from "@/components/ui/ResponsiveHome";

export const metadata: Metadata = {
  title: "Daniel Ugiomoh | Frontend & Mobile Developer",
  description:
    "Portfolio of Daniel Ugiomoh, a frontend and mobile developer building fast, accessible, and polished web experiences with React, Next.js, and React Native.",
  keywords: [
    "Daniel Ugiomoh",
    "Frontend Developer",
    "Mobile Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Daniel Ugiomoh" }],
  creator: "Daniel Ugiomoh",
  openGraph: {
    title: "Daniel Ugiomoh | Frontend & Mobile Developer",
    description:
      "Frontend and mobile developer building fast, accessible, and polished digital products.",
    type: "website",
    locale: "en_US",
    siteName: "Daniel Ugiomoh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Ugiomoh | Frontend & Mobile Developer",
    description:
      "Frontend and mobile developer building fast, accessible, and polished digital products.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <ResponsiveHome />;
}
