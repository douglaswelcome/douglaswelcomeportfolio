import type { AppProps } from 'next/app'
import { DM_Sans } from "next/font/google";
import "@/styles/base.css";
import "@/styles/custom.scss";
import Head from "next/head";



const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
  });


export default function App({ Component, pageProps }: AppProps) {
  return (
  
  <>
  <Head>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <div
    className={`${dmSans.variable} antialiased`}>
        <Component {...pageProps} />
  </div>
</>
);

}