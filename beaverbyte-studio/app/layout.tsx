import type { Metadata } from "next";
import { Inter, Merriweather, Archivo_Black, Open_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Verdant — Dream Team Games",
    template: "%s | Verdant — Dream Team Games"
  },
  description: "Verdant — a top-down 2D sandbox adventure by Dream Team. Farm, build and explore dynamic, living worlds. Coming to PC & Mobile.",
  keywords: `Verdant, Verdant game, indie game, farming game, sandbox game, Dream Team Games, 
            devlog, updates, PC game, mobile game, 2D sandbox, top-down adventure, 
            procedural generation, farming simulator, survival game, indie developer,
            game development, pixel art game, mobile gaming, PC gaming, sandbox adventure,
            farming RPG, crafting game, building game, exploration game, indie studio,
            game updates, developer blog, gaming news, upcoming games, indie games 2025`,
  authors: [{ name: "Dream Team Games" }],
  creator: "Dream Team Games",
  publisher: "Dream Team Games",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    title: "Verdant — Farm, Build & Explore Dynamic Living Worlds",
    description: "Farm, build and explore dynamic worlds in Verdant — a top-down 2D sandbox adventure. Clean UX, mobile-first controls, and handcrafted-feeling procedural maps. Coming to PC & Mobile.",
    siteName: "Dream Team — Verdant",
    images: [
      {
        url: "https://i.imgur.com/z1yoZwp.png",
        width: 1200,
        height: 675,
        alt: "Verdant game screenshot — farm, build and explore dynamic living worlds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DreamTeamGames",
    title: "Verdant — Dream Team Games",
    description: "Devlogs and updates for Verdant — a top-down 2D sandbox adventure coming to PC & mobile",
    images: ["https://i.imgur.com/z1yoZwp.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: "games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="https://i.imgur.com/hpD0KcS.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://i.imgur.com/hpD0KcS.png" />
        <meta name="apple-mobile-web-app-title" content="Verdant" />
        <link rel="icon" type="image/png" href="https://i.imgur.com/hpD0KcS.png" sizes="192x192" />

        {/* Schema Markup for better rich snippets */}
        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dream Team Games",
              "alternateName": "Beaver Byte Studio",
              "url": "https://example.com",
              "logo": "https://i.imgur.com/hpD0KcS.png",
              "description": "Indie game studio creating Verdant — a top-down 2D sandbox adventure",
              "sameAs": [
                "https://x.com/",
                "https://discord.gg/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "email": "dreamteamgames@gmail.com"
              }
            })
          }}
        />

        {/* WebSite Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Verdant — Dream Team Games",
              "alternateName": "Verdant Game",
              "url": "https://example.com",
              "description": "Official website for Verdant — a top-down 2D sandbox adventure game. Devlogs, updates, and community hub."
            })
          }}
        />

        {/* VideoGame Schema */}
        <Script
          id="videogame-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoGame",
              "name": "Verdant: Blooming Horizons",
              "alternateName": "Verdant",
              "url": "https://example.com",
              "description": "A top-down 2D sandbox adventure about farming, building and surviving in dynamic, living worlds. Clean UX, mobile-first controls, and handcrafted-feeling procedural maps.",
              "genre": ["Sandbox", "Farming", "Survival", "Adventure"],
              "gamePlatform": ["PC", "Mobile", "Android"],
              "publisher": {
                "@type": "Organization",
                "name": "Dream Team Games"
              },
              "image": "https://i.imgur.com/z1yoZwp.png",
              "screenshot": [
                "https://i.imgur.com/z1yoZwp.png",
                "https://i.imgur.com/ZYWMHLs.jpeg",
                "https://i.imgur.com/fL9TJN1.jpeg"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "0",
                "reviewCount": "0"
              }
            })
          }}
        />

        {/* BreadcrumbList Schema for navigation */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://example.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Games",
                  "item": "https://example.com#games"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Updates",
                  "item": "https://example.com#updates"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Developers",
                  "item": "https://example.com#devs"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Contact",
                  "item": "https://example.com#contact"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${merriweather.variable} ${archivoBlack.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}