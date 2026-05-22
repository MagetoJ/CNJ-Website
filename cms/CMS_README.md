# Tours & Travels CMS - Complete Implementation

This is a comprehensive Content Management System (CMS) for managing your tours and travels website. It includes everything you need to manage careers, blog content, shop gear, and gallery images.

## What's Included

### ✅ Database Schema (Supabase)
- **7 Main Tables** with proper relationships
- **Row Level Security (RLS)** policies for access control
- **Role-based permissions** (admin and editor roles)
- Automatic timestamps on all tables

### ✅ REST API Endpoints (25+ Endpoints)
- Authentication (signup, login, logout, profile management)
- Careers management (CRUD operations)
- Blog posts management with categories
- Shop products management
- Gallery images management
- All endpoints include proper error handling

### ✅ Security Features
- User authentication with Supabase Auth
- Row Level Security for data protection
- Role-based access control (admin/editor/public)
- Session-based authentication
- Secure password handling

### ✅ Documentation
- Complete API documentation with examples
- Integration guide for your website
- JavaScript/React examples
- Database schema overview

## Quick Start

### 1. Database Setup (Already Done!)
The Supabase database has been configured with:
- All required tables created
- RLS policies enabled and configured
- Proper foreign key relationships
- Admin and editor user roles

### 2. Start Your Server
```bash
npm install
npm run dev
```

The API will be available at `http://localhost:3000/api`

### 3. Create an Admin User

Use the signup endpoint to create your first admin user:

```bash
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "secure-password",
    "full_name": "Admin User",
    "role": "admin"
  }'
```

Then login:

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "secure-password"
  }'
```

### 4. Integrate with Your Website

See `CMS_INTEGRATION_GUIDE.md` for complete integration examples with:
- Fetch careers to display job postings
- Display blog posts and categories
- Show shop products with filtering
- Display gallery images with categories
- React component examples
- Admin panel setup

## API Endpoints Overview

### Authentication
- `POST /api/auth/signup` - Create new user
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/users/profile` - Get current user profile
- `PUT /api/users/profile` - Update user profile

### Careers
- `GET /api/careers` - Get all careers (public)
- `POST /api/careers` - Create career (editor+)
- `GET /api/careers/[id]` - Get career details
- `PUT /api/careers/[id]` - Update career (creator/admin)
- `DELETE /api/careers/[id]` - Delete career (creator/admin)

### Blog
- `GET /api/blog/posts` - Get published posts (public)
- `POST /api/blog/posts` - Create post (editor+)
- `GET /api/blog/posts/[id]` - Get post details
- `PUT /api/blog/posts/[id]` - Update post (creator/admin)
- `DELETE /api/blog/posts/[id]` - Delete post (creator/admin)
- `GET /api/blog/categories` - Get categories (public)
- `POST /api/blog/categories` - Create category (admin only)

### Shop
- `GET /api/shop/products` - Get all products (public)
- `POST /api/shop/products` - Create product (editor+)
- `GET /api/shop/products/[id]` - Get product details
- `PUT /api/shop/products/[id]` - Update product (creator/admin)
- `DELETE /api/shop/products/[id]` - Delete product (creator/admin)

### Gallery
- `GET /api/gallery` - Get gallery images (public)
- `POST /api/gallery` - Add image (editor+)
- `GET /api/gallery/[id]` - Get image details
- `PUT /api/gallery/[id]` - Update image (creator/admin)
- `DELETE /api/gallery/[id]` - Delete image (creator/admin)

## Database Tables

### users_profile
Stores user account information and roles.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key, references auth.users |
| email | TEXT | User email |
| full_name | TEXT | User full name |
| role | TEXT | 'admin' or 'editor' |
| created_at | TIMESTAMP | Account creation time |
| updated_at | TIMESTAMP | Last update time |

### careers
Job postings management.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| title | TEXT | Job title |
| description | TEXT | Job description |
| location | TEXT | Job location |
| job_type | TEXT | full-time, part-time, contract |
| salary_range | TEXT | Salary information |
| requirements | TEXT | Job requirements |
| application_url | TEXT | Link to apply |
| created_by | UUID | Creator user ID |
| created_at | TIMESTAMP | Creation time |
| updated_at | TIMESTAMP | Last update time |

### blog_posts
Blog articles.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| title | TEXT | Article title |
| slug | TEXT | URL-friendly slug |
| content | TEXT | Article content |
| excerpt | TEXT | Short excerpt |
| featured_image_url | TEXT | Featured image URL |
| author_id | UUID | Author user ID |
| status | TEXT | 'draft' or 'published' |
| published_at | TIMESTAMP | Publication time |
| created_at | TIMESTAMP | Creation time |
| updated_at | TIMESTAMP | Last update time |

