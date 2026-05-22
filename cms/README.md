# Tours & Travels CMS

A complete, production-ready Content Management System (CMS) for managing your tours and travels website.

## 📋 Quick Links

| Document | Purpose |
|----------|---------|
| **[BUILD_SUMMARY.md](./BUILD_SUMMARY.md)** | 👈 START HERE - Overview of what was built |
| **[SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)** | Step-by-step setup and configuration guide |
| **[CMS_API_DOCUMENTATION.md](./CMS_API_DOCUMENTATION.md)** | Complete API reference with examples |
| **[CMS_INTEGRATION_GUIDE.md](./CMS_INTEGRATION_GUIDE.md)** | How to integrate API with your website |
| **[CMS_README.md](./CMS_README.md)** | Detailed feature overview and architecture |


## 🚀 Get Started in 5 Minutes

### 1. Install dependencies
```bash
npm install
```

### 2. Start the server
```bash
npm run dev
```

### 3. Read BUILD_SUMMARY.md
Open `BUILD_SUMMARY.md` to understand what's been created.

### 4. Follow SETUP_INSTRUCTIONS.md
Follow the setup guide to create your admin account.

### 5. Start integrating
Use `CMS_INTEGRATION_GUIDE.md` to add API calls to your website.

## 📚 Documentation Map

### For Quick Overview
1. Start with **[BUILD_SUMMARY.md](./BUILD_SUMMARY.md)** - 5 min read
2. Check **[CMS_README.md](./CMS_README.md)** - 10 min read

### For Setup & Getting Started
1. Follow **[SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)** - Step by step
2. Run `node test-api.js` to verify everything works

### For API Integration
1. Review **[CMS_API_DOCUMENTATION.md](./CMS_API_DOCUMENTATION.md)** - Complete reference
2. Use examples from **[CMS_INTEGRATION_GUIDE.md](./CMS_INTEGRATION_GUIDE.md)** - Copy & paste code

### For Building Admin Panel
1. See component examples in **[CMS_INTEGRATION_GUIDE.md](./CMS_INTEGRATION_GUIDE.md)**
2. Use the API endpoints from **[CMS_API_DOCUMENTATION.md](./CMS_API_DOCUMENTATION.md)**

## 🗄️ Database Tables

- **users_profile** - User accounts with roles
- **careers** - Job postings
- **blog_posts** - Blog articles
- **blog_categories** - Blog categories
- **blog_posts_categories** - Post-category mappings
- **shop_products** - Shop gear products
- **gallery_images** - Gallery photos

## 🔑 Key Features

✅ Full CRUD API for all content types
✅ User authentication with email/password
✅ Role-based access control (admin/editor)
✅ Blog post categories and publishing workflow
✅ Product categorization for shop
✅ Gallery image organization with sorting
✅ Row Level Security (RLS) for data protection
✅ Timestamps and user tracking on all content

## 🎯 API Endpoints

### Authentication (4)
- Sign up, login, logout, profile management

### Careers (5)
- List, create, read, update, delete job postings

### Blog (7)
- Posts: list, create, read, update, delete
- Categories: list, create

### Shop (5)
- Products: list, create, read, update, delete

### Gallery (5)
- Images: list, create, read, update, delete

**Total: 25+ endpoints**

## 🔐 Access Control

| Action | Public | Editor | Admin |
|--------|--------|--------|-------|
| View published content | ✅ | ✅ | ✅ |
| Create content | ❌ | ✅ | ✅ |
| Edit own content | ❌ | ✅ | ✅ |
| Edit all content | ❌ | ❌ | ✅ |
| Delete own content | ❌ | ✅ | ✅ |
| Delete all content | ❌ | ❌ | ✅ |
| Manage users | ❌ | ❌ | ✅ |

## 📁 File Structure

```
app/api/
├── auth/               # Authentication endpoints
├── users/              # User profile endpoints
├── careers/            # Careers management
├── blog/              # Blog posts and categories
├── shop/              # Shop products
└── gallery/           # Gallery images

lib/supabase/          # Supabase client setup

Documentation/
├── README.md                      # This file
├── BUILD_SUMMARY.md              # What was built
├── SETUP_INSTRUCTIONS.md         # How to set up
├── CMS_API_DOCUMENTATION.md      # API reference
├── CMS_INTEGRATION_GUIDE.md      # Integration examples
└── CMS_README.md                 # Feature overview
```

