import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Resend API Key is missing.' }, { status: 500 })
    }

    await resend.emails.send({
      from: 'Contact Form <website@cnjsafaris.com>',
      to: 'info@cnjsafaris.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      reply_to: email,
    })

    return NextResponse.json({ success: true, message: "Email sent successfully!" })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 })
  }
}