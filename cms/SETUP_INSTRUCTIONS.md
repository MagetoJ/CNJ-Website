# CMS Setup Instructions

Follow these steps to get your Tours & Travels CMS up and running.

## Prerequisites

- Node.js 16+ installed
- Supabase account and project (should be already set up)
- The v0 project is using Next.js 16 with TypeScript

## Step 1: Install Dependencies

```bash
cd /path/to/your/project
npm install
# or
pnpm install
# or
yarn install
```

## Step 2: Start the Development Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

The server will start at `http://localhost:3000`

## Step 3: Verify Supabase Connection

Check that your environment variables are set correctly. The project should have:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key

These should be automatically configured if Supabase is connected through v0.

## Step 4: Create Your First Admin User

Use the signup API to create an admin account:

### Option A: Using cURL

```bash
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@yourdomain.com",
    "password": "YourSecurePassword123!",
    "full_name": "Admin User",
    "role": "admin"
  }'
```

### Option B: Using Postman

1. Open Postman
2. Create a new POST request to `http://localhost:3000/api/auth/signup`
3. Set header: `Content-Type: application/json`
4. Set body (raw JSON):
```json
{
  "email": "admin@yourdomain.com",
  "password": "YourSecurePassword123!",
  "full_name": "Admin User",
  "role": "admin"
}
```
5. Click Send

### Option C: Using JavaScript

```javascript
const signUp = async () => {
  const response = await fetch('http://localhost:3000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'admin@yourdomain.com',
      password: 'YourSecurePassword123!',
      full_name: 'Admin User',
      role: 'admin'
    })
  })
  const data = await response.json()
  console.log('Admin created:', data)
}

signUp()
```

### Important: Email Confirmation

After signing up, you'll receive an email to confirm your account. Click the link in the email to verify your account before logging in.

For development, if you don't want to use real emails, you can temporarily disable email confirmation in Supabase dashboard:
1. Go to Supabase > Authentication > Providers
2. Find Email Provider
3. Toggle "Confirm email" off for development
4. Remember to turn it back on for production!

## Step 5: Login to Test

Once you've confirmed your email, login:

### Using cURL

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@yourdomain.com",
    "password": "YourSecurePassword123!"
  }'
```

You should get a response with `session` containing `access_token` and `refresh_token`.

## Step 6: Create Sample Content

### Create a Career Posting

```bash
curl -X POST http://localhost:3000/api/careers \
  -H "Content-Type: application/json" \
  -H "Cookie: sb-session-token=your-session-token" \
  -d '{
    "title": "Adventure Tour Guide",
    "description": "We are seeking experienced tour guides for our adventure trips to Nepal, Peru, and Iceland.",
    "location": "Nepal",
    "job_type": "full-time",
    "salary_range": "$1500-$2500 USD",
    "requirements": "Minimum 2 years tour guide experience, fluent English, first aid certification",
    "application_url": "https://yoursite.com/apply"
  }'
```

### Create a Blog Category

```bash
curl -X POST http://localhost:3000/api/blog/categories \
  -H "Content-Type: application/json" \
  -H "Cookie: sb-session-token=your-session-token" \
  -d '{
    "name": "Travel Tips",
    "slug": "travel-tips"
  }'
```

### Create a Blog Post

```bash
curl -X POST http://localhost:3000/api/blog/posts \
  -H "Content-Type: application/json" \
  -H "Cookie: sb-session-token=your-session-token" \
  -d '{
    "title": "Top 10 Hidden Gems in Southeast Asia",
    "slug": "top-10-hidden-gems-southeast-asia",
    "content": "Detailed blog content here. Use markdown or HTML.",
    "excerpt": "Discover amazing hidden destinations in Southeast Asia",
    "featured_image_url": "https://example.com/image.jpg",
    "status": "published",
    "categories": ["category-uuid"]
  }'
```

### Create a Shop Product

```bash
curl -X POST http://localhost:3000/api/shop/products \
  -H "Content-Type: application/json" \
  -H "Cookie: sb-session-token=your-session-token" \
  -d '{
    "name": "Professional Travel Backpack",
    "description": "Durable 60L backpack perfect for long-term travel with weather protection.",
    "price": "129.99",
    "currency": "USD",
    "image_url": "https://example.com/backpack.jpg",
    "category": "backpack",
    "sku": "BACKPACK-PRO-001"
  }'
