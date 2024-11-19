const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  layout: { type: Object, required: true },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

// Middleware pour mettre à jour "updated_at" à chaque modification du template
templateSchema.pre('save', function(next) {
  if (this.isModified()) {
    this.updated_at = Date.now();  // Mettre à jour updated_at lorsque le document est modifié
  }
  next();
});

const Template = mongoose.model("Template", templateSchema);

module.exports = Template;
