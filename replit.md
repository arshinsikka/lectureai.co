# LectureAI - Replit Project Guide

## Overview

LectureAI is a full-stack web application that transforms university lectures into bilingual, AI-powered structured notes. The platform features a modern React frontend with a Node.js/Express backend, utilizing PostgreSQL for data persistence and shadcn/ui for the component library.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM (DatabaseStorage implementation)
- **Validation**: Zod schemas for request/response validation
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Database Connection**: Neon PostgreSQL serverless with WebSocket support

### Development Setup
- **Monorepo Structure**: Client, server, and shared code in single repository
- **Hot Reloading**: Vite dev server with HMR for frontend development
- **TypeScript**: Strict type checking across all packages
- **Path Aliases**: Configured for clean imports (@/, @shared/)

## Key Components

### Database Schema
- **Users Table**: Basic user authentication (username, password)
- **Waitlist Entries**: Email collection for pre-launch signups
- **Contact Messages**: User inquiries and feedback storage
- **Timestamps**: Automatic creation tracking for all entities

### API Endpoints
- `POST /api/waitlist` - Add user to waitlist
- `GET /api/waitlist` - Retrieve waitlist entries (admin)
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve contact messages (admin)

### UI Components
- **Landing Page**: Hero section, features, team, and contact
- **Waitlist Modal**: Email collection with validation
- **Contact Form**: Multi-field form with error handling
- **Responsive Design**: Mobile-first approach with Tailwind

## Data Flow

1. **User Interaction**: Users interact with React components
2. **Client Validation**: Zod schemas validate form inputs
3. **API Requests**: TanStack Query handles HTTP requests
4. **Server Processing**: Express routes process requests
5. **Database Operations**: Drizzle ORM manages PostgreSQL queries
6. **Response Handling**: JSON responses with error handling
7. **UI Updates**: React Query updates component state

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Inter font family for typography

### Backend Services
- **Neon Database**: PostgreSQL hosting service
- **Drizzle Kit**: Database migration tool
- **Connect-pg-simple**: PostgreSQL session store

### Development Tools
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer
- **Replit Integration**: Development environment optimizations

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/`
3. **Static Assets**: Served from built frontend directory
4. **Database Setup**: Drizzle migrations for schema deployment

### Environment Configuration
- **Development**: Local development with hot reloading
- **Production**: Optimized builds with environment variables
- **Database**: PostgreSQL connection via DATABASE_URL
- **Session Storage**: PostgreSQL-backed session management

### Hosting Requirements
- **Node.js**: Runtime environment for server execution
- **PostgreSQL**: Database for persistent data storage
- **Static File Serving**: Express serves built React application
- **Environment Variables**: Secure configuration management

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 05, 2025. Initial setup
- January 05, 2025. Added PostgreSQL database with Drizzle ORM, replaced MemStorage with DatabaseStorage for persistent data storage