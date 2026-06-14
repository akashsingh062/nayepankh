# 🕊️ NayePankh Foundation Web Portal

[![Deployment Status](https://img.shields.io/badge/Vercel-Deployed-success?logo=vercel&logoColor=white)](https://nayepankh-three.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Database: Turso](https://img.shields.io/badge/Database-Turso%20%2F%20Prisma-4f46e5?logo=prisma&logoColor=white)](https://db.turso.tech/)
[![Registered NGO](https://img.shields.io/badge/NGO-80G%20%26%2012A%20Registered-orange)](#)

A modern, responsive, and accessibility-prioritized (WCAG 2.2 AA compliant) web application built for **NayePankh Foundation**, a premier youth-led NGO registered with the Uttar Pradesh Government. The platform features an interactive storefront for public engagement (donation appeals, volunteer registration, certificates viewer) and a secure administrative dashboard.

🌐 **Live Website**: [nayepankh-three.vercel.app](https://nayepankh-three.vercel.app/)

---

## 🌟 Key Features

### 1. Storefront Pages (Public Face)
* **Home Page**: Interactive counter cards showing NGO impact metrics, custom-designed registrations slider, and parallax banners with smooth transitions.
* **About Us**: Clean, visual layout describing the foundation's history, mission statement, motto badge, and full-screen banner.
* **Our Certificates**: High-contrast, grid-based interface displaying official registration and tax-exemption documents (12A, 80G).
* **Newspaper Recognition**: Visual coverage grid showing the organization's press mentions in leading national publications.
* **Volunteer Portal**: Multi-step application form with interactive skill-tag capsules, availability selector, field validations, and smooth automatic scroll-to-top on response states.
* **Donate Page**: Clear donation appeal layout detailing payment channels and the tax benefits (50% relief under Section 80G) supporters receive.
* **Compliance Policies**: Accessible policy pages outlining legal guidelines (Terms & Conditions, Privacy Policy, Shipping/Exchange, Refund policies).

### 2. Admin Portal (Management Suite)
* **Secure Login**: JWT-based secure administration authentication (`jose` + Next.js Middleware cookie checking).
* **Interactive Dashboard**:
  * **Overview Analytics**: Visual stats tracking volunteer signups, pending reviews, and approved candidates.
  * **Volunteer Management**: Live-searchable registry of applicants with dynamic filters (status, search terms).
  * **Status Toggles**: Instantly transition applicants between `Pending`, `Contacted`, `Approved`, or `Rejected`.
  * **Data Export**: Built-in CSV parser to download complete registry details with one-click.

---

## 🛠️ Tech Stack & Architecture

* **Frontend Framework**: [Next.js 16.2 (App Router)](https://nextjs.org/) + React 19
* **Styling & Theme**: Vanilla CSS Variables + [Tailwind CSS 3.4](https://tailwindcss.com/) (includes global Dark Mode switching and a custom unified layout token system)
* **Database & ORM**: [Prisma ORM](https://www.prisma.io/) + [Turso LibSQL Database](https://turso.tech/)
* **Authentication**: JWT verification cookies (`jose` + Web Middleware)

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js (v18+)** installed on your machine.

### 2. Setup Local Environment Variables
Create a `.env` file in the root directory and specify the following variables:
```env
# Database Credentials
DATABASE_URL="file:./dev.db" # Replace with libSQL token URL for live staging
LIBSQL_CLIENT_TOKEN=""       # Leave empty for local development file databases

# JWT Security
JWT_SECRET="your-super-secret-jwt-key"
```

### 3. Install & Generate Client
Install the project dependencies and compile the Prisma client:
```bash
# Install dependencies
npm install

# Generate database schema client
npx prisma generate
```

### 4. Database Setup & Migrations
Sync the database schema using Prisma push:
```bash
# Push database structures
npx prisma db push
```

### 5. Run the Local Development Server
Start the development compiler:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 📦 Deployment on Vercel

The application is optimized for deployment on Vercel:

1. Connect your Github repository to Vercel.
2. Specify the environment variables (`DATABASE_URL`, `LIBSQL_CLIENT_TOKEN`, and `JWT_SECRET`) in your Vercel project settings.
3. The build configuration automatically runs `prisma generate` during both the `postinstall` hook and prefixed to the `build` command (`prisma generate && next build`), ensuring clean builds without compilation blocks.
