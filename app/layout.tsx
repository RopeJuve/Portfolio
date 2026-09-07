import AppShell from "@/components/AppShell/AppShell";
import { data } from "@/data";
import { discoverSite } from "@/lib/siteDiscovery";
import type { Metadata } from "next";
import "./globals.css";
import { Archivo, Source_Serif_4 } from "next/font/google";

const { documentMetadata } = discoverSite(data, data.siteOrigin);

export const metadata: Metadata = {
  metadataBase: new URL(documentMetadata.metadataBase),
  title: documentMetadata.title,
  description: documentMetadata.description,
  alternates: {
    canonical: documentMetadata.canonical,
  },
  openGraph: {
    type: documentMetadata.openGraph.type,
    title: documentMetadata.openGraph.title,
    description: documentMetadata.openGraph.description,
    url: documentMetadata.openGraph.url,
    images: documentMetadata.openGraph.images,
  },
  twitter: {
    card: documentMetadata.twitter.card,
    title: documentMetadata.twitter.title,
    description: documentMetadata.twitter.description,
    images: documentMetadata.twitter.images,
  },
};

const archivo = Archivo({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-archivo",
});

const sourceSerif4 = Source_Serif_4({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-source-serif",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${sourceSerif4.variable} bg-bone font-sans text-ink`}
      >
        <noscript>
          <style>{`.loader-overlay{display:none!important}`}</style>
        </noscript>
        <AppShell
          footerName={data.footerName}
          footerRole={data.footerRole}
          contactLocale={data.contactLocale}
          navLinks={data.navLinks}
        >
          {children}
        </AppShell>
      </body>
    </html>
  );
}
