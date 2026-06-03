'use client'

import HeroSection from '@/components/HeroSection'
import QuickLinks from '@/components/QuickLinks'
import TestimonialSection from '@/components/TestimonialSection'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useQuiz } from '@/context/QuizContext'
import { FAQSchema, OrganizationSchema } from '@/components/seo/JsonLdSchemas'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ShieldCheck, Map, Users, Clock, Leaf, CreditCard } from 'lucide-react'

export default function HomePage() {
  const { openQuiz } = useQuiz()

  const faqData = [
    { question: "What destinations do you offer?", answer: "CNJ Safaris offers unforgettable safari experiences across East Africa, including Kenya and Tanzania. Popular destinations include Masai Mara National Reserve, Amboseli National Park, Lake Nakuru National Park, Serengeti National Park, and Ngorongoro Conservation Area." },
    { question: "Why choose CNJ Safaris?", answer: "We provide personalized safari experiences, expert local guides, carefully selected accommodations, luxury transportation, and exceptional customer service from arrival to departure." },
    { question: "Are your safaris private or shared?", answer: "We offer both private safaris and group safaris. Private safaris provide a more personalized experience, while group safaris are ideal for travelers looking for a more affordable option." },
    { question: "Can solo travelers book a safari?", answer: "Yes. Solo travelers are welcome and can choose from private or group safari packages." },
    { question: "How do I book a safari?", answer: "You can submit an inquiry through our website, contact us via WhatsApp, email us, or request a customized itinerary." },
    { question: "How much deposit is required?", answer: "A deposit of 30%–50% is typically required to confirm your booking. The remaining balance is due before arrival or according to your booking agreement." },
    { question: "What payment methods do you accept?", answer: "We accept bank transfers, credit/debit cards, and selected international payment options." },
    { question: "Can I customize my itinerary?", answer: "Absolutely. We specialize in tailor-made safari experiences based on your budget, interests, and travel dates." },
    { question: "How far in advance should I book?", answer: "We recommend booking 3–6 months in advance, especially during peak safari seasons." },
    { question: "What is the best time to visit Kenya and Tanzania?", answer: "The best safari months are generally June to October and January to March, when wildlife viewing is excellent." },
    { question: "When does the Great Migration take place?", answer: "The famous migration between Serengeti National Park and Masai Mara National Reserve typically occurs between July and October." },
    { question: "Will I see the Big Five?", answer: "While wildlife sightings can never be guaranteed, our experienced guides maximize your chances of spotting lions, elephants, leopards, rhinos, and buffalo." },
    { question: "Are your guides experienced?", answer: "Yes. Our guides are professional, knowledgeable, and experienced in wildlife tracking and guest safety." },
    { question: "How many people are in a safari vehicle?", answer: "Group sizes vary depending on the package, but we prioritize comfort and excellent wildlife viewing opportunities." },
    { question: "What types of accommodation do you offer?", answer: "We offer luxury lodges, tented camps, boutique safari camps, and budget-friendly accommodations." },
    { question: "Are meals included?", answer: "Most safari packages include meals as specified in your itinerary." },
    { question: "Can dietary requirements be accommodated?", answer: "Yes. Please inform us in advance about any dietary restrictions or preferences." },
    { question: "Do lodges have Wi-Fi?", answer: "Many lodges and camps provide Wi-Fi, though connectivity may vary in remote safari locations." },
    { question: "Do I need a visa?", answer: "Visa requirements depend on your nationality. We recommend checking the latest immigration requirements before travel." },
    { question: "Do I need travel insurance?", answer: "Yes. We strongly recommend comprehensive travel insurance covering medical emergencies, cancellations, and personal belongings." },
    { question: "Do I need a visa to visit Kenya?", answer: "Visa requirements depend on your nationality. Please ensure you secure an eVata or Electronic Travel Authorization (eTA) prior to departure depending on national guidelines." },
    { question: "Is East Africa safe for tourists?", answer: "Yes. Kenya and Tanzania are among Africa's leading tourism destinations. We prioritize guest safety throughout your journey." },
    { question: "What should I pack for an African safari?", answer: "We recommend packing lightweight neutral clothing, comfortable walking shoes, a high-quality camera and binoculars, sunscreen, a wide-brimmed hat, sunglasses, and a warm light jacket or fleece for early morning and evening game drives." },
    { question: "Will someone pick me up at the airport?", answer: "Yes. We offer seamless airport pickup and drop-off services for all our safari guests." },
    { question: "Which airport should I fly into?", answer: "Depending on your itinerary, you may arrive through Jomo Kenyatta International Airport (Nairobi, Kenya), Kilimanjaro International Airport (Tanzania), or other regional hubs." },
    { question: "What vehicles do you use?", answer: "We use well-maintained 4x4 custom safari land cruisers equipped with pop-up roofs for optimal game viewing and photography." },
    { question: "Are safaris suitable for children?", answer: "Yes. We offer family-friendly safari packages thoughtfully curated with specialized lodges and activities suitable for all ages." },
    { question: "Can you arrange honeymoon safaris?", answer: "Absolutely. We specialize in creating highly romantic safari and tropical beach experiences tailored explicitly for honeymooners." },
    { question: "Do you organize birthday or anniversary safaris?", answer: "Yes. We can arrange special celebrations, surprise bush dinners, private sundowners, and customized milestone events." },
    { question: "Do you support local communities?", answer: "Yes. We actively collaborate with local communities and support responsible, ethical tourism initiatives that directly benefit wildlife conservation and indigenous livelihoods." },
    { question: "Are your safaris environmentally responsible?", answer: "We champion sustainable travel practices, minimize carbon footprints, and partner with certified eco-conscious lodges and camps whenever possible." },
    { question: "How much does a safari in Kenya cost?", answer: "Safari costs vary depending on personalization, duration, and accommodation levels. Standard packages generally range from $1,200 to $5,000+ per person covering entries, expert tracking, and full board accommodation." },
    { question: "What is the best safari company in Kenya?", answer: "CNJ Safaris provides some of the highest-rated personalized and private experiences due to our hand-picked native guides, premium 4x4 configurations, and exceptional custom client care." },
    { question: "How many days do I need for a safari?", answer: "We highly suggest at least 4 to 8 days to experience key ecosystems properly without rushing between vast National Parks." },
    { question: "Are safari packages all-inclusive?", answer: "Most packages are fundamentally all-inclusive covering your domestic park transit, professional guide-tracker services, entry permits, and specified full-board accommodation meals." },
    { question: "What animals can I see on safari?", answer: "You stand excellent chances to encounter Africa's legendary Big Five (Lions, Leopards, Elephants, Rhinos, Buffalos), alongside Cheetahs, Giraffes, Zebras, Hippos, and millions of Wildebeest during migration cycles." }
  ]

  return (
    <main className="bg-deep-black text-white min-h-screen">
      <OrganizationSchema />
      <FAQSchema faqs={faqData} />
      <HeroSection onStartQuiz={openQuiz} />
      
      {/* Trust Bar / As Seen In */}
      <section className="bg-zinc-950 py-8 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-zinc-500 text-xs uppercase tracking-widest mb-6 font-semibold">
            Certified Member & Trusted By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            {/* Placeholder for Trust Logos */}
            <span className="text-xl font-bold text-zinc-400">KATO MEMBER</span>
            <span className="text-xl font-bold text-zinc-400">TRA LICENSED</span>
            <span className="text-xl font-bold text-zinc-400">SafariBookings</span>
            <span className="text-xl font-bold text-zinc-400">TripAdvisor</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced Differentiators */}
      <section className="py-24 bg-deep-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-amber-500">Why Choose CNJ Safaris?</h2>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
              Experience the difference of a locally-owned safari operator that combines native wisdom with international luxury standards.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Local Expertise', desc: '100% Kenyan-owned with native guides who know every secret trail.', icon: Map },
              { title: 'Tailor-Made Only', desc: 'No cookie-cutter tours. Every itinerary is crafted for your specific interests.', icon: Users },
              { title: '24/7 Global Support', desc: 'On-call support for our international guests across all time zones.', icon: Clock },
              { title: 'Sustainable Travel', desc: 'We reinvest in local communities and wildlife conservation projects.', icon: Leaf },
              { title: 'Safety First', desc: 'TRA licensed with comprehensive insurance and modern, safe 4x4 vehicles.', icon: ShieldCheck },
              { title: 'Flexible Payments', desc: 'Secure online payments with flexible booking and cancellation plans.', icon: CreditCard },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/50 transition-colors">
                <item.icon className="text-amber-500 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button 
              onClick={openQuiz}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
            >
              Get My Custom Safari Quote
            </button>
          </div>
        </div>
      </section>

      <QuickLinks />
      <TestimonialSection />

      {/* Call to Action Banner */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Plan Your Dream Safari?</h2>
          <p className="text-amber-100 mb-8 text-lg">Our experts are ready to design an itinerary that matches your budget and style.</p>
          <button onClick={openQuiz} className="bg-white text-amber-600 px-10 py-4 rounded-full font-black text-lg hover:bg-zinc-100 transition-colors">
            Speak With A Safari Expert
          </button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-amber-500 sm:text-4xl mb-4">
            Frequently Asked Safari Questions
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Planning your dream African getaway? Find quick answers here regarding bookings, local climates, gear packing, and safety to prepare for your journey with CNJ Safaris.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              value={`faq-${index}`} 
              key={index} 
              className="border border-zinc-800 bg-zinc-900/50 rounded-lg px-4 transition-all hover:border-zinc-700"
            >
              <AccordionTrigger className="text-zinc-200 hover:text-amber-500 hover:no-underline font-semibold py-4 text-base text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-4 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <Footer />
    </main>
  )
}