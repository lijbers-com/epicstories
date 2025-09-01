# Technical Architecture

## Overview

Epic Stories is built as a modern, performant web application using Next.js 14+ with a focus on creating smooth, animated experiences while maintaining excellent performance metrics.

## Technology Stack

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **Animation**: Framer Motion
- **State Management**: Zustand (if needed)
- **Forms**: React Hook Form + Zod validation

### Backend/Content
- **Content Management**: Individual story pages built with Claude Code
- **API**: Next.js API Routes (for contact form, etc.)
- **Database**: File-based content (no external CMS)
- **Authentication**: Not required for current setup

### Infrastructure
- **Hosting**: Vercel
- **CDN**: Vercel Edge Network
- **Analytics**: Vercel Analytics + Google Analytics
- **Monitoring**: Sentry
- **CI/CD**: GitHub Actions

## Application Architecture

```
┌─────────────────────────────────────┐
│           Client Browser            │
├─────────────────────────────────────┤
│         Next.js Frontend            │
│    (React Components + Routing)     │
├─────────────────────────────────────┤
│        API Layer (Next.js)          │
│      /api/* endpoints (minimal)     │
├─────────────────────────────────────┤
│          File-based Content         │
│     Individual Story Pages          │
│    Built with Claude Code           │
└─────────────────────────────────────┘
```

## Folder Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── etihad/            # Etihad story page
│   ├── digital-experiences/ # Coming soon template
│   ├── api/              # API routes (minimal)
│   └── layout.tsx        # Root layout
├── components/           # React components
│   ├── ui/              # Basic UI components
│   ├── layout/          # Layout components
│   ├── stories/         # Story-specific components
│   └── animations/      # Animation components
├── lib/                 # Utilities and helpers
│   ├── api/            # API client functions
│   ├── utils/          # Utility functions
│   └── hooks/          # Custom React hooks
├── styles/             # Global styles
│   ├── globals.css     # Global CSS
│   └── variables.css   # CSS variables
└── types/              # TypeScript types
```

## Key Design Patterns

### 1. Component Architecture
```typescript
// Atomic Design Pattern
components/
├── atoms/       # Basic building blocks
├── molecules/   # Simple component groups
├── organisms/   # Complex components
└── templates/   # Page templates
```

### 2. Data Fetching Strategy
- **Static Generation**: All pages (Homepage, About, Contact, Individual Stories)
- **File-based Content**: Content embedded directly in React components
- **Client-Side**: Interactive elements, animations, form submissions

### 3. Animation Strategy
```typescript
// Centralized animation variants
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}
```

### 4. Image Optimization
- Next.js Image component
- Responsive images
- Lazy loading
- WebP format with fallbacks

## Performance Optimization

### Build-Time Optimizations
- Static page generation
- Image optimization
- Code splitting
- Tree shaking

### Runtime Optimizations
- Lazy loading components
- Virtual scrolling for long lists
- Debounced/throttled events
- Memoization of expensive operations

### Caching Strategy
```
1. Static Assets: Immutable, long-term cache
2. API Responses: Cache-Control headers
3. Dynamic Content: ISR (Incremental Static Regeneration)
4. Client State: Local storage for preferences
```

## SEO Implementation

### Technical SEO
- Semantic HTML structure
- Meta tags and Open Graph
- Structured data (JSON-LD)
- XML sitemap
- Robots.txt

### Content SEO
- Dynamic meta descriptions
- Canonical URLs
- Alt text for images
- Heading hierarchy

## Security Measures

### Headers
```javascript
// next.config.js security headers
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'"
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
]
```

### Best Practices
- Input validation
- Output encoding
- HTTPS only
- Environment variables for secrets
- Rate limiting on API routes

## Development Workflow

### Local Development
```bash
npm run dev      # Start development server
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Story Development Process
1. **Template Creation**: Copy existing story page (e.g., `/app/etihad/page.tsx`)
2. **Content Development**: Update content, images, and styling using Claude Code
3. **Responsive Testing**: Test across mobile and desktop breakpoints
4. **Integration**: Link from homepage story tiles

### Git Workflow
- Direct commits to main branch
- Feature development using Claude Code assistance
- Comprehensive commit messages with AI attribution

### Code Quality
- ESLint configuration
- Prettier formatting
- Husky pre-commit hooks
- TypeScript strict mode

## Testing Strategy

### Unit Testing
- Jest + React Testing Library
- Component testing
- Utility function testing

### Integration Testing
- API route testing
- Page interaction testing

### E2E Testing
- Playwright/Cypress
- Critical user journeys
- Cross-browser testing

## Monitoring & Analytics

### Performance Monitoring
- Core Web Vitals tracking
- Real User Monitoring (RUM)
- Error tracking with Sentry

### User Analytics
- Page views and navigation
- Story engagement metrics
- Conversion tracking

## Deployment Pipeline

```
1. Push to GitHub
2. GitHub Actions CI
   - Lint & Type check
   - Run tests
   - Build project
3. Deploy to Vercel
   - Preview deployment (PRs)
   - Production deployment (main)
4. Post-deployment
   - Smoke tests
   - Performance checks
```

## Future Considerations

### Scalability
- Edge functions for personalization
- Database sharding (if needed)
- CDN optimization

### Features
- Search functionality
- User accounts
- Newsletter integration
- Multi-language support

### Technical Debt
- Regular dependency updates
- Performance audits
- Security audits
- Code refactoring