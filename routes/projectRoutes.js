// projectRoutes.js
const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

// Définition des routes
router.post("/", projectController.createProject);
router.get("/", projectController.getProjects);
router.put("/:id", projectController.updateProject);
router.delete(":id", projectController.deleteProject);
router.get("/:id", projectController.getAProject);

module.exports = router;
