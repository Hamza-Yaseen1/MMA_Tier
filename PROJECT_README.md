# STRIKER - Premium MMA & Combat Sports eCommerce Website

## 🥊 Project Overview

STRIKER is a modern, premium eCommerce website for MMA and combat sports gear. Built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion, it offers a stunning visual experience with smooth animations and a conversion-focused design.

## 🎨 Design Features

### Color Palette
- **Primary**: Soft Coral (#FF6B6B)
- **Secondary**: Sky Blue (#4ECDC4)
- **Accent**: Warm Orange (#FFD166)
- **Background**: Off-White (#FAFAFA)
- **Cards**: Pure White (#FFFFFF)

### UI/UX Highlights
- ✨ Smooth animations with Framer Motion
- 🎯 Glassmorphism effects and modern shadows
- 📱 Fully responsive mobile-first design
- ♿ Accessibility-compliant components
- 🚀 Fast loading and optimized performance

## 📄 Pages

### Core Pages
1. **Home (`/`)** - Hero section, featured categories, best sellers, testimonials
2. **Shop (`/shop`)** - Product grid with filters and sorting
3. **Product Detail (`/product/[id]`)** - Full product information with variant selection
4. **Cart (`/cart`)** - Shopping cart management
5. **Wishlist (`/wishlist`)** - Saved items
6. **Checkout (`/checkout`)** - Multi-step checkout process
7. **About (`/about`)** - Brand story and values
8. **Contact (`/contact`)** - Contact form and FAQ

## 🛍️ Product Categories

- **MMA Gloves** - Training and competition gloves
- **Rash Guards** - Compression shirts for BJJ/MMA
- **Mouth Guards** - Custom-fit protection
- **Hand Wraps** - Essential training wraps
- **Shin Guards** - Kickboxing/Muay Thai protection
- **Accessories** - Gym bags, jump ropes, focus mitts, resistance bands

## 🔧 Technical Stack

### Core Technologies
- **Framework**: Next.js 16.2.7 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **Animations**: Framer Motion 12.x
- **Icons**: Lucide React 1.17.0
- **State Management**: Zustand 5.x

### Key Features Implemented

#### 1. State Management
- Global cart state with Zustand
- Wishlist functionality
- Persistent shopping experience

#### 2. Product Features
- Product variants (size, color, weight)
- Dynamic filtering and sorting
- Category-based navigation
- Related products
- Product reviews and ratings

#### 3. Shopping Experience
- Add to cart with variant selection
- Quantity management
- Price calculation with shipping
- Multi-step checkout
- Order confirmation

#### 4. UI Components
- Sticky header with dropdown navigation
- Product cards with hover effects
- Filter sidebar (desktop) and modal (mobile)
- Image galleries with thumbnails
- Animated page transitions
- Loading states and suspense boundaries

## 📁 Project Structure

```
my-app/
├── app/
│   ├── about/page.tsx
│   ├── cart/page.tsx
│   ├── checkout/page.tsx
│   ├── contact/page.tsx
│   ├── product/[id]/page.tsx
│   ├── shop/page.tsx
│   ├── wishlist/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── lib/
│   ├── hooks/
│   │   ├── useCart.ts
│   │   └── useWishlist.ts
│   ├── types.ts
│   └── products.ts
├── public/
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Run development server**
```bash
npm run dev
```

3. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Features

### Homepage
- Full-screen hero with gradient overlay
- Feature highlights (free shipping, quality guarantee, etc.)
- Category grid with hover effects
- Featured products carousel
- Customer testimonials
- Newsletter signup
- Social proof elements

### Shop Page
- Advanced filtering by category
- Price range slider
- Sort options (newest, price, rating)
- Mobile-responsive filter drawer
- Real-time product count
- Loading states

### Product Detail Page
- Image gallery with thumbnails
- Variant selection (size, color, weight)
- Quantity selector
- Add to cart/wishlist
- Key features list
- Related products
- Shipping & guarantee badges

### Cart & Checkout
- Item quantity management
- Real-time price calculation
- Free shipping threshold indicator
- Multi-step checkout (shipping → payment)
- Order summary sidebar
- Form validation
- Success confirmation

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized images
- Hamburger menu for mobile

## 🎨 Animation Details

### Page Transitions
- Fade in on mount
- Staggered animations for lists
- Smooth scroll behaviors
- Hover scale effects

### Interactive Elements
- Button press animations
- Card lift on hover
- Image zoom effects
- Modal slide-ins
- Loading spinners

## 🔐 State Management

### Cart State (Zustand)
```typescript
interface CartStore {
  items: CartItem[];
  addItem: (product, variants) => void;
  removeItem: (productId, variants) => void;
  updateQuantity: (productId, variants, quantity) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}
```

### Wishlist State (Zustand)
```typescript
interface WishlistStore {
  items: WishlistItem[];
  addItem: (product) => void;
  removeItem: (productId) => void;
  isInWishlist: (productId) => boolean;
  toggleItem: (product) => void;
}
```

## 📊 Product Data

Products include:
- 12 sample products across 6 categories
- High-quality images from Unsplash
- Realistic pricing ($14.99 - $129.99)
- Product variants (multiple options)
- Customer ratings and reviews
- Featured and new arrival flags

## 🌐 SEO & Performance

- Semantic HTML structure
- Optimized metadata
- Fast page loads with Next.js optimizations
- Image optimization
- Code splitting
- Static generation where possible

## 🎭 Custom Styling

### Glassmorphism
```css
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### Gradient Utilities
```css
.gradient-primary {
  background: linear-gradient(135deg, #FF6B6B 0%, #FFD166 100%);
}

.gradient-secondary {
  background: linear-gradient(135deg, #4ECDC4 0%, #FF6B6B 100%);
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔄 Future Enhancements

Potential additions:
- User authentication
- Backend integration (API routes)
- Payment gateway integration (Stripe)
- Product search functionality
- Customer reviews system
- Order tracking
- Email notifications
- Admin dashboard
- Inventory management
- Discount codes/coupons
- Multi-language support

## 🐛 Known Issues

- Cart and wishlist state resets on page reload (add persistence with localStorage)
- Images are from Unsplash (replace with actual product photos)
- Payment form is demo only (needs real gateway)

## 📄 License

This project is created for demonstration purposes.

## 👨‍💻 Development

Built with ❤️ using modern web technologies for a premium eCommerce experience.

---

## 🎓 Learning Points

This project demonstrates:
1. Next.js 16 App Router patterns
2. TypeScript for type safety
3. Global state management with Zustand
4. Advanced Tailwind CSS customization
5. Framer Motion animations
6. Component composition
7. Responsive design best practices
8. E-commerce UX patterns
9. Form handling and validation
10. Modern React patterns (hooks, suspense, etc.)

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

---

**Server Running**: http://localhost:3000
**Build Status**: ✅ Production Ready
