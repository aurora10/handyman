
// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import Link from "next/link"
// import { Hammer, Paintbrush, Wrench, Star, CheckCircle } from "lucide-react"

// export default function HomePage() {
//   return (
//     <div className="min-h-screen">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative bg-primary text-primary-foreground">
//         <div className="absolute inset-0">
//           <img
//             src="/professional-handyman-working-on-home-renovation.jpg"
//             alt="Professionele klusjesman aan het werk"
//             className="w-full h-full object-cover opacity-20"
//           />
//         </div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Expert Tegel- & Schilderwerken</h1>
//             <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
//               Professionele, betrouwbare en betaalbare klusdiensten voor uw woning en kantoor.
//             </p>
//             <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
//               <Link href="/contact">Vraag een offerte aan</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-16 lg:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Onze Diensten</h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//               Wij bieden complete klusdiensten om uw woning in perfecte staat te houden.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="text-center p-8 hover:shadow-lg transition-shadow">
//               <CardContent className="pt-6">
//                 <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <Hammer className="h-8 w-8 text-accent" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4">Professioneel Tegelwerk</h3>
//                 <p className="text-muted-foreground leading-relaxed">
//                   Deskundige tegelinstallatie voor badkamers, keukens en vloeren. Kwaliteit en oog voor detail.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="text-center p-8 hover:shadow-lg transition-shadow">
//               <CardContent className="pt-6">
//                 <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <Paintbrush className="h-8 w-8 text-accent" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4">Binnen- & Buitenschilderwerk</h3>
//                 <p className="text-muted-foreground leading-relaxed">
//                   Geef uw ruimte een nieuwe uitstraling met professioneel schilderwerk. Van voorbereiding tot afwerking.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="text-center p-8 hover:shadow-lg transition-shadow">
//               <CardContent className="pt-6">
//                 <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <Wrench className="h-8 w-8 text-accent" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4">Algemene Reparaties</h3>
//                 <p className="text-muted-foreground leading-relaxed">
//                   Van kleine reparaties tot grote herstellingen, wij verzorgen al uw onderhoud met vakmanschap.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-16 lg:py-24 bg-muted/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Wat Onze Klanten Zeggen</h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//               Neem het niet alleen van ons aan – hoor het van onze tevreden klanten.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="p-8">
//               <CardContent className="pt-6">
//                 <div className="flex mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                   ))}
//                 </div>
//                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                   "Uitzonderlijk werk aan onze badkamertegels. Professioneel, stipt en de kwaliteit overtrof onze verwachtingen."
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4">
//                     <span className="text-lg font-semibold">SM</span>
//                   </div>
//                   <div>
//                     <p className="font-semibold">Sarah Mitchell</p>
//                     <p className="text-sm text-muted-foreground">Huiseigenaar</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="p-8">
//               <CardContent className="pt-6">
//                 <div className="flex mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                   ))}
//                 </div>
//                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                   "Uitstekend schilderwerk in ons kantoor. Netjes, efficiënt en op tijd en binnen budget afgerond."
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4">
//                     <span className="text-lg font-semibold">DJ</span>
//                   </div>
//                   <div>
//                     <p className="font-semibold">David Johnson</p>
//                     <p className="text-sm text-muted-foreground">Ondernemer</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="p-8">
//               <CardContent className="pt-6">
//                 <div className="flex mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                   ))}
//                 </div>
//                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                   "Betrouwbare en bekwame vakman. Meerdere problemen in ons huis opgelost met veel oog voor detail."
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4">
//                     <span className="text-lg font-semibold">ER</span>
//                   </div>
//                   <div>
//                     <p className="font-semibold">Emily Rodriguez</p>
//                     <p className="text-sm text-muted-foreground">Beheerder</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-16 lg:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Waarom Kiezen Voor Handyman Pro?</h2>
//               <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
//                 Met jarenlange ervaring en een toewijding aan kwaliteit leveren wij resultaten die de tand des tijds doorstaan.
//               </p>

