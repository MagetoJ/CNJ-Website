# CNJ Safaris Frontend Architecture

## Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx              # Root layout with metadata & fonts
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles & CSS variables
│   └── safaris/
│       ├── layout.tsx          # Safaris section layout
│       ├── maasai-mara/
│       │   └── page.tsx        # Maasai Mara destination page
│       ├── serengeti/
│       │   └── page.tsx        # Serengeti destination page
│       └── gorilla-trekking/
│           └── page.tsx        # Gorilla trekking destination page
│
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── HeroSection.tsx         # Homepage hero with CTA
│   ├── AdventureQuiz.tsx       # 4-step quiz modal
│   ├── QuickLinks.tsx          # Featured destinations section
│   ├── TestimonialSection.tsx  # Social proof & testimonials
│   ├── WhatsAppFooter.tsx      # Footer with contact & sticky buttons
│   ├── DestinationPage.tsx     # Reusable destination page template
│   ├── OptimizedImage.tsx      # Next.js Image wrapper
│   │
│   ├── quiz/                   # Quiz step components
│   │   ├── QuizStep1.tsx       # Destination selection
│   │   ├── QuizStep2.tsx       # Experience type selection
│   │   ├── QuizStep3.tsx       # Budget tier selection
│   │   ├── QuizStep4.tsx       # Date picker
│   │   └── QuizResults.tsx     # Itinerary display & PDF download
│   │
│   └── seo/                    # SEO components
│       └── JsonLdSchemas.tsx   # Structured data for Google
│
├── lib/
│   ├── api-client.ts           # Backend API integration points
│   ├── seo.ts                  # SEO utilities & constants
│   └── utils.ts                # Shared utilities
│
├── public/
│   └── robots.txt              # SEO robots configuration
│
├── tailwind.config.ts          # Tailwind CSS with custom colors
├── tsconfig.json               # TypeScript configuration
├── next.config.mjs             # Next.js configuration
├── BACKEND_INTEGRATION.md      # Backend API documentation
└── ARCHITECTURE.md             # This file

```

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **UI Components:** shadcn/ui + custom components
- **Styling:** Tailwind CSS 4
- **Fonts:** Playfair Display (headings), Montserrat (body)
- **Icons:** Lucide React
- **Type Safety:** TypeScript
- **Forms:** Native HTML + React hooks
- **Image Optimization:** Next.js Image component
- **SEO:** JSON-LD structured data + Next.js metadata

## Key Features

### 1. Homepage (`/`)
- Hero section with brand messaging
- 4-step adventure quiz modal
- Quick links to featured destinations
- Testimonial section
- Sticky footer with WhatsApp & "Build Your Trip" CTAs

### 2. Adventure Quiz
**Flow:**
1. Destination selection (Kenya, Tanzania, Uganda, Rwanda)
2. Experience type (Big Five, Gorilla Trekking, Beach, Mountain)
3. Budget tier (Budget, Mid-Range, Luxury)
4. Date picker (Start & End dates)

**Output:**
- Calls `/api/itinerary/generate` backend endpoint
- Displays itinerary results with price breakdown
- Allows PDF download via `/api/itinerary/pdf`

### 3. Destination Pages
**Available:**
- `/safaris/maasai-mara` - Kenya's iconic wildlife reserve
- `/safaris/serengeti` - Tanzania's migration showcase
- `/safaris/gorilla-trekking` - Uganda's mountain gorillas

**Components:**
- Hero section with destination info
- Quick facts bar (best time, group size, price)
- Description and highlights
- Package offerings
- Call-to-action sections

### 4. SEO & Performance
- **JSON-LD Schemas:** Organization, LocalBusiness, TouristTrip, FAQ, Breadcrumb
- **Sitemap:** Auto-generated at `/sitemap.xml`
- **Robots.txt:** Standard search engine guidelines
- **Image Optimization:** WebP format, lazy loading
- **Meta Tags:** Dynamic per-page descriptions
- **Mobile-First:** Responsive design across all devices

## Design System

### Colors (Jungle Theme)
- **Primary (Jungle Dark):** `#064E3B` - Main branding
- **Secondary (Jungle Green):** `#0D6B56` - Accents
- **CTA (Leaf Green):** `#22C55E` - Call-to-action buttons
- **Background (Cream):** `#FFFBF0` - Soft background
- **Light Sage:** `#E8F5E9` - Section backgrounds
- **White:** `#FFFFFF` - Primary background

