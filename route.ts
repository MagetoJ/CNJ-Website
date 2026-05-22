import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const supabase = await createClient();
  const { id } = params;

  const { data: image, error } = await supabase
    .from('gallery_images')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching gallery image:', error);
    return NextResponse.json({ error: 'Gallery image not found' }, { status: 404 });
  }
  return NextResponse.json(image);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const supabase = await createClient();
  const { id } = params;
  const body = await request.json();
  const { title, description, image_url, image_path, gallery_category, sort_order } = body;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabase
    .from('gallery_images')
    .update({
      title,
      description,
      image_url,
      image_path,
      gallery_category,
      sort_order,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select();

  if (error) {
    console.error('Error updating gallery image:', error);
    return NextResponse.json({ error: 'Failed to update gallery image' }, { status: 500 });
  }
  return NextResponse.json(data[0]);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const supabase = await createClient();
  const { id } = params;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { error } = await supabase
    .from('gallery_images')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting gallery image:', error);
    return NextResponse.json({ error: 'Failed to delete gallery image' }, { status: 500 });
  }
  return NextResponse.json({ message: 'Gallery image deleted successfully' }, { status: 204 });
}