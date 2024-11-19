// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Définition des routes
router.post("/", userController.createUser); // Créer un utilisateur
router.get("/", userController.getUsers); // Lire toutes les utilisateurs
router.put("/:id", userController.updateUser); // Mettre à jour un utilisateur
router.delete("/:id", userController.deleteUser); // Supprimer un utilisateur
router.get("/:id", userController.getAUser); // Supprimer un utilisateur

module.exports = router;
