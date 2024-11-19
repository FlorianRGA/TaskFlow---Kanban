const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  priority_id: { type: mongoose.Schema.Types.ObjectId, ref: "Priority" },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },

  assigned_users: [
    {
      user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      assigned_at: { type: Date, default: Date.now }
    }
  ],

  created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  created_at: { type: Date, default: Date.now },
  due_date: { type: Date, default: null },
  tags: { type: [String], default: [] }, 
  is_completed: { type: Boolean, default: false },
  completion_date: { type: Date, default: null }
});

taskSchema.index({ priority_id: 1 });
taskSchema.index({ category_id: 1 });
taskSchema.index({ 'assigned_users.user_id': 1 });

// Crée le modèle Task
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
