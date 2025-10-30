## e-commerce-store

A simple e-commerce storefront built with Next.js App Router, React, TypeScript, Tailwind CSS, and Zustand. Products are fetched from `fakestoreapi.com` by default and the cart is persisted in `localStorage`.

### Tech stack
- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS 4
- **State**: Zustand (persist middleware)
- **Lang/Tooling**: TypeScript, ESLint

### Features
- **Product listing and details** via `fakestoreapi.com`
- **Client-side cart** with add/remove/clear, persisted in `localStorage`
- **Responsive UI** with reusable components (cards, rating, filters)

### Getting started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

### Scripts
- `npm run dev`: Start Next.js in development
- `npm run build`: Production build
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

### Configuration
- API base URL is configurable via `NEXT_PUBLIC_API_URL` (defaults to `https://fakestoreapi.com`).
  - File: `app/config/config.ts`
  - Next.js image domains include `fakestoreapi.com` (see `next.config.ts`).

Example `.env.local`:
```bash
NEXT_PUBLIC_API_URL=https://fakestoreapi.com
```

### Project structure (high-level)
```
app/
  components/            # Reusable UI components (cards, navbar, rating, etc.)
  lib/
    api.ts               # API client and typed fetch helpers
    types.ts             # Shared TypeScript types
  config/config.ts       # App config (API base URL)
  store/cartStore.ts     # Zustand store for cart (persisted)
  cart/page.tsx          # Cart page
  product/[id]/page.tsx  # Product details page
  page.tsx               # Home page / product explorer
```

### API usage
- `getProducts()` → `GET /products`
- `getProduct(id)` → `GET /products/:id`
- Errors are normalized via a custom `ApiError` (see `app/lib/api.ts`).

### Cart behavior
- Items are stored as `Product` entries in the array-like cart.
- Derived helpers: total price and quantity.
- Persistence key: `cart` in `localStorage` (see `persist` middleware config).

### Development notes
- UI images must be served from approved domains (`next.config.ts`).
- When changing API base URL, update `.env.local` and restart the dev server.
- Keep components presentational and pull data via the `lib/api` functions.

### License
This project is for educational/demo purposes. Use at your discretion.
