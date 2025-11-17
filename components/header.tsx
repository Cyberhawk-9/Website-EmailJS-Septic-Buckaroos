'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'Residential', href: '/services/residential' },
    { name: 'Commercial', href: '/services/commercial' },
    { name: 'Septic System Inspection & Certification', href: '/services/inspection-certification' },
    { name: 'Septic System Evaluations', href: '/services/evaluations' },
    { name: 'Septic System Cleanings', href: '/services/cleanings' },
    { name: 'Tank Location', href: '/services/tank-location' },
    { name: 'Septic Treatments', href: '/services/treatments' },
    { name: 'Eljen (Alternative) System Pumping', href: '/services/eljen-pumping' },
    { name: 'Septic Tank Risers Installed', href: '/services/risers' },
  ]

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b backdrop-blur transition-all duration-300',
        'bg-background/98',
        isScrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image 
              src="/images/buckaroos-logo.png" 
              alt="Buckaroos Septics Logo" 
              width={isScrolled ? 45 : 55}
              height={isScrolled ? 45 : 55}
              className="transition-all duration-300"
            />
            <div className={cn(
              "font-bold text-primary transition-all duration-300 whitespace-nowrap",
              isScrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
            )}>
              Buckaroos Septics
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors py-2 font-medium">
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-80 bg-card border border-border rounded-lg shadow-lg py-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/septic-101" className="text-foreground hover:text-primary transition-colors font-medium">
              Septic 101
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary transition-colors font-medium whitespace-nowrap">
              Products
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <a 
              href="tel:928-771-2846" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-card"
            >
              <Phone className="h-5 w-5 flex-shrink-0" />
              <span className="font-semibold text-base whitespace-nowrap">928-771-2846</span>
            </a>
            <Button asChild size="lg">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            {/* Mobile Services */}
            <div>
              <div className="py-2 font-semibold text-foreground">Services</div>
              <div className="pl-4 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/septic-101"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Septic 101
            </Link>
            <Link
              href="/products"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Recommended Products
            </Link>
            
            <div className="pt-4 space-y-3 border-t">
              <a href="tel:928-771-2846" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors py-2">
                <Phone className="h-5 w-5" />
                <span className="font-semibold text-lg">928-771-2846</span>
              </a>
              <Button asChild className="w-full" size="lg">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
