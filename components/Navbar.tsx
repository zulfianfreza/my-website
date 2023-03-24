'use client'
import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { cn } from '@/utils/cn'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <div className="max-w-3xl mx-auto">
      <nav className=" w-full py-10 flex justify-between items-center">
        <div className=" flex-1">
          <Link
            href=""
            className=" text-slate-800 dark:text-slate-50 font-bold text-lg"
          >
            hzeld
          </Link>
        </div>
        <div className=" hidden md:flex ">
          <Link
            href=""
            className={cn(
              ' text-slate-600 dark:text-slate-400 font-normal px-4 py-2 bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition duration-100',
              {
                ' text-slate-800 dark:text-slate-50 font-bold':
                  pathname === '/',
              }
            )}
          >
            Home
          </Link>
          <Link
            href="/showcase"
            className={cn(
              ' text-slate-600 dark:text-slate-400 font-normal px-4 py-2 bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition duration-100',
              {
                ' text-slate-800 dark:text-slate-50 font-bold':
                  pathname === '/showcase',
              }
            )}
          >
            Showcase
          </Link>
          <Link
            href=""
            className={cn(
              ' text-slate-600 dark:text-slate-400 font-normal px-4 py-2 bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition duration-100',
              {
                ' text-slate-800 dark:text-slate-50 font-bold':
                  pathname === '/coming-soon',
              }
            )}
          >
            Blog
          </Link>
          <Link
            href=""
            className=" text-slate-600 dark:text-slate-400 font-normal px-4 py-2 bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition duration-100"
          >
            Resume
          </Link>
        </div>
        <div className=" flex-1 flex justify-end">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}
