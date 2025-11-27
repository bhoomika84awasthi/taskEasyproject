import React from "react";
import {Link} from "react-router-dom";
const TaskEasySprintsPage = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden font-display">
      {/* HEADER */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 py-3 bg-white dark:bg-background-dark sticky top-0 z-10 w-full">
        <div className="flex items-center gap-4 text-[#111418] dark:text-white">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="size-6">
                <svg
                  className="text-primary"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                TaskEasy
              </h2>
            </div>
            <div className="flex items-center gap-2 border-l border-slate-200 dark:border-slate-800 ml-2 pl-4">
              <a
                className="text-[#617289] dark:text-slate-400 text-sm font-medium leading-normal hover:text-primary"
                href="#"
              >
                sanexsolution
              </a>
              <span className="text-[#617289] dark:text-slate-400 text-sm font-medium leading-normal">
                /
              </span>
              <a
                className="text-[#617289] dark:text-slate-400 text-sm font-medium leading-normal hover:text-primary"
                href="#"
              >
                ProdigiSign
              </a>
              <span className="text-[#617289] dark:text-slate-400 text-sm font-medium leading-normal">
                /
              </span>
              <a
                className="text-[#617289] dark:text-slate-400 text-sm font-medium leading-normal hover:text-primary"
                href="#"
              >
                Boards
              </a>
              <span className="text-[#617289] dark:text-slate-400 text-sm font-medium leading-normal">
                /
              </span>
              <span className="text-[#111418] dark:text-white text-sm font-medium leading-normal">
                Sprints
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center gap-8">
          <label className="flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-[#617289] dark:text-slate-400 flex border-none bg-[#f0f2f4] dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] dark:bg-slate-800 focus:border-none h-full placeholder:text-[#617289] dark:placeholder:text-slate-400 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                placeholder="Search"
                defaultValue=""
              />
            </div>
          </label>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            data-alt="User avatar"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcZIUhVD1rDxJRKVXcQwyfAi5krIGPci_oXtweEg3eObRnjMvIt2d5VEHtBIAtMc1wUUfD-k_fTY3edtrd_qSC1sdoLBXXDOu_E70i12rLKWt0AZZqHteu-FwJ6HvGiWyS6nT8zJMqdQtNBa4p_Le0rGrTvZmhS_EJlSjVsEgQbJ3HaE50slApI3lge2FMvZIjW-eWLoNb8mR-yUAIDfOFrtzLf1Ho2xkUy5nWXVJikjKCQL1OZ7muw7f9XYivBtEfcY6t8qDOWyA")',
            }}
          ></div>
        </div>
      </header>

      <div className="flex h-full grow flex-row">
        {/* SIDEBAR */}
        <aside className="flex flex-col h-screen w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark text-[#111418] dark:text-white shrink-0">
          <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 h-[69px]">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-8 bg-[#6F42C1] rounded-lg">
                <span className="text-white text-lg font-bold">P</span>
              </div>
              <h2 className="text-[#111418] dark:text-white text-base font-bold leading-tight">
                ProdigiSign
              </h2>
            </div>
            <button className="p-1 text-slate-500 dark:text-slate-400 hover:text-primary">
              <span className="material-symbols-outlined text-xl">
                add_circle
              </span>
            </button>
          </div>
          <nav className="flex flex-col p-2 space-y-1 grow">
            <div>
              <h3 className="px-2 pt-2 pb-1 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                Overview
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">
                      space_dashboard
                    </span>
                    Overview
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-2">
              <h3 className="px-2 pt-2 pb-1 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                Boards
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/Workitem"
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <span className="material-symbols-outlined text-xl">
                      assessment
                    </span>
                    Work Items
                  </Link>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">
                      dashboard
                    </span>
                    Boards
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">
                      list_alt
                    </span>
                    Backlogs
                  </a>
                </li>
                <li>
                  <a className="relative flex items-center gap-3 px-3 py-2 rounded-md text-sm font-bold bg-slate-100 dark:bg-slate-800 text-primary">
                    <div className="absolute left-0 h-5 w-1 bg-primary rounded-r-full"></div>
                    <span className="material-symbols-outlined text-xl">
                      sprint
                    </span>
                    Sprints
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">
                      search
                    </span>
                    Queries
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">
                      signpost
                    </span>
                    Delivery Plans
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">
                      schedule
                    </span>
                    Time Log Summary
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-2">
              <ul className="space-y-1">
                <li>
                  <a
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">
                      compost
                    </span>
                    Pipelines
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">
                      inventory_2
                    </span>
                    Artifacts
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <a
              className="flex items-center gap-3 text-sm font-medium text-primary hover:underline"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">settings</span>
              Project settings
            </a>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 flex flex-col h-screen overflow-y-auto">
          <div className="px-10 py-5">
            <div className="flex justify-between items-center gap-2 pt-5 pb-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-[#111418] dark:text-white">
                    ProdigiSign Team
                  </h1>
                  <button className="text-slate-500 dark:text-slate-400 hover:text-primary">
                    <span className="material-symbols-outlined">expand_more</span>
                  </button>
                </div>
                <div className="flex gap-1">
                  <button className="p-2 text-[#617289] dark:text-slate-400 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                    <span className="material-symbols-outlined text-xl">
                      star_outline
                    </span>
                  </button>
                  <button className="p-2 text-[#617289] dark:text-slate-400 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                    <span className="material-symbols-outlined text-xl">
                      history
                    </span>
                  </button>
                  <button className="p-2 text-[#617289] dark:text-slate-400 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                    <span className="material-symbols-outlined text-xl">
                      settings
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-[#111418] dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4 hover:bg-slate-50 dark:hover:bg-slate-700">
                  <span className="truncate">Column Options</span>
                </button>
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-[#111418] dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4 hover:bg-slate-50 dark:hover:bg-slate-700">
                  <span className="truncate">Create Query</span>
                </button>
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-primary text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4 hover:opacity-90">
                  <span
                    className="material-symbols-outlined text-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    add
                  </span>
                  <span className="truncate">New Work Item</span>
                </button>
              </div>
            </div>

            <div className="flex justify-between items-end border-b border-[#dbe0e6] dark:border-slate-800">
              <div className="flex gap-8">
                <Link to="/Taskboard"
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#617289] dark:text-slate-400 pb-[13px] pt-4 hover:border-b-slate-400"
                  
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                    Taskboard
                  </p>
                </Link>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-[#111418] dark:border-b-white text-[#111418] dark:text-white pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                    Backlog
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#617289] dark:text-slate-400 pb-[13px] pt-4 hover:border-b-slate-400"
                  href="#"
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                    Analytics
                  </p>
                </a>
              </div>
              <p className="text-[#617289] dark:text-slate-400 text-sm font-normal leading-normal pb-4">
                November Week 3 | 17 November - 21 November | 4 work days
                remaining
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center py-24">
              <div className="w-64 h-auto mb-8">
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    className="dark:fill-slate-700"
                    fill="#e2e8f0"
                    height="110"
                    rx="12"
                    ry="12"
                    width="160"
                    x="20"
                    y="20"
                  ></rect>
                  <rect
                    className="dark:fill-slate-600"
                    fill="#cbd5e1"
                    height="12"
                    rx="4"
                    ry="4"
                    width="130"
                    x="35"
                    y="40"
                  ></rect>
                  <rect
                    className="dark:fill-slate-600"
                    fill="#cbd5e1"
                    height="12"
                    rx="4"
                    ry="4"
                    width="80"
                    x="35"
                    y="65"
                  ></rect>
                  <rect
                    className="dark:fill-slate-600"
                    fill="#cbd5e1"
                    height="12"
                    rx="4"
                    ry="4"
                    width="100"
                    x="35"
                    y="90"
                  ></rect>
                  <g transform="translate(130, 60) rotate(30)">
                    <path
                      className="fill-primary"
                      d="M-10 -40 L10 -40 L10 20 L5 30 L-5 30 L-10 20 Z"
                      fill="#4f46e5"
                    ></path>
                    <path
                      className="dark:fill-primary/50"
                      d="M-5 30 L0 40 L5 30 Z"
                      fill="#a5b4fc"
                    ></path>
                    <rect
                      className="dark:fill-slate-300"
                      fill="#f1f5f9"
                      height="5"
                      width="20"
                      x="-10"
                      y="-45"
                    ></rect>
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#111418] dark:text-white mb-2">
                You do not have any work scheduled yet.
              </h3>
              <p className="text-[#617289] dark:text-slate-400 mb-6 max-w-md">
                Schedule work from your product backlog or create new work items
                to get started with your sprint.
              </p>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-primary text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-5 py-2.5 hover:opacity-90">
                <span
                  className="material-symbols-outlined text-lg"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  add
                </span>
                <span className="truncate">New Work Item</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TaskEasySprintsPage;
