# SubWatch

A subscription tracking application that helps you manage and monitor all your subscriptions in one place.

## Features

- 🔐 User authentication with NextAuth.js
- 📊 Dashboard with spending analytics and charts
- 💳 Subscription management
- 🌙 Dark mode support
- 📱 Responsive design

## Tech Stack

- **Framework:** Next.js 16.1.1
- **Database:** SQLite with Prisma ORM
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS
- **Charts:** Recharts

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Cee-jhay/SubWatch.git
cd subwatch
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Update `.env.local` with:
```
DATABASE_URL=file:./prisma/dev.db
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

4. Set up the database:
```bash
npx prisma migrate dev
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
src/
├── app/
│   ├── (auth)/          # Authentication pages
│   ├── (dashboard)/    # Protected dashboard pages
│   └── api/            # API routes
├── components/         # React components
├── lib/               # Utilities and configurations
└── styles/            # Global styles
```

## License

MIT
