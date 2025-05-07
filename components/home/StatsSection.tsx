import { Card, CardContent } from '@/components/ui/card'
import { CalendarDays, Users, GraduationCap, Briefcase } from 'lucide-react'

const stats = [
  { 
    name: 'Years of Experience', 
    value: '10+',
    icon: CalendarDays,
    description: 'Helping students achieve their dreams'
  },
  { 
    name: 'Students Placed', 
    value: '500+',
    icon: Users,
    description: 'Successfully studying in top universities'
  },
  { 
    name: 'Partner Universities', 
    value: '50+',
    icon: GraduationCap,
    description: 'Across multiple countries'
  },
  { 
    name: 'Expert Counselors', 
    value: '15+',
    icon: Briefcase,
    description: 'Providing personalized guidance'
  },
]

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Track Record
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Med Pathway's success by the numbers
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Card key={stat.name} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{stat.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}