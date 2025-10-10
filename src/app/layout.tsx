
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

import { Toaster } from "@/components/ui/sonner"
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "RemindMe – Smart Reminders for Busy Minds",
  description:
    "RemindMe helps students and professionals stay on top of deadlines, bills, and tasks with intelligent, timely reminders — simple, clean, and reliable.",
  keywords: [
    "reminder app",
    "task organizer",
    "deadline tracker",
    "bill reminders",
    "student productivity",
    "time management",
    "remindme app",
  ],
  authors: [{ name: "Annu" }],
  creator: "Annu",
  // metadataBase: new URL("https://remindme.app"),
  // openGraph: {
  //   title: "RemindMe – Never Miss What Matters",
  //   description:
  //     "A smart reminder app that helps you remember deadlines, bills, and important dates effortlessly.",
  //   url: "https://remindme.app",
  //   siteName: "RemindMe",
  //   images: [
  //     {
  //       url: "https://remindme.app/og-preview.png", // ✅ replace with your OG preview image URL
  //       width: 1200,
  //       height: 630,
  //       alt: "RemindMe App – Stay on top of deadlines",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "RemindMe – Smart Reminders for Busy Minds",
  //   description:
  //     "Simple, beautiful reminder app for students & professionals. Organize everything — never forget again.",
  //   creator: "@annu_codes", // ✅ your Twitter handle if you have one
  //   images: ["https://remindme.app/og-preview.png"], // same as above
  // },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-32x32.png",
  //   apple: "/apple-touch-icon.png",
  // },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
          
            <Providers>{children}
            <Toaster position="top-right" richColors />
            </Providers>
         
      </body>
    </html>
  );
}
