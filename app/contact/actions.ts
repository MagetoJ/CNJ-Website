'use server'

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Server Action: sendContactEmail
 * Handles contact form submissions on the server.
 */
export async function sendContactEmail(data: ContactFormData) {
  try {
    // Basic server-side validation
    if (!data.name || !data.email || !data.message) {
      return { success: false, error: 'All fields are required.' };
    }

    // Logic for sending email (e.g., using Resend, Nodemailer, or AWS SES) would go here.
    console.log('Received contact form submission:', data);

    // Simulate a brief delay for the network request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error('Failed to process contact submission:', error);
    return { success: false, error: 'Internal server error. Please try again later.' };
  }
}