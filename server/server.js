const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Message = require("./models/Message"); // Importamos el modelo de mensajes
require("dotenv").config();

const Reference = require("./models/Reference"); // Importamos tu modelo

const app = express();

// Middlewares
app.use(cors()); // Permite que React (puerto 5173) se comunique con el servidor
app.use(express.json()); // Permite recibir datos en formato JSON

// Conexión a MongoDB
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("✅ Conectado a MongoDB"))
	.catch((err) => console.error("❌ Error de conexión:", err));

// --- RUTAS DE LA API ---

// 1. Obtener todas las referencias (GET)
app.get("/api/references", async (req, res) => {
	try {
		const references = await Reference.find();
		res.json(references);
	} catch (error) {
		res.status(500).json({ message: "Error al obtener referencias" });
	}
});

// 2. Crear una nueva referencia (POST) - Opcional para pruebas
app.post("/api/references", async (req, res) => {
	const newRef = new Reference(req.body);
	await newRef.save();
	res.json(newRef);
});

// Ruta POST para recibir mensajes del portafolio
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Creamos el nuevo documento
    const newMessage = new Message({ name, email, message });
    
    // Lo guardamos en MongoDB Atlas
    await newMessage.save();
    
    res.status(201).json({ success: true, message: "¡Mensaje enviado correctamente!" });
  } catch (error) {
    console.error("Error al guardar mensaje:", error);
    res.status(500).json({ success: false, error: "No se pudo enviar el mensaje" });
  }
});


const PORT = process.env.PORT || 10000; // Render usa el 10000 por defecto
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});