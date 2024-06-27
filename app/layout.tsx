import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";
import ReduxProvider from "./components/provider";
import { Toaster } from "@/app/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bakery",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body
          className={`${inter.className} flex flex-col`}
          suppressHydrationWarning
        >
          <Header />

          <main className="flex-1 pt-20">{children}</main>

          <Footer />

          <Toaster />
        </body>
      </html>
    </ReduxProvider>
  );
}
