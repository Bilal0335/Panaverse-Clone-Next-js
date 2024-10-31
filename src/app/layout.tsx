import Footer from "@/component/layout/Footer"; // Corrected path
import "./globals.css";
import Header from "@/component/layout/Header"; // Corrected path

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
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
