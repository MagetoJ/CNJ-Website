# Tours & Travels CMS - API Documentation

This document provides complete API reference for the CMS backend that manages Careers, Blog, Shop Gear, and Gallery content.

## Base URL
```
http://localhost:3000/api
```

## Authentication

Most endpoints require authentication. Use the following endpoints to manage user sessions:

### Sign Up
**POST** `/auth/signup`

Create a new CMS user account with editor role.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "secure-password",
  "full_name": "John Doe",
  "role": "editor"  // "admin" or "editor"
}
```

**Response (201):**
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "user_metadata": {
      "full_name": "John Doe",
      "role": "editor"
    }
  },
  "message": "Signup successful. Please confirm your email."
}
```

---

### Login
**POST** `/auth/login`

Authenticate with email and password.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "secure-password"
}
```

**Response (200):**
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "role": "editor"
  },
  "session": {
    "access_token": "eyJ0eXAi...",
    "refresh_token": "eyJ0eXAi...",
    "expires_in": 3600
  }
}
```

---

### Logout
**POST** `/auth/logout`

Sign out the current user.

**Response (200):**
```json
{
  "message": "Logged out successfully"
}
```

---

### Get User Profile
**GET** `/users/profile`

Get the current authenticated user's profile information.

**Response (200):**
```json
{
  "id": "uuid",
  "email": "user@example.com",
  "full_name": "John Doe",
  "role": "editor",
  "created_at": "2024-05-22T10:00:00Z",
  "updated_at": "2024-05-22T10:00:00Z"
}
```

---

### Update User Profile
**PUT** `/users/profile`

Update the current user's profile information.

**Request Body:**
```json
{
  "full_name": "Jane Doe"
}
```

**Response (200):**
```json
{
  "id": "uuid",
  "email": "user@example.com",
  "full_name": "Jane Doe",
  "role": "editor",
  "created_at": "2024-05-22T10:00:00Z",
  "updated_at": "2024-05-22T10:00:00Z"
}
```

---

## Careers Management

### Get All Careers
**GET** `/careers`

Retrieve all job postings (public endpoint).

**Response (200):**
```json
[
  {
    "id": "uuid",
    "title": "Tour Guide",
    "description": "Full-time tour guide needed...",
    "location": "Bali, Indonesia",
    "job_type": "full-time",
    "salary_range": "$2000-$3000",
    "requirements": "5+ years experience",
    "application_url": "https://example.com/apply",
    "created_by": "uuid",
    "created_at": "2024-05-22T10:00:00Z",
    "updated_at": "2024-05-22T10:00:00Z"
  }
]
```

---

### Create Career Posting
**POST** `/careers`

Create a new job posting (requires editor or admin role).

**Request Body:**
```json
{
  "title": "Tour Guide",
  "description": "We are looking for experienced tour guides...",
  "location": "Bali, Indonesia",
  "job_type": "full-time",
  "salary_range": "$2000-$3000",
  "requirements": "5+ years experience, fluent English",
  "application_url": "https://example.com/apply"
}
```

**Response (201):**
```json
{
  "id": "uuid",
  "title": "Tour Guide",
  "description": "We are looking for experienced tour guides...",
  "location": "Bali, Indonesia",
  "job_type": "full-time",
  "salary_range": "$2000-$3000",
  "requirements": "5+ years experience, fluent English",
  "application_url": "https://example.com/apply",
  "created_by": "uuid",
  "created_at": "2024-05-22T10:00:00Z",
  "updated_at": "2024-05-22T10:00:00Z"
}
```

---

### Get Career Details
**GET** `/careers/[id]`

Get a specific job posting by ID.

**Response (200):**
```json
{
  "id": "uuid",
  "title": "Tour Guide",
  "description": "We are looking for experienced tour guides...",
  "location": "Bali, Indonesia",
  "job_type": "full-time",
  "salary_range": "$2000-$3000",
  "requirements": "5+ years experience, fluent English",
  "application_url": "https://example.com/apply",
  "created_by": "uuid",
  "created_at": "2024-05-22T10:00:00Z",
  "updated_at": "2024-05-22T10:00:00Z"
}
```

---

### Update Career Posting
**PUT** `/careers/[id]`

Update a job posting (creator or admin only).

**Request Body:**
```json
{
  "salary_range": "$2500-$3500",
  "description": "Updated description..."
}
```

