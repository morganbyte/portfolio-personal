import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Morgan",
  description: "Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-white text-neutral-900 font-inter">
        <Header />
        <main className="container mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
