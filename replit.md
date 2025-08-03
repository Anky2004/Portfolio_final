# Portfolio Website - Ankita Saha

## Overview

This is a full-stack portfolio website for Ankita Saha, a final-year Electronics and Communication Engineering student. The application showcases her skills, projects, experience, education, and publications in an elegant, modern interface. Built as a single-page application with a contact form feature that allows visitors to send messages directly through the website.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables for consistent theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for end-to-end type safety
- **API Design**: RESTful API endpoints with JSON responses
- **Validation**: Zod schemas for request/response validation
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

### Data Storage Solutions
- **Development**: In-memory storage using Map data structure for contact form submissions
- **Production Ready**: Drizzle ORM configured for PostgreSQL with Neon Database serverless driver
- **Schema Management**: Type-safe database schemas using Drizzle with Zod integration
- **Migrations**: Drizzle Kit for database migration management

### Development Environment
- **Hot Reload**: Vite dev server with HMR for frontend development
- **Development Server**: Express middleware integration with Vite for unified development experience
- **TypeScript**: Shared types between frontend and backend through common schema definitions
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)

### Design System
- **Theme**: Custom purple-based color palette with light/dark mode support
- **Typography**: Tailwind's default font stack with custom spacing and sizing
- **Components**: Modular section-based architecture (Hero, About, Skills, Projects, etc.)
- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Animations**: CSS transitions and transforms for interactive elements

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, TanStack Query for state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Hookform Resolvers for validation integration
- **Validation**: Zod for schema validation and type inference

### UI and Styling
- **Styling Framework**: Tailwind CSS with PostCSS for processing
- **UI Components**: Comprehensive Radix UI primitive collection (Dialog, Dropdown, Toast, etc.)
- **Utility Libraries**: clsx and tailwind-merge for conditional styling, class-variance-authority for component variants
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date formatting and manipulation

### Backend and Database
- **Database**: Neon Database serverless PostgreSQL with @neondatabase/serverless driver
- **ORM**: Drizzle ORM with Drizzle Kit for migrations and schema management
- **Database Integration**: drizzle-zod for seamless Zod schema integration
- **Session Management**: connect-pg-simple for PostgreSQL session storage (configured but not actively used)

### Development Tools
- **Build Tool**: Vite with React plugin for fast development and building
- **TypeScript**: tsx for TypeScript execution, esbuild for production bundling
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Error Handling**: @replit/vite-plugin-runtime-error-modal for development error overlay

### Production Considerations
- **Database**: PostgreSQL configured through environment variables
- **Asset Management**: Vite handles static asset optimization and bundling
- **Type Safety**: End-to-end TypeScript with shared schemas between client and server
- **Error Monitoring**: Structured error handling with proper HTTP status codes and JSON responses