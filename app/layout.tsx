import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Archivo, Source_Serif_4 } from "next/font/google";

export const metadata = {
  title: "Robert Shterjov Frontend Developer",
  description: "Portfolio Web Site for my web dev journey",
  icons: {
    icon: "/favicon.ico",
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
      <body className={`${archivo.variable} ${sourceSerif4.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
