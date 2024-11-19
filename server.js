// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const taskRoutes = require("./routes/taskRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const priorityRoutes = require("./routes/priorityRoutes");
const projectRoutes = require("./routes/projectRoutes");
const templateRoutes = require("./routes/templateRoutes");
const themeRoutes = require("./routes/themeRoutes");
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
	origin: "http://localhost:3000",
	methods: ["GET", "POST", "PUT", "DELETE"],
	allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Connexion à la base de données
mongoose
	.connect(process.env.MONGO_URI, {})
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log("non connecté"));

// Utilisation des routes
app.use("/task", taskRoutes);
app.use("/category", categoryRoutes);
app.use("/priority", priorityRoutes);
app.use("/project", projectRoutes);
app.use("/template", templateRoutes);
app.use("/theme", themeRoutes);
app.use("/user", userRoutes);
app.use("/message", messageRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
