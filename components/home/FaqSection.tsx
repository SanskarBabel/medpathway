'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What are the eligibility criteria for MBBS abroad?",
    answer: `To pursue MBBS abroad, Indian students must meet the following eligibility requirements:
    
    • Academic Qualification: Pass 10+2 with Physics, Chemistry, and Biology with minimum 50% aggregate (40% for SC/ST/OBC)
    • NEET Qualification: Qualified NEET exam is mandatory for Indian students to practice in India after MBBS abroad
    • Age Limit: Minimum 17 years and maximum 25 years at the time of admission
    • English Proficiency: Basic English knowledge required; some countries may require IELTS/TOEFL
    • Passport: Valid passport required for visa application and travel
    
    At Med Pathway, we help students understand specific eligibility requirements for each country and university. Our counselors provide personalized guidance based on your academic profile and career goals.`
  },
  {
    question: "Are the medical universities abroad recognized by NMC?",
    answer: `Yes, all universities recommended by Med Pathway are recognized by the National Medical Commission (NMC), formerly Medical Council of India (MCI). This ensures several important benefits:
    
    • Valid Degree: Your MBBS degree will be recognized in India and eligible for FMGE/NEXT exam
    • Practice Rights: After clearing FMGE/NEXT, you can practice medicine in India
    • PG Eligibility: Eligible for postgraduate medical courses in India after qualifying entrance exams
    • Global Recognition: Degrees from NMC-approved universities are also recognized worldwide
    
    We maintain an updated list of NMC-approved medical universities across Russia, Georgia, Kazakhstan, Uzbekistan, and Kyrgyzstan. Our team ensures students only apply to legitimate, recognized institutions with proper accreditation.`
  },
  {
    question: "What is the cost of studying MBBS abroad?",
    answer: `The cost of MBBS abroad varies by country and university. Here's a comprehensive breakdown:
    
    Tuition Fees (Per Year):
    • Russia: ₹2.5 - 6 lakhs per year
    • Georgia: ₹3 - 7 lakhs per year
    • Kazakhstan: ₹2 - 5 lakhs per year
    • Uzbekistan: ₹2.5 - 4.5 lakhs per year
    • Kyrgyzstan: ₹2 - 4 lakhs per year
    
    Living Expenses (Per Year):
    • Accommodation: ₹50,000 - 1.5 lakhs
    • Food: ₹30,000 - 80,000
    • Transportation: ₹10,000 - 30,000
    • Miscellaneous: ₹20,000 - 50,000
    
    Total Cost: Complete MBBS abroad costs between ₹15-35 lakhs for 6 years, which is significantly lower than private medical colleges in India (₹50+ lakhs). We offer flexible payment plans and scholarship guidance to make education more affordable.`
  },
  {
    question: "How long does the visa process take?",
    answer: `The visa processing time varies by country and student's profile:
    
    Standard Processing Time:
    • Russia: 15-30 working days
    • Georgia: 10-20 working days
    • Kazakhstan: 20-35 working days
    • Uzbekistan: 15-25 working days
    • Kyrgyzstan: 10-20 working days
    
    Factors Affecting Processing Time:
    • Complete document submission
    • Embassy workload during peak season
    • Student's previous travel history
    • Medical examination requirements
    
    Our Visa Success Rate: 99.8%
    
    At Med Pathway, we have dedicated visa experts who handle the entire process. We prepare your documents meticulously, provide embassy interview coaching, and track your application status. Our systematic approach ensures minimal delays and maximum success rate.`
  },
  {
    question: "What support do you provide after admission?",
    answer: `Med Pathway provides comprehensive post-admission support to ensure your smooth transition and academic success:
    
    Pre-Departure Support:
    • Detailed pre-departure briefing and orientation
    • Travel arrangements and flight booking assistance
    • Airport pick-up coordination
    • Packing guidelines and essential items checklist
    • Cultural orientation and language basics
    
    Post-Arrival Services:
    • Accommodation: Secure comfortable hostel/apartment near university
    • Local Setup: Help with local SIM card, bank account opening
    • University Registration: Complete admission formalities and document verification
    • Medical Insurance: Arrange health insurance as per country requirements
    • Local Orientation: City tour, essential services location, emergency contacts
    
    Ongoing Support:
    • 24/7 helpline for emergencies
    • Academic performance monitoring
    • Career guidance and FMGE/NEXT preparation
    • Regular parent updates and communication
    • Alumni network connection
    
    Our support doesn't end with admission - we're with you throughout your 6-year MBBS journey and beyond.`
  },
  {
    question: "Can I practice in India after completing MBBS abroad?",
    answer: `Yes, you can definitely practice in India after completing MBBS from abroad, provided you follow the proper procedure:
    
    Steps to Practice in India:
    1. Complete MBBS: Graduate from NMC-approved medical university abroad
    2. Qualify FMGE/NEXT: Pass Foreign Medical Graduate Examination (now NEXT exam)
    3. Complete Internship: 1-year compulsory rotating internship in India
    4. Register with State Medical Council: Get permanent registration to practice
    
    FMGE/NEXT Exam Details:
    • Exam Pattern: Computer-based test with 300 MCQs
    • Syllabus: Based on Indian medical curriculum
    • Passing Marks: 50% for general category, 40% for reserved categories
    • Frequency: Conducted twice a year
    
    Career Opportunities After FMGE:
    • Private practice as independent doctor
    • Employment in hospitals and clinics
    • Government job opportunities (after clearing respective exams)
    • Postgraduate medical courses eligibility
    • Teaching positions in medical colleges
    
    Med Pathway Advantage: We provide FMGE preparation guidance, study materials, and coaching support to help our students clear the exam successfully. Our alumni network includes hundreds of doctors now practicing in India.`
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to commonly asked questions about studying MBBS abroad
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="mb-4 bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left bg-blue-600 hover:bg-blue-700 text-white font-semibold flex justify-between items-center transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg">{faq.question}</span>
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="px-6 py-4 bg-white">
                    <div className="prose prose-lg max-w-none">
                      {faq.answer.split('\n').map((paragraph, pIndex) => {
                        if (paragraph.trim() === '') return null;
                        if (paragraph.includes('•')) {
                          return (
                            <ul key={pIndex} className="ml-4 mb-4">
                              <li className="mb-2">{paragraph.replace('•', '').trim()}</li>
                            </ul>
                          );
                        }
                        if (paragraph.includes(':') && paragraph.length < 50) {
                          return (
                            <h4 key={pIndex} className="font-semibold text-blue-600 mt-4 mb-2">
                              {paragraph}
                            </h4>
                          );
                        }
                        return (
                          <p key={pIndex} className="mb-3 text-gray-700 leading-relaxed">
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}