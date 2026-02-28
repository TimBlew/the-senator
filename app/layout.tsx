import type { Metadata } from "next";
import "../styles/globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "The Heber Senator | Historic Bed & Breakfast in Heber Valley",
  description: "A historic bed & breakfast shaped by the pace of Heber Valley and the mountains that surround it. Built in 1902, offering 10 unique rooms.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? headersList.get("referer") ?? "";
  const isStudio = pathname.includes("/studio");

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&family=Funnel+Sans:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {!isStudio && <Navigation />}
        <main className={!isStudio ? "pt-16" : ""}>
          {children}
        </main>
        {!isStudio && <Footer />}
      </body>
    </html>
  );
}