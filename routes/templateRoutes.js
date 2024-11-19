// templateRoutes.js
const express = require("express");
const router = express.Router();
const templateController = require("../controllers/templateController");

// Définition des routes
router.post("/", templateController.createTemplate);
router.get("/", templateController.getTemplates);
router.put("/:id", templateController.updateTemplate);
router.delete("/:id", templateController.deleteTemplate);
router.get("/:id", templateController.getATemplate);

module.exports = router;
