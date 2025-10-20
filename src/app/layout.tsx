import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import SupabaseProvider from "../components/SupabaseProvider";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🌐 SEO + OpenGraph
export const metadata: Metadata = {
  title: "Sentia — Productos y herramientas",
  description: "Sentia — proyecto demo con Supabase, Stripe y Next.js",
  openGraph: {
    title: "Sentia — Productos y herramientas",
    description: "Sentia — proyecto demo con Supabase, Stripe y Next.js",
    url: "https://www.sentia.global",
    siteName: "Sentia Global",
    images: [
      {
        url: "https://www.sentia.global/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sentia Global",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentia — Productos y herramientas",
    description: "Sentia — proyecto demo con Supabase, Stripe y Next.js",
    images: ["https://www.sentia.global/og-image.png"],
  },
};

// 🚀 Layout principal
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0CRXFB6KSD"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0CRXFB6KSD');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SupabaseProvider>
          <Navbar />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
