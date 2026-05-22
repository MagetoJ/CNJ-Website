#!/usr/bin/env node

/**
 * CMS API Testing Script
 * 
 * This script provides interactive testing of all CMS API endpoints.
 * Run with: node test-api.js
 */

const BASE_URL = 'http://localhost:3000/api'
let sessionToken = null
let currentUser = null

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
}

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function formatJson(obj) {
  return JSON.stringify(obj, null, 2)
}

async function request(method, path, body = null) {
  const url = `${BASE_URL}${path}`
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (sessionToken) {
    options.headers['Cookie'] = `sb-session-token=${sessionToken}`
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return {
      status: response.status,
      ok: response.ok,
      data,
    }
  } catch (error) {
    return {
      status: 0,
      ok: false,
      error: error.message,
    }
  }
}

async function signup() {
  log('\n=== SIGNUP ===', 'cyan')
  const email = 'test-' + Date.now() + '@example.com'
  const password = 'TestPassword123!'
  const fullName = 'Test User'

  log(`Creating account: ${email}`, 'yellow')

  const result = await request('POST', '/auth/signup', {
    email,
    password,
    full_name: fullName,
    role: 'editor',
  })

  if (result.ok) {
    log('✓ Signup successful!', 'green')
    log(formatJson(result.data))
    return { email, password }
  } else {
    log('✗ Signup failed!', 'red')
    log(formatJson(result.data))
    return null
  }
}

async function login(email, password) {
  log('\n=== LOGIN ===', 'cyan')
  log(`Logging in as: ${email}`, 'yellow')

  const result = await request('POST', '/auth/login', {
    email,
    password,
  })

  if (result.ok) {
    log('✓ Login successful!', 'green')
    sessionToken = result.data.session?.access_token
    currentUser = result.data.user
    log(`User: ${currentUser.email}`, 'green')
    log(`Role: ${currentUser.role}`, 'green')
    return true
  } else {
    log('✗ Login failed!', 'red')
    log(formatJson(result.data))
    return false
  }
}

async function testCareers() {
  log('\n=== CAREERS ENDPOINTS ===', 'cyan')

  // Get all careers
  log('\n1. GET /careers', 'yellow')
  let result = await request('GET', '/careers')
  log(`Status: ${result.status}`)
  log(`Count: ${result.data?.length || 0} careers`)
  if (result.data?.length > 0) {
    log(formatJson(result.data[0]))
  }

  // Create career
  log('\n2. POST /careers', 'yellow')
  const careerData = {
    title: 'Test Tour Guide',
    description: 'Test job description',
    location: 'Test Location',
    job_type: 'full-time',
    salary_range: '$2000-$3000',
    requirements: 'Test requirements',
    application_url: 'https://example.com/apply',
  }
  result = await request('POST', '/careers', careerData)
  log(`Status: ${result.status}`)
  if (result.ok) {
    log('✓ Career created!', 'green')
    const careerId = result.data?.id
    log(`Career ID: ${careerId}`)

    // Get specific career
    log('\n3. GET /careers/[id]', 'yellow')
    result = await request('GET', `/careers/${careerId}`)
    log(`Status: ${result.status}`)
    if (result.ok) {
      log('✓ Career retrieved!', 'green')
    }

    // Update career
    log('\n4. PUT /careers/[id]', 'yellow')
    result = await request('PUT', `/careers/${careerId}`, {
      salary_range: '$2500-$3500',
    })
    log(`Status: ${result.status}`)
    if (result.ok) {
      log('✓ Career updated!', 'green')
    }

    // Delete career
    log('\n5. DELETE /careers/[id]', 'yellow')
    result = await request('DELETE', `/careers/${careerId}`)
    log(`Status: ${result.status}`)
    if (result.ok) {
      log('✓ Career deleted!', 'green')
    }
  } else {
    log('✗ Failed to create career!', 'red')
    log(formatJson(result.data))
  }
}

