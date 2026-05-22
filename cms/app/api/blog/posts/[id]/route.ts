import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const supabase = await createClient()

  try {
    const { data: post, error } = await supabase
      .from('blog_posts')
      .select('*, blog_posts_categories(blog_categories(id, name, slug))')
      .eq('id', params.id)
      .single()

    if (error) throw error

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const supabase = await createClient()

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { categories, ...updateData } = body

    const { data: post, error } = await supabase
      .from('blog_posts')
      .update(updateData)
      .eq('id', params.id)
      .select()
      .single()

    if (error) throw error

    // Update categories if provided
    if (categories) {
      // Delete existing categories
      await supabase.from('blog_posts_categories').delete().eq('post_id', params.id)

      // Add new categories
      if (categories.length > 0) {
        await supabase.from('blog_posts_categories').insert(
          categories.map((categoryId: string) => ({
            post_id: params.id,
            category_id: categoryId,
          }))
        )
      }
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error updating blog post:', error)
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const supabase = await createClient()

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { error } = await supabase.from('blog_posts').delete().eq('id', params.id)

    if (error) throw error

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 })
  }
}
