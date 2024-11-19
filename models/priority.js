const mongoose = require("mongoose");

const prioritySchema = new mongoose.Schema({
	name: { type: String, required: true },
    color: { type: String, required: true, match: /^#[0-9A-F]{6}$/i },
    created_at: { type: Date, default: Date.now },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    order: { type: Number, required: true },
    description: { type: String, default: "" },
});

const Priority = mongoose.model("priorities", prioritySchema);

module.exports = Priority;