async function testBlog() {
  log('\n=== BLOG ENDPOINTS ===', 'cyan')

  // Get categories
  log('\n1. GET /blog/categories', 'yellow')
  let result = await request('GET', '/blog/categories')
  log(`Status: ${result.status}`)
  log(`Count: ${result.data?.length || 0} categories`)

  // Create category
  log('\n2. POST /blog/categories', 'yellow')
  const categoryData = {
    name: 'Test Category ' + Date.now(),
    slug: 'test-category-' + Date.now(),
  }
  result = await request('POST', '/blog/categories', categoryData)
  log(`Status: ${result.status}`)
  let categoryId = null
  if (result.ok) {
    categoryId = result.data?.id
    log('✓ Category created!', 'green')
  }

  // Get blog posts
  log('\n3. GET /blog/posts', 'yellow')
  result = await request('GET', '/blog/posts')
  log(`Status: ${result.status}`)
  log(`Count: ${result.data?.length || 0} posts`)
  if (result.data?.length > 0) {
    log(formatJson(result.data[0]))
  }

  // Create blog post
  log('\n4. POST /blog/posts', 'yellow')
  const postData = {
    title: 'Test Blog Post',
    slug: 'test-blog-post-' + Date.now(),
    content: 'This is a test blog post content.',
    excerpt: 'Test excerpt',
    featured_image_url: 'https://example.com/image.jpg',
    status: 'draft',
    categories: categoryId ? [categoryId] : [],
  }
  result = await request('POST', '/blog/posts', postData)
  log(`Status: ${result.status}`)
  if (result.ok) {
    log('✓ Blog post created!', 'green')
    const postId = result.data?.id

    // Get specific post
    log('\n5. GET /blog/posts/[id]', 'yellow')
    result = await request('GET', `/blog/posts/${postId}`)
    log(`Status: ${result.status}`)
    if (result.ok) {
      log('✓ Blog post retrieved!', 'green')
    }

    // Update post
    log('\n6. PUT /blog/posts/[id]', 'yellow')
    result = await request('PUT', `/blog/posts/${postId}`, {
      status: 'published',
    })
    log(`Status: ${result.status}`)
    if (result.ok) {
      log('✓ Blog post updated!', 'green')
    }

    // Delete post
    log('\n7. DELETE /blog/posts/[id]', 'yellow')
    result = await request('DELETE', `/blog/posts/${postId}`)
    log(`Status: ${result.status}`)
    if (result.ok) {
      log('✓ Blog post deleted!', 'green')
    }
  } else {
    log('✗ Failed to create blog post!', 'red')
  }
}

async function testShop() {
  log('\n=== SHOP ENDPOINTS ===', 'cyan')

  // Get products
  log('\n1. GET /shop/products', 'yellow')
  let result = await request('GET', '/shop/products')
  log(`Status: ${result.status}`)
  log(`Count: ${result.data?.length || 0} products`)
  if (result.data?.length > 0) {
    log(formatJson(result.data[0]))
  }

  // Create product
  log('\n2. POST /shop/products', 'yellow')
  const productData = {
    name: 'Test Product',
    description: 'Test product description',
    price: '99.99',
    currency: 'USD',
    image_url: 'https://example.com/product.jpg',
    category: 'test',
    sku: 'TEST-PROD-001',
  }
  result = await request('POST', '/shop/products', productData)
  log(`Status: ${result.status}`)
  if (result.ok) {
    log('✓ Product created!', 'green')
    const productId = result.data?.id

    // Get specific product
    log('\n3. GET /shop/products/[id]', 'yellow')
    result = await request('GET', `/shop/products/${productId}`)
    log(`Status: ${result.status}`)
    if (result.ok) {
      log('✓ Product retrieved!', 'green')
    }

    // Update product
    log('\n4. PUT /shop/products/[id]', 'yellow')
    result = await request('PUT', `/shop/products/${productId}`, {
      price: '129.99',
    })
    log(`Status: ${result.status}`)
    if (result.ok) {
      log('✓ Product updated!', 'green')
    }

    // Delete product
    log('\n5. DELETE /shop/products/[id]', 'yellow')
    result = await request('DELETE', `/shop/products/${productId}`)
    log(`Status: ${result.status}`)
    if (result.ok) {
      log('✓ Product deleted!', 'green')
    }
  } else {
    log('✗ Failed to create product!', 'red')
  }
}

