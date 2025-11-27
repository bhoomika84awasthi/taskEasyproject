// App.jsx
// Pixel-perfect React recreation of the provided Dashboard UI using Tailwind.
// Add these to public/index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
// Ensure Tailwind is configured and the tailwind.config contains the custom colors used below.

import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  const uploadedImage = '/mnt/data/TaskEasy Dashboard Page_3.png';

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#111418] dark:text-gray-200 min-h-screen">
      <div className="flex h-screen flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 px-6 py-3 bg-white dark:bg-background-dark sticky top-0 z-10">
          <div className="flex items-center gap-4 text-[#111418] dark:text-white">
            <div className="text-primary">
              {/* svg logo placeholder */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.4 29.24L18.76 43.59C19.88 44.71 21.4 44.92 22.72 44.79C24.06 44.66 25.51 44.16 26.97 43.46C29.91 42.04 33.26 39.57 36.41 36.41C39.57 33.26 42.04 29.91 43.46 26.97C44.16 25.51 44.66 24.06 44.79 22.72C44.92 21.4 44.71 19.88 43.59 18.76L29.24 4.41C27.85 3.02 25.88 3.02 24.29 3.37C22.61 3.73 20.73 4.58 18.84 5.75C16.5 7.19 13.99 9.18 11.59 11.59C9.18 13.99 7.19 16.5 5.75 18.84C4.58 20.73 3.73 22.61 3.37 24.29C3.02 25.88 3.02 27.85 4.4 29.24Z" />
              </svg>
            </div>
            <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">TaskEasy</h2>

            <div className="flex flex-wrap gap-2 items-center text-sm">
              <span className="text-gray-400 dark:text-gray-500">/</span>
              <a className="text-gray-500 dark:text-gray-400 hover:text-primary" href="#">sanexsolution</a>
              <span className="text-gray-500 dark:text-gray-400">/</span>
              <a className="text-gray-500 dark:text-gray-400 hover:text-primary" href="#">ProdigiSign</a>
              <span className="text-gray-500 dark:text-gray-400">/</span>
              <a className="text-gray-500 dark:text-gray-400 hover:text-primary" href="#">Overview</a>
              <span className="text-gray-500 dark:text-gray-400">/</span>
              <span className="text-[#111418] dark:text-white">Dashboards</span>
            </div>
          </div>

          <div className="flex flex-1 justify-end gap-6 items-center">
            <label className="flex flex-col min-w-40 max-w-64 h-10">
              <div className="flex w-full items-stretch rounded-lg h-full">
                <div className="text-[#617289] dark:text-gray-400 flex bg-gray-100 dark:bg-gray-800 items-center justify-center pl-3 rounded-l-lg">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 border-none bg-gray-100 dark:bg-gray-800 placeholder:text-[#617289] px-4 text-base" placeholder="Search" />
              </div>
            </label>

            <div className="flex gap-2">
              <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-gray-100 dark:bg-gray-800 text-[#111418] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-gray-100 dark:bg-gray-800 text-[#111418] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                <span className="material-symbols-outlined">help</span>
              </button>
            </div>

{/* Avatar */}
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD94AtckDdcf7FWXw-FiXx90tg4ok0I2wtlcsV_n-1Bp_f_Z46EYFlplFViIpmw8rJ2N1q4-NUcB22h90MsWW114tSX06qOlADzBwyNWLwmJ0KKy9tvJZ9vZzweyqUg7sky5kKEeSAY3FtuH6u919z-0MCpkfSB3Hi8nye0zjxVPvxyC6y7dds4IXtNgy34gTYxV_BCjkNnwQCrsMaj3jzSdbHR9wxNKQ1TUSrRPkjeuvX1rBQ6Lupke-vmOUhCqPDb35CEcGyBVBY")',
            }}
          ></div>          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="flex h-full w-64 flex-col justify-between border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-4">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between px-3">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-600 rounded-lg h-10 w-10 flex items-center justify-center text-white font-bold text-xl">P</div>
                  <h1 className="text-[#111418] dark:text-white text-base font-bold">ProdigiSign</h1>
                </div>
                <button className="h-8 w-8 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                <a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" href="#">
                  <span className="material-symbols-outlined">home</span>
                  <p className="text-sm font-medium">Overview</p>
                </a>
                <Link to="/summary" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f0f2f4]">
                  <span className="material-symbols-outlined">bar_chart</span>
                  <p className="text-sm font-medium">Summary</p>
                </Link>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 relative" href="#">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full"></div>
                  <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
                  <p className="text-[#111418] dark:text-white text-sm font-bold">Dashboards</p>
                </a>
                <Link to="/Wiki" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f0f2f4]">
                  <span className="material-symbols-outlined">book</span>
                  <p className="text-sm font-medium">Wiki</p>
                </Link>
                <a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" href="#">
                  <span className="material-symbols-outlined">view_kanban</span>
                  <p className="text-sm font-medium">Boards</p>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" href="#">
                  <span className="material-symbols-outlined">account_tree</span>
                  <p className="text-sm font-medium">Pipelines</p>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" href="#">
                  <span className="material-symbols-outlined">inventory_2</span>
                  <p className="text-sm font-medium">Artifacts</p>
                </a>
              </nav>
            </div>

            <div className="flex flex-col">
              <a className="flex items-center gap-3 px-3 py-2 text-primary hover:bg-primary/10 rounded-lg" href="#">
                <span className="material-symbols-outlined">settings</span>
                <p className="text-sm font-medium">Project settings</p>
              </a>
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
            <div className="flex flex-col p-8 space-y-6">
              <div className="flex flex-wrap justify-between items-center gap-3">
                <h1 className="text-[#111418] dark:text-white text-3xl font-bold">ProdigiSign Team - Overview</h1>
                <div className="flex items-center gap-2">
                  <button className="flex items-center justify-center rounded-lg h-10 px-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200">
                    <span className="material-symbols-outlined">star</span>
                  </button>
                  <button className="flex items-center justify-center rounded-lg h-10 px-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                  <button className="flex items-center justify-center rounded-lg h-10 px-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center py-12">
                <div className="flex flex-col items-center gap-6 text-center">
                  <div className="w-full max-w-sm">
                    <img alt="Illustration" className="w-full h-auto" src="C:\Users\Lenovo\Downloads\sanexsolution-taskeasy_frontend-438bd656c5b0\src\pages\dashboardpic.png" />
                  </div>

                  <div className="flex max-w-md flex-col items-center gap-2">
                    <p className="text-[#111418] dark:text-white text-xl font-bold">This dashboard doesn't have widgets just yet!</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Add one or more widgets to gain visibility into your team's progress.</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
