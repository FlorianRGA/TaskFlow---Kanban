// messageRoutes.js
const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

// Définition des routes
router.post("/", messageController.createMessage);
router.get("/", messageController.getMessages);
router.put("/:id", messageController.updateMessage);
router.delete("/:id", messageController.deleteMessage);
router.get("/:id", messageController.getAMessage);

module.exports = router;
