# Personal Portfolio Website

## Overview

This is a modern, full-stack personal portfolio website built with React and Express. The application features a stunning single-page design with smooth animations, dark theme, and responsive layout. It showcases a developer's skills, projects, experience, and contact information in an engaging, professional manner.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom dark theme and gradient animations
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth page transitions and scroll animations
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Session Management**: Connect-pg-simple for PostgreSQL session store
- **Development**: Hot module replacement with Vite integration

### Design System
- **Component Library**: shadcn/ui with Radix UI primitives
- **Theme**: Custom dark theme with CSS variables
- **Color Palette**: Pastel accent colors (purple, cyan, emerald, amber, pink)
- **Typography**: Modern font system with proper hierarchy
- **Animations**: Matrix rain effect, particle system, starfield background

## Key Components

### Frontend Components
- **Navigation**: Sticky header with smooth scroll navigation
- **Hero Section**: Animated introduction with gradient text effects
- **About Section**: Personal information with statistics and achievements
- **Skills Section**: Interactive skill categories with animated progress bars
- **Projects Section**: Grid layout showcasing portfolio projects
- **Experience Section**: Timeline-based work and education history
- **Contact Section**: Contact form with social media links
- **Animated Background**: Multiple layered animation effects

### Backend Components
- **Express Server**: RESTful API with middleware for logging and error handling
- **Storage Layer**: Abstracted storage interface with memory implementation
- **Route Registration**: Modular route organization with HTTP server creation

### UI Components
- **Form Components**: Input, textarea, button, select, checkbox, radio
- **Layout Components**: Card, separator, sheet, dialog, popover
- **Feedback Components**: Toast notifications, progress indicators, skeleton loaders
- **Navigation Components**: Breadcrumb, pagination, tabs, accordion
- **Data Display**: Table, chart, badge, avatar, tooltip

## Data Flow

### Client-Side Data Flow
1. React Query manages server state and caching
2. Forms use React Hook Form with Zod validation
3. Components communicate through props and context
4. Animations triggered by scroll events and user interactions
5. Toast notifications provide user feedback

### Server-Side Data Flow
1. Express middleware handles request logging and JSON parsing
2. Routes process API requests and interact with storage layer
4. Error handling middleware catches and formats errors
5. Response data flows back to client through JSON API

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Libraries**: Radix UI primitives, shadcn/ui components
- **Animations**: Framer Motion, Embla Carousel
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Data Fetching**: TanStack React Query
- **Utilities**: date-fns, lucide-react icons

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Session Management**: express-session, connect-pg-simple
- **Development**: tsx for TypeScript execution, esbuild for bundling
- **Validation**: Zod with drizzle-zod integration

### Build Tools
- **Vite**: Frontend build tool with React plugin
- **TypeScript**: Static type checking across the stack
- **ESBuild**: Fast bundling for production server
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with HMR and Express backend
- **Development Scripts**: `npm run dev` for concurrent client/server development

### Production Build
- **Client Build**: Vite builds optimized static assets to `dist/public`
- **Server Build**: ESBuild bundles Express server to `dist/index.js`
- **Static Serving**: Express serves built client files in production

The application is designed as a modern, performant portfolio website that can showcase a developer's work professionally while maintaining excellent user experience through smooth animations and responsive design.