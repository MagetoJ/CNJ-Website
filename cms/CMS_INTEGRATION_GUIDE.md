# CMS Integration Guide

This guide shows you how to integrate the CMS API with your tours and travels website.

## Quick Start

### 1. Authentication Setup

First, create a user account through the signup endpoint:

```javascript
const signUp = async (email, password, fullName) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
      full_name: fullName,
      role: 'editor' // or 'admin'
    })
  })
  return response.json()
}
```

Then login to get a session:

```javascript
const login = async (email, password) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  return response.json()
}
```

### 2. Fetching Public Content

These endpoints don't require authentication:

#### Get All Careers

```javascript
const getCareers = async () => {
  const response = await fetch('/api/careers')
  return response.json()
}

// Usage
getCareers().then(careers => {
  console.log('Available positions:', careers)
  careers.forEach(job => {
    console.log(`${job.title} - ${job.location}`)
  })
})
```

#### Get All Blog Posts

```javascript
const getBlogPosts = async () => {
  const response = await fetch('/api/blog/posts')
  return response.json()
}

// Get posts from specific category
const getBlogPostsByCategory = async (categoryId) => {
  const response = await fetch(`/api/blog/posts?category=${categoryId}`)
  return response.json()
}
```

#### Get All Shop Products

```javascript
const getProducts = async (category = null) => {
  const url = category 
    ? `/api/shop/products?category=${category}`
    : '/api/shop/products'
  const response = await fetch(url)
  return response.json()
}

// Get products by category
getProducts('backpack').then(products => {
  console.log('Backpacks:', products)
})
```

#### Get Gallery Images

```javascript
const getGalleryImages = async (category = null) => {
  const url = category
    ? `/api/gallery?category=${category}`
    : '/api/gallery'
  const response = await fetch(url)
  return response.json()
}

// Get destination photos
getGalleryImages('destinations').then(images => {
  console.log('Destination photos:', images)
})
```

### 3. Managing Content (Admin/Editor Only)

These endpoints require authentication. Make sure to include credentials:

#### Create a Career Posting

```javascript
const createCareer = async (careerData) => {
  const response = await fetch('/api/careers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // Important: include auth cookies
    body: JSON.stringify(careerData)
  })
  return response.json()
}

// Usage
createCareer({
  title: 'Adventure Tour Guide',
  description: 'Lead exciting adventure tours...',
  location: 'Nepal',
  job_type: 'full-time',
  salary_range: '$1500-$2500',
  requirements: 'Experience in mountain guides',
  application_url: 'https://yoursite.com/apply'
}).then(job => console.log('Created:', job.id))
```

#### Create a Blog Post

```javascript
const createBlogPost = async (postData) => {
  const response = await fetch('/api/blog/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(postData)
  })
  return response.json()
}

// Usage
createBlogPost({
  title: 'Top 5 Hiking Trails in Himalayas',
  slug: 'top-5-hiking-trails-himalayas',
  content: 'Detailed content here...',
  excerpt: 'Discover amazing hiking trails',
  featured_image_url: 'https://example.com/hiking.jpg',
  status: 'published', // or 'draft'
  categories: ['hiking-uuid', 'destinations-uuid']
}).then(post => console.log('Blog published:', post.slug))
```

#### Create/Update Products

```javascript
const createProduct = async (productData) => {
  const response = await fetch('/api/shop/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(productData)
  })
  return response.json()
}

// Usage
createProduct({
  name: 'Professional Hiking Boots',
  description: 'Durable boots for mountain trekking',
  price: '189.99',
  currency: 'USD',
  image_url: 'https://example.com/boots.jpg',
  category: 'footwear',
  sku: 'BOOT-HIKE-001'
}).then(product => console.log('Product created:', product.id))

// Update product
const updateProduct = async (productId, updates) => {
  const response = await fetch(`/api/shop/products/${productId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(updates)
  })
  return response.json()
}
```

#### Add Gallery Images

```javascript
const addGalleryImage = async (imageData) => {
  const response = await fetch('/api/gallery', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(imageData)
  })
  return response.json()
}

// Usage
addGalleryImage({
  title: 'Everest Base Camp',
  description: 'Stunning view from base camp',
  image_url: 'https://example.com/everest.jpg',
  image_path: 'gallery/everest-basecamp.jpg',
  gallery_category: 'destinations',
  sort_order: 1
}).then(image => console.log('Image added:', image.id))
```

### 4. Update Operations

#### Update a Career

```javascript
const updateCareer = async (careerId, updates) => {
  const response = await fetch(`/api/careers/${careerId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(updates)
  })
  return response.json()
}

// Usage
updateCareer('job-uuid', {
  salary_range: '$2000-$3000',
  description: 'Updated job description'
})
```

#### Update a Blog Post

```javascript
const updateBlogPost = async (postId, updates) => {
  const response = await fetch(`/api/blog/posts/${postId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(updates)
  })
  return response.json()
}

// Change status to published
updateBlogPost('post-uuid', {
  status: 'published'
})
```

### 5. Delete Operations

#### Delete Content

```javascript
const deleteCareer = async (careerId) => {
  const response = await fetch(`/api/careers/${careerId}`, {
    method: 'DELETE',
    credentials: 'include'
  })
  return response.json()
}

