# 📧 Servidor de Contacto - Portafolio Gicela Lozano

## 📁 Estructura del Proyecto

```
server/
├── .env                 # Variables de entorno (no subir a git)
├── .env.example         # Plantilla de configuración
├── server.js            # Servidor principal Express
├── package.json         # Dependencias del proyecto
├── EMAIL_SETUP.md       # Guía de configuración de email
├── db.js               # Configuración de base de datos
├── models/             # Modelos de MongoDB
│   ├── Message.js      # Modelo de mensajes de contacto
│   └── Reference.js    # Modelo de referencias
└── services/           # Servicios del servidor
    └── emailService.js # Servicio de notificaciones por email
```

## 🚀 Configuración

### 1. Variables de Entorno
Copia `.env.example` a `.env` y configura:
```env
MONGO_URI=tu_uri_de_mongodb_aqui
EMAIL_USER=tu_correo@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicacion
PORT=10000
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Iniciar Servidor
```bash
npm start
```

## 📧 Funcionalidades

### ✅ Mensajes de Contacto
- **Guarda en MongoDB**: Todos los mensajes se almacenan
- **Notificación por email**: Te llega un email profesional
- **Confirmación al cliente**: El cliente recibe email automático

### 🔄 Flujo Completo
1. Cliente llena formulario → Se guarda en MongoDB
2. Te llega email con detalles del contacto
3. Cliente recibe confirmación automática
4. Todos felices 🎉

## 🛠️ Endpoints

### GET /api/references
Obtener todas las referencias profesionales

### POST /api/references
Crear nueva referencia (opcional)

### POST /api/contact
Enviar mensaje de contacto
```json
{
  "name": "Nombre del cliente",
  "email": "cliente@email.com",
  "message": "Mensaje del cliente"
}
```

## 🔧 Configuración Gmail

### 1. Contraseña de Aplicación
1. Ve a: https://myaccount.google.com/apppasswords
2. Activa verificación en dos pasos
3. Genera contraseña para "Portafolio Contacto"
4. Copia los 16 caracteres con espacios

### 2. Apps Menos Seguras
1. Ve a: https://myaccount.google.com/security
2. Activa "Permitir apps menos seguras"
3. Espera 2-3 minutos

## 📝 Notas

- El servidor funciona en puerto 10000 (compatible con Render)
- Los emails se envían con diseño profesional
- Base de datos MongoDB Atlas para persistencia
- CORS configurado para React frontend

## 🚀 Despliegue

### Render (Recomendado)
1. Conecta tu repositorio GitHub
2. Configura variables de entorno en el panel
3. Despliega automáticamente

### Local
```bash
npm start
```

## 📞 Soporte

Si tienes problemas con el email:
1. Verifica configuración de Gmail
2. Revisa variables de entorno
3. Revisa logs del servidor
