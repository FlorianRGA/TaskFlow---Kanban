// routes/categoryRoutes.js
const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Définition des routes
router.post("/create/category", categoryController.createCategory); // Créer une catégorie
router.get("/get/categories", categoryController.getCategories); // Lire toutes les catégories
router.put("/update/category/:id", categoryController.updateCategory); // Mettre à jour une catégorie
router.delete("/delete/category/:id", categoryController.deleteCategory); // Supprimer une catégorie
router.get("/get/category/:id", categoryController.getACategory); // Supprimer une catégorie

module.exports = router;
