# CMS Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Your Tours & Travels Website                │
│                  (React/Next.js Components)                      │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ HTTP Requests
                         │ /api/...
                         │
┌────────────────────────▼────────────────────────────────────────┐
│                    Next.js API Routes                            │
│  (25+ Endpoints for CRUD operations)                             │
├──────────────────────────────────────────────────────────────────┤
│  Authentication  │  Careers  │  Blog  │  Shop  │  Gallery       │
│  • Signup        │  • List   │ • List │ • List │ • List         │
│  • Login         │  • Create │ • Post │ • Add  │ • Add Image    │
│  • Logout        │  • Read   │ • Edit │ • Edit │ • Edit         │
│  • Profile       │  • Update │ • Delete│ • Del │ • Delete       │
└────────────┬─────────────────────────────────────────────────────┘
             │
             │ Supabase Client
             │ (@supabase/supabase-js)
             │
┌────────────▼─────────────────────────────────────────────────────┐
│                    Supabase Backend                              │
├──────────────────────────────────────────────────────────────────┤
│  Authentication Layer                                            │
│  • Email/password auth                                           │
│  • Session management                                            │
│  • Row Level Security                                            │
│                                                                  │
│  Database Layer (PostgreSQL)                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Tables (with RLS policies):                            │    │
│  │ • users_profile                                        │    │
│  │ • careers                                              │    │
│  │ • blog_posts                                           │    │
│  │ • blog_categories                                      │    │
│  │ • blog_posts_categories                                │    │
│  │ • shop_products                                        │    │
│  │ • gallery_images                                       │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  Storage Layer (Optional)                                        │
│  • Image URLs (external CDN or Supabase Storage)                │
└──────────────────────────────────────────────────────────────────┘
```

## Data Flow

### 1. User Authentication Flow

```
┌──────────────┐
│   User       │
└──────┬───────┘
       │ POST /api/auth/signup
       │ (email, password, name, role)
       │
       ▼
┌─────────────────────────────────────────┐
│  Next.js API Route (app/api/auth/...)   │
│  • Hash password                        │
│  • Create auth user                     │
│  • Create user_profile record           │
└────────┬────────────────────────────────┘
         │
         │ supabase.auth.signUp()
         │ supabase.from('users_profile').insert()
         │
         ▼
┌─────────────────────────────────────────┐
│  Supabase Auth                          │
│  • Stores credentials                   │
│  • Creates user session                 │
│  • Sends verification email             │
└─────────────────────────────────────────┘
         │
         │ Response: user_id, email, metadata
         │
         ▼
┌──────────────┐
│   Frontend   │
│   Logged In  │
└──────────────┘
```

### 2. Content Creation Flow (Blog Post Example)

```
┌────────────────────┐
│  Editor User       │
│  (Authenticated)   │
└────────┬───────────┘
         │
         │ Fills form:
         │ • Title
         │ • Content
         │ • Categories
         │
         ▼
┌──────────────────────────────────┐
│  React Component                 │
│  • Validates input               │
│  • Prepares data                 │
└────────┬─────────────────────────┘
         │
         │ POST /api/blog/posts
         │ (with credentials: 'include')
         │
         ▼
┌──────────────────────────────────┐
│  Next.js Route Handler           │
│  (app/api/blog/posts/route.ts)   │
│  • Get current user              │
│  • Validate permissions          │
│  • Insert blog_post record       │
│  • Insert into categories table  │
└────────┬─────────────────────────┘
         │
         │ supabase.from('blog_posts').insert()
         │ supabase.from('blog_posts_categories').insert()
         │
         ▼
┌──────────────────────────────────┐
│  Supabase Database               │
│                                  │
│  RLS Policy Check:               │
│  • Is user authenticated? ✓      │
│  • Is user editor or admin? ✓    │
│  • Allow INSERT ✓                │
└────────┬─────────────────────────┘
         │
         │ Response: blog post data
         │
         ▼
