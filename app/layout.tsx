import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "jotai";
import "./globals.css";
import { BlurBottom } from "@/components/blur-bottom";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Metal Buttons",
  description:
    "A beautiful, customizable metal button component with tactile feedback!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://cloud.umami.is/script.js"
        defer
        data-website-id="9b364e31-cb5d-453f-9c20-42c26c9d75b6"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} mx-auto my-8 max-w-[600px] px-4 antialiased md:my-16 md:max-w-[720px]`}
      >
        <Provider>
          {children}
          <BlurBottom />
        </Provider>
      </body>
    </html>
  );
}
