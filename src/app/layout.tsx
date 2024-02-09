import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });
// TODO: Add Google analytics
// TODO: host the website in the production domain
// TODO: add animation
export const metadata: Metadata = {
  title: "SGN Studio | Konsep desain bergaya NATURAL dan KONTEMPORER",
  description: "Konsep desain bergaya NATURAL dan KONTEMPORER Berfokus pada KEHARMONISAN",
};

// TODO: add individual portfolio details

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <Script async src='https://www.googletagmanager.com/gtag/js?id=G-DC08J4MTK5' />

        <Script id='google-analytics'>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script>
      </head>
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
