const User = require("../models/user");

// Créer un nouveau utilisateur
const createUser = async (req, res) => {
	const { username, email } = req.body;
	const newUser = new User({ username, email });

	try {
		await newUser.save();
		res.status(201).json(newUser);
	} catch (err) {
		res.status(400).json({ message: "POST NON VALIDE" });
	}
};

// Lire toutes les utilisateurs
const getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({ message: "Get not working" });
	}
};

// Mettre à jour un utilisateur
const updateUser = async (req, res) => {
	const { username, email } = req.body;
	try {
		const user = await User.findByIdAndUpdate(
			req.params.id,
			{ username, email },
			{ new: true }
		);
		res.status(200).json(user);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

// Supprimer un utilisateur
const deleteUser = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: "User deleted" });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

// Récupérer une utilisateur
const getAUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.status(200).json(user);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};
module.exports = {
	createUser,
	getUsers,
	updateUser,
	deleteUser,
	getAUser,
};
