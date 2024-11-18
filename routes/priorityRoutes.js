// priorityRoutes.js
const express = require("express");
const router = express.Router();
const priorityController = require("../controllers/priorityController");

// Définition des routes
router.post("/create/priority", priorityController.createPriority); // Créer une catégorie
router.get("/get/categories", priorityController.getCategories); // Lire toutes les catégories
router.put("/update/priority/:id", priorityController.updatePriority); // Mettre à jour une catégorie
router.delete("/delete/priority/:id", priorityController.deletePriority); // Supprimer une catégorie
router.get("/get/priority/:id", priorityController.getAPriority); // Supprimer une catégorie

module.exports = router;
