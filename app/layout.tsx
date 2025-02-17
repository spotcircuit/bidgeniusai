import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
        <div className="bg-black text-white text-sm py-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center space-x-2">
              <span>Project by</span>
              <Link
                href="https://portfolio.spotcircuit.com"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                SpotCircuit
              </Link>
              <span className="text-gray-500">|</span>
              <Link
                href="https://portfolio.spotcircuit.com"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
