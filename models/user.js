const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/},
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  subscription_status: { type: String, default: "free" },
  credits: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  
  // Référence aux projets
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],

  // Préférences de l'utilisateur
  userpreferences: {
    notification_enabled: { type: Boolean, default: false },
    language: { type: String, default: "en" },
    notification_sound_enabled: { type: Boolean, default: false },
    email_notification_enabled: { type: Boolean, default: false },
    push_notification_enabled: { type: Boolean, default: false },
    message_notification_enabled: { type: Boolean, default: false },
    task_notification_enabled: { type: Boolean, default: false }
  },

  // Référence aux messages archivés
  archived_messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],

  // Informations sur le rôle dans chaque projet
  roles: [
    {
      project_id: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
      role_id: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
      type: { type: String, default: "user" }
    }
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
