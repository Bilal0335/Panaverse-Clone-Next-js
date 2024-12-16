import Footer from "@/component/layout/Footer";
import "./globals.css";
import Header from "@/component/layout/Header";
import { Metadata } from "next"; 

export const metadata: Metadata = {
  title: "Panaverse DAO",
  description: "Certified Web 3.0 and Metaverse Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