**Response (200):**
```json
{
  "id": "uuid",
  "title": "Tour Guide",
  "description": "Updated description...",
  "location": "Bali, Indonesia",
  "job_type": "full-time",
  "salary_range": "$2500-$3500",
  "requirements": "5+ years experience, fluent English",
  "application_url": "https://example.com/apply",
  "created_by": "uuid",
  "created_at": "2024-05-22T10:00:00Z",
  "updated_at": "2024-05-22T10:15:00Z"
}
```

---

### Delete Career Posting
**DELETE** `/careers/[id]`

Delete a job posting (creator or admin only).

**Response (200):**
```json
{
  "success": true
}
```

---

## Blog Management

### Get All Blog Posts
**GET** `/blog/posts`

Retrieve all published blog posts (public endpoint).

**Query Parameters:**
- `status=published` - Get only published posts (default)
- `status=all` - Get all posts (requires auth)
- `category=[categoryId]` - Filter by category

**Response (200):**
```json
[
  {
    "id": "uuid",
    "title": "Top 10 Hidden Gems in Southeast Asia",
    "slug": "top-10-hidden-gems-southeast-asia",
    "content": "Here are the best kept secrets...",
    "excerpt": "Discover amazing destinations...",
    "featured_image_url": "https://example.com/image.jpg",
    "author_id": "uuid",
    "status": "published",
    "published_at": "2024-05-22T10:00:00Z",
    "created_at": "2024-05-22T10:00:00Z",
    "updated_at": "2024-05-22T10:00:00Z",
    "blog_posts_categories": [
      {
        "blog_categories": {
          "id": "uuid",
          "name": "Travel Tips",
          "slug": "travel-tips"
        }
      }
    ]
  }
]
```

---

### Create Blog Post
**POST** `/blog/posts`

Create a new blog post (requires editor or admin role).

**Request Body:**
```json
{
  "title": "Top 10 Hidden Gems in Southeast Asia",
  "slug": "top-10-hidden-gems-southeast-asia",
  "content": "Here are the best kept secrets...",
  "excerpt": "Discover amazing destinations...",
  "featured_image_url": "https://example.com/image.jpg",
  "status": "published",
  "categories": ["uuid-of-category-1", "uuid-of-category-2"]
}
```

**Response (201):**
```json
{
  "id": "uuid",
  "title": "Top 10 Hidden Gems in Southeast Asia",
  "slug": "top-10-hidden-gems-southeast-asia",
  "content": "Here are the best kept secrets...",
  "excerpt": "Discover amazing destinations...",
  "featured_image_url": "https://example.com/image.jpg",
  "author_id": "uuid",
  "status": "published",
  "published_at": "2024-05-22T10:00:00Z",
  "created_at": "2024-05-22T10:00:00Z",
  "updated_at": "2024-05-22T10:00:00Z"
}
```

---

### Get Blog Post Details
**GET** `/blog/posts/[id]`

Get a specific blog post by ID.

**Response (200):**
```json
{
  "id": "uuid",
  "title": "Top 10 Hidden Gems in Southeast Asia",
  "slug": "top-10-hidden-gems-southeast-asia",
  "content": "Here are the best kept secrets...",
  "excerpt": "Discover amazing destinations...",
  "featured_image_url": "https://example.com/image.jpg",
  "author_id": "uuid",
  "status": "published",
  "published_at": "2024-05-22T10:00:00Z",
  "created_at": "2024-05-22T10:00:00Z",
  "updated_at": "2024-05-22T10:00:00Z",
  "blog_posts_categories": [
    {
      "blog_categories": {
        "id": "uuid",
        "name": "Travel Tips",
        "slug": "travel-tips"
      }
    }
  ]
}
```

---

### Update Blog Post
**PUT** `/blog/posts/[id]`

Update a blog post (creator or admin only).

**Request Body:**
```json
{
  "content": "Updated content...",
  "status": "published",
  "categories": ["uuid-of-category-1"]
}
```

**Response (200):**
```json
{
  "id": "uuid",
  "title": "Top 10 Hidden Gems in Southeast Asia",
  "slug": "top-10-hidden-gems-southeast-asia",
  "content": "Updated content...",
  "excerpt": "Discover amazing destinations...",
  "featured_image_url": "https://example.com/image.jpg",
  "author_id": "uuid",
  "status": "published",
  "published_at": "2024-05-22T10:00:00Z",
  "created_at": "2024-05-22T10:00:00Z",
  "updated_at": "2024-05-22T10:05:00Z"
}
```

---

### Delete Blog Post
**DELETE** `/blog/posts/[id]`

Delete a blog post (creator or admin only).

**Response (200):**
```json
{
  "success": true
}
```

---

