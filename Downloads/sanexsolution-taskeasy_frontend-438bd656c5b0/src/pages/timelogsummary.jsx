import React from "react";

/**
 * App.jsx
 * Single-page React component for "Time Log Summary" UI.
 * - Assumes Tailwind + Material Symbols loaded via public/index.html (above).
 * - Copy into src/App.jsx and render from src/index.jsx.
 */

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* HEADER */}
      <header className="flex w-full items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-6 py-3 sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#111418] dark:text-gray-100 text-2xl">rocket_launch</span>
            <h2 className="text-[#111418] dark:text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em]">TaskEasy</h2>
          </div>

          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2" />

          <nav className="flex flex-wrap items-center gap-2">
            <a className="text-[#617289] dark:text-gray-400 text-sm font-medium leading-normal hover:underline" href="#">sanexsolution</a>
            <span className="text-[#617289] dark:text-gray-400 text-sm font-medium leading-normal">/</span>
            <a className="text-[#617289] dark:text-gray-400 text-sm font-medium leading-normal hover:underline" href="#">ProdigiSign</a>
            <span className="text-[#617289] dark:text-gray-400 text-sm font-medium leading-normal">/</span>
            <a className="text-[#617289] dark:text-gray-400 text-sm font-medium leading-normal hover:underline" href="#">Boards</a>
            <span className="text-[#617289] dark:text-gray-400 text-sm font-medium leading-normal">/</span>
            <span className="text-[#111418] dark:text-gray-100 text-sm font-medium leading-normal">Time Log Summary Free</span>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-[#617289] dark:text-gray-400 text-sm font-normal leading-normal">Version: 1.0.4.0</p>

          <label className="flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-[#617289] dark:text-gray-400 flex border-none bg-background-light dark:bg-background-dark items-center justify-center pl-3 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-gray-200 focus:outline-0 focus:ring-0 border-none bg-background-light dark:bg-background-dark h-full placeholder:text-[#617289] dark:placeholder:text-gray-400 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search" />
            </div>
          </label>

          <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 bg-background-light dark:bg-background-dark text-[#111418] dark:text-gray-200">
            <span className="material-symbols-outlined">notifications</span>
          </button>

          <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 bg-background-light dark:bg-background-dark text-[#111418] dark:text-gray-200">
            <span className="material-symbols-outlined">settings</span>
          </button>

          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAJlWbNQrnXaAID5uU9bbl6dm9ht-4VkcEUDb78-4XQvJjRW0UKB0IGWXtQRwsKmt4utDTkHOdUu2YKwZZNmssZimGxglEBI5s2bB9iIY0P7qW1uUEdiN3WV9kXKeZuyB28ZbsD1tG7uFGfBpD94HdiyEruC3gMwQsYf7GnvKd3HILmv9G_P-p_sEX9l4UZo0vA6RDm3ASCbE0ygxOnjA_hMNrqpmKUV4fsunb2BQnMTy0c71HGTvbRR3Lq9KH2yQt-rToqOF0QZc")` }} />
        </div>
      </header>

      {/* LAYOUT */}
      <div className="flex w-full flex-1">
        {/* SIDEBAR */}
        <aside className="flex w-72 flex-col justify-between border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 p-2">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1sP-V2nB9ZWe0PNS4AvwAAB4TRNtejKnplq7_H27j9pI4-eU00dcse8voyTMLv94LbAwoBL8vzsRnro1RygIJ5y5d0010ounRcJd3bHbmzzBDHkBU3SYzqkYesCBoVTvpaqcdYKp5LGBaz2TP50Bdd2uu1e0e4BFspAyDVVTIaYy36lpjGQEPq_-olOYHdrNxj0861VWm9wq1jEhkWVhe-PL1ZoBgXH_5KhPrcgx1gfB5z40DhnuGZcb31k0bZBQXdSy8tBIvq_c")` }} />
              <h1 className="text-[#111418] dark:text-gray-100 text-base font-medium leading-normal">ProdigiSign</h1>
            </div>

            <nav className="flex flex-col gap-1">
              <a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-[#617289] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary" href="#">
                <span className="material-symbols-outlined text-base">dashboard</span>
                <span>Overview</span>
              </a>

              <a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-primary dark:text-primary-300 bg-blue-50 dark:bg-blue-900/50" href="#">
                <span className="material-symbols-outlined text-base">view_kanban</span>
                <span>Boards</span>
              </a>

              <a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-[#617289] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary" href="#">
                <span className="material-symbols-outlined text-base">list_alt</span>
                <span>Work Items</span>
              </a>

              <a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-[#617289] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary" href="#">
                <span className="material-symbols-outlined text-base">dynamic_feed</span>
                <span>Backlogs</span>
              </a>

              <a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-[#617289] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary" href="#">
                <span className="material-symbols-outlined text-base">sprint</span>
                <span>Sprints</span>
              </a>

              <a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-[#617289] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary" href="#">
                <span className="material-symbols-outlined text-base">help_center</span>
                <span>Queries</span>
              </a>

              <a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-bold text-primary dark:text-primary-300 bg-blue-50 dark:bg-blue-900/50" href="#">
                <span className="material-symbols-outlined text-base !font-bold" style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>history</span>
                <span>Time Log Summary Free</span>
              </a>

              <a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-[#617289] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary" href="#">
                <span className="material-symbols-outlined text-base">fork_right</span>
                <span>Pipelines</span>
              </a>

              <a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-[#617289] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary" href="#">
                <span className="material-symbols-outlined text-base">package</span>
                <span>Artifacts</span>
              </a>
            </nav>
          </div>

          <div className="flex flex-col">
            <a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-[#617289] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary" href="#">
              <span className="material-symbols-outlined text-base">settings</span>
              <span>Project settings</span>
            </a>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1">
          <div className="p-6">
            {/* Notice */}
            <div className="mb-6 @container">
              <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-lg border border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20 p-4 @[480px]:flex-row @[480px]:items-center">
                <div className="flex flex-col gap-1">
                  <p className="text-yellow-800 dark:text-yellow-200 text-base font-bold leading-tight">Extension is taking longer than expected</p>
                  <p className="text-yellow-700 dark:text-yellow-300 text-base font-normal leading-normal">Time Logging Extension is taking longer than expected to load.</p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-blue-600 text-white text-sm font-semibold leading-normal hover:bg-blue-700 shadow-sm">Dismiss</button>
              </div>
            </div>

            {/* Card */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-3xl text-primary">schedule</span>
                <h1 className="text-2xl font-bold text-[#111418] dark:text-gray-100">Time Log Summary</h1>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#617289] dark:text-gray-400">Team</label>
                  <select className="form-select rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:border-primary focus:ring-primary">
                    <option>ProdigiSign Team</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#617289] dark:text-gray-400">Team/User</label>
                  <select className="form-select rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:border-primary focus:ring-primary">
                    <option>Deepmala Das</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#617289] dark:text-gray-400">Week</label>
                  <select className="form-select rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:border-primary focus:ring-primary">
                    <option>2025-11-17 to 2025-11</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#617289] dark:text-gray-400">Month</label>
                  <select className="form-select rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:border-primary focus:ring-primary">
                    <option>Select Month</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#617289] dark:text-gray-400">From date:</label>
                  <input className="form-input rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:border-primary focus:ring-primary" type="date" defaultValue="2025-10-14" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#617289] dark:text-gray-400">To date:</label>
                  <input className="form-input rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:border-primary focus:ring-primary" type="date" defaultValue="2025-10-14" />
                </div>
              </div>

              <div className="flex gap-3 mb-6">
                <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-blue-600 text-white text-sm font-semibold leading-normal hover:bg-blue-700 shadow-sm">
                  <span className="material-symbols-outlined text-base">play_arrow</span>
                  <span>Search</span>
                </button>

                <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 text-sm font-medium leading-normal hover:bg-gray-400 dark:hover:bg-gray-500">
                  <span className="material-symbols-outlined text-base">download</span>
                  <span>Download</span>
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead className="text-xs text-[#617289] dark:text-gray-400 uppercase bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                    <tr>
                      <th className="px-4 py-3 font-medium whitespace-nowrap min-w-[150px]">User</th>
                      <th className="px-4 py-3 font-medium whitespace-nowrap min-w-[150px]">Project</th>
                      <th className="px-4 py-3 font-medium whitespace-nowrap min-w-[200px]">Work Item</th>
                      <th className="px-4 py-3 font-medium whitespace-nowrap min-w-[120px]">Type</th>
                      <th className="px-4 py-3 font-medium whitespace-nowrap min-w-[100px] text-center">2025-09-29</th>
                      <th className="px-4 py-3 font-medium whitespace-nowrap min-w-[100px] text-center">2025-10-06</th>
                      <th className="px-4 py-3 font-medium whitespace-nowrap min-w-[100px] text-center">2025-10-13</th>
                      <th className="px-4 py-3 font-medium whitespace-nowrap min-w-[100px]">Totals</th>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="px-4 py-2 font-medium text-center text-[#617289] dark:text-gray-400"></th>
                      <th className="px-4 py-2 font-medium text-center text-[#617289] dark:text-gray-400"></th>
                      <th className="px-4 py-2 font-medium text-center text-[#617289] dark:text-gray-400"></th>
                      <th className="px-4 py-2 font-medium text-center text-[#617289] dark:text-gray-400"></th>
                      <th className="px-4 py-2 font-medium text-center text-[#617289] dark:text-gray-400">MON</th>
                      <th className="px-4 py-2 font-medium text-center text-[#617289] dark:text-gray-400">TUE</th>
                      <th className="px-4 py-2 font-medium text-center text-[#617289] dark:text-gray-400">WED</th>
                      <th className="px-4 py-2 font-medium text-center text-[#617289] dark:text-gray-400"></th>
                    </tr>
                  </thead>

                  <tbody className="text-[#111418] dark:text-gray-100">
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-medium" rowSpan="3">Deepmala Das</td>
                      <td className="px-4 py-3" rowSpan="3">ProdigiSign</td>
                      <td className="px-4 py-3"><a className="text-primary hover:underline" href="#">14512 meeting logs</a></td>
                      <td className="px-4 py-3">Meeting</td>
                      <td className="px-4 py-3 text-center">1:30</td>
                      <td className="px-4 py-3 text-center">2:00</td>
                      <td className="px-4 py-3 text-center">4:00</td>
                      <td className="px-4 py-3 font-bold text-right">7:30</td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3"><a className="text-primary hover:underline" href="#">14513 UI Design</a></td>
                      <td className="px-4 py-3">Development</td>
                      <td className="px-4 py-3 text-center">5:00</td>
                      <td className="px-4 py-3 text-center">4:00</td>
                      <td className="px-4 py-3 text-center">4:00</td>
                      <td className="px-4 py-3 font-bold text-right">13:00</td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3"><a className="text-primary hover:underline" href="#">14514 Bug Fixing</a></td>
                      <td className="px-4 py-3">Development</td>
                      <td className="px-4 py-3 text-center">1:30</td>
                      <td className="px-4 py-3 text-center">1:00</td>
                      <td className="px-4 py-3 text-center">1:00</td>
                      <td className="px-4 py-3 font-bold text-right">4:00</td>
                    </tr>
                  </tbody>

                  <tfoot className="font-bold bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                    <tr>
                      <td className="px-4 py-3 text-right" colSpan="4">Totals</td>
                      <td className="px-4 py-3 text-center">8:00</td>
                      <td className="px-4 py-3 text-center">7:00</td>
                      <td className="px-4 py-3 text-center">9:00</td>
                      <td className="px-4 py-3 text-right">24:30</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
