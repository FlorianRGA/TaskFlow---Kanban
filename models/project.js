const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  created_at: { type: Date, default: Date.now },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  template_id: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
  theme_id: { type: mongoose.Schema.Types.ObjectId, ref: "Theme" },
  
  // Liste des membres du projet avec leur rôle
  user_members: [
    {
      user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      role_id: { type: mongoose.Schema.Types.ObjectId, ref: "Role" }
    }
  ],

  // Définition des rôles et permissions dans ce projet
  roles: [
    {
      name: { type: String, required: true },
      permissions: {
        edit_theme: { type: Boolean, default: false },
        send_message: { type: Boolean, default: false },
        edit_message: { type: Boolean, default: false },
        drag_task: { type: Boolean, default: false },
        delete_task: { type: Boolean, default: false },
        create_task: { type: Boolean, default: false },
        edit_task: { type: Boolean, default: false },
        create_category: { type: Boolean, default: false },
        edit_category: { type: Boolean, default: false },
        delete_category: { type: Boolean, default: false },
        create_priority: { type: Boolean, default: false },
        edit_priority: { type: Boolean, default: false },
        delete_priority: { type: Boolean, default: false },
      }
    }
  ]
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
