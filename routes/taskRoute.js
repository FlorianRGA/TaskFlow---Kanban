// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Définition des routes
router.post("/create/task", taskController.createTask); // Créer une tâche
router.get("/get/tasks", taskController.getTasks); // Lire toutes les tâches
router.put("/update/task/:id", taskController.updateTask); // Mettre à jour une tâche
router.delete("/delete/task/:id", taskController.deleteTask); // Supprimer une tâche
router.get("/get/task/:id", taskController.getATask); // Supprimer une tâche

module.exports = router;
