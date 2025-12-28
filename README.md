# OG Proxy

Generate dynamic Open Graph images with AI-powered copy generation.

## Features

- 🔐 **Neon Auth** - Built-in authentication with email/password
- ⚡ **Next.js 16** - Latest Next.js with Turbopack
- 🎨 **Tailwind CSS v4** - Modern styling
- 🚀 **Ready for Production** - Deploy to Vercel

## Getting Started

### Prerequisites

1. Create a Neon project at [console.neon.tech](https://console.neon.tech)
2. Enable Auth in your Neon project (Project → Branch → Auth)
3. Copy your Neon Auth Base URL from Configuration

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Add your NEON_AUTH_BASE_URL to .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Environment Variables

Create a `.env.local` file:

```env
NEON_AUTH_BASE_URL=https://ep-xxx.neonauth.us-east-1.aws.neon.tech/neondb/auth
```

## Routes

- `/` - Landing page
- `/auth/sign-in` - Sign in page
- `/auth/sign-up` - Sign up page
- `/account/settings` - User account settings (protected)
- `/account/security` - Security settings (protected)

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Authentication**: Neon Auth with Better Auth
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Vercel

## Project Structure

```
ogproxy/
├── app/
│   ├── account/[path]/     # Account pages (settings, security)
│   ├── api/auth/[...path]/ # Auth API routes
│   ├── auth/[path]/        # Auth pages (sign-in, sign-up)
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout with auth provider
│   └── page.tsx            # Landing page
├── lib/
│   └── auth/
│       └── client.ts       # Auth client configuration
├── proxy.ts                # Auth middleware
└── next.config.ts          # Next.js configuration
```

## Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variable:
   - `NEON_AUTH_BASE_URL`: Your Neon Auth Base URL
4. Deploy!

## License

MIT
