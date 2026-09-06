# Portfolio & HDShare Landing Page

A modern personal portfolio and product landing page built with **Next.js (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ✨ Features

- **Personal Portfolio (`/`)**:
  - Terminal & cyberpunk-themed dark UI
  - Interactive hero section with animated headings
  - About me, tech stack, skills, and project highlights
  - Contact section with direct messaging links

- **HDShare Product Page (`/hdshare`)**:
  - High-converting landing page for the **HDShare** macOS app
  - Direct DMG download trigger with step-by-step Gatekeeper bypass instructions
  - Interactive platform mode breakdown (WhatsApp, Discord, Telegram)
  - Screenshot gallery and showcase slider
  - Tiered pricing table with Lemon Squeezy checkout integration

- **Design & UI**:
  - Smooth scroll and entry animations powered by **Framer Motion**
  - Responsive layouts tailored for mobile, tablet, and desktop
  - Iconography with **Lucide React**

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── layout.tsx         # Root layout & font configurations
│   ├── page.tsx           # Main developer portfolio page
│   ├── globals.css        # Global theme styles & animations
│   └── hdshare/
│       └── page.tsx       # HDShare product landing page
├── components/
│   ├── hdshare/           # Hero, Features, InstallGuide, Pricing, Modals
│   ├── layout/            # Navbar & Footer
│   ├── portfolio/         # Hero, About, Projects, Contact sections
│   └── ui/                # TerminalCard, GlowButton, GlitchText, AnimatedSection
└── lib/
    └── constants.ts       # URLs, site config, and product metadata
```

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have **Node.js 18+** installed.

### 2. Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 📝 License

This project is licensed under the MIT License.
