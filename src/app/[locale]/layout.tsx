import '../../styles/reset.css'
import '../global.css'
import type { Metadata } from 'next'
import {getTranslator} from 'next-intl/server';
import { Raleway } from 'next/font/google'
import React from "react";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Header } from "../../components/index";
import Image from "next/image";
import BgImage from "../../../public/bg.png";
import { Footer } from "../../components/footer/Footer";

const inter = Raleway({ subsets: ['latin', 'cyrillic'] })

export async function generateMetadata({params}: {params: { locale: string }}): Promise<Metadata> {
  const t = await getTranslator(params.locale, 'seo');


  return {
    metadataBase: new URL('https://cblock.lv'),
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: "/",
      languages: {
        "ru": '/ru'
      }
    },
    openGraph: {
      type: "website",
      images: ['/favicon.ico'],
      siteName: "C-BLOCK",
      locale: params.locale,
      title: t('title'),
      description: t('description')
    }
  }
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {

  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }


  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className={"bg"}>
          <Image src={BgImage} alt={"bg"} />
        </div>
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  )
}
