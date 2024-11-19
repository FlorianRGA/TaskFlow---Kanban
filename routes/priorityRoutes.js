// priorityRoutes.js
const express = require("express");
const router = express.Router();
const priorityController = require("../controllers/priorityController");

// Définition des routes
router.post("/", priorityController.createPriority); // Créer une catégorie
router.get("/", priorityController.getCategories); // Lire toutes les catégories
router.put("/:id", priorityController.updatePriority); // Mettre à jour une catégorie
router.delete("/:id", priorityController.deletePriority); // Supprimer une catégorie
router.get("/:id", priorityController.getAPriority); // Supprimer une catégorie

module.exports = router;
