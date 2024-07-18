import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "./globals.css";

const bitter = Bitter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luiz Cunha | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full scroll-smooth" lang="en">
      <body className={`${bitter.className} h-full overflow-x-hidden font-bitter`}>{children}</body>
    </html>
  );
}
