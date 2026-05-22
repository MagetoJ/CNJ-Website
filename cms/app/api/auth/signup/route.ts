import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const supabase = await createClient()

  try {
    const { email, password, full_name, role } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Sign up user with Supabase Auth
    const { data: authData, error: signupError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`,
        data: {
          full_name: full_name || email,
          role: role || 'editor',
        },
      },
    })

    if (signupError) throw signupError

    if (!authData.user) {
      return NextResponse.json(
        { error: 'Failed to create user' },
        { status: 500 }
      )
    }

    // Create user profile
    const { error: profileError } = await supabase.from('users_profile').insert({
      id: authData.user.id,
      email,
      full_name: full_name || email,
      role: role || 'editor',
    })

    if (profileError) throw profileError

    return NextResponse.json(
      {
        user: {
          id: authData.user.id,
          email: authData.user.email,
          user_metadata: authData.user.user_metadata,
        },
        message: 'Signup successful. Please confirm your email.',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ error: 'Signup failed' }, { status: 500 })
  }
}
