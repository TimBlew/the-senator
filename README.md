# The Heber Senator - Website

Historic bed & breakfast website for The Senator property in Heber Valley, Utah.

## 🏛️ Project Overview

This is a standalone microsite for The Heber Senator bed & breakfast, completely independent from the main Roamstead site. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
senator-site/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout with nav/footer
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/           # Navigation, Footer
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI components
├── styles/
│   └── globals.css       # Global styles + Tailwind
├── public/
│   └── images/           # Property images
└── tailwind.config.ts    # Design tokens
```

## 🎨 Design System

### Colors (Burgundy Theme)
- **Primary:** #982F31
- **Subtle:** #FAECEB
- **Hover:** #7A2629

### Typography
- **Heading:** Bricolage Grotesque
- **Body:** Funnel Sans

### Key Features
- ✅ Fully responsive design
- ✅ 10 unique room types
- ✅ Historic property details
- ✅ Location/amenities showcase
- ✅ Booking integration ready

## 🔮 Future Enhancements

- [ ] Connect to Sanity CMS
- [ ] Add Hostaway booking widgets
- [ ] Individual room detail pages
- [ ] Photo galleries
- [ ] Guest reviews section
- [ ] Policies pages
- [ ] Replace placeholder images with real photos
- [ ] Replace placeholder logo with actual Senator logo

## 📸 Image Placeholders

Current placeholders needed:
- Hero background image (1920x1080)
- 3 featured room images
- 3 story section images
- Map image (816x400)
- Senator circular logo

## 🌐 Deployment

This site should be deployed independently:
- Recommended: Vercel or Netlify
- Custom domain: senator.roamstead-co.com (or standalone domain)
- Environment: Production

## 📝 Notes

- This is NOT connected to the main Roamstead site
- Completely standalone navigation and branding
- Booking integration to be wired later
- Sanity CMS integration planned for future

---

Built with ❤️ for The Heber Senator
