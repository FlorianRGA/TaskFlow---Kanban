// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Définition des routes
router.post("/", taskController.createTask); // Créer une tâche
router.get("/", taskController.getTasks); // Lire toutes les tâches
router.put("/:id", taskController.updateTask); // Mettre à jour une tâche
router.delete("/:id", taskController.deleteTask); // Supprimer une tâche
router.get("/:id", taskController.getATask);

module.exports = router;
