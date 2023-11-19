import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav-bar";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Store",
  description: "buy anything you want fromt this store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen  flex flex-col`}>
        <Navbar />
        <main className="px-5 pb-5 flex-1 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
