# Alex Chen Portfolio Application

## Overview

This is a full-stack portfolio application for Alex Chen, a Product Manager, built with a modern React frontend and Express backend. The application showcases Alex's professional experience, skills, and provides scheduling functionality for consultations. It's designed as a professional portfolio with AI-forward product management expertise.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Storage**: PostgreSQL sessions with connect-pg-simple
- **Development**: tsx for TypeScript execution

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation bar with route highlighting
- **Pages**: Landing, About, Schedule, and 404 pages
- **UI Library**: Complete shadcn/ui component set including:
  - Form controls (buttons, inputs, selects)
  - Layout components (cards, dialogs, sheets)
  - Feedback components (toasts, alerts)
  - Data display (tables, charts, calendars)

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Centralized route management system
- **Development Server**: Vite integration for hot module replacement
- **Error Handling**: Centralized error handling middleware

### Database Schema
- **Users Table**: Basic user structure with id, username, and password fields
- **Validation**: Zod schemas for type-safe data validation
- **Migrations**: Drizzle migrations stored in `/migrations` directory

## Data Flow

1. **Frontend Requests**: React Query manages API calls to Express backend
2. **Backend Processing**: Express routes handle requests and interact with storage layer
3. **Database Operations**: Drizzle ORM provides type-safe database interactions
4. **Response Handling**: Standardized JSON responses with error handling
5. **State Updates**: React Query automatically updates UI with fresh data

## External Dependencies

### Core Dependencies
- **Neon Database**: PostgreSQL database hosting (@neondatabase/serverless)
- **Calendly Integration**: Embedded scheduling widget
- **Unsplash**: Professional headshot images
- **Google Fonts**: Inter font family for typography

### Development Tools
- **ESBuild**: Production bundling for server code
- **Replit Integration**: Development environment optimization
- **TypeScript**: Type safety across the entire stack

## Deployment Strategy

### Development
- `npm run dev`: Starts development server with hot reloading
- Vite development server with Express API proxy
- In-memory storage for rapid development

### Production Build
- `npm run build`: Creates optimized frontend and backend bundles
- Frontend: Vite builds to `dist/public`
- Backend: ESBuild bundles server to `dist/index.js`
- `npm start`: Runs production server

### Database Management
- `npm run db:push`: Pushes schema changes to database
- Drizzle migrations for schema versioning
- Environment-based database configuration

## Changelog
- July 02, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.