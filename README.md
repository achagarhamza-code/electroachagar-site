# ELECTROACHAGAR - Official Website

**Électroménager | Vidéosurveillance | Réseaux | Installation | SAV**

Platform modern, responsive, and conversion-focused website for ELECTROACHAGAR enterprise.

## 🚀 Technologies

- **Next.js 14** - React framework with SSR/SSG
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **next-intl** - i18n for FR/AR support
- **Vercel** - Deployment platform

## 📋 Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # Reusable React components
├── lib/             # Utilities, config, helpers
├── data/            # Product catalog, categories, content
├── types/           # TypeScript types and interfaces
└── styles/          # Global styles
public/             # Static assets
```

## 🎨 Design System

**Colors:**
- Navy Blue: `#001a4d`
- Electric Blue: `#0066cc`
- White: `#ffffff`
- Green Accent (positive): `#10b981`
- Light Gray: `#f3f4f6`

**Typography:**
- Headings: Custom system font
- Body: Custom system font
- Mono: `monospace`

**Spacing & Grid:**
- Mobile-first responsive design
- TailwindCSS grid system

## 🔧 Configuration

All company information is centralized in `src/lib/site-config.ts`:

```typescript
- Company details (phone, email, address)
- Business hours
- Social media links
- SEO settings
- API endpoints
```

**No sensitive data is hardcoded.** Use environment variables in `.env.local`.

## 📱 Pages

### Public Pages
- `/` - Homepage
- `/produits` - Product catalog with search/filters
- `/produits/[slug]` - Product detail page
- `/categories/[slug]` - Category page
- `/services` - Services overview
- `/services/[slug]` - Service detail page
- `/videosurveillance` - Video surveillance landing page
- `/reseaux` - Network solutions page
- `/installation` - Installation process page
- `/sav` - After-sales service page
- `/garantie` - Warranty information page
- `/devis` - Quote request form
- `/rendez-vous` - Appointment booking page
- `/contact` - Contact page
- `/realisations` - Portfolio/Realizations
- `/conseils` - Advice/Blog section
- `/faq` - Frequently asked questions
- `/a-propos` - About company
- `/404` - Not found page

### Features
- Real product search and filtering
- Functional quote/devis forms
- Contact forms with validation
- Configurable WhatsApp button
- Call button
- Mobile-optimized navigation
- FR/AR language support with RTL
- Complete SEO (metadata, sitemap, robots.txt, structured data)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/achagarhamza-code/electroachagar-site.git
cd electroachagar-site

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Fill in real company information in .env.local
# (Phone, WhatsApp, Email, Address, etc.)

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Production

```bash
# Type check
npm run type-check

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Data Management

### Products
Product data is managed in `src/data/products.ts`:
- Uses DEMO marker for demonstration products
- Real product example: LG washing machine (F2Y1TYP6J)
- Prices use "Prix sur demande" when unknown
- Architecture ready for future integration with ELECTROACHAGAR Gestion V2

### Categories
Categories are defined in `src/data/categories.ts`:
- Électroménager (Appliances)
- Tech (Surveillance, Networks)
- Services

## 🔒 Security & Privacy

- No direct database exposure
- Environment variables for sensitive data
- Form validation and sanitization
- No fake customer testimonials
- No invented company information
- Ready for future API integration

## 🌐 Internationalization (i18n)

- **FR** (Français) - Default
- **AR** (العربية) - Arabic with RTL support
- Language switcher in header/footer
- SEO-friendly URL structure: `/fr/...`, `/ar/...`

## 🔍 SEO

All pages include:
- Title and meta description
- Open Graph tags
- Canonical URLs
- Structured data (LocalBusiness, Product, BreadcrumbList)
- Sitemap (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)

## 🚀 Deployment on Vercel

### Setup

1. Push code to GitHub
2. Create account on [vercel.com](https://vercel.com)
3. Import project:
   ```
   vercel import
   ```
4. Add environment variables in Vercel dashboard
5. Deploy: `vercel`

### Environment Variables in Vercel

Add all `.env.example` variables in Vercel project settings with real values.

### Custom Domain

1. In Vercel dashboard → Project Settings → Domains
2. Add custom domain (e.g., `electroachagar.ma`)
3. Update DNS records at domain provider

## 🔌 Future Integration: ELECTROACHAGAR Gestion V2

### Architecture (Never Direct SQLite)

```
┌─────────────────────────┐
│  ELECTROACHAGAR WEBSITE │
│    (Public Next.js)     │
└────────────┬────────────┘
             │
             ▼ Secure API
┌─────────────────────────┐
│  API Integration Layer  │
│  (Backend Service)      │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│  ELECTROACHAGAR Gestion │
│  V2 (Desktop App)       │
│  + SQLite Database      │
└─────────────────────────┘
```

### Planned Features

- Real-time product availability
- Quote synchronization
- Customer account integration
- Order tracking
- Invoice management
- Warranty/SAV tracking

### API Endpoints (Future)

```
POST   /api/integration/quote       - Submit quote request
GET    /api/integration/product/:id  - Fetch product details
GET    /api/integration/availability - Check stock
POST   /api/integration/contact      - Contact form
POST   /api/integration/appointment  - Appointment request
```

## 📝 Content Placeholder System

When real data is unavailable:
- `[PHONE_PLACEHOLDER]` → Company phone
- `[EMAIL_PLACEHOLDER]` → Company email
- `[ADDRESS_PLACEHOLDER]` → Company address
- `[HOURS_OPEN_PLACEHOLDER]` → Business hours
- `[WHATSAPP_PLACEHOLDER]` → WhatsApp number
- `[DEMO]` → Demo products/content

All placeholders are centralized and easily replaceable.

## ✅ Testing Checklist

### Navigation
- [ ] All internal links working
- [ ] Mobile menu functional
- [ ] Header navigation responsive
- [ ] Footer links working

### Pages
- [ ] Homepage loads correctly
- [ ] Products page with search/filters
- [ ] Individual product pages
- [ ] Services pages
- [ ] All special pages (Surveillance, Networks, Installation)
- [ ] Form pages (Quote, Contact, SAV, Appointment)
- [ ] About page
- [ ] 404 page

### Forms
- [ ] Quote form validation
- [ ] Contact form validation
- [ ] SAV form validation
- [ ] Appointment form validation
- [ ] WhatsApp button working
- [ ] Phone call button working

### Responsive Design
- [ ] Mobile (390px)
- [ ] Tablet (768px)
- [ ] Desktop (1024px, 1440px)
- [ ] No horizontal scrolling

### SEO
- [ ] Sitemap generated
- [ ] Robots.txt accessible
- [ ] Meta tags present
- [ ] Structured data valid
- [ ] OpenGraph tags correct

### i18n
- [ ] FR language working
- [ ] AR language working
- [ ] RTL layout correct for AR
- [ ] Language switcher functional

### Performance
- [ ] Images optimized
- [ ] Bundle size acceptable
- [ ] Lighthouse score > 85

## 📞 Support

For website maintenance and updates, please contact development team.

## 📄 License

Private project for ELECTROACHAGAR.

---

**Last Updated:** 2026-09-29
**Status:** Under Development
