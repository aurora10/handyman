import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Neem Contact Op met Uw Klusjesman',
  description: 'Neem contact op voor al uw vragen, offertes of om een afspraak te maken. Ik reageer snel op uw bericht of telefoontje.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
