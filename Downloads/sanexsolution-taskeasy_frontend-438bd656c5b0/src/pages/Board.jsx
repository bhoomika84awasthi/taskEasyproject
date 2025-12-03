import React from "react";

/**
 * TaskEasyBacklogsExact.jsx (updated)
 * - Tailwind CSS required.
 * - Add Google fonts & Material Symbols to public/index.html:
 *   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
 *   <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
 *
 * NOTE: this version forces scrollbars inside the layout (center column + right rail)
 * so the visible vertical scrollbars appear on the right side like the screenshot
 * you shared. It uses h-screen + overflow-hidden on the root and overflow-y-scroll
 * on scrolling regions to make scrollbars appear consistently.
 *
 * Reference HTML you uploaded: /mnt/data/TaskEasy Boards_Backlogs Page_6.html
 */
import { Link } from "react-router-dom";

export default function TaskEasyBacklogsExact() {
  return (
    <div className="h-screen overflow-hidden bg-gray-50 font-sans text-gray-800">
      {/* Top header */}
      <header className="flex items-center justify-between px-6 py-3 bg-white  border-gray-200">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-2xl text-blue-600">task_alt</span>
            <div className="flex items-baseline gap-2">
              <h1 className="text-lg font-semibold">TaskEasy</h1>
              <nav className="text-sm text-gray-500 hidden sm:flex items-center gap-2">
                <span>|</span>
                <a className="hover:underline">sanexsolution</a>
                <span>/</span>
                <a className="hover:underline">ProdigiSign</a>
                <span>/</span>
                <span className="text-gray-900 font-medium">Backlogs</span>
              </nav>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-64">
              <span className="material-symbols-outlined text-gray-400 mr-2">search</span>
              <input placeholder="Search" className="bg-transparent outline-none text-sm w-full" />
            </div>
          </div>

          <div className="w-9 h-9 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('file:///mnt/data/TaskEasy Boards_Backlogs Page_6.html')" }} />
        </div>
      </header>

      {/* Body wrapper: keep full height and hide page-level scroll */}
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-full px-4 py-6 overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-purple-600 text-white flex items-center justify-center font-semibold">P</div>
              <div className="text-sm font-medium">ProdigiSign</div>
            </div>
            <button className="p-1 rounded hover:bg-gray-100"><span className="material-symbols-outlined">add</span></button>
          </div>

          <nav className="space-y-1 text-sm">
            <div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-50">
              <span className="material-symbols-outlined text-lg">space_dashboard</span>
              <span>Overview</span>
            </div>

            <p className="mt-4 mb-1 text-xs text-gray-400 uppercase">Boards</p>
            <div className="space-y-1">
              <div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-50">
                <span className="material-symbols-outlined text-lg">checklist</span>
                <span>Work Items</span>
              </div>
              <div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-50">
                <span className="material-symbols-outlined text-lg">view_kanban</span>
                <span>Boards</span>
              </div>
              <div className="flex items-center gap-3 px-2 py-2 rounded bg-blue-50 border-l-4 lue-500">
                <span className="material-symbols-outlined text-lg text-blue-600">view_stream</span>
                <span className="font-semibold text-sm text-blue-900">Backlogs</span>
              </div>

              <Link to="/Sprint" className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-50">
                <span className="material-symbols-outlined">sprint</span>
                <span>Sprints</span>
              </Link>

              <Link to="/queries" className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-50">
                <span className="material-symbols-outlined">manage_search</span>
                <span>Queries</span>
              </Link>

              <Link to="/deliverypage" className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-50">
                <span className="material-symbols-outlined">local_shipping</span>
                <span>Delivery Plans</span>
              </Link>

              <Link to="/timelogsummary" className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-50">
                <span className="material-symbols-outlined">schedule</span>
                <span>Time Log Summary</span>
              </Link>
            </div>

            <div className="mt-6 space-y-1">
              <div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-50">
                <span className="material-symbols-outlined">sync_alt</span>
                <span>Pipelines</span>
              </div>
              <div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-50">
                <span className="material-symbols-outlined">inventory_2</span>
                <span>Artifacts</span>
              </div>
            </div>
          </nav>

          <div className="mt-auto pt-6">
            <a className="flex items-center gap-3 px-2 py-2 rounded text-blue-600 hover:bg-blue-50">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-medium">Project settings</span>
            </a>
          </div>
        </aside>

        {/* Center content column: make this region scrollable (overflow-y-scroll) */}
        <main className="flex-1 px-6 py-6 overflow-hidden">
          <div className="max-w-[920px] mx-auto h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold">ProdigiSign Team</h2>
                <div className="text-gray-400">•</div>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded hover:bg-gray-50"><span className="material-symbols-outlined">expand_more</span></button>
                  <button className="p-2 rounded hover:bg-gray-50"><span className="material-symbols-outlined">star_outline</span></button>
                  <button className="p-2 rounded hover:bg-gray-50"><span className="material-symbols-outlined">history</span></button>
                  <button className="p-2 rounded hover:bg-gray-50"><span className="material-symbols-outlined">settings</span></button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="px-4 py-2 rounded border border-gray-200 text-sm">View as Board</button>
                <button className="px-4 py-2 rounded border border-gray-200 text-sm">Column Options</button>
                <button className="px-4 py-2 rounded bg-blue-600 text-white flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined">add</span> New Work Item
                </button>
              </div>
            </div>

            <div className=" border-gray-200 mb-4">
              <div className="flex gap-6">
                <button className="pb-3 -2 lue-600 text-sm font-semibold">Backlog</button>
                <button className="pb-3 text-sm text-gray-500">Analytics</button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm h-[calc(100vh-220px)]">
              <div className="flex items-center px-4 py-3  border-gray-100">
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded hover:bg-gray-50"><span className="material-symbols-outlined text-base">unfold_more</span></button>
                  <div className="text-sm text-gray-600">Order</div>
                </div>

                <div className="ml-auto flex items-center gap-2">
                  <button className="p-2 rounded hover:bg-gray-50"><span className="material-symbols-outlined">add</span></button>
                  <button className="p-2 rounded hover:bg-gray-50"><span className="material-symbols-outlined">menu</span></button>
                </div>
              </div>

              {/* Table area with its own vertical scroll (so you get a scrollbar inside the center card) */}
              <div className="overflow-y-scroll h-full">
                <table className="min-w-full text-sm">
                  <thead className="text-xs text-gray-500 bg-gray-50 sticky top-0">
                    <tr>
                      <th className="px-6 py-3 text-left w-16">Order</th>
                      <th className="px-6 py-3 text-left">Work Item Type</th>
                      <th className="px-6 py-3 text-left">Title</th>
                      <th className="px-6 py-3 text-left">State</th>
                      <th className="px-6 py-3 text-left">Story Points</th>
                      <th className="px-6 py-3 text-left">Value Area</th>
                    </tr>
                  </thead>

                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.order} className=" last:-0">
                        <td className="px-6 py-4 text-gray-600">{r.order}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3 text-gray-700">
                            <span className={`material-symbols-outlined text-lg ${r.iconColor}`}>{r.icon}</span>
                            <span>{r.type}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-medium">{r.title}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full ${r.stateBg} ${r.stateText}`}>
                            <span className={`w-2 h-2 rounded-full ${r.stateDot}`} />
                            {r.state}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{r.points}</td>
                        <td className="px-6 py-4 text-gray-600">{r.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>

        {/* Right rail: make full height and scrollable - this creates the visible scrollbar at the far right */}
        <aside className="w-80 bg-white border-l border-gray-200 px-6 py-6 h-full overflow-y-scroll">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Planning</h3>
            <div className="flex items-center gap-1">
              <button className="p-1 rounded hover:bg-gray-50"><span className="material-symbols-outlined">unfold_less</span></button>
              <button className="p-1 rounded hover:bg-gray-50"><span className="material-symbols-outlined">more_horiz</span></button>
            </div>
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <div className="font-medium">Stories</div>
            <div className="text-xs text-gray-400">Drag and drop work items to include them in a sprint.</div>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg text-green-600">calendar_today</span>
                  <div className="text-sm font-medium">ProdigiSign Team backlog</div>
                </div>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Active</span>
              </div>
              <div className="bg-gray-50 p-3 rounded text-center text-xs text-gray-500">Some work scheduled. Drag more here.</div>
            </div>

            <div className="border border-gray-200 rounded p-3">
              <div className="text-sm font-medium mb-1">November Week 3</div>
              <div className="text-xs text-gray-400 mb-2">17-11-2025 - 20-11-2025</div>
              <div className="bg-gray-50 p-4 rounded text-center text-xs text-gray-500">No work scheduled yet.</div>
            </div>

            <div className="border border-gray-200 rounded p-3">
              <div className="text-sm font-medium mb-1">November Week 4</div>
              <div className="text-xs text-gray-400 mb-2">24-11-2025 - 28-11-2025</div>
              <div className="bg-gray-50 p-4 rounded text-center text-xs text-gray-500">No work scheduled yet.</div>
            </div>

            <div className="border border-gray-200 rounded p-3">
              <div className="text-sm font-medium mb-1">December Week 1</div>
              <div className="text-xs text-gray-400 mb-2">01-12-2025 - 05-12-2025</div>
              <div className="bg-gray-50 p-4 rounded text-center text-xs text-gray-500">No work scheduled yet.</div>
            </div>

            {/* extra spacer so right rail becomes scrollable like your screenshot */}
            <div className="h-40" />
          </div>
        </aside>
      </div>
    </div>
  );
}


