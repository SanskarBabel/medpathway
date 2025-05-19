"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#why-choose-us' },
  { 
    name: 'Universities', 
    href: '#',
    submenu: [
      { name: 'Uzbekistan', href: '/#countries' },
      { name: 'Russia', href: '/#countries' },
      { name: 'Kyrgyzstan', href: '/#countries' },
      { name: 'Kazakhstan', href: '/#countries' },
      { name: 'Georgia', href: '/#countries' },
    ]
  },
  { name: 'Services', href: '/#services' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Contact', href: 'https://wa.me/9250800725?text=Hi%20Med%20Pathway,%20I%27m%20interested%20in%20MBBS%20abroad.' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const element = document.querySelector(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setMobileMenuOpen(false)
      }
    } else if (href.startsWith('https://wa.me')) {
      e.preventDefault()
      window.open(href, '_blank')
      setMobileMenuOpen(false)
    }
  }

  const handleCounselingClick = () => {
    window.open('https://wa.me/9250800725?text=Hi%20Med%20Pathway,%20I%27m%20interested%20in%20MBBS%20abroad.', '_blank')
  }

  return (
    <header className={cn(
      'fixed w-full top-0 z-50 transition-all duration-300',
      scrolled 
        ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
        : 'bg-transparent py-4'
    )}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex lg:flex-1 items-center gap-2">
          <span className="text-primary text-2xl font-bold font-poppins">Med<span className="text-foreground">Pathway</span></span>
        </Link>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            item.submenu ? (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenSubmenu(item.name)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors",
                    openSubmenu === item.name && "text-primary"
                  )}
                >
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {openSubmenu === item.name && (
                  <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none animate-fadeIn">
                    <div className="py-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                target={item.href.startsWith('https://wa.me') ? '_blank' : undefined}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button onClick={handleCounselingClick}>Get Free Counseling</Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/25" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                <span className="text-primary text-xl font-bold font-poppins">Med<span className="text-foreground">Pathway</span></span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <>
                          <button
                            className="flex w-full items-center justify-between rounded-lg py-2 text-base font-medium text-foreground hover:bg-gray-50 dark:hover:bg-gray-800"
                            onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                          >
                            {item.name}
                            <ChevronDown 
                              className={cn(
                                "h-5 w-5 text-gray-400 transition-transform", 
                                openSubmenu === item.name ? "rotate-180" : ""
                              )} 
                            />
                          </button>
                          {openSubmenu === item.name && (
                            <div className="ml-4 mt-2 space-y-2">
                              {item.submenu.map((subitem) => (
                                <Link
                                  key={subitem.name}
                                  href={subitem.href}
                                  className="block py-2 pl-4 pr-3 text-base font-medium text-foreground hover:text-primary"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subitem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="block rounded-lg py-2 text-base font-medium text-foreground hover:bg-gray-50 dark:hover:bg-gray-800"
                          onClick={(e) => {
                            handleNavClick(e, item.href)
                            setMobileMenuOpen(false)
                          }}
                          target={item.href.startsWith('https://wa.me') ? '_blank' : undefined}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Button className="w-full" onClick={handleCounselingClick}>Get Free Counseling</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}