# 📚 Adarsh Research and Publication House

A modern, full-stack educational e-commerce platform designed to distribute high-quality B.Ed and D.El.Ed study materials, practical manuals, and research resources across India. 

Built with React, Tailwind CSS, and Cloudflare's serverless ecosystem (Pages Functions + D1 Database).

---

## ✨ Key Features

- **🎓 Comprehensive Catalog:** Browse B.Ed and D.El.Ed books categorized by year, semester, and type (Theory/Practical).
- **🛒 Dynamic E-Commerce Flow:** Full cart system with a multi-step checkout process.
- **📱 Smart Payments:** Automated, dynamic UPI QR code generation based on the cart total and Admin's configured UPI ID.
- **🌐 Bilingual Interface:** Instant English to Hindi (हिन्दी) translation switch.
- **🔐 Admin Command Center:** Secure dashboard to manage orders, update the book inventory, add governing body members, and configure system payment settings dynamically.
- **✨ Modern UI/UX:** Glassmorphism design, 3D card hover effects, and smooth page transitions powered by Framer Motion and Tailwind v4.

---

## 🛠️ Tech Stack

**Frontend:**
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (Dev Server & Bundler)
- [Tailwind CSS v4](https://tailwindcss.com/) (Styling)
- [Framer Motion](https://motion.dev/) (Animations)
- [Lucide React](https://lucide.dev/) (Icons)

**Backend & Infrastructure:**
- [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/platform/functions/) (Serverless REST API)
- [Cloudflare D1](https://developers.cloudflare.com/d1/) (Serverless SQLite Database)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) (Local Environment & Deployment)

---

## 🚀 Local Development Setup

Because this project uses Cloudflare D1 and Pages Functions, you must run both a backend server (Wrangler) and a frontend server (Vite) simultaneously using the configured proxy.

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 2. Install Dependencies
```bash
npm install