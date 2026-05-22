import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const supabase = await createClient()
  const searchParams = request.nextUrl.searchParams
  const category = searchParams.get('category')

  try {
    let query = supabase
      .from('gallery_images')
      .select('*')
      .order('sort_order', { ascending: true })

    if (category) {
      query = query.eq('gallery_category', category)
    }

    const { data: images, error } = await query

    if (error) throw error

    return NextResponse.json(images)
  } catch (error) {
    console.error('Error fetching gallery images:', error)
    return NextResponse.json({ error: 'Failed to fetch gallery images' }, { status: 500 })
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
    const { title, description, image_url, image_path, gallery_category, sort_order } = body

    const { data: image, error } = await supabase
      .from('gallery_images')
      .insert({
        title,
        description,
        image_url,
        image_path,
        gallery_category,
        sort_order: sort_order || 0,
        created_by: user.id,
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(image, { status: 201 })
  } catch (error) {
    console.error('Error creating gallery image:', error)
    return NextResponse.json({ error: 'Failed to create gallery image' }, { status: 500 })
  }
}
