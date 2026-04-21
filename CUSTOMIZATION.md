# CNJ Safaris - Customization Guide

This guide shows exactly what you need to change to make the site your own.

## 1. Company Information

### File: `components/Header.tsx`
```typescript
// Line 8-12: Update logo
<Link href="/" className="flex items-center gap-2">
  <div className="w-10 h-10 bg-jungle-dark rounded-lg flex items-center justify-center">
    <span className="text-white font-serif font-bold text-lg">YOUR</span>  // ← Change this
  </div>
  <span className="hidden sm:inline font-serif font-bold text-jungle-dark text-xl">
    Your Company Name  // ← Change this
  </span>
</Link>
```

### File: `components/WhatsAppFooter.tsx`
```typescript
// Line 8: Update WhatsApp number (no spaces, country code required)
const whatsappNumber = '+254712345678'  // ← Update to your number

// Line 9: Update WhatsApp message
const whatsappMessage = 'Hi CNJ Safaris, I would like...'  // ← Update

// Lines 76-79: Update company links
<Link href="/">CNJ Safaris</Link>  // ← Update
<p className="text-gray-400 text-sm">Crafting unforgettable...</p>  // ← Update

// Lines 113-114, 138-139: Update social links
<a href="#">Facebook</a>  // ← Add real URL

// Lines 141-142: Update contact details
<span>+254 (0) 712 345 678</span>  // ← Update
<span>info@cnjsafaris.com</span>  // ← Update
<span>Nairobi, Kenya</span>  // ← Update
```

### File: `app/layout.tsx`
```typescript
// Line 27: Update site metadata
export const metadata: Metadata = {
  title: 'CNJ Safaris | East African Adventure Tours',  // ← Update
  description: 'Discover Kenya, Tanzania, Uganda & Rwanda with CNJ Safaris...',  // ← Update
  keywords: ['safari', 'Kenya', 'Tanzania', ...],  // ← Update
```

## 2. Homepage Content

### File: `components/HeroSection.tsx`
```typescript
// Lines 35-39: Update hero copy
<span className="text-leaf-green font-semibold text-sm uppercase tracking-widest">
  Discover East Africa  // ← Update tagline
</span>

<h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
  Unforgettable Safari Adventures  // ← Update main headline
</h1>

<p className="text-white text-lg sm:text-xl max-w-2xl mx-auto mb-8 opacity-95">
  Custom-crafted itineraries. Real-time pricing. Book your East African adventure in minutes.  // ← Update
</p>
```

### File: `components/QuickLinks.tsx`
```typescript
// Lines 19-31: Update featured destinations
const quickLinks = [
  {
    id: 1,
    title: 'Maasai Mara Big Five',  // ← Update title
    description: 'Experience Kenya\'s iconic wildlife...',  // ← Update description
    href: '/safaris/maasai-mara',  // ← Update link
  },
  // ... more links
]
```

### File: `components/TestimonialSection.tsx`
```typescript
// Lines 13-31: Update testimonials with real customer feedback
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',  // ← Update name
    location: 'London, UK',  // ← Update location
    text: 'CNJ Safaris made booking our Kenya trip incredibly easy...',  // ← Update review
    rating: 5,
    avatar: 'SJ',  // ← Update initials
  },
  // ... more testimonials
]

// Lines 66-78: Update social proof numbers
<p className="text-4xl font-bold text-leaf-green">500+</p>  // ← Update number
<p className="text-gray-600 mt-2">Happy Travelers</p>  // ← Update label
```

## 3. Destination Pages

### File: `app/safaris/maasai-mara/page.tsx`
```typescript
// Lines 16-19: Update highlights
const highlights = [
  {
    title: 'Big Five Wildlife',
    description: 'Encounter lions, elephants, buffalo, leopards, and rhinos...',  // ← Update
    icon: '🦁',  // ← Update emoji
  },
  // ...
]

// Lines 28-49: Update packages with your pricing
const packages = [
  {
    id: '1',
    name: 'Classic Safari',  // ← Update
    duration: '5 Days / 4 Nights',  // ← Update
    price: '$1,200 per person',  // ← Update price
    highlights: [
      'Daily game drives',  // ← Update highlights
      '4-star lodge accommodation',
      // ...
    ],
  },
  // ...
]

// Lines 60-65: Update page content
return (
  <DestinationPage
    title="Maasai Mara National Reserve"  // ← Update
    subtitle="Where the Wild Roam Free..."  // ← Update
    bestTime="June - October"  // ← Update
    description="The Maasai Mara National Reserve is one of..."  // ← Update
  />
)
```

**Repeat for:**
- `app/safaris/serengeti/page.tsx`
- `app/safaris/gorilla-trekking/page.tsx`

## 4. Branding & Colors

### File: `app/globals.css`
To change the color scheme, update the CSS variables:

```css
:root {
  --background: #FFFFFF;           // ← Background color
  --foreground: #064E3B;           // ← Text color
  --primary: #064E3B;              // ← Primary brand color (Jungle Green)
  --accent: #22C55E;               // ← CTA button color (Leaf Green)
  --muted: #E8F5E9;                // ← Light backgrounds
  // ... other colors
}
```

### File: `tailwind.config.ts`
```typescript
// Lines 19-26: Custom color names
colors: {
  "jungle-dark": "#064E3B",       // ← Your primary color
  "jungle-green": "#0D6B56",      // ← Secondary shade
  "leaf-green": "#22C55E",        // ← CTA color
  "sage-light": "#E8F5E9",        // ← Light shade
  "cream": "#FFFBF0",             // ← Background cream
}
```

