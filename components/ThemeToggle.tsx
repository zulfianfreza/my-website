'use client'
import { Moon, Sun } from 'lucide-react'
import React from 'react'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      className=" h-10 w-10 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition duration-100 active:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 flex justify-center items-center"
      onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
    >
      <Sun className=" h-5 w-5 text-slate-800 dark:text-slate-50 rotate-0 scale-100 transition-all duration-100 dark:-rotate-90 dark:scale-0 absolute" />
      <Moon className=" h-5 w-5 text-slate-800 dark:text-slate-50 rotate-90 scale-0 transition-all duration-100 dark:rotate-0 dark:scale-100 absolute" />
    </button>
  )
}
