import type { Metadata } from "next";
import { Lato } from "next/font/google";

import { CartDesktop, Notification } from "@/components";
import AuthProvider from "@/components/AuthProvider";
import CartMobile from "@/components/CartMobile";
import { CartMobileIcon, Footer, Header } from "@/components/ui";
import { CartContextProvider } from "@/context/CartContext";

import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FoodSwift",
  description: "Food delivery app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`h-full color-[var(--primary-text-color)] ${lato.className}`}
      >
        <AuthProvider>
          <Notification />
          <CartContextProvider>
            <div className="overflow-x-clip flex flex-col min-h-[100%]">
              <Header />
              <CartMobileIcon />
              <CartMobile />
              <main>{children}</main>
              <CartDesktop />
              <Footer />
            </div>
          </CartContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