┌──────────────────────────────────┐
│  React Component                 │
│  • Show success message          │
│  • Update local state            │
│  • Redirect to edit page         │
└──────────────────────────────────┘
```

## Role-Based Access Control

```
┌──────────────────────────────────────────────────────────────┐
│                   PUBLIC USER                                │
├──────────────────────────────────────────────────────────────┤
│ Can Read:                                                    │
│ • ✅ Published blog posts                                   │
│ • ✅ Job postings (careers)                                 │
│ • ✅ Shop products                                           │
│ • ✅ Gallery images                                          │
│                                                              │
│ Cannot Write: ❌ Any content                                │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                   EDITOR ROLE                                │
├──────────────────────────────────────────────────────────────┤
│ Can Read: ✅ Everything (published & drafts)                │
│                                                              │
│ Can Create:                                                  │
│ • ✅ Blog posts (as draft or published)                     │
│ • ✅ Job postings                                            │
│ • ✅ Shop products                                           │
│ • ✅ Gallery images                                          │
│                                                              │
│ Can Edit/Delete:                                             │
│ • ✅ Own content only                                        │
│                                                              │
│ Cannot:                                                      │
│ • ❌ Edit other users' content                              │
│ • ❌ Manage blog categories                                 │
│ • ❌ Manage user roles                                      │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                   ADMIN ROLE                                 │
├──────────────────────────────────────────────────────────────┤
│ ✅ FULL ACCESS TO EVERYTHING                                │
│                                                              │
│ • Create/Edit/Delete any content                            │
│ • Manage blog categories                                    │
│ • View and manage all users                                 │
│ • Change user roles                                         │
│ • Full system control                                       │
└──────────────────────────────────────────────────────────────┘
```

## Database Schema Diagram

```
┌──────────────────┐
│  users_profile   │
├──────────────────┤
│ id (UUID) 🔑     │ ─────┐
│ email            │      │
│ full_name        │      │
│ role             │      │
│ created_at       │      │
│ updated_at       │      │
└──────────────────┘      │
                          │
                    Created By
                          │
        ┌─────────────────┼─────────────────┬──────────────────┐
        │                 │                 │                  │
        ▼                 ▼                 ▼                  ▼
   ┌─────────┐     ┌──────────┐    ┌──────────────┐   ┌───────────────┐
   │ careers │     │blog_posts│    │shop_products │   │gallery_images │
   ├─────────┤     ├──────────┤    ├──────────────┤   ├───────────────┤
   │ id      │     │ id       │    │ id           │   │ id            │
   │ title   │     │ title    │    │ name         │   │ title         │
   │ location│     │ slug     │    │ description  │   │ image_url     │
   │ job_type│     │ content  │    │ price        │   │ gallery_categ│
   │ salary  │     │ excerpt  │    │ category     │   │ sort_order    │
   │ created_│     │ status   │    │ sku          │   │ created_by    │
   │   by    │     │ author_id│    │ created_by   │   │ created_at    │
   └─────────┘     │ pub_date │    └──────────────┘   └───────────────┘
                   └──────────┘
                        │
                        │
            ┌───────────┴───────────┐
            │                       │
            ▼                       ▼
   ┌─────────────────┐   ┌──────────────────────┐
   │blog_categories  │   │blog_posts_categories │
   ├─────────────────┤   ├──────────────────────┤
   │ id              │   │ post_id (FK)         │
   │ name            │   │ category_id (FK)     │
   │ slug            │   │                      │
   └─────────────────┘   └──────────────────────┘
```

## API Endpoint Hierarchy

```
/api
├── /auth
│   ├── POST   /signup          Create new user
│   ├── POST   /login           Authenticate user
│   └── POST   /logout          End session
│
├── /users
│   └── /profile
│       ├── GET                 Get current user profile
│       └── PUT                 Update profile
│
├── /careers
│   ├── GET    /                List all careers
│   ├── POST   /                Create career (editor+)
│   ├── GET    /[id]            Get career details
│   ├── PUT    /[id]            Update career (creator/admin)
│   └── DELETE /[id]            Delete career (creator/admin)
│
├── /blog
│   ├── /posts
│   │   ├── GET    /            List published posts
│   │   ├── POST   /            Create post (editor+)
│   │   ├── GET    /[id]        Get post details
│   │   ├── PUT    /[id]        Update post (creator/admin)
│   │   └── DELETE /[id]        Delete post (creator/admin)
│   │
│   └── /categories
│       ├── GET                 List categories
│       └── POST                Create category (admin)
│
├── /shop
│   └── /products
│       ├── GET    /            List all products
│       ├── POST   /            Create product (editor+)
│       ├── GET    /[id]        Get product details
│       ├── PUT    /[id]        Update product (creator/admin)
│       └── DELETE /[id]        Delete product (creator/admin)
│
└── /gallery
    ├── GET    /                List gallery images
    ├── POST   /                Add image (editor+)
    ├── GET    /[id]            Get image details
    ├── PUT    /[id]            Update image (creator/admin)
    └── DELETE /[id]            Delete image (creator/admin)
