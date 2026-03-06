const nodemailer = require('nodemailer');

// Configuración del transporte de correo
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER, // Tu correo de Gmail
		pass: process.env.EMAIL_PASS  // Tu contraseña de aplicación de Gmail
	}
});

// Función para enviar notificación de nuevo mensaje
const sendContactNotification = async (messageData) => {
	const { name, email, message } = messageData;

	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: process.env.EMAIL_USER, // Tu correo donde recibirás las notificaciones
		subject: `📨 Nuevo mensaje de contacto - ${name}`,
		html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
                <div style="background-color: #cd708a; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
                    <h1 style="margin: 0; font-size: 24px;">🎨 Nuevo Mensaje de Contacto</h1>
                    <p style="margin: 5px 0 0 0; opacity: 0.9;">Portafolio Gicela Lozano</p>
                </div>
                
                <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <div style="margin-bottom: 25px;">
                        <h2 style="color: #16223d; margin: 0 0 10px 0; font-size: 18px;">👤 Información del Contacto</h2>
                        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #cd708a;">
                            <p style="margin: 5px 0; color: #333;"><strong>Nombre:</strong> ${name}</p>
                            <p style="margin: 5px 0; color: #333;"><strong>Correo:</strong> ${email}</p>
                            <p style="margin: 5px 0; color: #666; font-size: 12px;">📅 Enviado: ${new Date().toLocaleString('es-CO', {
			timeZone: 'America/Bogota',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		})}</p>
                        </div>
                    </div>
                    
                    <div>
                        <h2 style="color: #16223d; margin: 0 0 15px 0; font-size: 18px;">💬 Mensaje</h2>
                        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; border-left: 4px solid #16223d;">
                            <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                        </div>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
                        <p style="margin: 0; color: #666; font-size: 14px; text-align: center;">
                            🚀 Este mensaje fue enviado desde tu portafolio web<br>
                            <span style="color: #cd708a; font-weight: bold;">Gicela Lozano - Desarrolladora Frontend</span>
                        </p>
                    </div>
                </div>
            </div>
        `
	};

	try {
		await transporter.sendMail(mailOptions);
		console.log('✅ Notificación de contacto enviada a tu correo');
		return { success: true };
	} catch (error) {
		console.error('❌ Error al enviar notificación:', error);
		return { success: false, error: error.message };
	}
};

// Función para enviar correo de confirmación al cliente
const sendConfirmationEmail = async (messageData) => {
	const { name, email } = messageData;

	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: email,
		subject: '✅ Mensaje recibido - Gicela Lozano',
		html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
                <div style="background-color: #cd708a; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
                    <h1 style="margin: 0; font-size: 24px;">✅ ¡Mensaje Recibido!</h1>
                    <p style="margin: 5px 0 0 0; opacity: 0.9;">Gracias por contactarme</p>
                </div>
                
                <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <div style="text-align: center; margin-bottom: 25px;">
                        <h2 style="color: #16223d; margin: 0 0 10px 0; font-size: 20px;">Hola ${name},</h2>
                        <p style="margin: 0; color: #333; line-height: 1.6;">
                            He recibido tu mensaje y te responderé lo antes posible. 
                            Agradezco mucho tu interés en mi trabajo.
                        </p>
                    </div>
                    
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; border-left: 4px solid #cd708a; margin-bottom: 25px;">
                        <h3 style="color: #16223d; margin: 0 0 15px 0; font-size: 16px;">📝 ¿Qué sigue?</h3>
                        <ul style="margin: 0; padding-left: 20px; color: #333;">
                            <li style="margin-bottom: 8px;">Revisaré tu mensaje con atención</li>
                            <li style="margin-bottom: 8px;">Te responderé a la brevedad</li>
                            <li style="margin-bottom: 8px;">Podemos agendar una llamada si lo prefieres</li>
                        </ul>
                    </div>
                    
                    <div style="text-align: center;">
                        <a href="https://gicela-lozano-portfolio.vercel.app" 
                           style="display: inline-block; background-color: #cd708a; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-bottom: 20px;">
                            🎨 Visitar mi Portafolio
                        </a>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
                        <p style="margin: 0; color: #666; font-size: 14px; text-align: center;">
                            📧 Puedes contactarme directamente en: <a href="mailto:${process.env.EMAIL_USER}" style="color: #cd708a;">${process.env.EMAIL_USER}</a><br>
                            <span style="color: #cd708a; font-weight: bold;">Gicela Lozano - Desarrolladora Frontend</span>
                        </p>
                    </div>
                </div>
            </div>
        `
	};

	try {
		await transporter.sendMail(mailOptions);
		console.log('✅ Correo de confirmación enviado a:', email);
		return { success: true };
	} catch (error) {
		console.error('❌ Error al enviar confirmación:', error);
		return { success: false, error: error.message };
	}
};

module.exports = {
	sendContactNotification,
	sendConfirmationEmail
};
