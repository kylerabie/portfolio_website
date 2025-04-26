// 2. app/layout.tsx
// Defines site structure (navbar + content), like a Java template
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// SEO metadata, like HTML <meta> tags
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Data engineer portfolio showcasing R, SQL, Python, and JavaScript skills. Relocating to Germany in 2025.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}