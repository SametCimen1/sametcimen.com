import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Nav } from "@/components/nav";
import { cn } from "@/lib/utils";
import Head from 'next/head'
import Script from 'next/script'

const inter = Poppins({ subsets: ["latin"], weight:['200', '800', '500', '400']});

export const metadata: Metadata = {
  title: "Samet Cimen",
  description: "Samet Cimen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Samet Cimen</title>
      </Head>
      <Script
            strategy='lazyOnload'
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
          />

          <Script id='' strategy='lazyOnload'>
            {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  });
              `}
          </Script>
      <body className={cn('', inter.className)}>
      <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
        >
        <Nav />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
