import "./globals.css";
import Header from "@/component/layout/Header";
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
      </body>
    </html>
  );
}
