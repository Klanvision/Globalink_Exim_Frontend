# Import & Export Project Architecture

A modern, scalable full-stack application structure built with **Node.js + Express** on the backend and **React.js + Vite** on the frontend, featuring a dynamic UI/UX design system that seamlessly scales across desktop, tablet, and mobile displays.

---

## 🏗️ Architecture Breakdown

```text
ImportAndExport Project/
├── package.json               # Monorepo task runner (Concurrently)
├── README.md                  # Project documentation & setup instructions
├── .gitignore                 # Root gitignore rule set
│
├── server/                    # Node.js + Express REST API Server
│   ├── src/
│   │   ├── config/            # Environment & app configurations
│   │   ├── controllers/       # Controller handlers (Business logic handlers)
│   │   ├── middleware/        # Express request middlewares (cors, errors, logger)
│   │   ├── routes/            # Express endpoint definitions (/api/...)
│   │   ├── services/          # Data processing & mock DB logic
│   │   ├── utils/             # Standardized HTTP response utilities
│   │   └── index.js           # Express app bootstrap
│   ├── .env.example           # Server environment config reference
│   └── package.json           # Backend dependency manifest
│
└── client/                    # React.js + Vite Web Application
    ├── src/
    │   ├── assets/            # Static assets & graphics
    │   ├── components/        # Reusable component library
    │   │   ├── common/        # UI primitives (Buttons, Cards, Badges, Modals, ThemeToggle)
    │   │   ├── dashboard/     # Page-specific dynamic widgets (Metrics, DataGrid, Status)
    │   │   └── layout/        # App shell (Navbar, Sidebar, Footer)
    │   ├── context/           # Global React Context (Theme management)
    │   ├── hooks/             # Custom custom hooks (useFetch, useWindowSize)
    │   ├── pages/             # View pages (Dashboard, Analytics, Settings)
    │   ├── services/          # API integration layer (HTTP fetch wrappers)
    │   ├── utils/             # Data formatters & calculations
    │   ├── App.jsx            # Core layout & route manager
    │   ├── index.css          # Design system, CSS tokens, glassmorphism, responsive styles
    │   └── main.jsx           # React app mount
    ├── index.html             # Main HTML5 page with SEO meta tags
    ├── vite.config.js         # Vite configuration with API proxy support
    └── package.json           # Frontend dependency manifest
```

---

## ⚡ Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- [npm](https://www.npmjs.com/) (v8.0.0 or higher)

### 1. Install Dependencies
Run the initial setup command from the project root directory:
```bash
# Install root, backend server, and frontend client dependencies
npm run setup
```
*(Or install individually: `cd server && npm install`, then `cd client && npm install`)*

### 2. Run Development Mode
Launch both the Node.js backend API and the React Vite frontend concurrently with one command:
```bash
npm run dev
```

- **Frontend Client:** [http://localhost:5173](http://localhost:5173)
- **Backend API:** [http://localhost:5000/api](http://localhost:5000/api)

---

## 🎨 UI/UX Features

- **Theme Engine:** Built-in Light/Dark mode with seamless context switching and system preference auto-detection.
- **Glassmorphic UI:** Sleek modern aesthetics, frosted glass cards, subtle glows, and curated HSL color gradients.
- **Adaptive Layout:** Responsive drawer sidebar, mobile navigation header, dynamic grid math, and fluid typography.
- **Data Visualizations & Tables:** Interactive metric cards, searchable dynamic data tables with status pills, pagination, and actionable modals.
- **Live Health Monitor:** Real-time API connection ping status indicator integrated directly into the top navigation.
