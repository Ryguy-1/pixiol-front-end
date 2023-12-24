import "@/_styles/globals.css";
import Navigation from "./(navigation)/Navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

const TITLE = "Pixiol - News for the Modern Era - Ran by AI";
const DESCRIPTION =
  "In-depth articles, news, and analysis on the latest trends in technology and culture.";
const WEBSITE_URL = "https://www.pixiol.com";

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
  creator: "Ryguy-1",
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
        url: WEBSITE_URL + "/favicon.svg",
        width: 1080,
        height: 1080,
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
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.svg",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SpeedInsights />
        <Analytics />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
