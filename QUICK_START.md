# CNJ Safaris Quick Start Guide

## What You've Built

A complete, production-ready frontend for an East African safari booking website with:

✅ **Beautiful UI/UX** - Modern jungle-themed design with premium aesthetic  
✅ **4-Step Quiz Engine** - Interactive form to gather customer preferences  
✅ **Itinerary Display** - Shows custom safaris with pricing breakdown  
✅ **3 Destination Pages** - Maasai Mara, Serengeti, and Gorilla Trekking  
✅ **Mobile-Responsive** - Fully optimized for all devices  
✅ **SEO Ready** - JSON-LD schemas, sitemap, robots.txt  
✅ **Performance Optimized** - Image optimization, lazy loading, fast load times  
✅ **Backend Integration Points** - Clear API contracts ready for your backend  

## Getting Started

### 1. Install & Run Locally

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Open browser to http://localhost:3000
```

### 2. Update Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Update with your actual values:
```
NEXT_PUBLIC_API_URL=http://localhost:3001  # Your backend URL
NEXT_PUBLIC_WHATSAPP_NUMBER=+254712345678
NEXT_PUBLIC_EMAIL=your@email.com
```

### 3. Customize Content

Update these files with your actual information:

**Company Info:**
- `components/WhatsAppFooter.tsx` - WhatsApp number, email, address, socials
- `components/Header.tsx` - Logo, navigation links
- `lib/seo.ts` - Company name, description, URL

**Homepage:**
- `components/QuickLinks.tsx` - Featured destinations
- `components/TestimonialSection.tsx` - Customer testimonials
- `components/HeroSection.tsx` - Hero copy and messaging

**Destination Pages:**
- `app/safaris/maasai-mara/page.tsx` - Maasai Mara details
- `app/safaris/serengeti/page.tsx` - Serengeti details
- `app/safaris/gorilla-trekking/page.tsx` - Gorilla trekking details

Update packages, prices, highlights, and descriptions to match your offerings.

### 4. Implement Backend Endpoints

Read `BACKEND_INTEGRATION.md` for detailed API specs. You need to implement:

```
POST /api/itinerary/generate   - Generate custom itineraries (required)
POST /api/itinerary/pdf        - Generate PDF files (required)
POST /api/pricing/calculate    - Dynamic pricing (optional)
```

**Quick Example - Node.js/Express:**

```javascript
app.post('/api/itinerary/generate', async (req, res) => {
  const { destination, experience, budget, startDate, endDate } = req.body
  
  // Use an LLM API to generate itinerary
  const itinerary = await generateItinerary({
    destination,
    experience,
    budget,
    startDate,
    endDate
  })
  
  res.json(itinerary)
})
```

### 5. Add Images

The site uses placeholder copy. Add real images for:

- Hero background images
- Destination photos
- Safari wildlife images
- Team member photos (optional)
- Testimonial avatars

Update image sources in components and ensure they match the design aesthetic.

## Key Files to Know

| File | Purpose |
|------|---------|
| `app/page.tsx` | Homepage entry point |
| `components/AdventureQuiz.tsx` | 4-step quiz logic |
| `lib/api-client.ts` | Backend API integration |
| `tailwind.config.ts` | Brand colors & styling |
| `BACKEND_INTEGRATION.md` | API specification |
| `ARCHITECTURE.md` | Technical documentation |

## Design System

**Colors:**
- Jungle Dark (Primary): `#064E3B`
- Leaf Green (CTA): `#22C55E`
- Cream (Background): `#FFFBF0`

**Fonts:**
- Headings: Playfair Display
- Body: Montserrat

Edit `tailwind.config.ts` and `app/globals.css` to customize.

## Common Tasks

### Add a New Destination Page

1. Create `/app/safaris/[slug]/page.tsx`
2. Import `DestinationPage` component
3. Define highlights and packages
4. Update sidebar metadata
5. Add to sitemap (if needed)

```typescript
import DestinationPage from '@/components/DestinationPage'

export default function DestinationPage() {
  return (
    <DestinationPage
      title="Destination Name"
      subtitle="Description"
      heroGradient="bg-gradient-to-br from-jungle-dark to-jungle-green"
      bestTime="June - October"
      highlights={[...]}
      packages={[...]}
    />
  )
}
```

### Change Brand Colors

Edit `/vercel/share/v0-project/app/globals.css`:

```css
:root {
  --primary: #YOUR_COLOR;
  --accent: #YOUR_COLOR;
  /* ... */
}
```

### Add a New Navigation Link

Edit `components/Header.tsx` and `components/WhatsAppFooter.tsx`.

### Update Pricing

Edit package pricing in destination pages or implement dynamic pricing endpoint.

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Deploy via Vercel CLI
vercel deploy

# Or connect GitHub to Vercel UI
# vercel.com → New Project → Import from GitHub
```

### Deploy to Other Platforms

```bash
# Build for production
pnpm run build

# Start production server
pnpm start
```

Works with any Node.js hosting (Heroku, Railway, AWS, etc.)

## Testing the Quiz

1. Click "Build Your Trip" on homepage
2. Select options in each step:
   - Destination: Kenya, Tanzania, Uganda, or Rwanda
   - Experience: Big Five, Gorilla, Beach, or Mountain
   - Budget: Budget, Mid-Range, or Luxury
   - Dates: Pick start and end dates
3. See results (will show loading until backend is connected)

## Troubleshooting

### "Cannot find module" errors
```bash
pnpm install
pnpm run dev
```

### Build errors
```bash
# Clean build
rm -rf .next
pnpm run build
```

### Quiz showing loading spinner
Your backend isn't connected. Check:
- `NEXT_PUBLIC_API_URL` in `.env.local`
- Backend is running at that URL
- CORS is enabled on backend

## Next Steps

1. ✅ Customize content with your info
2. ✅ Implement backend API endpoints
3. ✅ Add real images
4. ✅ Set up payment processing
5. ✅ Connect to booking system
6. ✅ Deploy to production

## Support Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Lucide Icons:** https://lucide.dev
- **TypeScript:** https://www.typescriptlang.org/docs

---

**Happy building! Your safari site is ready to go.** 🦁

For detailed technical info, see `ARCHITECTURE.md` and `BACKEND_INTEGRATION.md`.
