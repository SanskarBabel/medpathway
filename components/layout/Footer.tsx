"use client"

import Link from 'next/link'
import { Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = {
  solutions: [
    { name: 'MBBS in Uzbekistan', href: '/#countries' },
    { name: 'MBBS in Russia', href: '/#countries' },
    { name: 'MBBS in Kyrgyzstan', href: '/#countries' },
    { name: 'MBBS in Kazakhstan', href: '/#countries' },
    { name: 'MBBS in Georgia', href: '/#countries' },
  ],
  support: [
    { name: 'Admission Process', href: '/services#admission-process' },
    { name: 'Visa Assistance', href: '/services#visa-assistance' },
    { name: 'Accommodation', href: '/services#accommodation' },
    { name: 'Travel Guidance', href: '/services#travel-guidance' },
    { name: 'Post-Arrival Support', href: '/services#post-arrival' },
  ],
  company: [
    { name: 'About Us', href: '/#why-choose-us' },
    { name: 'Success Stories', href: '/#testimonials' },
    { name: 'FaQ', href: '/#faq' },
    { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Refund Policy', href: '/refund-policy' },
  ],
  social: [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/med_pathway' },
    { name: 'Twitter', icon: Twitter, href: '#' },
  ],
}

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const element = document.querySelector(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-20 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6">
            <Link href="/" className="text-primary text-2xl font-bold font-poppins">
              Med<span className="text-white">Pathway</span>
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Helping aspiring doctors secure hassle-free admissions in top medical universities abroad with affordable, transparent, and reliable guidance.
            </p>
            <div className="flex space-x-3">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-md bg-gray-800 p-2 text-gray-400 hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Countries</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                        onClick={(e) => handleNavClick(e, item.href)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name} className="text-sm leading-6 text-gray-300" >
                        {item.name}
                      
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Contact Us</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                      <span  className="text-sm leading-6 text-gray-300 hover:text-white">
                        +91 9250800725
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                      <Link href="mailto:info@medpathway.com" className="text-sm leading-6 text-gray-300 hover:text-white">
                        info@medpathway.com
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} Med Pathway. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}