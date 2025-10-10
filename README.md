
# RemindMe

RemindMe is a simple, smart, and secure reminder app designed for students and professionals who want to stay organized without the clutter.  
Track your tasks, bills, subscriptions, and deadlines effortlessly — and never miss what matters.

---

##  Features

- **Quick Reminder Creation** – Add reminders in seconds with a clean, intuitive interface.  
- **Email & Web Notifications** – Get timely alerts exactly when you need them.  
- **Organized Dashboard** – View and manage all upcoming tasks in one place.  
- **Secure by Design** – Your data stays private and encrypted.  
- **Responsive & Fast** – Optimized for all devices with a smooth user experience.

---

##  How It Works

1. **Add your reminders** — Enter your task, bill, or event.  
2. **Set the time** — Choose when you’d like to be reminded.  
3. **Get notified** — Receive reminders via email or browser alerts.  
4. **Stay on track** — Manage and edit all reminders from your dashboard.

---

##  Tech Stack

* **Framework:** [Next.js 15 (App Router + Turbopack)](https://nextjs.org/)
  Modern React framework with hybrid rendering, file-based routing, and high performance using Turbopack.

* **Database & Backend:** [Convex](https://www.convex.dev/)
  Serverless backend for real-time data, storage, and queries — no need for custom APIs.

* **Authentication:** [NextAuth.js](https://next-auth.js.org/)
  Secure, flexible authentication supporting email, OAuth, and credentials.

* **UI Library:** [Tailwind CSS](https://tailwindcss.com/)
  Utility-first CSS framework for fast, responsive design.

* **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
  Beautiful, accessible, and customizable React components built on Radix UI and Tailwind.

* **Animations:** [Framer Motion](https://www.framer.com/motion/)
  Smooth, interactive animations and transitions for a polished experience.

* **Email Rendering:** [React Email](https://react.email/)
  Write and preview responsive email templates using React components.

* **Email Delivery:** [Resend](https://resend.com/)
  Reliable and developer-friendly email API for sending reminders and transactional emails.

* **Deployment:** [Vercel](https://vercel.com/)
  Fast, serverless deployment platform with automatic builds, previews, and edge functions.

---

##  Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js `>=18`
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/annuk123/RemindMe.git

# Navigate to the project folder
cd RemindMe

# Install dependencies
pnpm install
````

### Environment Variables

Create a `.env.local` file in the project root and add your environment variables:

```bash
NEXT_PUBLIC_CONVEX_URL=your_convex_url
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key
```

### Run the Development Server

```bash
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

---

##  Folder Structure

```
RemindMe/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
├── convex/              # Convex backend functions & schema
├── lib/                 # Helpers, configs, utilities
├── public/              # Static assets
├── styles/              # Global styles
├── .env.local           # Environment variables
└── next.config.ts       # Next.js configuration
```

---

##  Feedback & Support

We’d love to hear your thoughts!
If you have feedback, feature ideas, or encounter a bug, you can:

* Submit feedback directly inside the app

---

##  License

This project is licensed under the **MIT License**.
You’re free to use, modify, and distribute it with attribution.

---

##  About the Creator

Built with care by **Annu**, an indie hacker passionate about creating clean, purposeful, and human-centered web apps.
Focused on simplicity, polish, and meaningful products — not corporate noise.

---
