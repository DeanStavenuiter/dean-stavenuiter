# Project Rules

This document outlines the coding standards and architectural decisions for this project.

## Code Style

- **Use TypeScript for all files** instead of JavaScript
- **Follow ESLint and Prettier formatting rules** - ensure code is consistently formatted
- **Prefer `const` over `let`** and avoid `var` entirely
- **Always use functional React components with hooks** - no class components
- **Add explicit return types for all exported functions** - improves type safety and documentation

## React & Next.js

- **Use Next.js App Router** (`app/` directory) instead of Pages Router
- **Default to Server Components**, only use Client Components when needed (add `'use client'` directive)
- **Use async/await with fetch** inside Server Components for data fetching
- **Organize components** in a `components/` folder with clear, descriptive names
- **Keep components small, composable, and reusable** - follow single responsibility principle

## Styling (Tailwind CSS)

- **Use Tailwind utility classes** instead of custom CSS whenever possible
- **Order Tailwind classes logically**: layout → spacing → typography → colors → effects
- **Extract repeated class sets** with `@apply` in `globals.css` or Tailwind variants for maintainability

## Data & API

- **Use Prisma as ORM** with schema in `/prisma/schema.prisma`
- **Follow repository pattern** for database access - separate data access logic
- **Validate API requests and responses** with Zod for type safety
- **API routes must return typed JSON responses** - ensure consistent API contracts

## Architecture

- **Place reusable utilities** in `lib/` directory
- **Place server actions** in `app/actions/` directory
- **Place shared types** in `types/` directory
- **Use environment variables** only via Next.js `process.env` and type them in `env.d.ts`

## Testing & Quality

- **Write unit tests with Jest** for critical functionality
- **Cover critical business logic and API endpoints** with comprehensive tests
- **Use Cypress for E2E testing** if the project requires end-to-end testing
- **Maintain high code quality** through consistent testing practices

---

*Follow these rules to maintain code consistency, readability, and maintainability across the project.*