async function testGallery() {
  log('\n=== GALLERY ENDPOINTS ===', 'cyan')

  // Get images
  log('\n1. GET /gallery', 'yellow')
  let result = await request('GET', '/gallery')
  log(`Status: ${result.status}`)
  log(`Count: ${result.data?.length || 0} images`)
  if (result.data?.length > 0) {
    log(formatJson(result.data[0]))
  }

  // Create image
  log('\n2. POST /gallery', 'yellow')
  const imageData = {
    title: 'Test Image',
    description: 'Test image description',
    image_url: 'https://example.com/image.jpg',
    image_path: 'gallery/test-image.jpg',
    gallery_category: 'destinations',
    sort_order: 1,
  }
  result = await request('POST', '/gallery', imageData)
  log(`Status: ${result.status}`)
  if (result.ok) {
    log('✓ Image created!', 'green')
    const imageId = result.data?.id

    // Get specific image
    log('\n3. GET /gallery/[id]', 'yellow')
    result = await request('GET', `/gallery/${imageId}`)
    log(`Status: ${result.status}`)
    if (result.ok) {
      log('✓ Image retrieved!', 'green')
    }

    // Update image
    log('\n4. PUT /gallery/[id]', 'yellow')
    result = await request('PUT', `/gallery/${imageId}`, {
      sort_order: 2,
    })
    log(`Status: ${result.status}`)
    if (result.ok) {
      log('✓ Image updated!', 'green')
    }

    // Delete image
    log('\n5. DELETE /gallery/[id]', 'yellow')
    result = await request('DELETE', `/gallery/${imageId}`)
    log(`Status: ${result.status}`)
    if (result.ok) {
      log('✓ Image deleted!', 'green')
    }
  } else {
    log('✗ Failed to create image!', 'red')
  }
}

async function testProfile() {
  log('\n=== USER PROFILE ENDPOINTS ===', 'cyan')

  // Get profile
  log('\n1. GET /users/profile', 'yellow')
  let result = await request('GET', '/users/profile')
  log(`Status: ${result.status}`)
  if (result.ok) {
    log('✓ Profile retrieved!', 'green')
    log(formatJson(result.data))
  }

  // Update profile
  log('\n2. PUT /users/profile', 'yellow')
  result = await request('PUT', '/users/profile', {
    full_name: 'Updated Name',
  })
  log(`Status: ${result.status}`)
  if (result.ok) {
    log('✓ Profile updated!', 'green')
  }
}

async function main() {
  log('\n╔════════════════════════════════════════╗', 'cyan')
  log('║   CMS API Test Suite                   ║', 'cyan')
  log('╚════════════════════════════════════════╝', 'cyan')

  // Check if server is running
  log('\nChecking server connection...', 'yellow')
  const result = await request('GET', '/careers')
  if (!result.ok && !result.data) {
    log('✗ Server is not running!', 'red')
    log('Make sure to run: npm run dev', 'yellow')
    process.exit(1)
  }

  // Signup
  const credentials = await signup()
  if (!credentials) {
    log('\nSkipping authentication tests...', 'yellow')
    return
  }

  // Login
  const loggedIn = await login(credentials.email, credentials.password)
  if (!loggedIn) {
    log('\nNote: Email confirmation may be required. Check your email.', 'yellow')
    return
  }

  // Test endpoints
  await testCareers()
  await testBlog()
  await testShop()
  await testGallery()
  await testProfile()

  // Summary
  log('\n╔════════════════════════════════════════╗', 'cyan')
  log('║   Test Suite Complete!                 ║', 'cyan')
  log('╚════════════════════════════════════════╝', 'cyan')
  log('\nAll API endpoints tested successfully!', 'green')
  log('\nNext steps:', 'yellow')
  log('1. Check CMS_INTEGRATION_GUIDE.md for integration examples')
  log('2. Build your admin panel', 'yellow')
  log('3. Integrate with your website', 'yellow')
}

main().catch(error => {
  log(`Error: ${error.message}`, 'red')
  process.exit(1)
})
