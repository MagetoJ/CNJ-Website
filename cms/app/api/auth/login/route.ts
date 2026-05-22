import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const supabase = await createClient()

  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    if (!data.user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Get user profile with role
    const { data: profile, error: profileError } = await supabase
      .from('users_profile')
      .select('role')
      .eq('id', data.user.id)
      .single()

    if (profileError) throw profileError

    return NextResponse.json({
      user: {
        id: data.user.id,
        email: data.user.email,
        role: profile?.role || 'editor',
      },
      session: data.session,
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Login failed' }, { status: 401 })
  }
}
