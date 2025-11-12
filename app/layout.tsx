import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'Klussenbedrijf - Uw Lokale Expert voor Huisreparaties & Verbeteringen',
    template: '%s | Klussenbedrijf',
  },
  description: 'Betrouwbare klusjesman diensten voor al uw huisreparatie-, onderhouds- en verbeteringsbehoeften. Wij bedienen uw lokale gemeenschap met vakmanschap en betaalbare prijzen.',
  keywords: ['klusjesman', 'huisreparatie', 'huisverbetering', 'lokale klusjesman', 'onderhoud', 'verbouwing', 'reparatiediensten'],
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Klussenbedrijf',
      description: 'Betrouwbare klusjesman diensten voor al uw huisreparatie-, onderhouds- en verbeteringsbehoeften.',
      url: 'https://your-domain.com',
      telephone: '+1234567890',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Voorbeeldstraat',
        addressLocality: 'Stad',
        postalCode: '1234 AB',
        addressCountry: 'NL',
      },
      openingHours: 'Mo,Tu,We,Th,Fr 09:00-17:00',
      image: 'https://your-domain.com/placeholder-logo.png',
      priceRange: '$$',
    };

  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H2PC2S43VZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H2PC2S43VZ');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}