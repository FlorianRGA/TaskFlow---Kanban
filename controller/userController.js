const User = require("../models/user");

// Créer un nouveau utilisateur
const createUser = async (req, res) => {
	const { username, email, password,date_of_birth} = req.body;

    //check user birthday
    if (date_of_birth < new Date().getFullYear() - 16) {
        return res.status(400).json({ message: "User birthday must be greater than 16 years old" });
    }

    // check if user already exist
    const existingUser = await User.findOne({email});
    const existingEmail = await User.findOne({username});
    if (existingUser){
       return res.status(400).json({message:"Email already exist"}); 
    }
    if (existingEmail) {
        return res.status(400).json({ message: "Username already exist" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
	const newUser = new User({ username, email,hashedPassword,date_of_birth });
	try {
		await newUser.save();
		res.status(201).json(newUser);
	} catch (err) {
		res.status(400).json({ message: "POST NON VALIDE" });
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
		const user = await User.findById(req.params.id).select("-password");
		res.status(200).json(user);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};
module.exports = {
	createUser,
	updateUser,
	deleteUser,
	getAUser,
};
