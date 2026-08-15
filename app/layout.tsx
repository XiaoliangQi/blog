import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";

const basePath = process.env.GITHUB_ACTIONS === "true" ? "/blog" : "";

export const metadata: Metadata = {
  metadataBase: new URL("https://xiaoliangqi.github.io/blog/"),
  title: {
    default: "Xiaoliang Qi",
    template: "%s | Xiaoliang Qi",
  },
  description: "Essays and notes by Xiaoliang Qi.",
  openGraph: {
    title: "Xiaoliang Qi",
    description: "Essays and notes by Xiaoliang Qi.",
    url: "https://xiaoliangqi.github.io/blog/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Xiaoliang Qi",
    description: "Essays and notes by Xiaoliang Qi.",
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
