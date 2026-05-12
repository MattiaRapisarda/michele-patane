import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://michelepatane.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Michele Patanè | Artista del Papiro",
    template: "%s | Michele Patanè",
  },

  description:
    "Michele Patanè è un artista del papiro siciliano. Le sue opere uniscono materia, memoria e ricerca artistica attraverso il papiro come linguaggio contemporaneo.",

  keywords: [
    "Michele Patanè",
    "Michele Patane",
    "artista del papiro",
    "arte del papiro",
    "papyrus artist",
    "papyrus art",
    "opere in papiro",
    "quadri in papiro",
    "arte su papiro",
    "papiro siciliano",
    "artista siciliano",
    "arte contemporanea siciliana",
    "arte contemporanea italiana",
    "opere d'arte contemporanea",
    "arte materica",
    "collezione papiro",
    "Sicilia",
    "Italia",
  ],

  authors: [{ name: "Michele Patanè", url: siteUrl }],
  creator: "Michele Patanè",
  publisher: "Michele Patanè",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Michele Patanè",
    title: "Michele Patanè | Artista del Papiro",
    description:
      "Portfolio artistico di Michele Patanè, artista del papiro siciliano. Opere in papiro tra materia, memoria e arte contemporanea.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Michele Patanè Artista del Papiro",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Michele Patanè | Artista del Papiro",
    description:
      "Portfolio artistico di Michele Patanè, artista del papiro siciliano.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "art",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michele Patanè",
  alternateName: "Michele Patane",
  url: siteUrl,
  jobTitle: "Artista del Papiro",
  description:
    "Michele Patanè è un artista del papiro siciliano. Le sue opere esplorano materia, memoria e linguaggio contemporaneo attraverso il papiro.",
  knowsAbout: [
    "Arte del papiro",
    "Papyrus Art",
    "Arte contemporanea",
    "Arte siciliana",
    "Opere in papiro",
    "Quadri in papiro",
    "Arte materica",
    "Tecniche artistiche su papiro",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Sicilia",
    addressCountry: "IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}