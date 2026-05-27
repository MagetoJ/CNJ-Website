import Link from 'next/link'
import seoData from '@/seo-content.json'

export default function BlogListingPage() {
  // Safe array conversion if structure is nested
  const articles = Array.isArray(seoData) ? seoData : []

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="border-b border-white/10 pb-12 mb-12 space-y-4">
          <span className="text-xs uppercase font-bold tracking-[0.3em] text-leaf-green">SEO Content Engine</span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold uppercase">Field Journals & Guides</h1>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10">
            <p className="text-gray-400 font-light">Articles are currently being prepared by the field desk. Check back shortly.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((post: any, index: number) => (
              <article key={index} className="bg-neutral-950 border border-white/10 p-8 flex flex-col justify-between group hover:bg-neutral-900 transition-all">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-leaf-green bg-leaf-green/10 px-3 py-1 rounded-none">
                    {post.category || 'Expert Advice'}
                  </span>
                  <h3 className="font-serif text-2xl font-bold leading-snug group-hover:text-green-400 transition-colors">
                    {post.title || post.heading}
                  </h3>
                  <p className="text-gray-400 text-sm font-light line-clamp-3 leading-relaxed">
                    {post.metaDescription || post.excerpt || 'Read our deep dive analysis map directly from our expert guides operating on the ground.'}
                  </p>
                </div>
                <Link href={`/blog/${post.slug || index}`} className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-white pt-6 group-hover:text-leaf-green transition-colors">
                  Read Article Details →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}