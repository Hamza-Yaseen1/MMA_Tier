# FIGHTGEAR - MMA Gear Store

A modern, responsive e-commerce website for MMA equipment and training gear built with Next.js 16, React 19, and Tailwind CSS.

## Features

### Pages
- **Home** (`/`) - Hero section, featured products, categories, testimonials, and features
- **Shop** (`/shop`) - Product catalog with search, filters, and sorting
- **Product Details** (`/product/[id]`) - Individual product pages with size selection, quantity picker, and customer reviews
- **About Us** (`/about`) - Company story, values, team, and statistics
- **Contact** (`/contact`) - Contact form and business information
- **Cart** (`/cart`) - Shopping cart with item management
- **Checkout** (`/checkout`) - Secure checkout with shipping and payment forms

### Product Categories
- MMA Gloves
- Rash Guard Shirts
- Mouth Guards
- Hand Wraps
- Training Gear (Heavy bags, speed ropes, etc.)

### Design Features
- **Color Scheme**: Black, white, and red sports theme
- **Responsive**: Mobile-first design that works on all devices
- **Modern UI**: Clean layouts with smooth transitions and hover effects
- **Search & Filters**: Product search with category and sort filters
- **Customer Reviews**: Star ratings and testimonials
- **Shopping Cart**: Simple cart system with quantity management
- **Call-to-Actions**: Clear "Shop Now" and "Add to Cart" buttons throughout

## Tech Stack
- **Framework**: Next.js 16.2.7 (App Router)
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure
```
app/
├── page.tsx              # Home page
├── shop/page.tsx         # Product catalog
├── product/[id]/page.tsx # Product details
├── about/page.tsx        # About us
├── contact/page.tsx      # Contact form
├── cart/page.tsx         # Shopping cart
├── checkout/page.tsx     # Checkout process
├── layout.tsx            # Root layout
└── globals.css           # Global styles
```

## Features Implemented

### Navigation
- Consistent header across all pages
- Responsive mobile menu ready
- Cart counter badge
- Active page indicators

### Product Features
- Product grid layouts
- Star ratings and review counts
- Price display
- Add to cart buttons
- Size selection
- Quantity pickers

### Shopping Experience
- Search functionality UI
- Category filters
- Sort options
- Cart management
- Order summary
- Checkout forms

### Content Sections
- Hero banner with CTAs
- Featured products showcase
- Category navigation
- Customer testimonials
- Company values and stats
- Contact information
- Newsletter signup
- Footer with site links

## Customization

To add real functionality:
1. Connect to a backend API or database
2. Implement state management (Context API, Zustand, or Redux)
3. Add payment processing (Stripe, PayPal, etc.)
4. Integrate product images
5. Add authentication for user accounts
6. Implement real search and filter logic

## Performance
- Server-side rendering with Next.js App Router
- Optimized for fast page loads
- Mobile-responsive design
- SEO-friendly structure

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive breakpoints for all screen sizes

---

Built with ❤️ for MMA fighters and combat sports enthusiasts.
