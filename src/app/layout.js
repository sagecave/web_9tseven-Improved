import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HamburgerMenu from "../../components/Hamburger/HamburgerMenu";
import Footer from "../../components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "9TSEVEN",
  description: "A clothing brand that helps you find freedom and happiness through a community of like-minded people — and by encouraging personal growth through running.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white grid grid-cols-[5%_1fr_5%] `}>
        <header className="col-start-1 col-end-4 ">
          <HamburgerMenu />
        </header>
        <main className="grid grid-cols-subgrid col-start-1 col-end-4  ">{children}</main>
        <footer className="col-start-1 col-end-4 min-h-[300px] ">
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
