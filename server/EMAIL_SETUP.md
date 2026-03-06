# 📧 Configuración de Notificaciones por Email

## 🚀 Pasos para configurar el servicio de email

### 1. Configurar Gmail

1. **Activa la verificación en dos pasos** en tu cuenta de Gmail
2. **Crea una Contraseña de Aplicación**:
   - Ve a [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Selecciona "Otra (nombre personalizado)"
   - Escribe: "Portafolio Contacto"
   - Copia la contraseña generada (solo se muestra una vez)

### 2. Configurar Variables de Entorno

Crea el archivo `.env` en la carpeta `server/` con:

```env
# Variables de entorno para el servidor
MONGO_URI=tu_uri_de_mongodb_aqui

# Configuración de Gmail para notificaciones por email
EMAIL_USER=tu_correo@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicacion_de_gmail

# Puerto del servidor
PORT=10000
```

### 3. Instalar Dependencias

```bash
cd server
npm install
```

### 4. Iniciar Servidor

```bash
npm start
```

## 📨 ¿Cómo funciona?

1. **Cliente llena el formulario** de contacto en tu portafolio
2. **Se guarda en MongoDB** (como antes)
3. **Te llega un email** con:
   - ✅ Nombre y correo del contacto
   - 📝 Mensaje completo
   - 📅 Fecha y hora
   - 🎨 Diseño profesional

4. **El cliente recibe confirmación** automática con:
   - ✅ Confirmación de recibido
   - 📝 Próximos pasos
   - 🎨 Link a tu portafolio

## 🛡️ Seguridad

- ✅ **Validación de campos** obligatorios
- ✅ **Manejo de errores** sin exponer información sensible
- ✅ **Contraseña de aplicación** (no tu contraseña principal)
- ✅ **Variables de entorno** protegidas

## 🎨 Características del Email

### Email para ti:
- 📨 Notificación instantánea
- 🎨 Diseño profesional con tu marca
- 📱 Responsive en todos los dispositivos
- ⏰ Timestamp con hora local (Colombia)

### Email para el cliente:
- ✅ Confirmación automática
- 🎯 Información clara de próximos pasos
- 🔗 Link directo a tu portafolio
- 📧 Tu contacto directo

## 🚀 Ventajas

- **Respuesta rápida**: Recibes notificaciones al instante
- **Profesionalismo**: Demuestra atención al cliente
- **Automatización**: No necesitas revisar constantemente la BD
- **Confianza**: El cliente recibe confirmación inmediata

## 🔧 Solución de Problemas

### Si no llegan los emails:

1. **Verifica la contraseña de aplicación**:
   - Asegúrate de usar la contraseña de aplicación, no tu contraseña normal
   - Genera una nueva si es necesario

2. **Revisa el spam**:
   - Revisa la carpeta de spam/promociones

3. **Verifica variables de entorno**:
   - Asegúrate que `.env` esté en la carpeta `server/`
   - Verifica que no haya espacios extraños

4. **Logs del servidor**:
   - Revisa la consola para ver errores específicos

### Si hay errores de conexión:

1. **Verifica la URI de MongoDB**
2. **Asegúrate que el puerto esté disponible**
3. **Revisa el firewall** si usas hosting propio

## 📞 Soporte

Si tienes problemas, revisa:
1. Los logs del servidor en la consola
2. Que el archivo `.env` esté configurado correctamente
3. Que las contraseñas de aplicación estén activas

¡Listo! Ahora recibirás notificaciones instantáneas cada vez que alguien te contacte. 🎉
