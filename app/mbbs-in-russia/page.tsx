import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, GraduationCap, Globe, Award } from 'lucide-react';

export const metadata: Metadata = {
    title: 'MBBS in Russia for Indian Students 2025 | Top Medical Universities',
    description: 'Study MBBS in Russia at top medical universities. Low fees ₹2.5-6L/year, NMC approved, no donation. Get admission in Moscow, Saint Petersburg with Med Pathway.',
    keywords: [
        'MBBS in Russia',
        'medical universities in Russia',
        'MBBS Russia fees',
        'study medicine in Russia',
        'Russian medical colleges',
        'Moscow medical university',
        'Saint Petersburg medical university'
    ],
    openGraph: {
        title: 'MBBS in Russia for Indian Students 2025 | Med Pathway',
        description: 'Study MBBS in Russia at world-class medical universities. Affordable fees, NMC approved degrees, and 100% visa success rate.',
        images: ['/medpathway/images/russia-mbbs-og.jpg']
    }
};

const universities = [
    {
        name: 'First Moscow State Medical University',
        location: 'Moscow',
        fees: '₹5.5 - 6 Lakhs',
        ranking: '301-400'
    },
    {
        name: 'Saint Petersburg State Medical University',
        location: 'Saint Petersburg',
        fees: '₹4.5 - 5.5 Lakhs',
        ranking: '401-500'
    },
    {
        name: 'Kazan Federal University',
        location: 'Kazan',
        fees: '₹4 - 5 Lakhs',
        ranking: '351-400'
    },
    {
        name: 'Bashkir State Medical University',
        location: 'Ufa',
        fees: '₹3.5 - 4.5 Lakhs',
        ranking: '501-600'
    }
];

const benefits = [
    {
        title: 'World-Renowned Education',
        description: 'Russian medical universities are globally recognized with over 240 years of medical education excellence. Degrees are accepted worldwide.',
        icon: GraduationCap
    },
    {
        title: 'Affordable Fee Structure',
        description: 'Complete MBBS costs only ₹15-25 lakhs for 6 years, much lower than private medical colleges in India.',
        icon: Award
    },
    {
        title: 'No Entrance Exam',
        description: 'Direct admission based on NEET qualification and 12th grade marks. No additional entrance tests required.',
        icon: CheckCircle
    },
    {
        title: 'English Medium',
        description: 'Complete MBBS program taught in English medium with experienced international faculty.',
        icon: Globe
    }
];

export default function MBBSRussiaPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'EducationalOccupationalProgram',
        name: 'MBBS in Russia',
        description: 'Study MBBS in Russia at NMC approved medical universities with affordable fees',
        provider: {
            '@type': 'EducationalOrganization',
            name: 'Med Pathway'
        },
        educationalCredentialAwarded: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)',
        timeToComplete: 'P6Y',
        occupationalCategory: 'Doctor',
        applicationDeadline: '2025-08-30',
        programPrerequisites: '10+2 with PCB, NEET qualification',
        educationalProgramMode: 'Full-time',
        offers: {
            '@type': 'Offer',
            price: '250000-600000',
            priceCurrency: 'INR',
            description: 'Annual tuition fees for MBBS in Russia'
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6">
                            MBBS in Russia for Indian Students 2025
                        </h1>
                        <p className="text-xl mb-8 opacity-90">
                            Study at World-Class Medical Universities | NMC Approved | Affordable Fees
                        </p>

                        <div className="flex flex-wrap justify-center gap-8 mb-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold">15+</div>
                                <div className="opacity-90">Medical Universities</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">₹2.5-6L</div>
                                <div className="opacity-90">Annual Fees</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">100%</div>
                                <div className="opacity-90">Visa Success</div>
                            </div>
                        </div>

                        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                            Get Free Counseling
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Choose Russia */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Choose MBBS in Russia?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover the advantages of studying medicine in Russia
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="text-center p-6">
                                <CardContent className="p-0">
                                    <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Universities Table */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Top Medical Universities in Russia
                        </h2>
                    </div>

                    <div className="max-w-6xl mx-auto overflow-x-auto">
                        <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                            <thead className="bg-blue-600 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left">University Name</th>
                                    <th className="px-6 py-4 text-left">Location</th>
                                    <th className="px-6 py-4 text-left">Annual Fees</th>
                                    <th className="px-6 py-4 text-left">World Ranking</th>
                                </tr>
                            </thead>
                            <tbody>
                                {universities.map((university, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                        <td className="px-6 py-4 font-medium">{university.name}</td>
                                        <td className="px-6 py-4">{university.location}</td>
                                        <td className="px-6 py-4 text-green-600 font-semibold">{university.fees}</td>
                                        <td className="px-6 py-4">{university.ranking}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Eligibility Criteria */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                            Eligibility Criteria for MBBS in Russia
                        </h2>

                        <Card className="p-8">
                            <CardContent className="p-0">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                                        <span>Completed 10+2 with Physics, Chemistry, Biology (PCB)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                                        <span>Minimum 50% aggregate in PCB (40% for SC/ST/OBC)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                                        <span>NEET qualification mandatory</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                                        <span>Age between 17-25 years</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                                        <span>Valid passport</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Ready to Start Your MBBS Journey in Russia?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Get personalized counseling from our MBBS Russia experts today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-green-600 hover:bg-green-700">
                            Schedule Free Consultation
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                            Download Russia MBBS Guide
                        </Button>
                    </div>
                    <div className="mt-8">
                        <p>Call: +91-XXXXXXXXXX | Email: russia@medpathway.in</p>
                    </div>
                </div>
            </section>
        </>
    );
}