```

### Add Gallery Image

```bash
curl -X POST http://localhost:3000/api/gallery \
  -H "Content-Type: application/json" \
  -H "Cookie: sb-session-token=your-session-token" \
  -d '{
    "title": "Sunset at Bali Beach",
    "description": "Beautiful golden hour photograph from our tour in Bali",
    "image_url": "https://example.com/sunset.jpg",
    "image_path": "gallery/bali-sunset.jpg",
    "gallery_category": "destinations",
    "sort_order": 1
  }'
```

## Step 7: Integrate with Your Website

Now that your CMS API is running, integrate it with your website. See `CMS_INTEGRATION_GUIDE.md` for:

- React component examples
- Fetch examples
- Admin panel setup
- Best practices

## Troubleshooting

### Issue: 401 Unauthorized on API calls

**Solution**: Make sure you're including the session cookie:
- Include `-H "Cookie: sb-session-token=your-session-token"` in cURL requests
- Include `credentials: 'include'` in fetch requests
- Make sure your session token is valid (not expired)

### Issue: CORS errors

**Solution**: The API and website should be on the same domain. If deploying separately, configure CORS in your API:

```typescript
// In your API route
response.headers.set('Access-Control-Allow-Origin', 'https://yoursite.com')
response.headers.set('Access-Control-Allow-Credentials', 'true')
```

### Issue: Email confirmation not working

**Solution**: 
1. Check your email spam folder
2. For development, disable email confirmation in Supabase
3. Make sure `NEXT_PUBLIC_SITE_URL` is set correctly for email links

### Issue: 404 errors when accessing API

**Solution**:
- Check the URL path is correct
- Make sure the development server is running
- Check the resource exists in the database
- Check the resource ID is correct

### Issue: Database connection errors

**Solution**:
- Verify Supabase project is active
- Check `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are correct
- Check your internet connection
- Verify Supabase credentials in v0 settings

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Run type checking
npx tsc --noEmit

# Format code
npx prettier --write .

# Run linter
npx eslint .
```

## Database Maintenance

### View Database Contents

Go to your Supabase dashboard:
1. Navigate to Supabase console
2. Go to the SQL editor
3. Run queries to view/manage content

### Backup Your Data

Use Supabase backups:
1. Go to Settings > Backups
2. Enable automatic backups
3. Take manual backups before major changes

### Monitor Usage

1. Go to Supabase dashboard
2. Check Storage usage
3. Check API usage
4. Monitor authentication metrics

## Production Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. In v0, click "Publish" button
3. Connect your GitHub repo
4. Set environment variables in Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy!

### Production Checklist

- [ ] Enable email confirmation in Supabase
- [ ] Set up custom domain
- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Configure rate limiting
- [ ] Set up monitoring/logging
- [ ] Enable API usage tracking
- [ ] Back up database
- [ ] Test all API endpoints
- [ ] Set up error tracking
- [ ] Configure CDN for images

## Security Reminders

1. **Never commit secrets**: Never push `.env.local` to GitHub
2. **Use strong passwords**: Admin passwords should be 12+ characters with special characters
3. **Verify permissions**: Test that unprivileged users can't access admin endpoints
4. **Monitor activity**: Regularly check logs for suspicious activity
5. **Update regularly**: Keep dependencies updated with `npm update`
6. **Use HTTPS**: Always use HTTPS in production
7. **Rate limiting**: Implement rate limiting on public endpoints
8. **Input validation**: Validate all user input on both client and server

## Next Steps

1. **Customize the API** - Add additional fields or endpoints as needed
2. **Build your admin UI** - Create a web interface for managing content
3. **Integrate with your site** - Add the API calls to your existing website
4. **Test thoroughly** - Test all endpoints with different user roles
5. **Go live** - Deploy to production

## Getting Help

If you encounter issues:

1. Check `CMS_API_DOCUMENTATION.md` for API reference
2. Check `CMS_INTEGRATION_GUIDE.md` for integration examples
3. Check Supabase documentation at https://supabase.com/docs
4. Check Next.js documentation at https://nextjs.org/docs

## Support

For issues or questions:
- Supabase Support: https://supabase.com/support
- Next.js Discord: https://discord.gg/bUG55Y5
- v0 Documentation: https://v0.dev/docs

---

Congratulations! Your CMS is now set up and ready to use! 🎉