//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold mb-1">Gelicentieerd & Verzekerd</h4>
//                     <p className="text-muted-foreground">
//                       Volledig erkende vakmensen met uitgebreide verzekering.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold mb-1">Kwaliteitsgarantie</h4>
//                     <p className="text-muted-foreground">
//                       Wij staan achter ons werk met een tevredenheidsgarantie op alle diensten.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold mb-1">Concurrerende Prijzen</h4>
//                     <p className="text-muted-foreground">
//                       Eerlijke, transparante prijzen zonder verborgen kosten of verrassingen.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <img
//                 src="/handyman-tools-and-equipment-professional-setup.jpg"
//                 alt="Professioneel gereedschap van klusjesman"
//                 className="rounded-lg shadow-lg w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }


import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Hammer, Paintbrush, Wrench, Star, CheckCircle } from "lucide-react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - Uw Klusjesman voor Huis & Kantoor',
  description: 'Ontdek betrouwbare klusjesman diensten voor schilderwerk, tegelwerk en kleine reparaties in en om het huis. Vraag vandaag nog een vrijblijvende offerte aan!',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img
            src="/professional-handyman-working-on-home-renovation.jpg"
            alt="Klusjesman aan het werk"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              Betrouwbare Hulp bij Klussen in en om het Huis
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Geen groot bedrijf, maar een handige en betaalbare oplossing voor uw schilder-, tegel- en kleine reparatiewerk.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contact">Vraag een offerte aan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Mijn Diensten</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Heeft u een klus waar u zelf niet aan toekomt? Van schilderwerk tot reparaties – ik help u graag, zonder hoge kosten of lange wachttijden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Hammer className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Tegelwerk met Zorg</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Netjes gelegd tegelwerk voor badkamer, keuken of vloer. Betaalbaar en met oog voor detail.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Paintbrush className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Schilderwerk op Maat</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Een frisse look voor muren, plafonds of kozijnen. Betrouwbaar uitgevoerd, zonder poespas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Kleine Reparaties & Onderhoud</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Voor de klussen waar u zelf niet aan toekomt. Van kleine reparaties tot praktisch onderhoud in huis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ervaringen van Klanten</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tevreden klanten vertellen waarom ze mij inschakelden voor hun klussen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Netjes en zorgvuldig gewerkt aan onze badkamer. Betrouwbaar en prettig in de omgang."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-semibold">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah M.</p>
                    <p className="text-sm text-muted-foreground">Huiseigenaar</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Ons kantoor opgefrist met schilderwerk. Duidelijke afspraken en keurig uitgevoerd."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-semibold">DJ</span>
                  </div>
                  <div>
                    <p className="font-semibold">David J.</p>
                    <p className="text-sm text-muted-foreground">Ondernemer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Meerdere kleine reparaties in huis opgelost. Eerlijke prijs en betrouwbaar uitgevoerd."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-semibold">ER</span>
                  </div>
                  <div>
                    <p className="font-semibold">Emily R.</p>
                    <p className="text-sm text-muted-foreground">Beheerder</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
                Waarom Kiezen voor Mijn Klusservice?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Ik ben geen groot bedrijf, maar een zelfstandige klusser die persoonlijk, betrouwbaar en betaalbaar werkt. Zo weet u altijd wie er bij u over de vloer komt.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Persoonlijke aanpak</h4>
                    <p className="text-muted-foreground">
                      U heeft direct contact met mij, zonder tussenpersonen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Duidelijke afspraken</h4>
                    <p className="text-muted-foreground">
                      Ik kom opdagen op de afgesproken tijd en werk netjes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Betaalbare prijzen</h4>
                    <p className="text-muted-foreground">
                      Een eerlijke prijs, zonder verrassingen achteraf.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/handyman-tools-and-equipment-professional-setup.jpg"
                alt="Gereedschap van de klusser"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