### Typography
- **Headings:** Playfair Display (serif, bold, elegant)
- **Body:** Montserrat (sans-serif, clean, readable)
- **Sizes:** 
  - H1: 2.5-3.5rem
  - H2: 2rem-2.5rem
  - H3: 1.5rem
  - Body: 1rem
  - Small: 0.875rem

### Spacing & Layout
- **Gap Scale:** 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- **Max Width:** 1280px (7xl)
- **Mobile Padding:** 16px
- **Desktop Padding:** 32px-48px
- **Breakpoints:**
  - Mobile: <640px
  - Tablet: 640px-1024px
  - Desktop: >1024px

## Component Patterns

### Props Pattern
Components accept specific, typed props for flexibility:

```typescript
interface ComponentProps {
  title: string
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  className?: string
}
```

### State Management
- **Quiz State:** Managed in `AdventureQuiz` parent
- **Form State:** React hooks (useState)
- **API State:** Loading/error/data pattern
- **No Global State:** Designed for simplicity (Zustand/Redux optional)

### Event Handlers
- Click: `onClick`
- Change: `onChange`
- Submit: `onSubmit`
- Close: `onClose`

## API Integration

### API Client (`lib/api-client.ts`)
```typescript
// Generate custom itinerary
await generateItinerary(quizData)

// Generate PDF
await generatePDF(quizData, itinerary)

// Calculate pricing
await calculatePricing(quizData, numberOfPeople)

// Create booking (future)
await createBooking(bookingData)
```

### Error Handling
- Try/catch blocks in components
- User-friendly error messages
- Console logging for debugging
- Error boundaries (implement as needed)

### Loading States
- Loader spinners for async operations
- Skeleton states for images
- Disabled buttons during submission
- Loading text updates

## Performance Optimizations

### Image Handling
1. **Next.js Image Component:**
   - Automatic WebP/AVIF format
   - Lazy loading by default
   - Responsive sizing with `sizes` prop
   - Placeholder while loading

2. **Optimization Config:**
   ```typescript
   images: {
     formats: ['image/avif', 'image/webp'],
     remotePatterns: [...]
   }
   ```

### Code Splitting
- Route-based code splitting (automatic)
- Component lazy loading (can be added)
- Dynamic imports for heavy components

### Caching
- Static pre-rendering where possible
- Revalidation for dynamic content
- Browser cache headers

## SEO Best Practices

### On-Page
- ✅ Descriptive meta titles
- ✅ Meta descriptions (150-160 chars)
- ✅ Header hierarchy (h1→h2→h3)
- ✅ Alt text on all images
- ✅ Mobile responsive

### Structured Data
- ✅ Organization schema
- ✅ LocalBusiness schema
- ✅ TouristTrip schema for packages
- ✅ FAQ schema
- ✅ Breadcrumb navigation

### Technical SEO
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Fast load times (<2s 4G)
- ✅ Mobile-first design
- ✅ Clean URL structure
- ✅ SSL/HTTPS ready

## Development Workflow

### Running Locally
```bash
pnpm install
pnpm run dev
# Opens http://localhost:3000
```

### Building for Production
```bash
pnpm run build
pnpm run start
```

### Adding New Pages
1. Create file in `app/[path]/page.tsx`
2. Add metadata export
3. Export default React component
4. Update sitemap if needed

### Adding New Components
1. Create in `components/` folder
2. Use proper TypeScript interfaces
3. Follow existing patterns
4. Add documentation in JSDoc comments

## Future Enhancement Paths

### Phase 2: Backend Integration
- [ ] Payment processing (Stripe/DPO Pay)
- [ ] Booking management system
- [ ] Client portal with user accounts
- [ ] Email notifications

### Phase 3: AI Features
- [ ] Chatbot for travel questions
- [ ] AI itinerary fine-tuning
- [ ] Personalized recommendations
- [ ] Smart packing list generator

### Phase 4: Community
- [ ] User reviews & ratings
- [ ] Photo gallery from travelers
- [ ] Blog/travel tips section
- [ ] Social media integration

## Security Considerations

- ✅ No sensitive data in frontend code
- ✅ Environment variables for secrets
- ✅ CORS headers for API calls
- ✅ Input validation on forms
- ⚠️ TODO: Add rate limiting
- ⚠️ TODO: Add spam protection (reCAPTCHA)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Android)
- Minimum: ES2020 JavaScript features

## Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Color contrast compliance
- ✅ Alt text on images
- ✅ Form labels associated

---

**Last Updated:** 2024-04-18
**Status:** Frontend Complete - Awaiting Backend Integration
