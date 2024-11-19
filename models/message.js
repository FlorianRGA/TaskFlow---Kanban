const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  send_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   receiver_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   conversation_id: { type: mongoose.Schema.Types.ObjectId, ref: "Conversation" },
  project_id: { type: mongoose.Schema.Types.ObjectId, ref: "Project"},
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  is_read: { type: Boolean, default: false },
  is_archived: { type: Boolean, default: false },
  chat_type: { type: String, enum: ["group", "private"], required: true },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
