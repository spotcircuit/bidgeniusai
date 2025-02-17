import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BidGenius AI - Intelligent RFP Analysis & Response",
  description: "AI-powered platform that streamlines government RFP analysis, response generation, and compliance management.",
  keywords: "RFP, AI, government contracts, proposal automation, bid management, SAM.gov",
  openGraph: {
    title: "BidGenius AI - Intelligent RFP Analysis & Response",
    description: "Transform your RFP response process with AI-powered analysis and automation.",
    url: "https://www.bidgeniusai.com",
    siteName: "BidGenius AI",
    images: [
      {
        url: "https://www.bidgeniusai.com/images/rfp-transformation.png",
        width: 800,
        height: 600,
        alt: "BidGenius AI RFP Transformation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BidGenius AI - Intelligent RFP Analysis & Response",
    description: "Transform your RFP response process with AI-powered analysis and automation.",
    images: ["https://www.bidgeniusai.com/images/rfp-transformation.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // You'll need to add this
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
        {children}
      </body>
    </html>
  );
}
