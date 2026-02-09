const mongoose = require("mongoose");

// Definimos qué datos vamos a guardar de cada mensaje
const MessageSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	message: { type: String, required: true },
	date: { type: Date, default: Date.now }, // Se guarda la fecha automáticamente
});

module.exports = mongoose.model("Message", MessageSchema);
