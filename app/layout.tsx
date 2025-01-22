import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Alex Appleget",
  description:
    "New Version of my portfolio website to showcase my skills and projects.",
  icons: {
    icon: "/AA.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
