import { sanityClient } from '@/lib/sanity.client';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity.client';

// Define the type matching your Sanity Schema structure
interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  mainImage: any;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    mainImage
  }`;
  return await sanityClient.fetch(query);
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-deep-black text-white pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs text-safari-gold font-bold tracking-widest uppercase">Field Journals</span>
        <h1 className="font-serif text-5xl font-bold uppercase mt-2 mb-6">Our Blog Engine</h1>
        <p className="text-gray-400 max-w-xl mb-12">SEO articles and expert travel guides from the bush desk.</p>

        {/* Dynamic content rendering from Sanity Database */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post._id} className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/50">
              {post.mainImage && (
                <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                  <Image 
                    src={urlFor(post.mainImage).url()} 
                    alt={post.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              )}
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-400 text-sm">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}