### blog_categories
Blog post categories.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| name | TEXT | Category name |
| slug | TEXT | URL-friendly slug |
| created_at | TIMESTAMP | Creation time |

### shop_products
Shop gear products.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| name | TEXT | Product name |
| description | TEXT | Product description |
| price | DECIMAL | Product price |
| currency | TEXT | Currency code (USD, EUR, etc) |
| image_url | TEXT | Product image URL |
| category | TEXT | Product category |
| sku | TEXT | Stock keeping unit |
| created_by | UUID | Creator user ID |
| created_at | TIMESTAMP | Creation time |
| updated_at | TIMESTAMP | Last update time |

### gallery_images
Gallery photos.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| title | TEXT | Image title |
| description | TEXT | Image description |
| image_url | TEXT | Image URL |
| image_path | TEXT | Storage path |
| gallery_category | TEXT | Category (tours, destinations, teams) |
| sort_order | INTEGER | Display order |
| created_by | UUID | Creator user ID |
| created_at | TIMESTAMP | Creation time |
| updated_at | TIMESTAMP | Last update time |

## Access Control

### Public (No Login Required)
- View careers
- View published blog posts
- View blog categories
- View shop products
- View gallery images

### Editor Role
- Create careers, blog posts, products, gallery images
- Edit/delete own content
- Publish blog posts

### Admin Role
- All editor permissions
- Manage all users
- Edit/delete all content
- Manage blog categories
- Full system access

## File Structure

```
/app
  /api
    /auth
      /signup/route.ts
      /login/route.ts
      /logout/route.ts
    /users
      /profile/route.ts
    /careers
      /route.ts
      /[id]/route.ts
    /blog
      /posts/route.ts
      /posts/[id]/route.ts
      /categories/route.ts
    /shop
      /products/route.ts
      /products/[id]/route.ts
    /gallery
      /route.ts
      /[id]/route.ts
/lib
  /supabase
    /client.ts
    /server.ts
    /proxy.ts
CMS_API_DOCUMENTATION.md     # Full API reference
CMS_INTEGRATION_GUIDE.md      # How to integrate with your website
CMS_README.md                 # This file
```

## Next Steps

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Create your admin account** using the signup endpoint

3. **Integrate with your website** - Follow the examples in `CMS_INTEGRATION_GUIDE.md`

4. **Add content** - Use the API endpoints to manage careers, blog, products, and gallery

5. **Deploy** - Deploy to Vercel using the "Publish" button in v0

## Image Storage

For image uploads, you have two options:

1. **Use external URLs** - Upload images to a service like Cloudinary or Imgur and use the URLs
2. **Use Supabase Storage** - Set up Supabase Storage buckets (premium feature)

Store the image URLs in the `image_url` field for blogs, products, and gallery images.

## Features

✅ User authentication and authorization
✅ Role-based access control (admin/editor)
✅ Complete CRUD operations for all content types
✅ Blog post categories
✅ Product categories and filtering
✅ Gallery image categories and sorting
✅ Timestamps on all content
✅ Draft and published states for blog posts
✅ Email-based authentication

## Deployment

### Deploy to Vercel

1. Click the "Publish" button in the v0 UI
2. Connect your GitHub repository
3. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
4. Deploy!

### Environment Variables Required

In your `.env.local` file (development) or Vercel dashboard (production):

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Support & Documentation

- **Full API Docs**: See `CMS_API_DOCUMENTATION.md`
- **Integration Examples**: See `CMS_INTEGRATION_GUIDE.md`
- **Database Schema**: See above or check Supabase dashboard

## Future Enhancements

- Image upload endpoints with Supabase Storage
- Advanced search and filtering
- Pagination for large datasets
- Bulk operations
- Webhooks for content changes
- API rate limiting
- Email notifications
- Content versioning/history
- SEO metadata management
- Multi-language support

## Security Best Practices

1. Always use HTTPS in production
2. Keep your Supabase keys secure
3. Use strong passwords for admin accounts
4. Implement rate limiting on public endpoints
5. Validate all user input
6. Regularly backup your database
7. Monitor for suspicious activity

---

## Summary

You now have a fully functional CMS with:
- ✅ Supabase database with 7 tables
- ✅ Row Level Security policies
- ✅ 25+ REST API endpoints
- ✅ Authentication system
- ✅ Role-based access control
- ✅ Complete documentation
- ✅ Integration examples

Everything is ready to integrate with your tours and travels website!
