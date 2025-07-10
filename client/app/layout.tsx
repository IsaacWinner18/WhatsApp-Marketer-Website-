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
  title:
    "WhatsApp Marketing Services | Reach 5000+ Users | Professional Social Media Marketing",
  description:
    "Professional WhatsApp marketing services to grow your brand visibility and generate leads. Reach 5000+ real WhatsApp users instantly with targeted status updates, broadcasts, and group marketing.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "WhatsApp Marketing Services",
    title:
      "WhatsApp Marketing Services | Reach 5000+ Users | Professional Social Media Marketing",
    description:
      "Professional WhatsApp marketing services to grow your brand visibility and generate leads. Reach 5000+ real WhatsApp users instantly with targeted status updates, broadcasts, and group marketing.",
    images: [
      {
        url: "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1752189051/whatsapp-marketing-_ls5x4v.avif",
        width: 1200,
        height: 630,
        alt: "WhatsApp Marketing Services - Professional social media marketing to reach 5000+ users",
        type: "image/avif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Marketing Services | Reach 5000+ Users",
    description:
      "Professional WhatsApp marketing services to grow your brand visibility and generate leads. Reach 5000+ real WhatsApp users instantly.",
    images: [
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1752189051/whatsapp-marketing-_ls5x4v.avif",
    ],
    creator: "@whatsappmarketing",
    site: "@whatsappmarketing",
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
  other: {
    "theme-color": "#25D366",
    "color-scheme": "dark",
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
