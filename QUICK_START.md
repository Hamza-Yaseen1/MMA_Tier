# 🚀 Quick Start Guide - STRIKER eCommerce

## Start the Development Server

The server is **already running** at:
- **Local**: http://localhost:3000
- **Network**: http://192.168.56.1:3000

## 🎯 Quick Navigation

### Main Pages to Explore

1. **Homepage** → http://localhost:3000
   - Full hero section
   - Category cards
   - Featured products
   - Testimonials

2. **Shop** → http://localhost:3000/shop
   - All 12 products
   - Filter by category
   - Sort options
   - Mobile filter drawer

3. **Product Detail** → http://localhost:3000/product/1
   - Image gallery
   - Variant selection
   - Add to cart
   - Related products

4. **Cart** → http://localhost:3000/cart
   - View added items
   - Update quantities
   - See shipping calculation

5. **Checkout** → http://localhost:3000/checkout
   - Multi-step process
   - Shipping form
   - Payment form (demo)

6. **About** → http://localhost:3000/about
   - Brand story
   - Team members
   - Company values

7. **Contact** → http://localhost:3000/contact
   - Contact form
   - FAQ section
   - Business info

8. **Wishlist** → http://localhost:3000/wishlist
   - Saved products

## 🎨 Color Reference

Use these colors when customizing:

```css
Primary:    #FF6B6B  (Soft Coral)
Secondary:  #4ECDC4  (Sky Blue)
Accent:     #FFD166  (Warm Orange)
Background: #FAFAFA  (Off-White)
Cards:      #FFFFFF  (Pure White)
```

## 🔥 Quick Test Scenarios

### Scenario 1: Add to Cart
1. Go to Shop page
2. Click any product card
3. Select size, color, weight
4. Click "Add to Cart"
5. Check cart icon (number increases)
6. Go to cart page

### Scenario 2: Filter Products
1. Go to Shop page
2. Click "Gloves" category checkbox
3. Adjust price slider
4. Change sort to "Price: Low to High"
5. See filtered results

### Scenario 3: Wishlist
1. Browse any product
2. Click heart icon on product card
3. Heart fills red
4. Go to wishlist page
5. See saved items

### Scenario 4: Complete Checkout
1. Add items to cart
2. Go to cart
3. Click "Proceed to Checkout"
4. Fill shipping form
5. Click "Continue to Payment"
6. Fill payment form (use any test data)
7. Click "Place Order"
8. See success confirmation

### Scenario 5: Mobile Experience
1. Resize browser to mobile width (< 768px)
2. Open hamburger menu
3. Navigate to Shop
4. Click "Filters" button
5. See mobile filter drawer

## 🛠️ Development Commands

```bash
# Start dev server (already running)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Install new package
npm install <package-name>
```

## 📁 Key Files to Modify

### Add New Product
Edit: `lib/products.ts`
```typescript
{
  id: '13',
  name: 'Your Product',
  slug: 'your-product',
  price: 99.99,
  category: 'gloves',
  // ... more fields
}
```

### Change Colors
Edit: `app/globals.css`
```css
:root {
  --primary: #FF6B6B;
  --secondary: #4ECDC4;
  // ... modify colors
}
```

### Add New Page
Create: `app/your-page/page.tsx`
```typescript
export default function YourPage() {
  return <div>Your content</div>
}
```

### Modify Header
Edit: `components/Header.tsx`

### Modify Footer
Edit: `components/Footer.tsx`

## 🎭 Animation Customization

All animations use Framer Motion:

```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
```

### Build Errors
```bash
# Clean install
rm -rf node_modules .next
npm install
npm run build
```

### State Not Updating
- Check browser console for errors
- Refresh the page
- Clear browser cache

## 📱 Test Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Browser DevTools
1. Open DevTools (F12)
2. Click device toolbar (Ctrl+Shift+M)
3. Select device or set custom dimensions
4. Test mobile menu, filters, etc.

## 🎨 Customize Product Images

Replace Unsplash URLs in `lib/products.ts`:

```typescript
images: [
  '/images/your-product-1.jpg',
  '/images/your-product-2.jpg'
]
```

Then add images to `public/images/` folder.

## 📊 View Site Structure

```
http://localhost:3000/          → Homepage
http://localhost:3000/shop      → Shop (all products)
http://localhost:3000/shop?category=gloves → Filtered shop
http://localhost:3000/product/1 → Product detail
http://localhost:3000/cart      → Shopping cart
http://localhost:3000/wishlist  → Wishlist
http://localhost:3000/checkout  → Checkout
http://localhost:3000/about     → About page
http://localhost:3000/contact   → Contact page
```

## 🎯 Features to Try

- [x] Hover over product cards
- [x] Click category in header dropdown
- [x] Add items to cart
- [x] Toggle wishlist hearts
- [x] Use mobile navigation
- [x] Filter products by category
- [x] Sort products by price
- [x] Select product variants
- [x] Change quantities in cart
- [x] Complete checkout flow
- [x] Submit contact form
- [x] Click social media icons
- [x] Subscribe to newsletter

## 🚀 Performance Tips

- Images lazy load automatically
- Code splits by route
- Static pages pre-rendered
- Animations optimized for 60fps
- Minimal JavaScript bundle

## 📚 Learn More

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **Zustand**: https://github.com/pmndrs/zustand
- **Lucide Icons**: https://lucide.dev

---

**Happy Developing! 🎉**

Access the site: **http://localhost:3000**
