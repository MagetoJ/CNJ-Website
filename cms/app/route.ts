import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

/**
 * POST /api/quiz/submissions
 * Saves a quiz result as a new lead in the CMS.
 */
export async function POST(req: Request) {
  try {
    const supabase = await createClient()
    const body = await req.json()
    
    const { 
      destination, 
      experience, 
      budget, 
      startDate, 
      endDate, 
      customerEmail, 
      customerName 
    } = body

    const { data, error } = await supabase
      .from('quiz_leads')
      .insert([
        { 
          destination, 
          experience, 
          budget, 
          start_date: startDate, 
          end_date: endDate, 
          customer_email: customerEmail,
          customer_name: customerName,
          status: 'new'
        }
      ])
      .select()

    if (error) throw error
    return NextResponse.json(data[0])
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 })
  }
}