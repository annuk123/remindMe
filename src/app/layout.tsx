
import type { Metadata,  Viewport  } from "next";
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
  title: "RemindMe — Smart Reminders for Busy Minds",
  description:
    "RemindMe helps students and professionals stay ahead of deadlines, bills, and personal goals — with intelligent, timely reminders that just work.",
  keywords: [
    "reminder app",
    "task scheduler",
    "productivity app",
    "bill reminders",
    "deadline tracker",
    "student planner",
    "time management",
    "RemindMe app",
    "to-do reminders",
    "automated reminders",
  ],
  authors: [{ name: "Annu", url: "https://remindme.pixelui.studio" }],
  creator: "Annu",
  publisher: "RemindMe",
  metadataBase: new URL("https://remindme.pixelui.studio"),

  openGraph: {
    title: "RemindMe — Never Miss What Matters",
    description:
      "A clean, reliable reminder app that keeps you on track with tasks, bills, and deadlines — beautifully simple, perfectly timed.",
    url: "https://remindme.pixelui.studio",
    siteName: "RemindMe",
    images: [
      {
        url: "https://remindme.pixelui.studio/image.png",
        width: 1200,
        height: 630,
        alt: "RemindMe — Smart Reminders for Busy Minds",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RemindMe — Smart Reminders for Busy Minds",
    description:
      "Stay organized effortlessly with intelligent reminders for everything that matters.",
    creator: "@annu_codes",
    site: "@annu_codes",
    images: ["https://remindme.pixelui.studio/image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",

  category: "productivity",
  alternates: {  
    canonical: "https://remindme.pixelui.studio",
  },
};

/**
 * Viewport settings (Next.js 15)
 * Move themeColor and colorScheme here
 */
export const viewport: Viewport = {
  themeColor: "#4F46E5",
  colorScheme: "light",
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
