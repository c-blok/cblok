import '../globals.css'
import type { Metadata } from 'next'
import {getTranslator} from 'next-intl/server';
import { Raleway } from 'next/font/google'
import React from "react";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

const inter = Raleway({ subsets: ['latin', 'cyrillic'] })

export async function generateMetadata({params}: {params: { locale: string }}): Promise<Metadata> {
  const t = await getTranslator(params.locale, 'seo');


  return {
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      type: "website",
      images: ['https://cblock.lv/favicon.ico'],
      siteName: "C-BLOCK",
      locale: params.locale,
      title: t('title'),
      description: t('description'),
      url: "https://cblock.lv"
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
