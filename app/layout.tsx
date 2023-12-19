import "@/_styles/globals.css";
import { Metadata } from "next";
import Navigation from "./(navigation)/Navigation";

export const metadata: Metadata = {
  title: "Pixiol",
  description: "Pixiol is the News Site for the AI Era.",
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
        <Navigation />
        {children}
      </body>
    </html>
  );
}
