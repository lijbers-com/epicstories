# Epic Stories

**A Creative collective crafting digital products that turn user experiences into epic stories.**

## 🌟 Project Status

✅ **Setup Complete** - Next.js project initialized with custom design system  
🏗️ **In Development** - Building individual story pages and content  
🔄 **Next Steps** - Add more client stories using individual page approach  

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation & Setup

```bash
# Clone and navigate to project
cd epicstories

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **Animation**: Framer Motion
- **Fonts**: Inter, Playfair Display, JetBrains Mono
- **Deployment**: Vercel (planned)

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles + design system
├── components/            # React components
│   ├── layout/           # Header, footer, navigation
│   ├── ui/               # Reusable UI components
│   └── stories/          # Story-specific components
├── docs/                 # Project documentation
│   ├── technical/        # Architecture & dev docs
│   ├── design/           # Design system guide
│   └── content/          # Content strategy
├── lib/                  # Utilities and helpers
└── types/                # TypeScript definitions
```

## 🎨 Design System

The project includes a comprehensive design system with:

- **Colors**: Primary black/white with orange accent
- **Typography**: Fluid responsive typography with editorial fonts
- **Components**: Reusable UI components with consistent styling
- **Animations**: Smooth Framer Motion animations
- **Layout**: Responsive grid system

See [`docs/design/DESIGN_SYSTEM.md`](docs/design/DESIGN_SYSTEM.md) for full details.

## 📋 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Development Workflow

Each client story is built as an individual page with custom content and styling:

1. **Story Planning**: Define content structure and visual requirements
2. **Template Duplication**: Copy existing story template (e.g., `/app/etihad/page.tsx`)
3. **Content Customization**: Update copy, images, and story-specific styling using Claude Code
4. **Responsive Testing**: Ensure mobile and desktop compatibility
5. **Integration**: Link from homepage story tiles to new story pages

## 🎯 Features Roadmap

### Phase 1: Foundation ✅
- [x] Project setup and configuration
- [x] Design system implementation  
- [x] Basic layout and navigation
- [x] Homepage structure with animations

### Phase 2: Core Features (In Progress)
- [x] Story listing/grid page (Homepage)
- [x] Individual story page template (Etihad case study)
- [x] About and Contact pages
- [x] Mobile responsiveness refinement

### Phase 3: Content & Stories
- [ ] Individual story pages using Claude Code development
- [ ] Story template duplication and customization
- [ ] Performance optimization
- [ ] SEO implementation

### Phase 4: Launch
- [ ] Final testing and QA
- [ ] Deployment setup
- [ ] Analytics integration

## 📖 Documentation

- **[Technical Architecture](docs/technical/ARCHITECTURE.md)** - System design and implementation details
- **[Design System](docs/design/DESIGN_SYSTEM.md)** - Visual guidelines and component library
- **[Content Structure](docs/content/CONTENT_STRUCTURE.md)** - Content strategy and page structures

## 🤝 Contributing

1. Follow the established design system
2. Ensure TypeScript compliance
3. Test responsive behavior
4. Maintain accessibility standards

## 📄 License

© 2024 Epic Stories. All rights reserved.

---

*Crafting digital products that turn user experiences into epic stories.*
