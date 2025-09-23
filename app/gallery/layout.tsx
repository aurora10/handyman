import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galerij - Bekijk Mijn Afgeronde Projecten',
  description: `Bekijk foto's van mijn recente klusprojecten, inclusief tegelwerk, schilderwerk en diverse huisreparaties. Laat u inspireren door mijn vakmanschap.`,
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
