import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import { Toaster } from "react-hot-toast";
import ToastErrors from "@/components/toastErrors";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo app",
  description: "A surrealdb learning project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Toaster position="top-center" />
          <ToastErrors />
          {children}
        </Providers>
      </body>
    </html>
  );
}
