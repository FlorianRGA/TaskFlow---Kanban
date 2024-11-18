// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Définition des routes
router.post("/create/user", userController.createUser); // Créer un utilisateur
router.get("/get/users", userController.getUsers); // Lire toutes les utilisateurs
router.put("/update/user/:id", userController.updateUser); // Mettre à jour un utilisateur
router.delete("/delete/user/:id", userController.deleteUser); // Supprimer un utilisateur
router.get("/get/user/:id", userController.getAUser); // Supprimer un utilisateur

module.exports = router;
