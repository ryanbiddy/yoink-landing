import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import Script from "next/script";
import { plausibleDomain, siteDescription, siteTitle, siteUrl } from "./site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Yoink",
  },
  description: siteDescription,
  applicationName: "Yoink",
  authors: [{ name: "Ryan Biddy", url: "https://ryanbiddy.com" }],
  creator: "Ryan Biddy",
  publisher: "ReplayRyan",
  keywords: [
    "Yoink",
    "ReplayRyan",
    "YouTube transcript to AI",
    "YouTube to Claude",
    "YouTube to ChatGPT",
    "AI research tool",
    "Chrome extension",
  ],
  alternates: {
    canonical: "/",
  },
  icons: [
    {
      rel: "icon",
      url: "/logo-mark.png",
      sizes: "32x32",
      type: "image/png",
    },
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Yoink",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yoink turns YouTube videos into structured AI input.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
