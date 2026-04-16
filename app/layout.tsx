import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mohsen Abyari | Business Broker & Akquisitionsspezialist',
  description:
    'Diskrete Positionierung fuer strategische Akquisition, Nachfolgesituationen und Business Brokerage im industriellen Sektor in der D-A-CH Region.',
  keywords: [
    'Mohsen Abyari',
    'Business Broker',
    'Akquisitionsspezialist',
    'Unternehmenskauf',
    'Nachfolgeregelung',
    'Medizintechnik',
    'Industrie',
    'D-A-CH',
  ],
  openGraph: {
    title: 'Mohsen Abyari | Business Broker & Akquisitionsspezialist',
    description:
      'Strategische Akquisition und diskrete Gespraeche fuer Industrie, Fertigung und Medizintechnik.',
    type: 'website',
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohsen Abyari | Business Broker & Akquisitionsspezialist',
    description:
      'Strategische Akquisition und Business Brokerage im industriellen Sektor.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
