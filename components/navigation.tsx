// "use client"

// import Link from "next/link"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Menu, X } from "lucide-react"

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <span className="text-2xl font-bold text-primary">Handyman Pro</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
//               Home
//             </Link>
//             <Link href="/gallery" className="text-foreground hover:text-primary transition-colors font-medium">
//               Gallery
//             </Link>
//             <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
//               Contact
//             </Link>
//             <Button asChild className="ml-4">
//               <Link href="/contact">Request Quote</Link>
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
//               <Link
//                 href="/"
//                 className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/gallery"
//                 className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Gallery
//               </Link>
//               <Link
//                 href="/contact"
//                 className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Contact
//               </Link>
//               <div className="px-3 py-2">
//                 <Button asChild className="w-full">
//                   <Link href="/contact" onClick={() => setIsOpen(false)}>
//                     Request Quote
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Handyman Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Startpagina
            </Link>
            <Link href="/gallery" className="text-foreground hover:text-primary transition-colors font-medium">
              Fotogalerij
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
            <Button asChild className="ml-4">
              <Link href="/contact">Offerte aanvragen</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-label="Menu openen/sluiten">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Startpagina
              </Link>
              <Link
                href="/gallery"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Fotogalerij
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Offerte aanvragen
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
