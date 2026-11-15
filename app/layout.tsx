import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://riyajul.dev"),
  title: "MD RIYAJUL ISLAM - Frontend Developer",
  description: "Building Ideas into Attractive Websites, Systems & Software. Turning creative ideas into modern, responsive, and powerful digital experiences through design, development, and technology.",
  keywords: [
    "MD RIYAJUL ISLAM",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "UI/UX Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Tailwind CSS",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "MD RIYAJUL ISLAM" }],
  creator: "MD RIYAJUL ISLAM",
  publisher: "MD RIYAJUL ISLAM",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://riyajul.dev",
    title: "MD RIYAJUL ISLAM - Frontend Developer",
    description: "Building Ideas into Attractive Websites, Systems & Software. Turning creative ideas into modern, responsive, and powerful digital experiences.",
    siteName: "MD RIYAJUL ISLAM Portfolio",
    images: [
      {
        url: "/assets/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "MD RIYAJUL ISLAM - Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD RIYAJUL ISLAM - Frontend Developer",
    description: "Building Ideas into Attractive Websites, Systems & Software. Turning creative ideas into modern, responsive, and powerful digital experiences.",
    images: ["/assets/thumbnail.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://riyajul.dev" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
