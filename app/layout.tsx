import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dai's Sosials",
  description: "All my sosial media links",
  icons: {
    icon: "/fav.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-gray-800 dark:text-amber-50 bg-gray-200 w-dvw h-dvh flex items-center justify-center`}>
        {children}
        <p className="absolute bottom-3 left-0 right-0 text-center"> &copy; dai 2026</p>
        
      </body>
    </html>
  );
}
