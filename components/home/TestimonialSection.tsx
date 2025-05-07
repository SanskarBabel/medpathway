import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Amit Sharma',
    role: 'MBBS Student',
    university: 'Samarkand State Medical University',
    country: 'Uzbekistan',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    quote: 'Med Pathway made my dream of studying medicine abroad a reality. Their counseling was personalized and honest, guiding me through each step of the process.',
  },
  {
    name: 'Priya Patel',
    role: 'MBBS Student',
    university: 'Kyrgyz-Russian Slavic University',
    country: 'Kyrgyzstan',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    quote: 'I was confused about which country to choose for my MBBS. The team at Med Pathway provided detailed comparisons and helped me make the right decision for my future.',
  },
  {
    name: 'Mohammed Khan',
    role: 'MBBS Student',
    university: 'Tbilisi State Medical University',
    country: 'Georgia',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    quote: 'From admission to visa processing and travel arrangements, everything was handled professionally. Even after arriving in Georgia, their support continued.',
  },
  {
    name: 'Neha Gupta',
    role: 'MBBS Student',
    university: 'Kazakh National Medical University',
    country: 'Kazakhstan',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    quote: 'The transparency in fees and admission process was what impressed me the most. No hidden charges or false promises. Med Pathway delivers what they commit.',
  },
]

export default function TestimonialSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Student Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Hear from our students who are pursuing their dream of becoming doctors at top international universities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  return (
    <Card className={cn(
      "shadow-lg hover:shadow-xl transition-shadow overflow-hidden",
      index % 2 === 0 ? "lg:translate-y-4" : ""
    )}>
      <CardContent className="p-0">
        <div className="grid md:grid-cols-5 h-full">
          <div className="md:col-span-2 relative h-64 md:h-full overflow-hidden">
            <Image 
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 italic mb-6">
                "{testimonial.quote}"
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-900 dark:text-white">{testimonial.name}</h4>
              <p className="text-primary">{testimonial.role}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {testimonial.university}, {testimonial.country}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}