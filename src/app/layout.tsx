'use client';
import type { Metadata } from "next";
import { Geist, Geist_Mono, Holtwood_One_SC } from "next/font/google";
import "./globals.css";
import './globals.scss';
import { ToggleProvider } from "./toggleContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "srvna-kmr :)",
//   description: "Portfolio: Web Developer",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <title>Saravana Kumar | Portfolio</title>
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
      <body
        className={`${geistSans.variable} ${geistMono.variable} lato-regular antialiased m-auto p-10 pt-20 container-fluid layout m-auto`}
      >
        <ToggleProvider>
        <div className="w-[80%] m-auto flex justify-center items-center"> 
          {children}
        </div>
        </ToggleProvider>
      </body>
    </html>
  );
}
