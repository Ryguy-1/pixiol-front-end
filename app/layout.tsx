import "@/_styles/globals.css";
import { Metadata } from "next";
import Navigation from "./(navigation)/Navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Pixiol",
  description: "Pixiol is a News Site Ran Solely by AI [Status: Development]",
  icons: {
    icon: "/favicon.svg",
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
