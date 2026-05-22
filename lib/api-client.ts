/**
 * API Client for CNJ Safaris
 * 
 * This file defines all API calls to your backend.
 * Replace the endpoint URLs with your actual backend URLs.
 */

import { QuizData } from '@/components/AdventureQuiz'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export interface ItineraryDay {
  day: number
  title: string
  description: string
  activities: string[]
}

export interface ItineraryResponse {
  title: string
  days: ItineraryDay[]
  estimatedPrice: number
  priceBreakdown: {
    accommodation: number
    activities: number
    transport: number
    parkFees: number
  }
}

export interface Product {
  id: string
  name: string
  description: string
  price: string
  currency: string
  image_url: string
  category: string
  sku?: string
}

export interface BookingData {
  customerName: string
  customerEmail: string
  quizData: QuizData
  itinerary: ItineraryResponse
  [key: string]: unknown
}

export interface PricingResponse {
  perPersonPrice: number
  groupPrice: number
  currency: string
  breakdown: {
    accommodation: number
    activities: number
    transport: number
    parkFees: number
  }
  seasonalAdjustment: number
  groupDiscount: number
  taxes: number
  total: number
}

export interface BookingResponse {
  id: string
  status: 'pending' | 'confirmed' | 'cancelled'
  bookingReference: string
  customerName: string
  customerEmail: string
  totalAmount: number
  currency: string
  createdAt: string
}

/**
 * Generate a custom safari itinerary based on quiz data
 */
export async function generateItinerary(quizData: QuizData): Promise<ItineraryResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/itinerary/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quizData),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error generating itinerary:', error)
    throw error
  }
}

/**
 * Generate PDF itinerary (handled by your backend)
 */
export async function generatePDF(quizData: QuizData, itinerary: ItineraryResponse): Promise<Blob> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/itinerary/pdf`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quizData,
        itinerary,
      }),
    })

    if (!response.ok) {
      throw new Error(`PDF generation error: ${response.statusText}`)
    }

    return response.blob()
  } catch (error) {
    console.error('Error generating PDF:', error)
    throw error
  }
}

/**
 * Optional: Calculate pricing with more detail
 */
export async function calculatePricing(quizData: QuizData, numberOfPeople: number = 1): Promise<PricingResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/pricing/calculate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...quizData,
        numberOfPeople,
      }),
    })

    if (!response.ok) {
      throw new Error(`Pricing calculation error: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error calculating pricing:', error)
    throw error
  }
}

/**
 * Create a booking (placeholder for future payment integration)
 */
export async function createBooking(bookingData: BookingData): Promise<BookingResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/bookings/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })

    if (!response.ok) {
      throw new Error(`Booking error: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error creating booking:', error)
    throw error
  }
}

/**
 * Fetch all products for the marketplace
 */
export async function getProducts(category?: string): Promise<Product[]> {
  try {
    const url = category 
      ? `${API_BASE_URL}/api/shop/products?category=${category}`
      : `${API_BASE_URL}/api/shop/products`
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

/**
 * Save a quiz result as a lead in the CMS
 */
export async function submitQuizLead(data: QuizData & { customerEmail: string, customerName: string }): Promise<any> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/quiz/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        customerEmail: data.customerEmail,
        customerName: data.customerName,
      }),
    })

    if (!response.ok) {
      throw new Error(`Lead submission failed: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error submitting lead:', error)
    throw error
  }
}
