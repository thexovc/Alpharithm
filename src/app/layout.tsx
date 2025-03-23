import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../component/layout/Navbar";
import { AnimatePresence } from "framer-motion";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

      >
        <AnimatePresence mode="wait">

          <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
              {children}
            </main>
          </div>
        </AnimatePresence>
      </body>
    </html>
  );
}
