const express = require('express');
const multer = require('multer');
const path = require('path');
const Project = require('../models/Project');

const router = express.Router();

// configure multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// POST /api/projects - create project with optional logo upload
router.post('/', upload.single('logo'), async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ message: 'title is required' });

    const projectData = {
      title,
      description: description || null,
    };

    if (req.file) {
      // store file path relative to uploads
      projectData.logo = `/uploads/${req.file.filename}`;
    }

    // Optionally: set createdBy from authenticated user if auth implemented
    const project = new Project(projectData);
    await project.save();

    res.status(201).json({ message: 'Project created', project });
  } catch (err) {
    console.error('Create project error:', err);
    res.status(500).json({ message: 'Failed to create project' });
  }
});

// GET /api/projects - list all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 }).lean();
    res.json({ projects });
  } catch (err) {
    console.error('Fetch projects error:', err);
    res.status(500).json({ message: 'Failed to fetch projects' });
  }
});

// GET /api/projects/:id - get project by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id).lean();
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) {
    console.error('Fetch project error:', err);
    res.status(500).json({ message: 'Failed to fetch project' });
  }
});

// PUT /api/projects/:id - update project by id
router.put('/:id', upload.single('logo'), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!title) return res.status(400).json({ message: 'title is required' });

    const updateData = {
      title,
      description: description || null,
    };

    if (req.file) {
      updateData.logo = `/uploads/${req.file.filename}`;
    }

    const project = await Project.findByIdAndUpdate(id, updateData, { new: true }).lean();
    if (!project) return res.status(404).json({ message: 'Project not found' });
    
    res.json({ message: 'Project updated', project });
  } catch (err) {
    console.error('Update project error:', err);
    res.status(500).json({ message: 'Failed to update project' });
  }
});

// DELETE /api/projects/:id - delete a project
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted' });
  } catch (err) {
    console.error('Delete project error:', err);
    res.status(500).json({ message: 'Failed to delete project' });
  }
});

module.exports = router;
