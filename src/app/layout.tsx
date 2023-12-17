import { Metadata } from "next";
import "../styles/globals.css";
import ServerNavigator from "./(nav)/(server)/ServerNavigator";

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
        <ServerNavigator />
        {children}
      </body>
    </html>
  );
}
