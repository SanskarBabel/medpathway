import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const countries = [
  {
    name: 'Uzbekistan',
    image: '/images/tashkent-uzbekistan.jpg',
    description: 'Quality medical education with modern facilities and experienced faculty.',
    universities: 8,
  },
  {
    name: 'Russia',
    image: 'https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg',
    description: 'World-renowned medical institutions with prestigious degrees and excellent clinical exposure.',
    universities: 15,
  },
  {
    name: 'Kyrgyzstan',
    image: '/images/kyrgyzstan-valley.jpg',
    description: 'Affordable medical education with English medium instruction and practical approach.',
    universities: 10,
  },
  {
    name: 'Kazakhstan',
    image: '/images/kazakhstan.webp',
    description: 'Modern medical universities with advanced infrastructure and research opportunities.',
    universities: 7,
  },
  {
    name: 'Georgia',
    image: 'https://images.pexels.com/photos/11943118/pexels-photo-11943118.jpeg',
    description: 'European standard education with globally recognized medical degrees.',
    universities: 6,
  }
]

export default function CountrySection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Top Countries for MBBS Abroad
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Explore top destinations for your medical education with world-class facilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country) => (
            <Card key={country.name} className="overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={country.image}
                  alt={`MBBS in ${country.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {country.name}
                </h3>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {country.description}
                </p>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Universities</p>
                  <p className="font-medium text-gray-900 dark:text-white">{country.universities}+</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}