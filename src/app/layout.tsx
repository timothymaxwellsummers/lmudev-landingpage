import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LMU Developers",
  description: "Building Apps for and with the LMU Community",
  openGraph: {
    title: "LMU Developers",
    description: "Building Apps for and with the LMU Community",
    url: "https://example.com", // Replace with your actual URL
    siteName: "LMU Developers",
    images: [
      {
        url: "https://example.com/path-to-your-image.jpg", // Replace with the actual image URL
        width: 1200,
        height: 630,
        alt: "LMU Developers",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LMU Developers",
    description: "Building Apps for and with the LMU Community",
    images: [
      {
        url: "https://example.com/path-to-your-image.jpg", // Replace with the actual image URL
        alt: "LMU Developers",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
