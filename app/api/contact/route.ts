import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, interestType } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    // 1. Send Email via Resend
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Contact Form <website@cnjsafaris.com>',
        to: 'info@cnjsafaris.com',
        subject: `New Inquiry: ${interestType || 'General'} from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message || 'No message provided.'}`,
      });
    }

    // 2. Note: You should also add your Sanity mutation logic here 
    // to keep the client-side clean and the Write Token hidden.

    return NextResponse.json({ 
      success: true, 
      message: 'Inquiry processed successfully' 
    });
  } catch (error) {
    console.error('API Contact Error:', error);
    return NextResponse.json({ error: 'Failed to process inquiry.' }, { status: 500 });
  }
}