### Get Blog Categories
**GET** `/blog/categories`

Retrieve all blog categories (public endpoint).

**Response (200):**
```json
[
  {
    "id": "uuid",
    "name": "Travel Tips",
    "slug": "travel-tips",
    "created_at": "2024-05-22T10:00:00Z"
  },
  {
    "id": "uuid",
    "name": "Destinations",
    "slug": "destinations",
    "created_at": "2024-05-22T10:00:00Z"
  }
]
```

---

### Create Blog Category
**POST** `/blog/categories`

Create a new blog category (requires admin role).

**Request Body:**
```json
{
  "name": "Travel Tips",
  "slug": "travel-tips"
}
```

**Response (201):**
```json
{
  "id": "uuid",
  "name": "Travel Tips",
  "slug": "travel-tips",
  "created_at": "2024-05-22T10:00:00Z"
}
```

---

## Shop Gear Management

### Get All Products
**GET** `/shop/products`

Retrieve all shop gear products (public endpoint).

**Query Parameters:**
- `category=[category]` - Filter by category (e.g., "backpack", "tent", "camera")

**Response (200):**
```json
[
  {
    "id": "uuid",
    "name": "Travel Backpack Pro",
    "description": "Spacious and durable 60L backpack...",
    "price": "129.99",
    "currency": "USD",
    "image_url": "https://example.com/backpack.jpg",
    "category": "backpack",
    "sku": "TBPRO-001",
    "created_by": "uuid",
    "created_at": "2024-05-22T10:00:00Z",
    "updated_at": "2024-05-22T10:00:00Z"
  }
]
```

---

### Create Product
**POST** `/shop/products`

Create a new shop product (requires editor or admin role).

**Request Body:**
```json
{
  "name": "Travel Backpack Pro",
  "description": "Spacious and durable 60L backpack...",
  "price": "129.99",
  "currency": "USD",
  "image_url": "https://example.com/backpack.jpg",
  "category": "backpack",
  "sku": "TBPRO-001"
}
```

**Response (201):**
```json
{
  "id": "uuid",
  "name": "Travel Backpack Pro",
  "description": "Spacious and durable 60L backpack...",
  "price": "129.99",
  "currency": "USD",
  "image_url": "https://example.com/backpack.jpg",
  "category": "backpack",
  "sku": "TBPRO-001",
  "created_by": "uuid",
  "created_at": "2024-05-22T10:00:00Z",
  "updated_at": "2024-05-22T10:00:00Z"
}
```

---

### Get Product Details
**GET** `/shop/products/[id]`

Get a specific product by ID.

**Response (200):**
```json
{
  "id": "uuid",
  "name": "Travel Backpack Pro",
  "description": "Spacious and durable 60L backpack...",
  "price": "129.99",
  "currency": "USD",
  "image_url": "https://example.com/backpack.jpg",
  "category": "backpack",
  "sku": "TBPRO-001",
  "created_by": "uuid",
  "created_at": "2024-05-22T10:00:00Z",
  "updated_at": "2024-05-22T10:00:00Z"
}
```

---

### Update Product
**PUT** `/shop/products/[id]`

Update a product (creator or admin only).

**Request Body:**
```json
{
  "price": "139.99",
  "description": "Updated description..."
}
```

**Response (200):**
```json
{
  "id": "uuid",
  "name": "Travel Backpack Pro",
  "description": "Updated description...",
  "price": "139.99",
  "currency": "USD",
  "image_url": "https://example.com/backpack.jpg",
  "category": "backpack",
  "sku": "TBPRO-001",
  "created_by": "uuid",
  "created_at": "2024-05-22T10:00:00Z",
  "updated_at": "2024-05-22T10:05:00Z"
}
```

---

### Delete Product
**DELETE** `/shop/products/[id]`

Delete a product (creator or admin only).

**Response (200):**
```json
{
  "success": true
}
```

---

## Gallery Management

### Get All Gallery Images
**GET** `/gallery`

Retrieve all gallery images (public endpoint).

**Query Parameters:**
- `category=[category]` - Filter by category (e.g., "tours", "destinations", "teams")

**Response (200):**
```json
[
  {
    "id": "uuid",
    "title": "Sunset at Bali Beach",
    "description": "Beautiful sunset photography...",
    "image_url": "https://example.com/sunset.jpg",
    "image_path": "gallery/sunset-bali.jpg",
    "gallery_category": "destinations",
    "sort_order": 1,
    "created_by": "uuid",
    "created_at": "2024-05-22T10:00:00Z",
    "updated_at": "2024-05-22T10:00:00Z"
  }
]
```

