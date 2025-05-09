import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, GraduationCap, Globe, Ticket, MapPin, Clock, CreditCard, Award } from 'lucide-react'
import CountrySection from '@/components/home/CountrySection'
import TestimonialSection from '@/components/home/TestimonialSection'
import StatsSection from '@/components/home/StatsSection'
import FaqSection from '@/components/home/FaqSection'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="md:max-w-2xl lg:max-w-none lg:col-span-6 animate-slideUp">
              <div className="py-6">
                <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-600/30 mb-4">
                  #1 MBBS Abroad Consultancy
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                  Your Gateway to <span className="text-primary">Medical Education</span> Abroad
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  At Med Pathway, we specialize in helping aspiring doctors secure hassle-free admissions in top medical universities across Uzbekistan, Russia, Kyrgyzstan, Kazakhstan, Georgia, and beyond.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="https://wa.me/9250800725?text=Hi%20Med%20Pathway,%20I%27m%20interested%20in%20MBBS%20abroad." target="_blank" rel="noopener noreferrer">
                      Get Free Counseling
                    </a>
                  </Button>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-4 md:gap-8">
                  <div className="flex flex-col items-center text-center">
                    <span className="text-3xl md:text-4xl font-bold text-primary">500+</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Students Placed</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className="text-3xl md:text-4xl font-bold text-primary">50+</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Universities</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className="text-3xl md:text-4xl font-bold text-primary">10+</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Countries</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 flex justify-center animate-fadeIn">
              <Image 
                src="/hero-image.png"
                alt="Med Pathway - MBBS Abroad Consultancy"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Comprehensive MBBS Abroad Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              From university selection to post-arrival support, we handle everything for your medical education journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {services.map((service) => (
              <Card key={service.name} className="border-0 shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-primary mb-4">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{service.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 mb-10 lg:mb-0">
              <Image 
                src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg"
                alt="University campus"
                width={600}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:col-span-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
                Why Choose Med Pathway?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
                With years of experience in the field, we offer end-to-end support – from university selection and admission processing to visa assistance and post-arrival services.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.name} className="flex">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {benefit.name}
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <CountrySection />

      {/* Testimonials */}
      <TestimonialSection />

      {/* Stats Section */}
      <StatsSection />

      {/* FAQ Section */}
      <FaqSection />
    </>
  )
}

const services = [
  {
    name: 'University Selection',
    description: 'We help you choose the best medical universities based on your budget, preferences, and academic profile.',
    icon: GraduationCap,
  },
  {
    name: 'Complete Documentation',
    description: 'Our team assists with preparation of all necessary documents required for admission and visa application.',
    icon: Ticket,
  },
  {
    name: 'Visa Assistance',
    description: 'Expert guidance throughout the visa application process to ensure a hassle-free experience.',
    icon: Globe,
  },
  {
    name: 'Travel Arrangements',
    description: 'Pre-departure briefing and complete assistance with travel arrangements and airport pick-up.',
    icon: MapPin,
  },
  {
    name: 'Accommodation Support',
    description: 'We help secure comfortable and affordable accommodation options near your university.',
    icon: Award,
  },
  {
    name: 'Post-Arrival Services',
    description: 'Continuous support even after you arrive, including local SIM, bank account opening, and orientation.',
    icon: Clock,
  },
]

const benefits = [
  {
    name: 'Affordable Education Options',
    description: 'We partner with universities that offer quality medical education at a fraction of the cost compared to private medical colleges in India.',
  },
  {
    name: 'Transparent Admission Process',
    description: 'No hidden fees or charges. We ensure complete transparency throughout the admission process.',
  },
  {
    name: 'MCI/NMC Recognized Universities',
    description: 'All universities we recommend are recognized by the Medical Council of India (MCI) or National Medical Commission (NMC).',
  },
  {
    name: 'Personalized Counseling',
    description: 'Our counselors provide personalized guidance based on your academic profile, budget, and career goals.',
  },
  {
    name: 'Flexible Payment Options',
    description: 'We offer flexible payment plans to make your education abroad more affordable and accessible.',
  },
]