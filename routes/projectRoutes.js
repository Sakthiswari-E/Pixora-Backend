const express = require("express");

const {
  createProject,
  getProjects,
  getProjectById,
  deleteProject,
} = require("../controllers/projectController");

const router = express.Router();

// Create Project
router.post("/", createProject);

// Get All Projects
router.get("/", getProjects);

// Get Single Project
router.get("/:id", getProjectById);

// Delete Project
router.delete("/:id", deleteProject);

module.exports = router;