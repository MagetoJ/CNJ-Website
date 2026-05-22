import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const supabase = await createClient()
  const searchParams = request.nextUrl.searchParams
  const status = searchParams.get('status') || 'published'
  const categoryId = searchParams.get('category')

  try {
    let query = supabase
      .from('blog_posts')
      .select('*, blog_posts_categories(blog_categories(id, name, slug))')
      .order('published_at', { ascending: false })

    if (status === 'published') {
      query = query.eq('status', 'published')
    }

    const { data: posts, error } = await query

    if (error) throw error

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const supabase = await createClient()

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { title, slug, content, excerpt, featured_image_url, categories, status } = body

    const { data: post, error } = await supabase
      .from('blog_posts')
      .insert({
        title,
        slug,
        content,
        excerpt,
        featured_image_url,
        author_id: user.id,
        status: status || 'draft',
        published_at: status === 'published' ? new Date().toISOString() : null,
      })
      .select()
      .single()

    if (error) throw error

    // Add categories if provided
    if (categories && categories.length > 0) {
      await supabase.from('blog_posts_categories').insert(
        categories.map((categoryId: string) => ({
          post_id: post.id,
          category_id: categoryId,
        }))
      )
    }

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 })
  }
}
