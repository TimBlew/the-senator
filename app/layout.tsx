import type { Metadata } from "next";
import "../styles/globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "The Heber Senator | Historic Bed & Breakfast in Heber Valley",
  description: "A historic bed & breakfast shaped by the pace of Heber Valley and the mountains that surround it. Built in 1902, offering 10 unique rooms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
