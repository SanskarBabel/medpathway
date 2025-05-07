import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = {
  solutions: [
    { name: 'MBBS in Uzbekistan', href: '/universities/uzbekistan' },
    { name: 'MBBS in Russia', href: '/universities/russia' },
    { name: 'MBBS in Kyrgyzstan', href: '/universities/kyrgyzstan' },
    { name: 'MBBS in Kazakhstan', href: '/universities/kazakhstan' },
    { name: 'MBBS in Georgia', href: '/universities/georgia' },
  ],
  support: [
    { name: 'Admission Process', href: '/services#admission-process' },
    { name: 'Visa Assistance', href: '/services#visa-assistance' },
    { name: 'Accommodation', href: '/services#accommodation' },
    { name: 'Travel Guidance', href: '/services#travel-guidance' },
    { name: 'Post-Arrival Support', href: '/services#post-arrival' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Success Stories', href: '/testimonials' },
    { name: 'Career', href: '/career' },
    { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Refund Policy', href: '/refund-policy' },
  ],
  social: [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ],
}

export default function Footer() {
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
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
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
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
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
                      <Link href="tel:+911234567890" className="text-sm leading-6 text-gray-300 hover:text-white">
                        +91 9250800725
                      </Link>
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
          <div className="lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Get the latest updates on MBBS admissions, scholarships, and more.
              </p>
            </div>
            <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:w-64 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <Button type="submit">Subscribe</Button>
              </div>
            </form>
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} Med Pathway. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}