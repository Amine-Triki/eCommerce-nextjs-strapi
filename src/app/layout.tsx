import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister/ServiceWorkerRegister";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAT Store",
  description:
    "MAT Store is an e-commerce platform offering a wide range of products.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: "MAT Store , ecommerce store , online store ",
  openGraph: {
    title: "MAT Store",
    description:
      "MAT Store is an e-commerce platform offering a wide range of products.",
    url: "https://nextjs-ecommerce-strapi.netlify.app/",
    siteName: "MAT Store",
    images: [
      {
        url: "https://picsum.photos/200/300",
        width: 1200,
        height: 630,
        alt: "MAT Store",
      },
    ],
    type: "website",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: " MAT Store",
    capable: true,
    statusBarStyle: "default",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ServiceWorkerRegister />
        <Nav />
        {children}
      </body>
      <ScrollToTop />
      <Footer />
    </html>
  );
}
