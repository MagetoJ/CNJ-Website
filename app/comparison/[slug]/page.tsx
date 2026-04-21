import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import seoData from '@/seo-content.json'
import ComparisonPage from '@/components/ComparisonPage'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = seoData.comparisons.find(c => c.slug === params.slug)
  if (!data) return {}

  return {
    title: data.metadata.title,
    description: data.metadata.description,
    keywords: data.metadata.keywords,
  }
}

export default function Page({ params }: Props) {
  const data = seoData.comparisons.find(c => c.slug === params.slug)
  if (!data) notFound()

  return <ComparisonPage {...data} />
}

export async function generateStaticParams() {
  return seoData.comparisons.map((c) => ({
    slug: c.slug,
  }))
}
