import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, subject } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing core contact elements' }, { status: 400 });
    }

    // 1. Send Email via Resend
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Contact Form <website@cnjsafaris.com>',
        to: 'info@cnjsafaris.com',
        subject: subject || `New Safari Route Inquiry from ${name}`,
        text: `Client Details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nCustom Itinerary / Message:\n${message}`,
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Inquiry processed successfully' 
    });
  } catch (error) {
    console.error('API Contact Error:', error);
    return NextResponse.json({ error: 'Failed to process inquiry.' }, { status: 500 });
  }
}