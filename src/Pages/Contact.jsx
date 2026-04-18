import { Mail, Phone, MapPin, Linkedin, Github, Users, ExternalLink, CircleUser } from "lucide-react";
import { useState } from "react";
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [formData, setFormData] = useState({ name: "", email: "", message: "" });
	const [isSending, setIsSending] = useState(false);

	const telefonoWA = "573043766297";
	const mensajeWA = encodeURIComponent("Hola Gicela, vi tu portafolio y me gustaría contactar contigo.");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSending(true);
		const toastId = toast.loading("Enviando mensaje...");

		try {
			// Debug: Log todos los datos antes de enviar
			console.log("=== EMAILJS DEBUG ===");
			console.log("Service ID:", 'service_lsaqlbb');
			console.log("Template ID:", 'template_1m5pl3s');
			console.log("Public Key:", '6av7_x_NTwGT3mv4i');
			console.log("Form Data:", formData);

			const templateParams = {
				from_name: formData.name,      // EmailJS espera from_name
				to_name: "Gicela Lozano",     // Tu nombre como destinatario
				to_email: "gicy957@gmail.com", // Agregamos email destino explícito
				from_email: formData.email,    // EmailJS espera from_email
				message: formData.message,
				reply_to: formData.email,       // Para que puedas responder
			};

			console.log("Template Params:", templateParams);

			const result = await emailjs.send(
				'service_lsaqlbb',           // Service ID
				'template_1m5pl3s',         // Template ID
				templateParams,
				{
					publicKey: '6av7_x_NTwGT3mv4i'  // Public key - no como tercer parámetro
				}
			);

			console.log("EmailJS Response:", result);
			console.log("Email Status:", result.status);
			console.log("Email Text:", result.text);

			toast.success("¡Mensaje enviado! Te responderé pronto.", { id: toastId });
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			console.error("=== ERROR DETALLADO EMAILJS ===");
			console.error("Error completo:", error);
			console.error("Error status:", error.status);
			console.error("Error text:", error.text);
			console.error("Error message:", error.message);

			toast.error(`Error: ${error.text || "No se pudo enviar el correo"}`, { id: toastId });
		} finally {
			setIsSending(false);
		}
	};



	return (
		<div className="contact-container z-0 flex flex-col items-center md:p-8 px-4 py-5 ">
			<div className="flex w-full max-w-5xl flex-wrap justify-center gap-4">

				{/* Tarjeta 1: Información */}
				<section className="max-w-[450px] min-w-[280px] flex-1 rounded-2xl border border-white/10 bg-[#cd708a9c] p-6 text-white shadow-2xl backdrop-blur-md transition-all hover:scale-[1.01]">
					<div className="mb-4 flex items-center gap-3">
						<CircleUser className="text-pink-200" size={24} />
						<h2 className="text-l font-bold italic">Información</h2>
					</div>
					<div className="space-y-4">
						<div className="flex items-center gap-3">
							<div className="rounded-xl bg-white/10 p-2"><Mail size={20} /></div>
							<div>
								<p className="text-[9px] font-black tracking-widest text-pink-200 uppercase">Email</p>
								<p className="text-sm font-medium">gicy957@gmail.com</p>
							</div>
						</div>
						<div className="flex items-center gap-3">
							<div className="rounded-xl bg-white/10 p-2"><Phone size={20} /></div>
							<div>
								<p className="text-[9px] font-black tracking-widest text-pink-200 uppercase">Teléfono</p>
								<p className="text-sm font-medium">+57 304 376 6297</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<div className="rounded-xl bg-white/10 p-2"><MapPin size={20} /></div>
							<div>
								<p className="text-[9px] font-black tracking-widest text-pink-200 uppercase">Ubicación</p>
								<p className="text-sm font-medium">Aipe - Huila / Ibagué - Tolima</p>
							</div>
						</div>
					</div>
				</section>

				{/* Tarjeta 2: Redes Sociales */}
				<section className="max-w-[450px] min-w-[280px] flex-1 rounded-2xl border border-white/10 bg-[#cd708a9c] p-6 text-white shadow-2xl backdrop-blur-md transition-all hover:scale-[1.01]">
					<div className="mb-4 flex items-center gap-3">
						<ExternalLink className="text-pink-200" size={24} />
						<h2 className="text-l font-bold italic">Redes Sociales</h2>
					</div>
					<div className="flex flex-col gap-3">
						<a href="https://www.linkedin.com/in/gicela-lozano" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3 transition-colors hover:bg-white/10">
							<div className="flex items-center gap-3">
								<Linkedin size={20} className="group-hover:text-blue-400 transition-colors" />
								<span className="font-semibold">LinkedIn</span>
							</div>
							<ExternalLink size={12} className="opacity-40" />
						</a>
						<a href="https://github.com/gicela-28" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3 transition-colors hover:bg-white/10">
							<div className="flex items-center gap-3">
								<Github size={20} className="group-hover:text-gray-400 transition-colors" />
								<span className="font-semibold">GitHub</span>
							</div>
							<ExternalLink size={12} className="opacity-40" />
						</a>
						<a href={`https://wa.me/${telefonoWA}?text=${mensajeWA}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group cursor-pointer rounded-xl border border-white/5 bg-white/5 p-3 transition-colors hover:bg-white/10">
							<div className="rounded-xl bg-green-500/20 p-2 animate-pulso-icono">
								<svg className="w-[20px] h-[20px] fill-green-400" viewBox="0 0 24 24">
									<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.438-9.89 9.886-.001 2.125.593 3.457 1.574 5.111l-.973 3.548 3.61-.947z" />
								</svg>
							</div>
							<div>
								<p className="text-[10px] font-black tracking-widest text-green-300 uppercase">WhatsApp</p>
								<p className="text-sm font-medium">Chat Directo</p>
							</div>
						</a>
					</div>
				</section>

				{/* Tarjeta 3: Formulario */}
				<section className="max-w-[450px] min-w-[280px] flex-1 rounded-2xl border border-white/10 bg-[#cd708a9c] p-6 text-white shadow-2xl backdrop-blur-md">
					<div className="mb-6 flex items-center gap-3">
						<Mail className="text-pink-200" size={24} />
						<h2 className="text-l font-bold italic">Contacto</h2>
					</div>
					<form onSubmit={handleSubmit} className="">
						<div>
							<label htmlFor="name" className="block text-xs font-medium text-pink-200 mb-1">
								Nombre
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								required
								className="w-full h-9 px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
								placeholder="Tu nombre"
							/>
						</div>
						<div>
							<label htmlFor="email" className="block text-xs font-medium text-pink-200 mb-1">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								required
								className="w-full h-9 px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
								placeholder="tu@email.com"
							/>
						</div>
						<div>
							<label htmlFor="message" className="block text-sm font-medium text-pink-200 mb-1">
								Mensaje
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								required
								rows={4}
								className="w-full h-16 px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all resize-none"
								placeholder="Tu mensaje..."
							/>
						</div>
						<button
							type="submit"
							disabled={isSending}
							className="w-full bg-[#cd708a] hover:bg-[#b85f78] text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isSending ? "Enviando..." : "Enviar Mensaje"}
						</button>
					</form>
				</section>

				{/* Tarjeta 3: Referencias */}
				<section className=" max-w-[450px] min-w-[280px] flex-1 w-full rounded-2xl border border-white/10 bg-[#cd708a9c] p-6 text-white shadow-2xl backdrop-blur-md">
					<div className="mb-6 flex items-center justify-center gap-3">
						<Users className="text-pink-200" size={24} />
						<h2 className="text-lg font-bold italic">Referencias Profesionales</h2>
					</div>
					<div className="flex flex-wrap justify-center gap-4">
						<div className="text-center text-gray-300">
							<p className="text-sm">Referencias disponibles bajo solicitud</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Contact;