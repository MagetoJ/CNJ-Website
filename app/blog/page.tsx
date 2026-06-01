import { sanityFetch } from '@/lib/sanity';
import BlogClientLayout from '@/components/BlogClientLayout';

// Define the type matching your Sanity Schema structure
interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  mainImage: any;
  slug: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    mainImage,
    "slug": slug.current
  }`;
  return await sanityFetch<BlogPost[]>({ query, tags: ['post'] });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return <BlogClientLayout posts={posts} />;
}