```

## Request/Response Cycle

```
1. CLIENT REQUEST
   ┌─────────────────────────────────────┐
   │ POST /api/careers                   │
   │ Headers:                            │
   │  • Content-Type: application/json   │
   │  • Cookie: session token            │
   │ Body:                               │
   │  {                                  │
   │    "title": "Tour Guide",           │
   │    "location": "Nepal",             │
   │    ...                              │
   │  }                                  │
   └─────────────────────────────────────┘
                    │
2. SERVER PROCESSING
                    ▼
   ┌─────────────────────────────────────┐
   │ Next.js API Handler                 │
   ├─────────────────────────────────────┤
   │ 1. Parse request                    │
   │ 2. Get authenticated user           │
   │ 3. Validate user role               │
   │ 4. Validate input data              │
   │ 5. Call Supabase API                │
   │ 6. Handle response/errors           │
   └─────────────────────────────────────┘
                    │
3. DATABASE OPERATION
                    ▼
   ┌─────────────────────────────────────┐
   │ Supabase                            │
   ├─────────────────────────────────────┤
   │ 1. Check RLS policies               │
   │ 2. Validate data                    │
   │ 3. Insert into careers table        │
   │ 4. Return inserted record           │
   └─────────────────────────────────────┘
                    │
4. SERVER RESPONSE
                    ▼
   ┌─────────────────────────────────────┐
   │ HTTP 201 Created                    │
   │ {                                   │
   │  "id": "uuid-here",                 │
   │  "title": "Tour Guide",             │
   │  "location": "Nepal",               │
   │  "created_by": "user-uuid",         │
   │  "created_at": "2024-05-22...",     │
   │  ...                                │
   │ }                                   │
   └─────────────────────────────────────┘
                    │
5. CLIENT HANDLING
                    ▼
   ┌─────────────────────────────────────┐
   │ React Component                     │
   ├─────────────────────────────────────┤
   │ 1. Receive response                 │
   │ 2. Update local state               │
   │ 3. Show success message             │
   │ 4. Redirect or refresh              │
   └─────────────────────────────────────┘
```

## Technology Stack

```
Frontend
├── React 19+
├── Next.js 16+
├── TypeScript
└── Fetch API

Backend
├── Next.js Route Handlers
├── Node.js Runtime
└── TypeScript

Database
├── Supabase (PostgreSQL)
├── Row Level Security (RLS)
└── Authentication

Utilities
├── @supabase/supabase-js
├── @supabase/ssr
└── TypeScript

Deployment
└── Vercel
```

## Security Layers

```
┌──────────────────────────────────────────┐
│ Client-Side Security                     │
├──────────────────────────────────────────┤
│ • Input validation                       │
│ • HTTPS only                             │
│ • Secure cookies (HttpOnly)              │
└──────────────────────────────────────────┘
              │
              ▼
┌──────────────────────────────────────────┐
│ Transport Security                       │
├──────────────────────────────────────────┤
│ • HTTPS/TLS encryption                   │
│ • Secure cookie transmission             │
│ • CORS policies                          │
└──────────────────────────────────────────┘
              │
              ▼
┌──────────────────────────────────────────┐
│ API Layer Security                       │
├──────────────────────────────────────────┤
│ • Authentication verification            │
│ • Role-based authorization               │
│ • Input sanitization                     │
│ • Rate limiting (future)                 │
└──────────────────────────────────────────┘
              │
              ▼
┌──────────────────────────────────────────┐
│ Database Security                        │
├──────────────────────────────────────────┤
│ • Row Level Security (RLS) policies      │
│ • Parameterized queries                  │
│ • User isolation                         │
│ • Encrypted passwords (bcrypt)           │
└──────────────────────────────────────────┘
```

## Deployment Architecture

```
GitHub Repository
        │
        │ (Push)
        │
        ▼
   GitHub
        │
        │ (Webhook)
        │
        ▼
    Vercel
    ├── Build
    │   └── npm install & npm build
    └── Deploy
        ├── Edge Functions
        ├── Serverless Functions (/api)
        └── Static Assets
             │
             ├─────────────────────┐
             │                     │
             ▼                     ▼
         Users          Supabase Backend
       (Frontend)       (Database & Auth)
```

---

This architecture provides a scalable, secure, and maintainable solution for your CMS needs!
