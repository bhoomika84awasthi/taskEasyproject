import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Navbar from "./components/Navbar";
import ProjectManagement from "./pages/ProjectManagement";
import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CdicPipeline from "./pages/CdicPipeline";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetail from "./pages/ProjectDetail";
import CreateProject from "./components/project/CreateProject";
import EditProject from "./components/project/EditProject";
import Wiki from "./pages/Wiki";
import StartPage from "./pages/StartPage";
import Summary from "./pages/Summary";
import WikiPage from "./pages/WikiPage";
import DashBoard from "./pages/Dashboard";
import Board from "./pages/Board";
import Sprint from "./pages/Sprint";
import Workitem from "./pages/Workitem";
import Taskbar from "./pages/taskbar";
import Taskboard from "./components/project/boardSubitem/Sprint";
import Queries from "./pages/queries";
import QueryBoard from "./pages/board_queries";
import Timelog from "./pages/timelogsummary";
import Delivery from "./pages/deliverypage";
import Pipelines from "./pages/pipelines";









function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/api/home' element={<Home />} />
          <Route path='/api/project' element={<ProjectManagement />} />
          <Route path='/api/signin' element={<Login />} />
          <Route path='/api/signup' element={<Signup />} />
          <Route path='*' element={<Login />} />
          <Route path="/api/cdic" element={<CdicPipeline />} />
          <Route path="/api/projects" element={<ProjectPage />} />
          <Route path="/pro" element={<ProjectPage />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="/startpage" element={<StartPage />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/Wiki" element={<WikiPage />} />
          <Route path="/Dashboard" element={<DashBoard />} />
          <Route path="/Board" element={<Board />} />
          <Route path="/Sprint" element={<Sprint />} />
          <Route path="/Workitem" element={<Workitem />} />
          <Route path="/taskbar" element={<Taskbar />} />
          <Route path="/Taskboard" element={<Taskboard />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/queryboard" element={<QueryBoard />} />
          <Route path="/timelogsummary" element={<Timelog />} />
          <Route path="/deliverypage" element={<Delivery />} />
          <Route path="/pipelines" element={<Pipelines />} />




          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/project/create" element={<CreateProject />} />
          <Route path="/project/edit/:id" element={<EditProject />} />
          <Route path="/create/wiki" element={<Wiki />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
