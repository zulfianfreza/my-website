import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className=" max-w-3xl mx-auto mt-10">
      <hr className=" border-slate-200 dark:border-slate-700" />
      <footer className=" py-10">
        <div className="flex flex-col md:flex-row gap-4 gap-y-8 md:gap-y-4">
          <div className=" space-y-4 flex-1">
            <h1 className=" text-lg font-bold">Social</h1>
            <nav className=" flex flex-col gap-y-4">
              <Link
                href=""
                className=" text-slate-600 dark:text-slate-400 transition duration-100 hover:text-slate-800 hover:dark:text-slate-50"
              >
                Facebook
              </Link>
              <Link
                href=""
                className=" text-slate-600 dark:text-slate-400 transition duration-100 hover:text-slate-800 hover:dark:text-slate-50"
              >
                Instagram
              </Link>
              <Link
                href=""
                className=" text-slate-600 dark:text-slate-400 transition duration-100 hover:text-slate-800 hover:dark:text-slate-50"
              >
                Github
              </Link>
              <Link
                href=""
                className=" text-slate-600 dark:text-slate-400 transition duration-100 hover:text-slate-800 hover:dark:text-slate-50"
              >
                Linkedin
              </Link>
            </nav>
          </div>
          <div className=" space-y-4 flex-1">
            <h1 className=" text-lg font-bold">General</h1>
            <nav className=" flex flex-col gap-y-4">
              <Link
                href=""
                className=" text-slate-600 dark:text-slate-400 transition duration-100 hover:text-slate-800 hover:dark:text-slate-50"
              >
                Home
              </Link>
              <Link
                href=""
                className=" text-slate-600 dark:text-slate-400 transition duration-100 hover:text-slate-800 hover:dark:text-slate-50"
              >
                Showcase
              </Link>
              <Link
                href=""
                className=" text-slate-600 dark:text-slate-400 transition duration-100 hover:text-slate-800 hover:dark:text-slate-50"
              >
                Blog
              </Link>
              <Link
                href=""
                className=" text-slate-600 dark:text-slate-400 transition duration-100 hover:text-slate-800 hover:dark:text-slate-50"
              >
                Resume
              </Link>
            </nav>
          </div>
          <div className=" space-y-4 flex-1">
            <h1 className=" text-lg font-bold">Extra</h1>
            <nav className=" flex flex-col gap-y-4">
              <Link
                href=""
                className=" text-slate-600 dark:text-slate-400 transition duration-100 hover:text-slate-800 hover:dark:text-slate-50"
              >
                Source Code
              </Link>
            </nav>
          </div>
        </div>
        <div className="flex mt-10 justify-center">
          <p className=" text-slate-600 dark:text-slate-400">
            Copyright &copy; 2023, hzeld.
          </p>
        </div>
      </footer>
    </div>
  )
}
