import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Send email via Resend
   await resend.emails.send({
  from: 'info@cnjsafaris.com', // Keep this exactly as is for testing
  to: 'cnjsafaris@gmail.com', // Must be your Resend login email
  subject: `New Message from ${name}`,
  text: `Email: ${email}\n\nMessage:\n${message}`,
});

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}