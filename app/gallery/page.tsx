

"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    id: 1,
    src: "/professional-bathroom-tiling-work.jpg",
    alt: "Professionele badkamer betegeling",
    category: "Tegels",
  },
  {
    id: 2,
    src: "/interior-wall-painting-project.jpg",
    alt: "Interieur muur schilderwerk",
    category: "Schilderen",
  },
  {
    id: 3,
    src: "/kitchen-backsplash-tile-installation.jpg",
    alt: "Keuken spatwand installatie",
    category: "Tegels",
  },
  {
    id: 4,
    src: "/exterior-house-painting.png",
    alt: "Exterieur woning schilderwerk",
    category: "Schilderen",
  },
  {
    id: 5,
    src: "/bathroom-renovation-completed.jpg",
    alt: "Badkamerrenovatie",
    category: "Renovatie",
  },
  {
    id: 6,
    src: "/floor-tile-installation-pattern.jpg",
    alt: "Vloertegels installatie",
    category: "Tegels",
  },
  {
    id: 7,
    src: "/living-room-interior-painting.jpg",
    alt: "Woonkamer schilderwerk",
    category: "Schilderen",
  },
  {
    id: 8,
    src: "/kitchen-cabinet-repair-work.jpg",
    alt: "Keukenkast reparatie",
    category: "Herstellingen",
  },
  {
    id: 9,
    src: "/outdoor-deck-staining-project.jpg",
    alt: "Terras beitsen",
    category: "Schilderen",
  },
  {
    id: 10,
    src: "/shower-tile-installation.jpg",
    alt: "Douche betegeling",
    category: "Tegels",
  },
  {
    id: 11,
    src: "/home-office-painting.jpg",
    alt: "Kantoor schilderwerk",
    category: "Schilderen",
  },
  {
    id: 12,
    src: "/plumbing-fixture-installation.jpg",
    alt: "Sanitaire herstellingen",
    category: "Herstellingen",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [filter, setFilter] = useState<string>("Alles")

  const categories = ["Alles", "Tegels", "Schilderen", "Renovatie", "Herstellingen"]

  const filteredImages = filter === "Alles" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header Sectie */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Ons Werk</h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Bekijk enkele van onze recente projecten en ontdek de kwaliteit en het vakmanschap die wij in elk werkstuk
            leggen.
          </p>
        </div>
      </section>

      {/* Filter Knoppen */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Raster */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg bg-muted cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-medium">{image.alt}</p>
                  <p className="text-white/80 text-sm">{image.category}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">Geen afbeeldingen gevonden voor de geselecteerde categorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <h3 className="text-white text-xl font-semibold mb-1">{selectedImage.alt}</h3>
              <p className="text-white/80">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Klaar om uw project te starten?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Laat ons hetzelfde niveau van kwaliteit en vakmanschap naar uw woning of kantoor brengen.
          </p>
          <Button asChild size="lg" className="px-8 py-6 text-lg">
            <a href="/contact">Vraag een Gratis Offerte</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}



