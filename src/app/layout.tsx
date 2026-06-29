import type { Metadata } from "next";

import { Inter, Geist } from "next/font/google";
import { Poppins } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/header/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/footer/footer";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dr. Dhaval Sagala",
  description: "Sports Injury, Shoulder & Elbow Surgeon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full antialiased", inter.variable, poppins.variable, geist.variable, "font-sans")}
    >
      <body
        className="
          min-h-full flex flex-col transition-colors duration-300
        "
      >
        <ThemeProvider>
          <Header />  
            <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
