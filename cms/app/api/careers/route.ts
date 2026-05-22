import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createClient()

  try {
    const { data: careers, error } = await supabase
      .from('careers')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json(careers)
  } catch (error) {
    console.error('Error fetching careers:', error)
    return NextResponse.json({ error: 'Failed to fetch careers' }, { status: 500 })
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
    const { title, description, location, job_type, salary_range, requirements, application_url } =
      body

    const { data: career, error } = await supabase
      .from('careers')
      .insert({
        title,
        description,
        location,
        job_type,
        salary_range,
        requirements,
        application_url,
        created_by: user.id,
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(career, { status: 201 })
  } catch (error) {
    console.error('Error creating career:', error)
    return NextResponse.json({ error: 'Failed to create career' }, { status: 500 })
  }
}
