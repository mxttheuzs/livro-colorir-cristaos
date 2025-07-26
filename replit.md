# Christian Coloring Books Landing Page

## Overview

This is a mobile-first landing page for selling Christian coloring books to children. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a modern landing page design optimized for mobile devices and conversion optimization.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### January 26, 2025 - Otimização Completa para Mobile-Only ✅ EM ANDAMENTO
- Removido completamente o componente ExitIntentModal que exibia popup de "50% OFF Exclusivo!"
- Deletados arquivos exit-intent-modal.tsx e use-exit-intent.tsx
- Removida pergunta sobre uso comercial do FAQ
- Corrigido botão "TIREI MINHAS DÚVIDAS" para navegar corretamente
- Site agora otimizado exclusivamente para dispositivos móveis
- Resolvidos problemas de push no GitHub (branch errada + permissões de workflow)
- Mudanças transferidas da branch final-popup-removal para main com force push
- Site atualizado e funcionando em produção: https://35livrosdecolorircristaos.netlify.app
- Deploy automático via Netlify ativo e funcionando corretamente
- Popup removido com sucesso do site em produção

### January 26, 2025 - Otimização Completa para Mobile
- Otimizada toda a aplicação exclusivamente para dispositivos móveis
- Ajustadas todas as seções com padding px-4 e containers max-w-sm para melhor experiência
- Reduzido py-12 para py-8 em todas as seções para espaçamento mais adequado ao mobile
- Otimizados todos os títulos para tamanhos mobile-first (text-2xl ao invés de text-3xl)
- Adicionados estilos CSS específicos para touch devices e pequenas telas
- Configuradas animações pulse-slow nos botões principais para melhor conversão
- Implementadas otimizações para dispositivos ultra pequenos (320px e 360px)
- Adicionado touch-action: manipulation para melhor responsividade ao toque
- Configurado font-size mínimo de 16px para prevenir zoom automático no iOS
- Aplicadas otimizações de performance para scroll suave e touch scrolling
- Removidos efeitos hover em dispositivos touch para melhor experiência
- Todos os botões principais agora ocupam largura total (w-full) para facilitar toque
- Hero section otimizada com imagem máxima de 300px e melhor hierarquia visual
- Seção de ofertas completamente responsiva com carrossel de versículos móvel-friendly
- Componentes de benefícios, categorias de uso e testemunhos adaptados para mobile
- Footer e WhatsApp section com espaçamento reduzido e melhor usabilidade móvel

### Janeiro 26, 2025 - Deploy
- Configured complete deployment setup for multiple platforms
- Created automated deployment scripts (upload-github.sh, build-deploy.sh)
- Added GitHub Actions workflow for automatic GitHub Pages deployment
- Updated netlify.toml with correct build commands and Node.js 20
- Created comprehensive deployment guides (INSTRUCOES-GITHUB.md, GUIA-RAPIDO-DEPLOY.md)
- Fixed git configuration issues and provided manual deployment instructions
- Optimized .gitignore for production deployment
- Prepared project for three deployment options: GitHub Pages, Netlify, and Vercel

### January 25, 2025
- Added custom pulse-scale animation to purchase buttons making them continuously scale in and out for better conversion
- Fixed premium bonus text to correctly show "5 Vídeos de Histórias Bíblicas"
- Created small carousel component below "15 Versículos Ilustrados" bonus showing preview images with locked overlays
- Applied padlock overlay to all carousel images to indicate premium locked content
- Removed star icon from Basic Package for cleaner design
- Adjusted button text sizes: Basic package button to text-[16px], Premium package button to text-[15px]
- Prepared project for GitHub/Netlify deployment with netlify.toml configuration and README.md instructions

### January 24, 2025
- Updated pricing: 35 Christian coloring books now priced at R$ 10,00 (down from R$ 27,00)
- Removed order bump functionality completely from the landing page
- Changed product showcase title from "O que você vai receber" to "Conheça Nossos Livros Cristãos"
- Updated exit intent modal pricing to reflect new base price (50% discount now R$ 5,00)
- Redesigned with child-friendly and professional color palette: primary blue, light blue, purple, green, yellow, orange, and pink accents
- Updated all components to use new color scheme for a more appealing look to children and parents
- Transformed hero section with vibrant blue gradient background, full-screen layout, and real book cover images
- Updated all CTA buttons to use bright yellow color for better conversion
- Enhanced visual hierarchy with modern card designs and improved shadows
- Replaced Fredoka font with professional Inter and Poppins fonts for better readability
- Improved spacing, shadows, and hover effects throughout the site for a more polished professional look
- Enhanced card layouts with better padding and subtle animations
- Removed exit-intent modal offering 50% discount to simplify user experience
- Removed floating CTA button for a cleaner, less intrusive user experience
- Added "Quero Ver as Ofertas" button below the book carousel to improve conversion flow
- Updated all "QUERO VER AS OFERTAS" buttons to use consistent green rounded design across hero, product showcase, and offer sections

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React with TypeScript, built with Vite
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured for Neon Database)
- **Styling**: Tailwind CSS with shadcn/ui components, child-friendly blue color scheme
- **Build System**: Vite for frontend, esbuild for backend

## Key Components

### Frontend Architecture
- **React Router**: Uses Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom color scheme for Christian theme
- **Mobile-First Design**: Optimized for mobile devices with responsive components

### Backend Architecture
- **Express.js**: RESTful API server with middleware for logging and error handling
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **Development Setup**: Vite middleware integration for hot reload in development

### Database Schema
The application uses four main tables:
- **Users**: Authentication (username, password)
- **Leads**: Potential customers (email, name, phone, source)
- **Orders**: Purchase records (customer info, amounts, order bump, discount codes, status)
- **Contacts**: Contact form submissions (name, email, message)

### Landing Page Components
- **Hero Section**: Main value proposition with CTA
- **Product Showcase**: Visual display of the 35 coloring books
- **Benefits Section**: Key selling points with icons
- **Testimonials**: Social proof from customers
- **Offer Section**: Pricing with countdown timer
- **Order Bump**: Additional products to increase order value
- **Guarantee Section**: Risk reversal messaging
- **Exit Intent Modal**: Last-chance offer for leaving users

## Data Flow

1. **Lead Generation**: Visitors' interactions create leads in the database
2. **Order Processing**: Purchase attempts create order records with detailed information
3. **Contact Management**: Contact form submissions are stored for follow-up
4. **Conversion Tracking**: Each interaction is logged for analytics

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Framework**: Radix UI components, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Forms**: React Hook Form with Zod validation
- **Routing**: Wouter for lightweight routing

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)
- **Validation**: Zod for schema validation
- **Session Management**: connect-pg-simple for PostgreSQL sessions

### Development Tools
- **Build Tools**: Vite, esbuild, TypeScript
- **Database Tools**: Drizzle Kit for migrations
- **Replit Integration**: Custom plugins for development environment

## Deployment Strategy

The application is configured for deployment on Replit with:

- **Development Mode**: Vite dev server with Express backend
- **Production Build**: Static frontend build served by Express
- **Database**: PostgreSQL via Neon Database with connection pooling
- **Environment Variables**: DATABASE_URL for database connection

### Build Process
1. Frontend builds to `dist/public` directory
2. Backend builds to `dist/index.js` with esbuild
3. Production server serves static files and API routes
4. Database migrations run via `drizzle-kit push`

### Mobile Optimization
- Responsive design with mobile-first approach
- Touch-friendly interface elements
- Optimized images and assets
- Fast loading times with minimal bundle size

The application is specifically designed for the Brazilian market selling Christian educational content, with Portuguese language content and local cultural considerations.