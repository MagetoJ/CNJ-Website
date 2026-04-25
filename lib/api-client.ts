/**
 * API Client for CNJ Safaris
 * 
 * This file defines all API calls to your backend.
 * Replace the endpoint URLs with your actual backend URLs.
 */

import { QuizData } from '@/components/AdventureQuiz'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

/**
 * Generate a custom safari itinerary based on quiz data
 * 
 * Expected backend endpoint: POST /api/itinerary/generate
 * 
 * Request body:
 * {
 *   destination: string (kenya, tanzania, uganda, rwanda)
 *   experience: string (big-five, gorilla-trekking, beach-escape, mountain-climb)
 *   budget: string (budget, mid-range, luxury)
 *   startDate: string (YYYY-MM-DD)
 *   endDate: string (YYYY-MM-DD)
 * }
 * 
 * Expected response:
 * {
 *   title: string
 *   days: Array<{
 *     day: number
 *     title: string
 *     description: string
 *     activities: string[]
 *   }>
 *   estimatedPrice: number (per person)
 *   priceBreakdown: {
 *     accommodation: number
 *     activities: number
 *     transport: number
 *     parkFees: number
 *   }
 * }
 */
export async function generateItinerary(quizData: QuizData) {
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

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error generating itinerary:', error)
    throw error
  }
}

/**
 * Generate PDF itinerary (handled by your backend)
 * 
 * Expected backend endpoint: POST /api/itinerary/pdf
 * 
 * Request body:
 * {
 *   quizData: QuizData
 *   itinerary: ItineraryResponse
 * }
 * 
 * Expected response: Binary PDF file
 */
export async function generatePDF(quizData: QuizData, itinerary: any) {
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
 * 
 * Expected backend endpoint: POST /api/pricing/calculate
 * 
 * Request body:
 * {
 *   destination: string
 *   experience: string
 *   budget: string
 *   startDate: string
 *   endDate: string
 *   numberOfPeople?: number
 * }
 */
export async function calculatePricing(quizData: QuizData, numberOfPeople: number = 1) {
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
 * 
 * Expected backend endpoint: POST /api/bookings/create
 */
export async function createBooking(bookingData: any) {
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
export async function getProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/products`);
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}
