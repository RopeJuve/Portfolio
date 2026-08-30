import AppShell from "@/components/AppShell/AppShell";
import "./globals.css";
import { Archivo, Source_Serif_4 } from "next/font/google";

export const metadata = {
  title: "Robert Shterjov — Full-Stack Web Developer",
  description:
    "I design and develop modern websites, landing pages, and custom web applications for businesses and startups.",
  icons: {
    icon: "/favicon.svg",
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
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
