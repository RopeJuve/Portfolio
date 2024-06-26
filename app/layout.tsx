import NavBar from "@/components/NavBar/NavBar";
import Head from "next/head";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Roboto_Condensed, Noto_Sans } from "next/font/google";

export const metadata = {
  title: "Robert Shterjov Frontend Developer",
  description: "Portfolio Web Site for my web dev journey",
};

const robotoCondensed = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-header",
});

const notoSans = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-text",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${robotoCondensed.variable} ${notoSans.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
