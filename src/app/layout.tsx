import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Ruggegraattest — hoe stevig is jouw ruggegraat écht?";
const description =
  "Doe de wetenschappelijk klinkende maar volledig onzinnige Ruggegraattest en ontdek of jij een Blubberpudding of een Betonnen Bunker bent.";

export const metadata: Metadata = {
  // www, niet het kale domein: Vercel redirect ruggegraattest.nl -> www.ruggegraattest.nl,
  // en linkpreview-crawlers (WhatsApp) volgen die redirect niet bij het ophalen van og:image.
  metadataBase: new URL("https://www.ruggegraattest.nl"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://www.ruggegraattest.nl",
    siteName: "Ruggegraattest",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
