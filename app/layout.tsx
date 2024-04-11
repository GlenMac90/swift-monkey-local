import React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

import Navbar from "./components/nav-bar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://swift-monkey.vercel.app/"),
  title: "Swift Monkey",
  description:
    "A web application company specialising in mobile development and design.",
  icons: {
    icon: "/swift-monkey.png",
  },
  openGraph: {
    url: "https://swift-monkey.vercel.app/",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 627,
        alt: "Swift Monkey",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} justify-center overflow-auto overscroll-none bg-blush-100 text-black-900`}
      >
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/swiftmonkey.svg" sizes="any" />
        <Navbar />

        {children}
        <Toaster />
      </body>
    </html>
  );
}
