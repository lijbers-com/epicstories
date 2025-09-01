# Content Structure & Strategy

## Content Architecture

### Site Hierarchy

```
epicstories.nl
│
├── Homepage
│   ├── Hero Section
│   ├── Featured Stories
│   ├── Story Grid
│   └── Footer
│
├── Stories (Dynamic)
│   └── /stories/[story-slug]
│       ├── Hero
│       ├── Story Content
│       ├── Project Details
│       ├── Results/Impact
│       └── Related Stories
│
├── About Us
│   ├── Our Story
│   ├── Our Approach
│   ├── Team
│   └── Values
│
└── Contact
    ├── Contact Form
    ├── Contact Information
    └── Social Links
```

## Story Content Model

### Story Schema

```typescript
interface Story {
  // Metadata
  id: string;
  slug: string;
  publishedAt: Date;
  updatedAt: Date;
  featured: boolean;
  order: number;
  
  // Basic Information
  title: string;
  tagline: string;
  category: StoryCategory;
  tags: string[];
  
  // Visual Assets
  thumbnail: Image;
  heroImage: Image;
  galleryImages: Image[];
  colorScheme: ColorScheme;
  
  // Content Blocks
  summary: string;
  content: ContentBlock[];
  
  // Project Details
  client: string;
  duration: string;
  services: string[];
  technologies: string[];
  teamMembers: TeamMember[];
  
  // Results & Impact
  metrics: Metric[];
  testimonial?: Testimonial;
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  ogImage: Image;
}
```

### Content Block Types

```typescript
type ContentBlock = 
  | TextBlock
  | ImageBlock
  | VideoBlock
  | QuoteBlock
  | CodeBlock
  | GalleryBlock
  | StatsBlock
  | TimelineBlock
  | ComparisonBlock;
```

## Page Content Requirements

### Homepage

#### Hero Section
- **Headline**: "Crafting Digital Products That Tell Epic Stories"
- **Subheadline**: Brief value proposition (2-3 lines)
- **CTA**: "Explore Our Stories" (scroll to grid)
- **Visual**: Animated background or video loop

#### Featured Stories Section
- 2-3 highlighted projects
- Large visual cards
- Hover animations
- Category badges

#### Story Grid
- Magazine-style layout
- Mix of card sizes (large, medium, small)
- Asymmetric composition
- Load more functionality
- Filter by category (optional)

### Individual Story Pages

#### Structure Template
1. **Hero Section**
   - Full-width hero image/video
   - Story title overlay
   - Scroll indicator

2. **Introduction**
   - Challenge/Problem statement
   - Client introduction
   - Project scope

3. **Process/Journey**
   - Design process
   - Technical challenges
   - Creative solutions
   - Visual documentation

4. **Implementation**
   - Key features
   - Technical details
   - Design decisions
   - Code snippets (if relevant)

5. **Results**
   - Metrics and KPIs
   - Client testimonial
   - Impact statement
   - Awards/Recognition

6. **Project Details Sidebar**
   - Client name
   - Project duration
   - Services provided
   - Technologies used
   - Team members
   - External links

7. **Navigation**
   - Previous/Next story
   - Back to stories
   - Related stories

### About Us Page

#### Sections
1. **Our Story**
   - Company origin
   - Mission statement
   - Vision for the future

2. **Our Approach**
   - Design philosophy
   - Development process
   - Client collaboration

3. **Our Team**
   - Team member cards
   - Roles and expertise
   - Personal touches

4. **Our Values**
   - Core principles
   - What drives us
   - Community involvement

### Contact Page

#### Elements
1. **Contact Form**
   - Name
   - Email
   - Company (optional)
   - Project type
   - Message
   - Budget range (optional)

2. **Direct Contact**
   - Email address
   - Phone number (optional)
   - Office address (if applicable)

3. **Social Presence**
   - LinkedIn
   - GitHub
   - Dribbble
   - Instagram
   - Twitter/X

4. **Response Time**
   - Expected response time
   - Office hours
   - Time zone

## Content Guidelines

### Writing Style

#### Voice & Tone
- **Professional** yet approachable
- **Confident** without arrogance
- **Creative** but clear
- **Passionate** about craft

#### Language Guidelines
- Active voice preferred
- Short, punchy sentences for impact
- Longer form for storytelling sections
- Technical accuracy without jargon
- International English

### SEO Content Strategy

#### Page Titles Format
- Homepage: "Epic Stories | Digital Products & Experiences"
- Story: "[Story Title] | Epic Stories"
- About: "About Us | Epic Stories"
- Contact: "Contact | Epic Stories"

#### Meta Descriptions
- 150-160 characters
- Include key services/value prop
- Call-to-action when appropriate
- Unique for each page

#### URL Structure
- Homepage: epicstories.nl
- Stories: epicstories.nl/stories/[story-slug]
- About: epicstories.nl/about
- Contact: epicstories.nl/contact

## Content Management

### CMS Requirements

#### Features Needed
- Rich text editor
- Media library
- SEO fields
- Preview functionality
- Version control
- Scheduled publishing
- Content relationships

#### Content Types
1. **Stories** (main content)
2. **Team Members**
3. **Testimonials**
4. **Technologies**
5. **Services**
6. **Global Settings**

### Media Guidelines

#### Images
- **Format**: WebP with JPG fallback
- **Hero Images**: 1920x1080 minimum
- **Thumbnails**: 800x600
- **File Size**: Optimized, <500KB ideally
- **Alt Text**: Descriptive, SEO-friendly

#### Videos
- **Format**: MP4 (H.264)
- **Resolution**: 1080p preferred
- **Length**: 15-60 seconds for backgrounds
- **File Size**: Streaming optimized
- **Fallback**: Poster image required

## Content Calendar

### Launch Content (Priority 1)
1. Homepage copy and visuals
2. 3-5 flagship story case studies
3. About us content
4. Contact information

### Phase 2 Content
1. Additional story cases (5-10)
2. Team member profiles
3. Blog/insights section
4. Newsletter setup

### Ongoing Content
1. New project stories
2. Industry insights
3. Team updates
4. Award announcements

## Analytics & Optimization

### Key Metrics
- Story engagement time
- Scroll depth
- Click-through rates
- Contact form submissions
- Story completion rate

### A/B Testing Opportunities
- Hero messaging
- CTA buttons
- Story card layouts
- Navigation patterns

### Content Performance Review
- Monthly analytics review
- Quarterly content audit
- Annual strategy revision

## Legal & Compliance

### Required Pages
- Privacy Policy
- Cookie Policy
- Terms of Service
- Accessibility Statement

### Content Permissions
- Client approval for case studies
- Image rights and licensing
- GDPR compliance
- Cookie consent

## Localization (Future)

### Considerations
- Dutch language option
- Cultural adaptations
- Local case studies
- Regional contact info