"use client"

import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What are the eligibility requirements for MBBS abroad?",
    answer: "Generally, you need to have passed 10+2 with Physics, Chemistry, and Biology, achieve a minimum percentage (usually 50% for general category and 40% for SC/ST/OBC), and clear the NEET exam. Specific requirements may vary by country and university."
  },
  {
    question: "Are the medical universities recognized by NMC/MCI?",
    answer: "Yes, all universities we recommend are recognized by the National Medical Commission (NMC), formerly Medical Council of India (MCI), ensuring that your degree will be valid in India after completion."
  },
  {
    question: "What is the fee structure for MBBS abroad?",
    answer: "The fee varies by country and university, ranging from $3,500 to $8,500 per year. We offer options to suit different budgets with transparent fee structures and no hidden costs."
  },
  {
    question: "Do I need to learn the local language of the country?",
    answer: "While the medium of instruction is English in all our partner universities, learning the local language basics helps with patient communication during clinical years. Most universities offer language courses as part of the curriculum."
  },
  {
    question: "What support services do you provide after admission?",
    answer: "We provide comprehensive support including visa guidance, pre-departure orientation, airport pickup, accommodation arrangement, local SIM cards, bank account setup, and continuous assistance throughout your education."
  },
  {
    question: "What is the process to return to India and practice medicine after MBBS abroad?",
    answer: "After completing MBBS abroad, you need to clear the Foreign Medical Graduate Examination (FMGE/NEXT) conducted by the National Board of Examinations (NBE) to practice medicine in India. We provide guidance for this examination as well."
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Get answers to commonly asked questions about studying MBBS abroad
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}