---

### Create Gallery Image
**POST** `/gallery`

Add a new image to the gallery (requires editor or admin role).

**Request Body:**
```json
{
  "title": "Sunset at Bali Beach",
  "description": "Beautiful sunset photography...",
  "image_url": "https://example.com/sunset.jpg",
  "image_path": "gallery/sunset-bali.jpg",
  "gallery_category": "destinations",
  "sort_order": 1
}
```

**Response (201):**
```json
{
  "id": "uuid",
  "title": "Sunset at Bali Beach",
  "description": "Beautiful sunset photography...",
  "image_url": "https://example.com/sunset.jpg",
  "image_path": "gallery/sunset-bali.jpg",
  "gallery_category": "destinations",
  "sort_order": 1,
  "created_by": "uuid",
  "created_at": "2024-05-22T10:00:00Z",
  "updated_at": "2024-05-22T10:00:00Z"
}
```

---

### Get Gallery Image Details
**GET** `/gallery/[id]`

Get a specific gallery image by ID.

**Response (200):**
```json
{
  "id": "uuid",
  "title": "Sunset at Bali Beach",
  "description": "Beautiful sunset photography...",
  "image_url": "https://example.com/sunset.jpg",
  "image_path": "gallery/sunset-bali.jpg",
  "gallery_category": "destinations",
  "sort_order": 1,
  "created_by": "uuid",
  "created_at": "2024-05-22T10:00:00Z",
  "updated_at": "2024-05-22T10:00:00Z"
}
```

---

### Update Gallery Image
**PUT** `/gallery/[id]`

Update a gallery image (creator or admin only).

**Request Body:**
```json
{
  "sort_order": 2,
  "description": "Updated description..."
}
```

**Response (200):**
```json
{
  "id": "uuid",
  "title": "Sunset at Bali Beach",
  "description": "Updated description...",
  "image_url": "https://example.com/sunset.jpg",
  "image_path": "gallery/sunset-bali.jpg",
  "gallery_category": "destinations",
  "sort_order": 2,
  "created_by": "uuid",
  "created_at": "2024-05-22T10:00:00Z",
  "updated_at": "2024-05-22T10:05:00Z"
}
```

---

### Delete Gallery Image
**DELETE** `/gallery/[id]`

Delete a gallery image (creator or admin only).

**Response (200):**
```json
{
  "success": true
}
```

---

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "error": "Invalid request body or missing required fields"
}
```

### 401 Unauthorized
```json
{
  "error": "Unauthorized"
}
```

### 404 Not Found
```json
{
  "error": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Server error message"
}
```

---

## Usage Examples

### Example: Add a new blog post with cURL

```bash
curl -X POST http://localhost:3000/api/blog/posts \
  -H "Content-Type: application/json" \
  -H "Cookie: sb-session-token=your-session-token" \
  -d '{
    "title": "Beautiful Bali Destinations",
    "slug": "beautiful-bali-destinations",
    "content": "Bali is known for its stunning landscapes...",
    "excerpt": "Explore the beauty of Bali",
    "featured_image_url": "https://example.com/bali.jpg",
    "status": "published",
    "categories": ["category-uuid"]
  }'
```

### Example: Fetch all career postings with JavaScript

```javascript
async function getCareers() {
  const response = await fetch('/api/careers')
  const careers = await response.json()
  return careers
}
```

### Example: Create a product with JavaScript

```javascript
async function createProduct(productData) {
  const response = await fetch('/api/shop/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Important: send cookies with request
    body: JSON.stringify(productData),
  })
  return response.json()
}
```

---

## Database Tables Overview

| Table | Purpose | Access |
|-------|---------|--------|
| `users_profile` | User accounts and roles | Authenticated users |
| `careers` | Job postings | Public read, Editor+ write |
| `blog_posts` | Blog articles | Public (published), Editors |
| `blog_categories` | Blog categories | Public read, Admin write |
| `blog_posts_categories` | Post-category relationships | Public read, Editor write |
| `shop_products` | Shop items/gear | Public read, Editor+ write |
| `gallery_images` | Gallery photos | Public read, Editor+ write |

---

## Rate Limiting & Quotas

Currently, there is no rate limiting implemented. For production deployments, consider implementing:
- API rate limiting per IP
- Per-user request quotas
- Database query optimization

---

## Future Enhancements

- Image upload endpoints with Supabase Storage
- Pagination for large datasets
- Advanced filtering and search
- Bulk operations
- Webhooks for content changes
- API key authentication alternative to session-based auth
