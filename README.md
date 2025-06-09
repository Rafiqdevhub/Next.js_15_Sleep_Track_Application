# SleepWise - Sleep Tracker Application

![SleepWise](./public/banner.png)

A modern web application built with Next.js that helps users track and analyze their sleep patterns. Users can log their sleep duration, quality, and view insights about their sleep habits over time.

## Features

- 📊 Visual sleep pattern analysis with interactive charts
- 🔐 Secure authentication with Clerk
- 💤 Track sleep duration and quality
- 📈 View average sleep statistics
- 🏆 Track best and worst sleep records
- 📱 Responsive design for all devices
- 📅 Historical sleep record management

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Authentication**: [Clerk](https://clerk.com/)
- **Database**: PostgreSQL with [Prisma ORM](https://www.prisma.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Charts**: [Chart.js](https://www.chartjs.org/) with [react-chartjs-2](https://react-chartjs-2.js.org/)
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Clerk account for authentication

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="your-postgresql-connection-string"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="/"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL="/"
```

### Installation

1. Clone the repository:

```bash
git clone ....
```

2. Install dependencies:

```bash
npm install
```

3. Set up the database:

```bash
npx prisma generate
npx prisma migrate dev
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable React components
- `/actions` - Server actions for data operations
- `/lib` - Utility functions and database configuration
- `/types` - TypeScript type definitions
- `/prisma` - Database schema and migrations

## Database Schema

### User Model

- `id`: String (UUID)
- `clerkUserId`: String (Unique)
- `email`: String (Unique)
- `name`: String (Optional)
- `imageUrl`: String (Optional)
- `createdAt`: DateTime
- `updatedAt`: DateTime

### Record Model

- `id`: String (UUID)
- `text`: String (Sleep quality description)
- `amount`: Float (Hours of sleep)
- `date`: DateTime
- `userId`: String (Foreign key to User)
- `createdAt`: DateTime

## Features in Detail

### Sleep Records

- Add new sleep records with duration and quality description
- View history of sleep records
- Delete individual records
- Visual representation of sleep patterns

### Analytics

- Calculate average sleep duration
- Track best and worst sleep records
- View sleep trends over time
- Personal insights dashboard

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
