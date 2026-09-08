import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robert Pierz | DJ, Wodzirej, Saksofon",
  description:
    "Minimalistyczna marka osobista. DJ, prowadzenie imprez i saksofon na żywo. Kraków, cała Polska.",
  verification: {
    google: "YP9c6maDUAFxToiYNUnSy9C2B9M8sZIrqjrgpiBRxZA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} bg-[#050505] text-white`}>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-87T06E2BLR"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());
            gtag('config', 'G-87T06E2BLR');
          `}
        </Script>
      </body>
    </html>
  );
}
