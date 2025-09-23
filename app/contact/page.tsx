"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import GoogleMapComponent from "@/components/google-map"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulier verzonden:", formData)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header Sectie */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Neem Contact Op</h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Heeft u een klus of project waar u hulp bij kunt gebruiken? Stuur gerust een bericht of bel direct. Ik reageer meestal dezelfde dag.
          </p>
        </div>
      </section>

      {/* Contactformulier en Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contactformulier */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold">Stuur een Bericht</CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  Vul hieronder uw gegevens in en ik neem zo snel mogelijk contact met u op.
                </p>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Bedankt!</h3>
                    <p className="text-muted-foreground">
                      Uw bericht is ontvangen. Ik neem spoedig contact met u op.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Naam *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefoon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Uw boodschap *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Beschrijf kort uw klus of project..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Verstuur Bericht
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contactinformatie */}
            <div className="space-.y-8">
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-bold">Contactgegevens</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0 space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">E-mail</h4>
                      <p className="text-muted-foreground">info@handyman.com</p>
                      <p className="text-sm text-muted-foreground mt-1">Ik reageer meestal dezelfde dag</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Telefoon</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground mt-1">Bel gerust voor overleg of een snelle vraag</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Werkgebied</h4>
                      <p className="text-muted-foreground">Uw stad en omgeving</p>
                      <p className="text-sm text-muted-foreground mt-1">Binnen ca. 25 km rondom mijn locatie</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Beschikbaar</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Maandag - Vrijdag: 08:00 - 18:00</p>
                        <p>Zaterdag: 09:00 - 16:00</p>
                        <p>Zondag: In overleg bij spoed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Spoedservice */}
              <Card className="p-8 bg-accent/5 border-accent/20">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4 text-accent">Dringend Hulp Nodig?</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Voor urgente problemen zoals lekkages of storingen kunt u mij ook buiten reguliere tijden bereiken.
                  </p>
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    Bel direct: (555) 999-0000
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Werkgebied Sectie */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Werkgebied</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ik richt mij vooral op de lokale gemeenschap en omliggende regio’s. Zo kan ik snel ter plaatse zijn wanneer dat nodig is.
            </p>
          </div>

          <div className="bg-muted rounded-lg h-96 flex items-center justify-center ">
            <GoogleMapComponent />
          </div>
        </div>
      </section>

      {/* FAQ Sectie */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Veelgestelde Vragen</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Antwoorden op de meest voorkomende vragen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="font-semibold mb-3">Kan ik vrijblijvend een prijsindicatie krijgen?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Ja, ik maak altijd gratis en vrijblijvende offertes. U weet vooraf waar u aan toe bent.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="font-semibold mb-3">Hoe snel kan een klus ingepland worden?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Vaak kan ik binnen enkele dagen langskomen, afhankelijk van de omvang van de klus.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="font-semibold mb-3">Werkt u ook in het weekend?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Ja, ook op zaterdag. Voor spoedgevallen ben ik soms ook op zondag bereikbaar.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="font-semibold mb-3">Geeft u garantie op het werk?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Ik sta achter mijn werk en los problemen altijd netjes op als er iets niet naar wens is.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}