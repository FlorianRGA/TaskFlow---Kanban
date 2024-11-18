const Task = require("../models/task");

// Créer une nouvelle tâche
const createTask = async (req, res) => {
	const { title, description } = req.body;
	const newTask = new Task({ title, description,user,category });

	try {
		await newTask.save();
		res.status(201).json(newTask);
	} catch (err) {
		res.status(400).json({ message: "POST NON VALIDE" });
	}
};

// Lire toutes les tâches
const getTasks = async (req, res) => {
	try {
		const tasks = await Task.find();
		res.status(200).json(tasks);
	} catch (err) {
		res.status(500).json({ message: "Get not working" });
	}
};

// Mettre à jour une tâche
const updateTask = async (req, res) => {
	const { title, description } = req.body;
	try {
		const task = await Task.findByIdAndUpdate(
			req.params.id,
			{ title, description },
			{ new: true }
		);
		res.status(200).json(task);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

// Supprimer une tâche
const deleteTask = async (req, res) => {
	try {
		await Task.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: "Task deleted" });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

// Récupérer une tâche
const getATask = async (req, res) => {
	try {
		const task = await Task.findById(req.params.id);
		res.status(200).json(task);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};
module.exports = {
	createTask,
	getTasks,
	updateTask,
	deleteTask,
	getATask,
};
