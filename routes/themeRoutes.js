// themeRoutes.js
const express = require("express");
const router = express.Router();
const themeController = require("../controllers/themeController");

// Définition des routes
router.post("/", themeController.createTheme);
router.get("/", themeController.getThemes);
router.put("/:id", themeController.updateTheme);
router.delete("/:id", themeController.deleteTheme);
router.get("/:id", themeController.getATheme);

module.exports = router;
