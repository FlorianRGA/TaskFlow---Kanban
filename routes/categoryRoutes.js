// routes/categoryRoutes.js
const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Définition des routes
router.post("/", categoryController.createCategory); // Créer une catégorie
router.get("/", categoryController.getCategories); // Lire toutes les catégories
router.put("/:id", categoryController.updateCategory); // Mettre à jour une catégorie
router.delete("/:id", categoryController.deleteCategory); // Supprimer une catégorie
router.get("/:id", categoryController.getACategory); // Supprimer une catégorie

module.exports = router;
