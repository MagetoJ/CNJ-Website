import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const type = body?._type

    if (!type) {
      return NextResponse.json({ revalidated: false, message: 'Missing _type field in request body' }, { status: 400 })
    }

    // Revalidate cache for the exact content group changed
    revalidateTag(type, {})

    console.log(`Revalidated cache for tag: ${type}`)
    return NextResponse.json({ revalidated: true, now: Date.now(), revalidatedTag: type })
  } catch (err: any) {
    console.error('Error revalidating cache:', err)
    return NextResponse.json({ message: err.message }, { status: 500 })
  }
}