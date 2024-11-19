const mongoose = require("mongoose");

const themeSchema = new mongoose.Schema({
	name: { type: String, required: true },
    primary_color: { type: String, required: true, match: /^#[0-9A-F]{6}$/i },
	secondary_color: { type: String, required: true, match: /^#[0-9A-F]{6}$/i },
    font_style: { type: String, required: true, match: /^[a-zA-Z0-9\s,'-]+$/ },
    background_image: { type: String, },
    background_color: { type: String, match: /^#[0-9A-F]{6}$/i },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    created_at: { type: Date, default: Date.now },
    is_paid: { type: Boolean, default: false },
    is_public: { type: Boolean, default: false },
});

const Theme = mongoose.model("themes", themeSchema);

module.exports = Theme;
