// App.jsx
// Pixel-accurate React recreation of the provided Wiki UI using Tailwind classes.
// IMPORTANT: Add the following to your public/index.html <head> for fonts & material icons:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
// Also make sure Tailwind is installed and configured for your React project.

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';


export default function App() {
  const location = useLocation();
  const incomingProject = location.state?.project;
  const params = new URLSearchParams(location.search);
  const projectId = incomingProject?._id || incomingProject?.id || params.get('projectId');

  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);

  useEffect(() => {
    const fetchPages = async () => {
      if (!projectId) return;
      try {
        const res = await axios.get(`http://localhost:5000/api/wiki?projectId=${projectId}`);
        const list = res.data?.pages || [];
        setPages(list);
        if (list.length) setSelectedPage(list[0]);
      } catch (err) {
        console.error('Failed to fetch wiki pages', err?.response?.data || err.message || err);
      }
    };
    fetchPages();
  }, [projectId]);

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-neutral-900 dark:text-neutral-50 min-h-screen">
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
              <span className="text-neutral-900 dark:text-neutral-50 font-medium">Support Issues and Solutions</span>
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
          {/* Left sidebar */}
          <aside className="flex flex-col justify-between bg-white dark:bg-background-dark p-4 w-64 border-r border-neutral-100 dark:border-neutral-900/50">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#6A35F1] flex items-center justify-center text-white font-bold text-lg">P</div>
                  <h1 className="text-neutral-900 dark:text-neutral-50 text-base font-medium">ProdigiSign</h1>
                </div>
                <button className="text-neutral-600 dark:text-neutral-100/70">
                  <span className="material-symbols-outlined">add_circle</span>
                </button>
              </div>

              <div className="flex flex-col gap-1">
                <p className="px-3 text-xs font-semibold text-neutral-600 dark:text-neutral-100/70 uppercase tracking-wider mb-1">Overview</p>
                <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-900/50" href="#">
                  <span className="material-symbols-outlined text-neutral-600 dark:text-neutral-100/70" style={{fontSize:20}}>space_dashboard</span>
                  <p className="text-neutral-900 dark:text-neutral-50 text-sm font-medium">Overview</p>
                </a>
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
                <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-900/50" href="#">
                  <span className="material-symbols-outlined text-neutral-600 dark:text-neutral-100/70" style={{fontSize:20}}>account_tree</span>
                  <p className="text-neutral-900 dark:text-neutral-50 text-sm font-medium">Pipelines</p>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-900/50" href="#">
                  <span className="material-symbols-outlined text-neutral-600 dark:text-neutral-100/70" style={{fontSize:20}}>inventory_2</span>
                  <p className="text-neutral-900 dark:text-neutral-50 text-sm font-medium">Artifacts</p>
                </a>
              </div>
            </div>

            <div className="flex flex-col">
              <a className="flex items-center gap-3 px-3 py-2 rounded-md text-primary hover:bg-primary/10" href="#">
                <span className="material-symbols-outlined" style={{fontSize:20}}>settings</span>
                <p className="text-sm font-medium">Project settings</p>
              </a>
            </div>
          </aside>

          {/* Middle nav */}
          <nav className="w-72 bg-white dark:bg-background-dark p-4 border-r border-neutral-100 dark:border-neutral-900/50 flex flex-col shrink-0">
            <div className="flex justify-between items-center mb-4">
              <span className="text-neutral-900 dark:text-neutral-50 text-sm font-medium">ProdigiSign.wiki</span>
              <button className="text-neutral-600 dark:text-neutral-100/70">
                <span className="material-symbols-outlined" style={{fontSize:20}}>more_horiz</span>
              </button>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 mb-4">
              <label className="flex flex-col min-w-40 flex-1">
                <div className="flex w-full flex-1 items-stretch rounded-lg">
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-neutral-900 dark:text-neutral-50 focus:outline-0 focus:ring-1 focus:ring-inset focus:ring-primary border border-neutral-100 dark:border-neutral-900/50 bg-white dark:bg-background-dark h-10 placeholder:text-neutral-600 dark:placeholder:text-neutral-100/70 px-3 text-sm font-normal" placeholder="Enter page title" />
                  <div className="text-neutral-600 dark:text-neutral-100/70 flex border border-neutral-100 dark:border-neutral-900/50 bg-white dark:bg-background-dark items-center justify-center px-2 rounded-r-lg border-l-0">
                    <span className="material-symbols-outlined" style={{fontSize:20}}>close</span>
                  </div>
                </div>
              </label>
            </div>

            <div className="flex-1 overflow-y-auto space-y-1 pr-1">
              {pages && pages.length ? (
                pages.map((pg) => (
                  <div key={pg._id} onClick={() => setSelectedPage(pg)} className={`flex items-center gap-2 px-3 py-2 rounded-md min-h-10 justify-between hover:bg-neutral-50 dark:hover:bg-neutral-900/50 cursor-pointer ${selectedPage && selectedPage._id === pg._id ? 'bg-primary/10' : ''}`}>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-neutral-600 dark:text-neutral-100/70" style={{fontSize:20}}>article</span>
                      <p className="text-neutral-900 dark:text-neutral-50 text-sm font-normal flex-1 truncate">{pg.title}</p>
                    </div>
                    <div className="text-xs text-neutral-500">{new Date(pg.createdAt).toLocaleDateString()}</div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-neutral-500 px-3">No wiki pages for this project.</div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-900/50">
              <Link to={`/create/wiki?projectId=${projectId}`} state={{ project: incomingProject }} className="flex items-center gap-2 w-full text-left px-3 py-2 text-primary text-sm font-medium hover:bg-primary/10 rounded-md">
                <span className="material-symbols-outlined" style={{fontSize:20}}>add</span>
                <span>New page</span>
              </Link>
            </div>
          </nav>

          {/* Main content */}
          <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
            <div className="max-w-4xl mx-auto p-8">
              <div className="flex items-center justify-end mb-6">
                <div className="flex items-center gap-4">
                  <a className="text-primary text-sm font-medium hover:underline" href="#">Follow</a>
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-wide">Edit</button>
                </div>
              </div>

              <article className="prose prose-neutral dark:prose-invert max-w-none">
                {selectedPage ? (
                  <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 mb-2">{selectedPage.title}</h1>
                    <p className="text-sm text-neutral-600 dark:text-neutral-100/70">{selectedPage.createdBy ? `By ${selectedPage.createdBy}` : ''} {selectedPage.createdAt ? ` · ${new Date(selectedPage.createdAt).toLocaleString()}` : ''}</p>
                    <div className="mt-8" dangerouslySetInnerHTML={{ __html: selectedPage.content }} />
                  </div>
                ) : (
                  <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 mb-2">Support Issues and Solutions</h1>
                    <p className="text-sm text-neutral-600 dark:text-neutral-100/70">Prakhar Kumar updated on Feb 16</p>

                    <div className="mt-8 space-y-6 text-neutral-900 dark:text-neutral-100/70 leading-relaxed">
                      <p>This document provides solutions to common support issues encountered with the ProdigiSign application. It is intended for support staff and developers to quickly diagnose and resolve problems.</p>

                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">Q1. What is the status of the customer if the customer has uploaded a PAN card and the details are not fetched?</h3>
                        <p>If a customer uploads their PAN card and the system fails to fetch the details, the status remains as it was before the upload attempt. The system logs an error, and the user should be prompted to try again or upload a clearer image. Check the <strong>Application Table</strong> for the `pan_verification_status` field.</p>
                        <ol className="list-decimal list-inside space-y-1 mt-2">
                          <li>Verify the image quality of the uploaded PAN card.</li>
                          <li>Check the OCR service logs for any processing errors.</li>
                          <li>Ensure the connection to the verification API is stable.</li>
                        </ol>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">Q2. Can a customer change the CertificateType or Plan after the certificate has been issued?</h3>
                        <p>No, once a certificate has been issued, the <strong>CertificateType</strong> and associated <strong>Plan</strong> are locked and cannot be modified. To change the certificate type, the customer must go through the entire process again to apply for a new certificate with the desired specifications. This is a compliance and security measure.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">Q3. What documents are required for eKYC?</h3>
                        <p>For the eKYC process, the customer can upload any of the following officially valid documents (OVDs):</p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                          <li>Aadhaar Card</li>
                          <li>Passport</li>
                          <li>Driving License</li>
                          <li>Voter's ID Card</li>
                        </ul>
                        <p>The system will use OCR and verification services to validate the details from the uploaded document against the information provided by the customer.</p>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
