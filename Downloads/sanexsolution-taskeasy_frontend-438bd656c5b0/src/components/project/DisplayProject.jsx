import React, { useState, useEffect, useRef } from "react";
import { Ellipsis, Trash, Pencil, Link as LinkIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function DisplayProject({ projects, setProjects }) {
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRefs = useRef({});
  const navigate = useNavigate();
  const url = "http://localhost:5000";

  const token = localStorage.getItem("token");

  const handleToggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleEdit = (proj) => {
  navigate(`/project/edit/${proj._id}`);
};


  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    try {
      await axios.delete(`${url}/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Remove deleted project from local state
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to delete project");
    }
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openMenuId !== null &&
        menuRefs.current[openMenuId] &&
        !menuRefs.current[openMenuId].contains(event.target)
      ) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenuId]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setOpenMenuId(null);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-8 p-4">
      {projects.map((proj) => (
        <div
          key={proj._id}
          className="relative p-3 rounded-lg flex w-full sm:w-[400px] justify-between items-start bg-gray-100 transition"
        >
          <div className="flex items-start gap-4 flex-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate('/start', { state: { project: proj } });
              }}
              className="flex items-center justify-center size-12 rounded-lg bg-purple-100 dark:bg-purple-900/50 p-2 mr-2 hover:opacity-90"
              aria-label={`Open ${proj.title} start page`}
            >
              <LinkIcon size={20} className="text-purple-600" />
            </button>

            <div className="flex-1 cursor-pointer" onClick={() => navigate(`/project/${proj._id}`)}>
              <h2 className="font-semibold">{proj.title}</h2>
              <p className="text-sm text-gray-600">{proj.description}</p>
            </div>
          </div>

          <div className="relative" ref={(el) => (menuRefs.current[proj._id] = el)}>
            <Ellipsis
              className="cursor-pointer text-gray-600 hover:text-black"
              onClick={(e) => {
                e.stopPropagation();
                handleToggleMenu(proj._id);
              }}
            />

            {openMenuId === proj._id && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(proj);
                  }}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  <Pencil size={18} /> Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(proj._id);
                  }}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  <Trash size={18} /> Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
