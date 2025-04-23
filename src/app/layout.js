"use client";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideLayoutPage = ["/login", "/signin"];
  const isHide = hideLayoutPage.includes(pathname);
  return (
    <html lang="en">
      <body className="flex flex-col items-center">
        {!isHide && <Header />}
        <main className="flex-grow max-w-300 w-full">{children}</main>
        {!isHide && <Footer />}
      </body>
    </html>
  );
}
