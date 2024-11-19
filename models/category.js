const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  position: { 
    type: Number, 
    required: true 
  },
  color: { 
    type: String,
	match:/^#[0-9A-F]{6}$/i,
  },
  created_at: { 
    type: Date, 
    default: Date.now 
  },
  created_by: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
