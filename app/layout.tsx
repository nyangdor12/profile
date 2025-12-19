import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
    variable: "--font-cormorant",
    subsets: ["latin"]
});

const poppins = Poppins({
    variable: "--font-poppins",
    weight: "300"
});


export const metadata: Metadata = {
  title: "Profile Website",
  description: "This is my profile website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