/* ---------- static data ---------- */
const rows = [
  {
    order: 1,
    type: "User Story",
    icon: "bookmark",
    iconColor: "text-blue-600",
    title: "Implement user authentication flow",
    state: "New",
    stateBg: "bg-blue-50",
    stateText: "text-blue-700",
    stateDot: "bg-blue-600",
    points: 8,
    value: "Business",
  },
  {
    order: 2,
    type: "Bug",
    icon: "bug_report",
    iconColor: "text-red-500",
    title: "Login button not working on mobile",
    state: "Active",
    stateBg: "bg-yellow-50",
    stateText: "text-yellow-800",
    stateDot: "bg-yellow-500",
    points: 3,
    value: "Architectural",
  },
  {
    order: 3,
    type: "User Story",
    icon: "bookmark",
    iconColor: "text-blue-600",
    title: "Design the user dashboard page",
    state: "New",
    stateBg: "bg-blue-50",
    stateText: "text-blue-700",
    stateDot: "bg-blue-600",
    points: 5,
    value: "Business",
  },
  {
    order: 4,
    type: "Task",
    icon: "task_alt",
    iconColor: "text-green-500",
    title: "Setup database schema for products",
    state: "Done",
    stateBg: "bg-green-50",
    stateText: "text-green-700",
    stateDot: "bg-green-500",
    points: 5,
    value: "Architectural",
  },
  {
    order: 5,
    type: "User Story",
    icon: "bookmark",
    iconColor: "text-blue-600",
    title: "Add payment processing with Stripe",
    state: "New",
    stateBg: "bg-blue-50",
    stateText: "text-blue-700",
    stateDot: "bg-blue-600",
    points: 13,
    value: "Business",
  },
];
