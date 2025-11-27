import React, { useState } from 'react';
import { Plus, Settings, ChevronDown, ChevronUp, CircleArrowRight } from 'lucide-react';

export default function Taskboard() {
  const [activeTab, setActiveTab] = useState('board');
  const [filterOpen, setFilterOpen] = useState(false);

  const [tasks, setTasks] = useState({
    new: [
      { id: 14703, title: 'Testing Group', status: 'New', assignee: 'Unassigned' },
      { id: 14704, title: '50% tariff', status: 'New', assignee: 'Donald trump' }
    ],
    active: [
      { id: 14713, title: 'Duplicate Video option appearing', status: 'Active', assignee: 'Saurabh Mishra' },
      { id: 14717, title: 'Multiple payment entries for same application', status: 'Active', assignee: 'Saurabh Mishra' },
    ],
    resolved: [
      { id: 14720, title: 'Login issue resolved', status: 'Resolved', assignee: 'Devansh' },
    ],
    closed: [
      { id: 14725, title: 'Deployment completed successfully', status: 'Closed', assignee: 'Joe biden' },
    ],
  });

  const renderTask = (task) => (
    <div
      key={task.id}
      className="bg-white p-3 rounded-2xl shadow-sm border hover:shadow-md transition-all cursor-pointer"
    >
      <div className="text-sm font-semibold">
        #{task.id} {task.title}
      </div>
      <div className="text-xs text-gray-500 mt-1">{task.status}</div>
      <div className="text-xs text-gray-700 mt-1">👤 {task.assignee}</div>
    </div>
  );

  return (
    <div className="flex flex-col p-8 gap-4 w-full h-full overflow-hidden">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold">ProdigiSign Team</span>
          <div
            className="cursor-pointer flex items-center gap-1"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            {filterOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </div>

        <div className="flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-lg cursor-pointer">
          <CircleArrowRight size={20} />
          <span className="text-sm font-medium">View as Backlog</span>
        </div>
      </div>

      {/* Second Line */}
      <div className="flex items-center justify-between">
        <div className="flex gap-6 text-sm">
          <div
            className={`cursor-pointer pb-1 ${
              activeTab === 'board'
                ? 'text-[#0078D4] border-b-2 border-[#0078D4]'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('board')}
          >
            Taskboard
          </div>

          <div
            className={`cursor-pointer pb-1 ${
              activeTab === 'analytics'
                ? 'text-[#0078D4] border-b-2 border-[#0078D4]'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('analytics')}
          >
            Analytics
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-blue-600 text-white text-sm px-3 py-2 rounded-lg flex items-center gap-1">
            <Plus size={16} /> New Work Item
          </button>
          <button className="flex items-center gap-1 px-3 py-2 border rounded-lg text-sm text-gray-600">
            <Settings size={16} /> Column Options
          </button>
        </div>
      </div>

      {/* Filter Section */}
      {filterOpen && (
        <div className="flex gap-4 text-sm mt-2">
          <div className="border rounded-md px-3 py-1 bg-gray-50 cursor-pointer">October week 3</div>
          <div className="border rounded-md px-3 py-1 bg-gray-50 cursor-pointer">Person: All</div>
        </div>
      )}

      {/* Board / Analytics View */}
      <div className="mt-4 bg-gray-50 rounded-lg shadow p-4 h-full overflow-x-auto">
        {activeTab === 'board' && (
          <div className="flex gap-4 pb-4 h-full w-full justify-between">
            {['New', 'Active', 'Resolved', 'Closed'].map((col) => (
              <div key={col} className="flex-1 min-w-[200px] max-w-[24%] flex-shrink-0">
                <h2 className="font-semibold text-gray-700 mb-2">{col}</h2>
                <div className="flex flex-col gap-3 overflow-y-auto max-h-[65vh] p-1">
                  {tasks[col.toLowerCase()].length > 0 ? (
                    tasks[col.toLowerCase()].map(renderTask)
                  ) : (
                    <div className="text-gray-400 text-sm italic">No tasks</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="p-4">
            <h2 className="font-semibold">Analytics Section</h2>
            <p className="text-sm text-gray-600 mt-1">This is the analytics view.</p>
          </div>
        )}
      </div>
    </div>
  );
}
