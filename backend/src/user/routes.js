const express = require("express");
const {
  getProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
} = require("../user/controllers");
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

//require auth for all project routes
router.use(requireAuth);

//GET all projects
router.get("/", getProjects);

//GET a single project
router.get("/:id", getProject);

//POST a new project
router.post("/", createProject);

//DELETE a project
router.delete("/:id", deleteProject);

//UPDATE a project
router.patch("/:id", updateProject);

module.exports = router;
