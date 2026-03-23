# Pensala LMS

Pensala is a modern, responsive Learning Management System (LMS) built with **Next.js 14** and **Tailwind CSS**. It provides a clean interface for students to manage their classes and highlights a sleek dashboard experience.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://pensala-nextjs.vercel.app/)

## 🚀 Features

- **Personalized Dashboard**: A dedicated space for students to view their progress.
- **Course Management**: Easy access to various subjects including:
  - Mathematics
  - Sinhala
  - Commerce
  - History
- **Theme Support**: Integrated dark and light modes for a better user experience using `next-themes`.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Modern UI**: Styled with Tailwind CSS and enhanced with `react-icons`.

🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Theming**: [next-themes](https://www.npmjs.com/package/next-themes)
- **Fonts**: [Geist](https://vercel.com/font) (Sans & Mono)

## 📦 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/pensala-next.git
    cd pensala-next
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
src/
├── app/            # Next.js App Router (pages and layouts)
│   ├── dashboard/  # Dashboard page
│   ├── fonts/      # Local fonts
│   └── layout.js   # Root layout with Providers
├── components/     # Reusable UI components (Header, ImageCard, etc.)
└── public/         # Static assets
```

## 🌐 Deployment

This project is optimized for deployment on the [Vercel Platform](https://vercel.com/).
