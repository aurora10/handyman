import RecaptchaWrapper from "./recaptcha-wrapper"

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RecaptchaWrapper>{children}</RecaptchaWrapper>
}