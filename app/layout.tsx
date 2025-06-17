import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    template: "%s | Shopfluence",
    default: "Shopfluence - E-Commerce",
  },
  description:
    "Shopfluence Online Store, Your one stop destination for all your shopping needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-poppins antialiased">
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}