## 🧪 Testing

Run the included API test script:

```bash
node test-api.js
```

This will:
- Create a test user account
- Log in
- Test all CRUD operations
- Verify API functionality
- Clean up test data

## 🌐 Base URL

```
http://localhost:3000/api
```

All endpoints are prefixed with `/api`.


## 🛠️ Example: Get All Careers

```javascript
// Fetch all careers (public endpoint)
const careers = await fetch('/api/careers').then(r => r.json())

careers.forEach(job => {
  console.log(`${job.title} - ${job.location}`)
})
```

## 🛠️ Example: Create Blog Post

```javascript
// Create a published blog post (requires login)
const post = await fetch('/api/blog/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',  // Important!
  body: JSON.stringify({
    title: 'My Blog Post',
    slug: 'my-blog-post',
    content: 'Article content here...',
    excerpt: 'Short excerpt...',
    featured_image_url: 'https://example.com/image.jpg',
    status: 'published',
    categories: []
  })
}).then(r => r.json())

console.log('Published:', post.id)
```

## 📖 Common Tasks

### Add Job Posting
See SETUP_INSTRUCTIONS.md > Step 6

### Publish Blog Article
See CMS_INTEGRATION_GUIDE.md > Blog Examples

### Manage Shop Products
See CMS_API_DOCUMENTATION.md > Shop Gear

### Organize Gallery
See CMS_INTEGRATION_GUIDE.md > Gallery Component

## 🐛 Troubleshooting

### 401 Unauthorized
- Make sure you've logged in
- Include `credentials: 'include'` in fetch requests
- Check that session token is valid

### 404 Not Found
- Verify resource exists
- Check the resource ID is correct
- Check the endpoint path

### CORS Errors
- API and website should be on same domain
- For separate deployments, configure CORS headers

See SETUP_INSTRUCTIONS.md > Troubleshooting for more help.

## 📚 Learn More

- **API Details**: See [CMS_API_DOCUMENTATION.md](./CMS_API_DOCUMENTATION.md)
- **Integration**: See [CMS_INTEGRATION_GUIDE.md](./CMS_INTEGRATION_GUIDE.md)
- **Setup**: See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)
- **Features**: See [CMS_README.md](./CMS_README.md)
- **Summary**: See [BUILD_SUMMARY.md](./BUILD_SUMMARY.md)

## 🚀 Deployment

### Deploy to Vercel
1. Click "Publish" in v0 UI
2. Connect GitHub repository
3. Add environment variables in Vercel dashboard
4. Deploy!

See SETUP_INSTRUCTIONS.md > Production Deployment for details.

## 🔒 Security

- Passwords are securely hashed
- Row Level Security (RLS) policies protect data
- Session-based authentication with HTTP-only cookies
- Email verification for new accounts
- Role-based access control

See SETUP_INSTRUCTIONS.md > Security for more.

## ❓ Support

- **Supabase Issues**: <https://supabase.com/support>
- **Next.js Help**: <https://discord.gg/bUG55Y5>
- **API Documentation**: See CMS_API_DOCUMENTATION.md
- **Integration Help**: See CMS_INTEGRATION_GUIDE.md

## 📝 What's Included

✅ 7 database tables (with RLS policies)
✅ 25+ REST API endpoints
✅ Authentication system
✅ 5 documentation files (~2000 lines)
✅ API testing script
✅ React component examples
✅ cURL/JavaScript examples
✅ Setup guide and troubleshooting

## 📊 Stats

- **Tables**: 7
- **Endpoints**: 25+
- **Documentation**: ~2000 lines
- **Code Files**: 14
- **Time to Setup**: ~5 minutes
- **Time to First Content**: ~10 minutes

## 🎉 Ready to Go!

Your CMS is ready to use. Start with:

1. **[BUILD_SUMMARY.md](./BUILD_SUMMARY.md)** ← Read this first!
2. **[SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)** ← Then follow this
3. **[CMS_INTEGRATION_GUIDE.md](./CMS_INTEGRATION_GUIDE.md)** ← Then integrate

Good luck! 🚀

---

**Last Updated**: May 22, 2026
**Status**: Production Ready ✅
