'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const nameDomain = "https://www.lingue247.com";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

function rank() {
    return {
      __html: `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "https://camnangphaidep.com",
    "operatingSystem": "ANDROID",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "7143729"
    },
	"review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
	"author": {
            "@type": "Person",
            "name": "Petatoto : Link Slot Yang Lagi Gacor Hari Ini Dan Link Slot Minimal Depo 10K",
            "reviewBody": "Petatoto adalah situs slot online yang kini sedang jadi incaran para pemain karena memberikan pengalaman bermain yang sangat menguntungkan. Dengan menyediakan link slot yang lagi gacor hari ini, Petatoto memastikan pemain mendapatkan peluang besar untuk meraih kemenangan besar. Slot gacor adalah sebutan bagi mesin slot yang memberikan banyak kemenangan dalam jangka waktu tertentu"
          }
        },
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "IDR"
    }
  }
  `,
    };
  }

function histats() {
    return {
      __html: `
        var _Hasync= _Hasync|| [];
        _Hasync.push(['Histats.start', '1,4921028,4,5,172,25,00010000']);
        _Hasync.push(['Histats.fasi', '1']);
        _Hasync.push(['Histats.track_hits', '']);
        (function() {
        var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
        hs.src = ('//s10.histats.com/js15_as.js');
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
        })();
      `,
    };
  };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <head>
        <title>Petatoto : Link Slot Yang Lagi Gacor Hari Ini Dan Link Slot Minimal Depo 10K</title>
        <meta name="description" content="Petatoto adalah situs slot online yang kini sedang jadi incaran para pemain karena memberikan pengalaman bermain yang sangat menguntungkan. Dengan menyediakan link slot yang lagi gacor hari ini, Petatoto memastikan pemain mendapatkan peluang besar untuk meraih kemenangan besar. Slot gacor adalah sebutan bagi mesin slot yang memberikan banyak kemenangan dalam jangka waktu tertentu" />
        <meta name="keywords" content="Petatoto, Link Slot Yang Lagi Gacor Hari Ini, Link Slot Minimal Depo 10K, Link Gacor88, Deposit Via Dana, Situs Judi Online, Slot Gacor Malam Ini, Bocoran Link Slot Gacor Hari Ini, Link Slot Gacor Gampang Maxwin" />
        <meta name="google-site-verification" content="66oyBI-LVmmcRJUVTEZ0OD_FafXh4xS42g1kCbF7kwc" />
        <meta name="application-name" content="petatoto" />
        <link rel="author" href={nameDomain} />
        <link rel="canonical" href={nameDomain} />
        <meta name="author" content="petatoto" />
        <meta name="publisher" content="petatoto" />
        <meta name="copyright" content="petatoto" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="category" content="slot" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="language" content="id-ID" />
        <meta name="rating" content="general" />
        <meta name="geo.country" content="ID" />
        <meta name="page-locale" content="id,en" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="distribution" content="global" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta property="og:title" content="Petatoto : Link Slot Yang Lagi Gacor Hari Ini Dan Link Slot Minimal Depo 10K" />
        <meta property="og:description" content="Petatoto adalah situs slot online yang kini sedang jadi incaran para pemain karena memberikan pengalaman bermain yang sangat menguntungkan. Dengan menyediakan link slot yang lagi gacor hari ini, Petatoto memastikan pemain mendapatkan peluang besar untuk meraih kemenangan besar. Slot gacor adalah sebutan bagi mesin slot yang memberikan banyak kemenangan dalam jangka waktu tertentu" />
        <meta property="og:url" content={nameDomain} />
        <meta property="og:site_name" content="petatoto" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content={nameDomain} />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="petatoto" />
        <meta name="twitter:title" content="Petatoto : Link Slot Yang Lagi Gacor Hari Ini Dan Link Slot Minimal Depo 10K" />
        <meta name="twitter:description" content="Petatoto adalah situs slot online yang kini sedang jadi incaran para pemain karena memberikan pengalaman bermain yang sangat menguntungkan. Dengan menyediakan link slot yang lagi gacor hari ini, Petatoto memastikan pemain mendapatkan peluang besar untuk meraih kemenangan besar. Slot gacor adalah sebutan bagi mesin slot yang memberikan banyak kemenangan dalam jangka waktu tertentu" />
        <meta name="twitter:image" content={nameDomain} />
        <link rel="icon" href="/favicon.ico?favicon.088e6c96.ico" sizes="256x256" type="image/x-icon" />
        <meta name="next-size-adjust" content="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={rank()} key="product-jsonld" />
        <script dangerouslySetInnerHTML={histats()} type="text/javascript" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
