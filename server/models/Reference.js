const mongoose = require('mongoose');

// Este es el "molde" para tus referencias profesionales
const ReferenceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: false }, // El email puede ser opcional
  relation: { type: String } // Ej: "Jefe inmediato", "Colega"
});

module.exports = mongoose.model('Reference', ReferenceSchema);