import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-geist-sans",
  weight: ["200", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}