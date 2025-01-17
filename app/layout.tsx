import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/atoms/toaster";
import { Header } from "@/components/molecules/header";
import { LayoutProviders } from "@/components/molecules/layout-providers";
import type { HasChildren } from "@/lib/types";

const poppins = Poppins({
  variable: "--font-geist-sans",
  weight: ["200", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crewfare All Access",
  description: "Manage your events",
};

export default function RootLayout({ children }: HasChildren) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased min-h-dvh w-screen flex flex-col`}
      >
        <LayoutProviders>
          <Toaster />

          <Header />

          {children}
        </LayoutProviders>
      </body>
    </html>
  );
}
