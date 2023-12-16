import Head from "next/head";
import "../styles/globals.css";
import Navbar from "./navbar";

type Metadata = {
  title: string;
  description: string;
};

export const metadata: Metadata = {
  title: "Pixiol",
  description: "Pixiol is a News Site for the AI Era.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Navbar />
      {children}
    </>
  );
}
