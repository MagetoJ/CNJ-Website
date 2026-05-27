import Link from 'next/link'
import Image from 'next/image'

const experiences = [
  { slug: 'balloon-safari', title: 'Hot Air Balloon Safari', desc: 'Skim acacia treetops at dawn followed by a premium white-tablecloth champagne feast.' },
  { slug: 'bush-dinner', title: 'Candlelit Bush Dinner', desc: 'Dine under thousands of stars surrounded by rhythmic Maasai choral guards.' },
  { slug: 'cultural-tours', title: 'Indigenous Cultural Immersion', desc: 'Gain deep traditional insights on medicine and livestock tracking loops from village elders.' },
  { slug: 'photography-safaris', title: 'Pro Photography Expeditions', desc: 'Customized layout vehicles with low angle side panel brackets and power banks.' },
]

export default function ExperiencesHub() {
  return (
    <main className="min-h-screen bg-deep-black text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-safari-gold">Tailored Add-ons</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold uppercase">Wilderness Experiences</h1>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <div key={exp.slug} className="bg-neutral-900/40 backdrop-blur-sm border border-white/5 p-8 flex flex-col justify-between hover:border-safari-gold/40 transition-colors">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold uppercase tracking-wide">{exp.title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">{exp.desc}</p>
              </div>
              <Link href={`/experiences/${exp.slug}`} className="mt-8 text-xs font-bold uppercase tracking-widest text-safari-gold hover:underline">
                Explore Event Rules & Rates →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}