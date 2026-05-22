import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const supabase = await createClient()

  try {
    const { data: image, error } = await supabase
      .from('gallery_images')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error) throw error

    return NextResponse.json(image)
  } catch (error) {
    console.error('Error fetching gallery image:', error)
    return NextResponse.json({ error: 'Gallery image not found' }, { status: 404 })
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

    const { data: image, error } = await supabase
      .from('gallery_images')
      .update(body)
      .eq('id', params.id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(image)
  } catch (error) {
    console.error('Error updating gallery image:', error)
    return NextResponse.json({ error: 'Failed to update gallery image' }, { status: 500 })
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

    const { error } = await supabase.from('gallery_images').delete().eq('id', params.id)

    if (error) throw error

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error deleting gallery image:', error)
    return NextResponse.json({ error: 'Failed to delete gallery image' }, { status: 500 })
  }
}
