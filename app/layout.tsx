import "@/_styles/globals.css";
import Navigation from "./(navigation)/Navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import Script from "next/script";

const TITLE = "Pixiol - News for the Modern Era - Ran by AI";
const DESCRIPTION =
  "In-depth articles, news, and analysis on the latest trends in technology and culture. Pixiol uses AI to gather and summarize the latest news around the world.";
const WEBSITE_URL = "https://www.pixiol.com";
const ICON_SUBPATH = "/favicon.png";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  generator: "Next.js",
  applicationName: "Pixiol",
  referrer: "origin-when-cross-origin",
  keywords: [
    "modern news",
    "technology news",
    "culture",
    "current events",
    "world news",
  ],
  authors: [{ name: "AI" }, { name: "Artificial Intelligence" }],
  creator: "AI",
  publisher: "Pixiol News",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: WEBSITE_URL,
    siteName: "Pixiol",
    images: [
      {
        url: WEBSITE_URL + ICON_SUBPATH,
        width: 1024,
        height: 1024,
        alt: "Pixiol Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: ICON_SUBPATH }, new URL(ICON_SUBPATH, WEBSITE_URL)],
    shortcut: [ICON_SUBPATH],
    apple: [{ url: ICON_SUBPATH }],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: ICON_SUBPATH,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6896213327075440" />
        <Script
          id="google-tag-manager"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GZZ51N07FJ"
        ></Script>
        <Script id="google-analytics-script">
          {
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-GZZ51N07FJ');"
          }
        </Script>
        <Script
          id="google-verification"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6896213327075440"
          crossOrigin="anonymous"
        ></Script>
      </head>
      <body>
        <SpeedInsights />
        <Analytics />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
