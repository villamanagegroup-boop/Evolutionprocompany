import type { Metadata } from "next";
import { Bebas_Neue, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evolution Production Company | Where Ice Meets Dance",
  description:
    "Evolution Production Company (EPC) is a hybrid touring ice and dance performance company based in the DMV area. Professional training, three productions per year, and real career opportunities.",
  keywords: [
    "ice skating",
    "dance performance",
    "DMV",
    "auditions",
    "touring company",
    "figure skating",
    "contemporary dance",
    "performing arts",
  ],
  openGraph: {
    title: "Evolution Production Company",
    description: "Where Ice Meets Dance. Where Art Becomes Legend.",
    type: "website",
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
        className={`${bebasNeue.variable} ${cormorantGaramond.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
