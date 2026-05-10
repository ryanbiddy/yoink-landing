import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const title = "Yoink - The missing layer between YouTube and your AI";
const description =
  "Yoink any YouTube video into Claude or ChatGPT with the full transcript, screenshots, and metadata in one structured doc.";

export const metadata: Metadata = {
  metadataBase: new URL("https://yoink.video"),
  title: {
    default: title,
    template: "%s | Yoink",
  },
  description,
  icons: [
    {
      rel: "icon",
      url: "/logo-mark.png",
      sizes: "32x32",
      type: "image/png",
    },
  ],
  openGraph: {
    title,
    description,
    url: "https://yoink.video",
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
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Script
          defer
          data-domain="yoink.video"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
