/**
 * WhatsApp Helper Utilities for CNJ Safaris
 */

export function getWhatsAppInquiryLink(message: string): string {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254721246414';
  // Remove any non-numeric characters from the phone number
  const cleanedNumber = whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(message)}`;
}