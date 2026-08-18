import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Archivo } from "next/font/google";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={archivo.variable}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
