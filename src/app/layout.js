import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center">
        <Header />
        <main className="flex-grow max-w-300 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