## 5. Images

### Header Logo
Update in `components/Header.tsx` line 15-16:
```typescript
<span className="text-white font-serif font-bold text-lg">CNJ</span>
```

Or use an image:
```typescript
<Image
  src="/logo.png"
  alt="CNJ Safaris"
  width={40}
  height={40}
/>
```

### Hero Background
In `components/HeroSection.tsx` line 16, add your image:
```typescript
<div className="absolute inset-0 opacity-40">
  <Image
    src="/safari-hero.jpg"
    alt="Safari"
    fill
    priority
    className="object-cover"
  />
</div>
```

### Destination Pages
In `app/safaris/[destination]/page.tsx`, the `heroGradient` can be replaced with:
```typescript
// Option 1: Keep gradient (current)
heroGradient="bg-gradient-to-br from-jungle-dark to-jungle-green"

// Option 2: Add background image
// Modify DestinationPage component to support bgImage prop
```

### Testimonial Avatars
In `components/TestimonialSection.tsx` line 43-44:
```typescript
<div className="w-12 h-12 rounded-full bg-leaf-green text-white flex items-center justify-center font-bold text-sm">
  {testimonial.avatar}  // ← Currently shows initials (SJ, MC, EW)
</div>

// Change to use image:
<Image
  src={`/avatars/${testimonial.id}.jpg`}
  alt={testimonial.name}
  width={48}
  height={48}
  className="rounded-full"
/>
```

## 6. Fonts

### Change Heading Font
In `app/layout.tsx`:
```typescript
// Line 8-11: Currently uses Playfair Display
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
})

// To use a different font (example: Cormorant Garamond)
import { Cormorant_Garamond } from 'next/font/google'
const cormorant = Cormorant_Garamond({ ... })
```

### Change Body Font
```typescript
// Line 13-17: Currently uses Montserrat
const montserrat = Montserrat({ ... })

// To use a different font (example: Inter)
import { Inter } from 'next/font/google'
const inter = Inter({ ... })
```

## 7. Backend Configuration

### File: `.env.local`
```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_WHATSAPP_NUMBER=+254712345678
NEXT_PUBLIC_EMAIL=info@cnjsafaris.com
NEXT_PUBLIC_PHONE=+254-712-345-678
```

### File: `lib/api-client.ts`
```typescript
// Line 9: Update to your backend URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

// Endpoints match your backend
// POST /api/itinerary/generate
// POST /api/itinerary/pdf
// POST /api/pricing/calculate
```

## 8. SEO Customization

### File: `lib/seo.ts`
```typescript
// Lines 6-13: Update site config
export const SITE_CONFIG = {
  name: 'CNJ Safaris',  // ← Update
  description: 'Discover Kenya, Tanzania...',  // ← Update
  url: 'https://cnjsafaris.com',  // ← Update domain
  image: 'https://cnjsafaris.com/og-image.png',  // ← Update OG image
  twitterHandle: '@cnjsafaris',  // ← Update Twitter handle
}

// Lines 88-103: Update FAQ content
export const commonFAQs = [
  {
    question: 'What is the best time to visit East Africa?',
    answer: 'The best time for wildlife viewing...',  // ← Update answers
  },
  // ...
]
```

## 9. Quiz Options

### File: `components/quiz/QuizStep1.tsx`
```typescript
// Lines 15-28: Update destination options
const destinations = [
  {
    id: 'kenya',
    name: 'Kenya',
    description: 'Iconic Maasai Mara, Mount Kenya...',  // ← Update
  },
  // ...
]
```

### File: `components/quiz/QuizStep2.tsx`
```typescript
// Lines 14-33: Update experience types
const experiences = [
  {
    id: 'big-five',
    name: 'Big Five Safari',
    description: 'Classic wildlife viewing experience',  // ← Update
    icon: '🦁',  // ← Update emoji
  },
  // ...
]
```

### File: `components/quiz/QuizStep3.tsx`
```typescript
// Lines 14-43: Update budget tiers
const budgetTiers = [
  {
    id: 'budget',
    name: 'Budget',
    description: 'Comfortable accommodations and meals',  // ← Update
    range: '$800 - $1,500 per person',  // ← Update pricing
    features: ['Standard lodges', 'Group tours'],  // ← Update features
  },
  // ...
]
```

## Quick Customization Checklist

- [ ] Update company name in Header
- [ ] Update WhatsApp number
- [ ] Update email & phone
- [ ] Update hero headline & subheading
- [ ] Update featured destinations
- [ ] Update testimonials
- [ ] Update destination pages (Maasai Mara, Serengeti, Gorilla)
- [ ] Update package names, durations & prices
- [ ] Update package highlights
- [ ] Add real images (logo, hero, destinations)
- [ ] Update social media links
- [ ] Update FAQ answers
- [ ] Set backend URL in `.env.local`
- [ ] Test on desktop & mobile
- [ ] Deploy

## Tips

1. **Search & Replace:** Use your editor's find/replace to quickly update repeated text (company name, email, etc.)

2. **Color Theme:** If changing from Jungle Green, update:
   - `tailwind.config.ts` colors
   - `app/globals.css` CSS variables
   - `app/layout.tsx` theme color

3. **Images:** Store in `/public/` folder for easy access. Next.js will optimize automatically.

4. **Testing:** After changes, run `pnpm run dev` and test in browser before deploying.

---

**Need help?** Check `ARCHITECTURE.md` for component details or `QUICK_START.md` for setup instructions.