const deleteBlogPost = async (postId) => {
  const response = await fetch(`/api/blog/posts/${postId}`, {
    method: 'DELETE',
    credentials: 'include'
  })
  return response.json()
}

const deleteProduct = async (productId) => {
  const response = await fetch(`/api/shop/products/${productId}`, {
    method: 'DELETE',
    credentials: 'include'
  })
  return response.json()
}

const deleteGalleryImage = async (imageId) => {
  const response = await fetch(`/api/gallery/${imageId}`, {
    method: 'DELETE',
    credentials: 'include'
  })
  return response.json()
}
```

## React Component Examples

### Careers Display Component

```jsx
import { useEffect, useState } from 'react'

export function CareersSection() {
  const [careers, setCareers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/careers')
      .then(res => res.json())
      .then(data => {
        setCareers(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading careers...</div>

  return (
    <div className="careers-section">
      <h2>Join Our Team</h2>
      <div className="careers-grid">
        {careers.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p className="location">{job.location}</p>
            <p className="type">{job.job_type}</p>
            <p className="description">{job.description}</p>
            <p className="salary">{job.salary_range}</p>
            <a href={job.application_url} className="apply-btn">
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
```

### Blog Display Component

```jsx
import { useEffect, useState } from 'react'
import Link from 'next/link'

export function BlogSection() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/blog/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading blog posts...</div>

  return (
    <div className="blog-section">
      <h2>Travel Stories</h2>
      <div className="posts-grid">
        {posts.map(post => (
          <article key={post.id} className="blog-card">
            {post.featured_image_url && (
              <img src={post.featured_image_url} alt={post.title} />
            )}
            <h3>{post.title}</h3>
            <p className="excerpt">{post.excerpt}</p>
            <p className="date">{new Date(post.published_at).toLocaleDateString()}</p>
            <Link href={`/blog/${post.slug}`}>
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
```

### Shop Products Component

```jsx
import { useEffect, useState } from 'react'

export function ShopSection() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/shop/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading products...</div>

  return (
    <div className="shop-section">
      <h2>Gear & Equipment</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            {product.image_url && (
              <img src={product.image_url} alt={product.name} />
            )}
            <h3>{product.name}</h3>
            <p className="description">{product.description}</p>
            <p className="price">
              ${product.price} {product.currency}
            </p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}
```

### Gallery Component

```jsx
import { useEffect, useState } from 'react'
import Image from 'next/image'

export function GallerySection() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('destinations')

  useEffect(() => {
    const url = selectedCategory
      ? `/api/gallery?category=${selectedCategory}`
      : '/api/gallery'
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setImages(data)
        setLoading(false)
      })
  }, [selectedCategory])

  if (loading) return <div>Loading gallery...</div>

  return (
    <div className="gallery-section">
      <h2>Gallery</h2>
      
      <div className="category-filter">
        <button 
          onClick={() => setSelectedCategory('destinations')}
          className={selectedCategory === 'destinations' ? 'active' : ''}
        >
          Destinations
        </button>
        <button 
          onClick={() => setSelectedCategory('tours')}
          className={selectedCategory === 'tours' ? 'active' : ''}
        >
          Tours
        </button>
        <button 
          onClick={() => setSelectedCategory('teams')}
          className={selectedCategory === 'teams' ? 'active' : ''}
        >
          Our Team
        </button>
      </div>

      <div className="gallery-grid">
        {images.map(img => (
          <div key={img.id} className="gallery-item">
            <img src={img.image_url} alt={img.title} />
            <h4>{img.title}</h4>
            <p>{img.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
```

## Admin Panel Setup

For managing CMS content, create an admin panel with these features:

```jsx
export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('careers')

  return (
    <div className="admin-dashboard">
      <header>
        <h1>CMS Admin Panel</h1>
        <nav>
          <button onClick={() => setActiveTab('careers')}>Careers</button>
          <button onClick={() => setActiveTab('blog')}>Blog</button>
          <button onClick={() => setActiveTab('shop')}>Shop</button>
          <button onClick={() => setActiveTab('gallery')}>Gallery</button>
        </nav>
      </header>

      <main>
        {activeTab === 'careers' && <CareersManager />}
        {activeTab === 'blog' && <BlogManager />}
        {activeTab === 'shop' && <ShopManager />}
        {activeTab === 'gallery' && <GalleryManager />}
      </main>
    </div>
  )
}
```

## Security Notes

1. **Always use `credentials: 'include'`** when making authenticated requests
2. **Validate user input** before sending to the API
3. **Only expose sensitive endpoints** to authenticated users
4. **Use HTTPS** in production
5. **Implement rate limiting** for public endpoints in production
6. **Never store API keys in client-side code**

## Troubleshooting

### 401 Unauthorized Errors
- Make sure you're logged in before making authenticated requests
- Include `credentials: 'include'` in fetch options
- Check that the session cookie is being set

### CORS Errors
- The API is on the same domain, so CORS shouldn't be an issue
- If deploying separately, configure CORS headers appropriately

### 404 Errors
- Check the resource ID is correct
- Verify the resource exists in the database
- Ensure you're using the correct API endpoint path

---

For complete API documentation, see [CMS_API_DOCUMENTATION.md](./CMS_API_DOCUMENTATION.md)
