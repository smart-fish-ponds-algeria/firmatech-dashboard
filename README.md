<p align="center">
  <img src="public/Group 1171274914.png" width="400" />
</p>

# 🖥️ FirmaTech — Smart Aquaculture Admin Dashboard

### 🚀 Built at Junction Hackathon (Club CELEC) — 3-Day Challenge

FirmaTech Admin Dashboard is a **web-based control panel** designed to help aquaculture managers:

- 📊 Monitor ponds in real-time
- 🐟 Oversee AI-powered fish health analytics
- 🍽️ Manage feeding operations remotely
- 🔒 Control access with multi-role authentication

This project was built in just **3 days** during the **Junction Hackathon**, organized by **Club CELEC**, with a mission to **digitize and streamline aquaculture operations** for administrators.

---

## 🎯 Features

✅ **Real-Time Pond Monitoring** — Track temperature, oxygen, pH, fish count, and other live metrics across ponds.

✅ **AI Health Insights** — Detect unusual fish behaviors and growth trends using integrated AI modules.

✅ **Feeding Control & Scheduling** — Start/stop feeding remotely, adjust schedules, and view feeding history.

✅ **Alerts & Notifications** — Instant alerts on critical events like oxygen drops or abnormal temperatures.

✅ **Multi-Pond Management** — Monitor and manage multiple ponds with individual detailed dashboards.

✅ **User Role Management** — Admins can manage farmers and access permissions.

✅ **Secure Authentication** — Login system using **NextAuth** (credentials, Google OAuth), with **MongoDB** as the main database.

---

## 💻 Tech Stack

- Next.js (React Framework)
- TailwindCSS (UI Styling)
- Chart.js (Data Visualization)
- NextAuth (Authentication)
- MongoDB + Mongoose (Database)
- REST API (Next.js Route Handlers)


## 📁 Project Structure

```

.
├── app/                  # Next.js App Router (pages, dashboards)
├── components/           # Reusable UI components
├── lib/                  # Mongoose database connection, helpers
├── models/               # MongoDB Models (Ponds, Users, Feeds, Alerts)
├── public/               # Static assets (images, icons)
├── styles/               # Tailwind configuration
├── .env.local            # Environment variables (MongoDB URI, NextAuth secrets)
└── package.json          # Project metadata and scripts

````



## 👥 Team

| Name                    | Role                       |
| ----------------------- | -------------------------- |
| **Benabdallah Souhaib** | Admin Dashboard UI/UX + Frontend |
| **Marya**               | UI/UX Design               |
| **Younes**              | Backend API Development    |
| **Riyad Allali**        | Database & API Integration |
| **Ounis Samir Akram**   | AI Module & Data Analytics |

---

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/smart-fish-ponds-algeria/firmatech-Dashboard.git
cd FirmaTech-Admin-Dashboard
````

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file:

```bash
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### 4. Run the development server

```bash
npm run dev
```

Access on [http://localhost:3000](http://localhost:3000)

---

## 🔐 Authentication & Roles

* **NextAuth** handles login via credentials & Google OAuth.
* **Role-based access control** (Admin, Supervisor, Farmer) via MongoDB user roles.
* Fully customizable roles in `models/User.js`.

---

## 📢 Alerts System

* **Real-time alert system** via custom API notifications (email or dashboard alerts).
* Alerts on low oxygen, high temperature, feeding issues, etc.

---

## 🛠 Built With

* [Next.js](https://nextjs.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [NextAuth](https://next-auth.js.org/)
* [MongoDB](https://www.mongodb.com/)
* [Chart.js](https://www.chartjs.org/)
* [Zustand](https://zustand-demo.pmnd.rs/)
* [Axios](https://axios-http.com/)

---

## 📄 License

MIT © 2025 FirmaTech Admin Team



