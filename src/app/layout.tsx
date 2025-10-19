import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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

export const metadata: Metadata = {
  title: "Sentia — Productos y herramientas",
  description: "Sentia — proyecto demo con Supabase, Stripe y Next.js",
  openGraph: {
    title: "Sentia — Productos y herramientas",
    description: "Sentia — proyecto demo con Supabase, Stripe y Next.js",
    url: "https://www.sentia.global", // Asegúrate de usar www
    siteName: "Sentia Global",
    images: [
      {
        url: "https://www.sentia.global/og-image.png", // Imagen pública correcta
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SupabaseProvider>
          <Navbar />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}

