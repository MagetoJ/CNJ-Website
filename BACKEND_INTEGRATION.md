# CNJ Safaris Backend Integration Guide

This document outlines the API endpoints you need to implement in your backend to fully power the CNJ Safaris frontend application.

## Overview

The frontend is completely self-contained and ready to display. It communicates with your backend through specific API endpoints for:

1. **Itinerary Generation** - AI-powered custom safari itineraries
2. **PDF Generation** - Create branded PDF downloads
3. **Pricing Calculation** - Dynamic pricing based on season and preferences

## API Endpoints to Implement

### 1. Generate Itinerary

**Endpoint:** `POST /api/itinerary/generate`

**Purpose:** Generate a custom safari itinerary based on user quiz responses

**Request Body:**
```json
{
  "destination": "kenya|tanzania|uganda|rwanda",
  "experience": "big-five|gorilla-trekking|beach-escape|mountain-climb",
  "budget": "budget|mid-range|luxury",
  "startDate": "2024-06-15",
  "endDate": "2024-06-20"
}
```

**Expected Response:**
```json
{
  "title": "5-Day Maasai Mara Adventure",
  "days": [
    {
      "day": 1,
      "title": "Arrival & Mara Exploration",
      "description": "Arrive in Kenya, transfer to lodge, afternoon game drive",
      "activities": [
        "Airport pickup",
        "Check-in to 4-star lodge",
        "Welcome briefing",
        "Sunset game drive"
      ]
    },
    {
      "day": 2,
      "title": "Big Five Safari",
      "description": "Full day exploring Maasai Mara",
      "activities": [
        "Early morning game drive",
        "Breakfast at lodge",
        "Mid-day rest",
        "Afternoon game drive",
        "Sunset viewpoint"
      ]
    }
    // ... more days
  ],
  "estimatedPrice": 1500,
  "priceBreakdown": {
    "accommodation": 650,
    "activities": 450,
    "transport": 250,
    "parkFees": 150
  }
}
```

**Implementation Tips:**
- Use an LLM API (Claude, GPT, etc.) to generate contextual itineraries
- Apply seasonal pricing multipliers (Peak: 1.3x, Off-season: 0.7x)
- Calculate duration from startDate and endDate
- Ensure day descriptions match the selected experience type
- Include realistic activity suggestions for each destination

---

### 2. Generate PDF Itinerary

**Endpoint:** `POST /api/itinerary/pdf`

**Purpose:** Generate a branded PDF of the itinerary for download

**Request Body:**
```json
{
  "quizData": {
    "destination": "kenya",
    "experience": "big-five",
    "budget": "mid-range",
    "startDate": "2024-06-15",
    "endDate": "2024-06-20"
  },
  "itinerary": {
    "title": "5-Day Maasai Mara Adventure",
    "days": [...],
    "estimatedPrice": 1500,
    "priceBreakdown": {...}
  }
}
```

**Expected Response:**
- Binary PDF file with Content-Type: `application/pdf`

**Implementation Tips:**
- Use Puppeteer, WeasyPrint, or similar for PDF generation
- Include CNJ Safaris branding (logo, colors: #064E3B, #22C55E)
- Create a professional layout with:
  - Header with company info
  - Trip summary
  - Day-by-day itinerary
  - Price breakdown
  - Booking instructions footer
- Ensure responsive formatting for printing

---

### 3. Calculate Pricing (Optional)

**Endpoint:** `POST /api/pricing/calculate`

**Purpose:** Get detailed pricing with optional group discounts

**Request Body:**
```json
{
  "destination": "tanzania",
  "experience": "gorilla-trekking",
  "budget": "luxury",
  "startDate": "2024-07-01",
  "endDate": "2024-07-10",
  "numberOfPeople": 2
}
```

**Expected Response:**
```json
{
  "perPersonPrice": 3500,
  "groupPrice": 7000,
  "currency": "USD",
  "breakdown": {
    "accommodation": 1400,
    "activities": 1050,
    "transport": 700,
    "parkFees": 350
  },
  "seasonalAdjustment": 1.2,
  "groupDiscount": 0.05,
  "taxes": 350,
  "total": 7350
}
```

---

## Pricing Algorithm Reference

The frontend expects pricing to follow these base rates:

### Budget Tier
- **Accommodation:** $130-180/night
- **Activities:** $90-130/day
- **Transport:** $50-80/day
- **Park Fees:** $100-200/trip

### Mid-Range Tier
- **Accommodation:** $250-350/night
- **Activities:** $200-300/day
- **Transport:** $100-150/day
- **Park Fees:** $120-250/trip

### Luxury Tier
- **Accommodation:** $500+/night
- **Activities:** $400+/day
- **Transport:** $200+/day
- **Park Fees:** $150-300/trip

### Seasonal Adjustments
- **Peak Season (Jul-Oct):** +30% multiplier
- **Green Season (Nov-Jun):** -30% multiplier

---

## Environment Variables

Set these in your `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:3001  # Your backend URL
NEXT_PUBLIC_WHATSAPP_NUMBER=+254712345678  # WhatsApp contact
```

---

## Testing the Integration

Once you've implemented the endpoints, test with:

```bash
# Test itinerary generation
curl -X POST http://localhost:3001/api/itinerary/generate \
  -H "Content-Type: application/json" \
  -d '{
    "destination": "kenya",
    "experience": "big-five",
    "budget": "mid-range",
    "startDate": "2024-06-15",
    "endDate": "2024-06-20"
  }'

# Test PDF generation
curl -X POST http://localhost:3001/api/itinerary/pdf \
  -H "Content-Type: application/json" \
  -d '{...}' \
  --output itinerary.pdf
```

---

## Frontend Integration Points

All API calls are made through `/lib/api-client.ts`. This file contains:

- `generateItinerary()` - Calls `/api/itinerary/generate`
- `generatePDF()` - Calls `/api/itinerary/pdf`
- `calculatePricing()` - Calls `/api/pricing/calculate` (optional)

Update the `API_BASE_URL` in `api-client.ts` to point to your backend.

---

## Placeholder Text

The frontend includes many placeholder values that should be customized:

- Company contact info (in `WhatsAppFooter.tsx`)
- WhatsApp number (line 8)
- Email addresses
- Physical address
- Social media links
- Testimonials (in `TestimonialSection.tsx`)
- Quick link destinations
- Package details and pricing
- Images and hero graphics

---

## Future Enhancements

These features are placeholders ready for Phase 2:

1. **Payment Integration** - Stripe/DPO Pay checkout
2. **Client Portal** - User accounts, booking history, passport uploads
3. **Chat Integration** - AI-powered travel advisor chatbot
4. **Booking System** - Real-time availability calendar
5. **Admin Dashboard** - Manage packages, pricing, and bookings

---

## Support

For implementation questions, refer to the component documentation in individual files or check the API client specifications in `/lib/api-client.ts`.
