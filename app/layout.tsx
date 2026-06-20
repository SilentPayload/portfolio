import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = localFont({
  src: "../public/fonts/GeistSans-Variable.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Praise Abu Ugbede | Cybersecurity Analyst & Penetration Tester",
    template: "%s | Praise Abu Ugbede",
  },
  description:
    "Cybersecurity analyst, penetration tester, and security educator based in Abuja, Nigeria, open to UK relocation. Hands-on experience in SOC operations, web app security, and building security training labs.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "SOC analyst",
    "bug bounty",
    "security education",
    "Abuja",
    "Nigeria",
    "UK",
  ],
  authors: [{ name: "Praise Abu Ugbede" }],
  creator: "Praise Abu Ugbede",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Praise Abu Ugbede",
    title: "Praise Abu Ugbede | Cybersecurity Analyst & Penetration Tester",
    description:
      "Cybersecurity analyst, penetration tester, and security educator based in Abuja, Nigeria, open to UK relocation.",
    images: [
      {
        url: "/og-image.png", // TODO: create a real OG image at 1200x630
        width: 1200,
        height: 630,
        alt: "Praise Abu Ugbede Cybersecurity Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Praise Abu Ugbede | Cybersecurity Analyst & Penetration Tester",
    description:
      "Cybersecurity analyst, penetration tester, and security educator.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Inline script to set dark class before first paint — prevents flash of
// unstyled content. Dark mode is the default; only remove class for 'light'.
const themeScript = `(function(){var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon alternate" href="/favicon-mono.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="bg-canvas text-ink min-h-screen flex flex-col">
        {/* Runs synchronously before paint to prevent theme flash */}
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
