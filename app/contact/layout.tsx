import type { Metadata } from 'next'
import RecaptchaWrapper from "./recaptcha-wrapper"

export const metadata: Metadata = {
  title: 'Contact - Neem Contact Op Voor Een Vrijblijvende Offerte',
  description: 'Neem contact op voor al uw vragen over klussen, reparaties of renovaties. Bel, mail of vul het contactformulier in voor een snelle reactie en een gratis offerte.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RecaptchaWrapper>{children}</RecaptchaWrapper>
}
