import { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "./navbar";

export const metadata: Metadata = {
  title: "Pixiol",
  description: "Pixiol is a News Site for the AI Era.",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
