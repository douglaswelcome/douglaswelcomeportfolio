import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/styles/base.css";
import "@/styles/custom.scss";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Douglas Welcome Portfolio",
  description: "Douglas Welcome is a Product Designer with a passtion for brand and all things front-end web. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
