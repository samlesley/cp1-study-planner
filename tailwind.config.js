// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
    },
  },
  plugins: [],
}

// src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// src/App.tsx
import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary-600 text-white p-4">
        <h1 className="text-2xl font-bold">CP1 Study Planner</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <p className="text-gray-700">Welcome to your CP1 exam study planner!</p>
      </main>
    </div>
  )
}

export default App

// .gitignore
node_modules
dist
dist-ssr
*.local
.env
.env.*
!.env.example
.DS_Store