import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from 'jwt-decode';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import LinkExtension from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { lowlight } from 'lowlight/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import {
  Bold,
  Italic,
  List,
  Image as ImageIcon,
  Link as LinkIcon,
  Code,
  Table as TableIcon,
  Undo,
  Redo,
} from 'lucide-react';
import {
  Table,
  TableRow,
  TableHeader,
  TableCell,
} from '@tiptap/extension-table';

lowlight.registerLanguage('javascript', javascript);

export default function WikiPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const incomingProject = location.state?.project;
  const params = new URLSearchParams(location.search);
  const projectId = incomingProject?._id || incomingProject?.id || params.get('projectId');

  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [newPageTitle, setNewPageTitle] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [token, setToken] = useState(null);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(projectId);

  // Editor setup
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      Placeholder.configure({
        placeholder: 'Start writing your wiki page here...',
      }),
      LinkExtension,
      Image,
      TaskList,
      TaskItem,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      CodeBlockLowlight.configure({ lowlight }),
    ],
    content: '',
  });

  // Insert Link
  const addLink = () => {
    const url = prompt('Enter link URL');
    if (url) editor?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  // Insert Image
  const addImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      editor?.chain().focus().setImage({ src: event.target.result }).run();
    };
    reader.readAsDataURL(file);
  };

  // Add Table
  const addTable = () => {
    editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  // Check auth on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    if (!storedToken || !user) {
      navigate('/login');
      setIsAuthenticated(false);
      return;
    }

    try {
      const decoded = jwtDecode(storedToken);
      setUserId(decoded.id);
      setToken(storedToken);
      setIsAuthenticated(true);
    } catch (err) {
      console.error('Invalid token:', err);
      toast.error('Invalid authentication token. Please log in again.');
      navigate('/login');
      setIsAuthenticated(false);
    }
  }, [navigate]);

  // Fetch projects for selector
  useEffect(() => {
    if (!isAuthenticated || !token) return;

    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/projects', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const list = res.data?.projects || res.data || [];
        setProjects(list);
        if (!selectedProject && list.length) {
          const firstId = list[0]._id || list[0].id;
          setSelectedProject(firstId);
        }
      } catch (err) {
        console.error('Failed to fetch projects', err?.response?.data || err.message || err);
      }
    };
    fetchProjects();
  }, [isAuthenticated, token]);

  // Fetch wiki pages
  useEffect(() => {
    if (!isAuthenticated || !selectedProject) return;

    const fetchPages = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/api/wiki?projectId=${selectedProject}`);
        const list = res.data?.pages || [];
        setPages(list);
        if (list.length) setSelectedPage(list[0]);
      } catch (err) {
        console.error('Failed to fetch wiki pages', err?.response?.data || err.message || err);
        toast.error('Failed to fetch wiki pages');
      } finally {
        setLoading(false);
      }
    };
    fetchPages();
  }, [selectedProject, isAuthenticated]);

  // Save new wiki page
  const handleSaveNewPage = async () => {
    if (!newPageTitle.trim()) {
      toast.error('Please enter a page title');
      return;
    }

    if (!editor?.getHTML()) {
      toast.error('Please add some content');
      return;
    }

    setIsSaving(true);
    try {
      const htmlContent = editor.getHTML();
      const response = await axios.post('http://localhost:5000/api/wiki', {
        filename: newPageTitle.replace(/\s+/g, '-'),
        filepath: `/uploads/${newPageTitle.replace(/\s+/g, '-')}.html`,
        projectid: selectedProject,
        userid: userId,
        title: newPageTitle,
        content: htmlContent,
      });

      toast.success('Wiki page created successfully!');
      
      // Reset editor and form
      editor?.chain().clearContent().run();
      setNewPageTitle('');
      setIsCreatingNew(false);

      // Refresh pages list
      const res = await axios.get(`http://localhost:5000/api/wiki?projectId=${selectedProject}`);
      const list = res.data?.pages || [];
      setPages(list);
      if (list.length) setSelectedPage(list[list.length - 1]);
    } catch (err) {
      toast.error('Failed to save wiki page: ' + (err?.response?.data?.message || err.message));
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  const handlePageClick = (page) => {
    setSelectedPage(page);
    setIsCreatingNew(false);
  };

  const handleNewPage = () => {
    setIsCreatingNew(true);
    setSelectedPage(null);
    editor?.chain().clearContent().run();
    setNewPageTitle('');
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-neutral-900 dark:text-neutral-50 min-h-screen">
      <ToastContainer position="bottom-right" autoClose={3000} />
      <div className="flex flex-col h-screen">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-neutral-100 dark:border-neutral-900/50 px-6 py-3 bg-white dark:bg-background-dark sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-50">
              <span className="material-symbols-outlined text-primary" style={{fontSize:24, fontVariationSettings: "'FILL' 1"}}>assured_workload</span>
              <h2 className="text-neutral-900 dark:text-neutral-50 text-lg font-bold tracking-tight">TaskEasy</h2>
            </div>
            <div className="flex flex-wrap gap-2 items-center text-sm">
              <a className="text-neutral-600 dark:text-neutral-100/70 font-medium" href="#">sanexsolution</a>
              <span className="text-neutral-600 dark:text-neutral-100/70">/</span>
              <a className="text-neutral-600 dark:text-neutral-100/70 font-medium" href="#">ProdigiSign</a>
              <span className="text-neutral-600 dark:text-neutral-100/70">/</span>
              <a className="text-neutral-600 dark:text-neutral-100/70 font-medium" href="#">Wiki</a>
              <span className="text-neutral-600 dark:text-neutral-100/70">/</span>
              <span className="text-neutral-900 dark:text-neutral-50 font-medium">ProdigiSign.wiki</span>
            </div>
          </div>

          <div className="flex flex-1 justify-end gap-4 items-center">
            <label className="flex flex-col w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-10">
                <div className="text-neutral-600 dark:text-neutral-100/70 flex bg-neutral-50 dark:bg-neutral-900/50 items-center justify-center pl-3 rounded-l-lg">
                  <span className="material-symbols-outlined" style={{fontSize:20}}>search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-neutral-900 dark:text-neutral-50 focus:outline-0 focus:ring-0 border-none bg-neutral-50 dark:bg-neutral-900/50 h-full placeholder:text-neutral-600 dark:placeholder:text-neutral-100/70 px-2 text-sm font-normal" placeholder="Search..." />
              </div>
            </label>

            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-neutral-50 dark:bg-neutral-900/50 text-neutral-900 dark:text-neutral-50">
              <span className="material-symbols-outlined" style={{fontSize:20}}>notifications</span>
            </button>

            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD94AtckDdcf7FWXw-FiXx90tg4ok0I2wtlcsV_n-1Bp_f_Z46EYFlplFViIpmw8rJ2N1q4-NUcB22h90MsWW114tSX06qOlADzBwyNWLwmJ0KKy9tvJZ9vZzweyqUg7sky5kKEeSAY3FtuH6u919z-0MCpkfSB3Hi8nye0zjxVPvxyC6y7dds4IXtNgy34gTYxV_BCjkNnwQCrsMaj3jzSdbHR9wxNKQ1TUSrRPkjeuvX1rBQ6Lupke-vmOUhCqPDb35CEcGyBVBY")'}}></div>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Left sidebar - Project Navigation */}
          <aside className="flex flex-col justify-between bg-white dark:bg-background-dark p-4 w-64 border-r border-neutral-100 dark:border-neutral-900/50">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#6A35F1] flex items-center justify-center text-white font-bold text-lg">P</div>
                  <h1 className="text-neutral-900 dark:text-neutral-50 text-base font-medium">ProdigiSign</h1>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <p className="px-3 text-xs font-semibold text-neutral-600 dark:text-neutral-100/70 uppercase tracking-wider mb-1">Overview</p>
                <Link to="/summary" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f0f2f4]">
                  <span className="material-symbols-outlined text-neutral-600 dark:text-neutral-100/70" style={{fontSize:20}}>pie_chart</span>
                  <p className="text-neutral-900 dark:text-neutral-50 text-sm font-medium">Summary</p>
                </Link>
                <Link to="/DashBoard" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f0f2f4]">
                  <span className="material-symbols-outlined text-neutral-600 dark:text-neutral-100/70" style={{fontSize:20}}>monitoring</span>
                  <p className="text-neutral-900 dark:text-neutral-50 text-sm font-medium">Dashboards</p>
                </Link>
                <a className="flex items-center gap-3 pl-3 pr-2 py-2 rounded-md bg-neutral-50 dark:bg-neutral-900/50 border-l-2 border-primary" href="#">
                  <span className="material-symbols-outlined text-primary" style={{fontSize:20, fontVariationSettings: "'FILL' 1"}}>book_2</span>
                  <p className="text-primary text-sm font-semibold">Wiki</p>
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-900/50" href="#">
                  <span className="material-symbols-outlined text-neutral-600 dark:text-neutral-100/70" style={{fontSize:20}}>view_kanban</span>
                  <p className="text-neutral-900 dark:text-neutral-50 text-sm font-medium">Boards</p>
                </a>
              </div>
            </div>
          </aside>

          {/* Middle nav - Wiki Pages List */}
          <nav className="w-72 bg-white dark:bg-background-dark p-4 border-r border-neutral-100 dark:border-neutral-900/50 flex flex-col shrink-0">
            <div className="flex justify-between items-center mb-4">
              <span className="text-neutral-900 dark:text-neutral-50 text-sm font-medium">ProdigiSign.wiki</span>
              <button className="text-neutral-600 dark:text-neutral-100/70">
                <span className="material-symbols-outlined" style={{fontSize:20}}>more_horiz</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-1 pr-1">
              {loading ? (
                <p className="text-neutral-500 text-sm px-3">Loading...</p>
              ) : pages && pages.length ? (
                pages.map((pg) => (
                  <div key={pg._id} onClick={() => handlePageClick(pg)} className={`flex items-center gap-2 px-3 py-2 rounded-md min-h-10 justify-between hover:bg-neutral-50 dark:hover:bg-neutral-900/50 cursor-pointer ${selectedPage && selectedPage._id === pg._id ? 'bg-primary/10' : ''}`}>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-neutral-600 dark:text-neutral-100/70" style={{fontSize:20}}>article</span>
                      <p className="text-neutral-900 dark:text-neutral-50 text-sm font-normal flex-1 truncate">{pg.title}</p>
                    </div>
                    <div className="text-xs text-neutral-500">{pg.createdAt ? new Date(pg.createdAt).toLocaleDateString() : ''}</div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-neutral-500 px-3">No wiki pages for this project.</div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-900/50">
              <button
                onClick={handleNewPage}
                className="flex items-center gap-2 w-full text-left px-3 py-2 text-primary text-sm font-medium hover:bg-primary/10 rounded-md"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>add</span>
                <span>New page</span>
              </button>
            </div>
          </nav>

          {/* Main content */}
          <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
            <div className="max-w-4xl mx-auto p-8">
              {isCreatingNew ? (
                // New Page Editor Section
                <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 border border-neutral-100 dark:border-neutral-900/50">
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Create New Wiki Page</h2>
                  
                  {/* Project Selector */}
                  <div className="mb-4 flex items-center gap-3">
                    <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Project:</label>
                    <select
                      value={selectedProject || ''}
                      onChange={(e) => setSelectedProject(e.target.value)}
                      className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-50 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">-- Select project --</option>
                      {projects.map((p) => (
                        <option key={p._id || p.id} value={p._id || p.id}>
                          {p.title || p.name || (p._id || p.id)}
                        </option>
                      ))}
                    </select>
                    {selectedProject && (
                      <div className="text-sm text-neutral-500 dark:text-neutral-400">
                        Selected: {projects.find(x => (x._id || x.id) === selectedProject)?.title || selectedProject}
                      </div>
                    )}
                  </div>
                  
                  <input
                    type="text"
                    placeholder="Enter page title..."
                    value={newPageTitle}
                    onChange={(e) => setNewPageTitle(e.target.value)}
                    className="w-full px-3 py-2 mb-4 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-50 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  {/* Editor Toolbar */}
                  <div className="flex flex-wrap gap-2 p-3 bg-neutral-50 dark:bg-neutral-800 rounded-t-lg border-b border-neutral-200 dark:border-neutral-700">
                    <button
                      onClick={() => editor?.chain().focus().toggleBold().run()}
                      disabled={!editor?.can().chain().focus().toggleBold().run()}
                      className="p-2 bg-white dark:bg-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-600"
                      title="Bold"
                    >
                      <Bold size={18} />
                    </button>
                    <button
                      onClick={() => editor?.chain().focus().toggleItalic().run()}
                      disabled={!editor?.can().chain().focus().toggleItalic().run()}
                      className="p-2 bg-white dark:bg-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-600"
                      title="Italic"
                    >
                      <Italic size={18} />
                    </button>
                    <button
                      onClick={() => editor?.chain().focus().toggleBulletList().run()}
                      className="p-2 bg-white dark:bg-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-600"
                      title="Bullet List"
                    >
                      <List size={18} />
                    </button>
                    <button
                      onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
                      className="p-2 bg-white dark:bg-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-600"
                      title="Code Block"
                    >
                      <Code size={18} />
                    </button>
                    <button
                      onClick={addLink}
                      className="p-2 bg-white dark:bg-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-600"
                      title="Add Link"
                    >
                      <LinkIcon size={18} />
                    </button>
                    <label className="p-2 bg-white dark:bg-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-600 cursor-pointer">
                      <ImageIcon size={18} />
                      <input type="file" accept="image/*" onChange={addImage} className="hidden" />
                    </label>
                    <button
                      onClick={addTable}
                      className="p-2 bg-white dark:bg-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-600"
                      title="Add Table"
                    >
                      <TableIcon size={18} />
                    </button>
                    <button
                      onClick={() => editor?.chain().focus().undo().run()}
                      className="p-2 bg-white dark:bg-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-600"
                      title="Undo"
                    >
                      <Undo size={18} />
                    </button>
                    <button
                      onClick={() => editor?.chain().focus().redo().run()}
                      className="p-2 bg-white dark:bg-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-600"
                      title="Redo"
                    >
                      <Redo size={18} />
                    </button>
                  </div>

                  {/* Editor */}
                  <div className="border border-neutral-200 dark:border-neutral-700 rounded-b-lg p-4 bg-white dark:bg-neutral-800 min-h-64 mb-4">
                    <EditorContent editor={editor} />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => {
                        setIsCreatingNew(false);
                        editor?.chain().clearContent().run();
                        setNewPageTitle('');
                      }}
                      className="px-4 py-2 rounded-lg bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-50 hover:bg-neutral-300 dark:hover:bg-neutral-600"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveNewPage}
                      disabled={isSaving}
                      className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
                    >
                      {isSaving ? 'Saving...' : 'Save Page'}
                    </button>
                  </div>
                </div>
              ) : (
                // Page View Section
                <article className="prose prose-neutral dark:prose-invert max-w-none">
                  {selectedPage ? (
                    <div>
                      <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 mb-2">{selectedPage.title}</h1>
                      <p className="text-sm text-neutral-600 dark:text-neutral-100/70">{selectedPage.createdBy ? `By ${selectedPage.createdBy}` : ''} {selectedPage.createdAt ? ` · ${new Date(selectedPage.createdAt).toLocaleString()}` : ''}</p>
                      <div className="mt-8" dangerouslySetInnerHTML={{ __html: selectedPage.content }} />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center min-h-96">
                      <p className="text-neutral-500 text-lg">No wiki pages for this project.</p>
                    </div>
                  )}
                </article>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
