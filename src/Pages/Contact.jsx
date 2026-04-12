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
			const templateParams = {
				from_name: formData.name,      // EmailJS espera from_name
				to_name: "Gicela Lozano",     // Tu nombre como destinatario
				from_email: formData.email,    // EmailJS espera from_email
				message: formData.message,
				reply_to: formData.email,       // Para que puedas responder
			};

			await emailjs.send(
				'service_lsaqlbb',           // Service ID
				'template_1m5pl3s',         // Template ID
				templateParams,
				{
					publicKey: '6av7_x_NTwGT3mv4i'  // Public key - no como tercer parámetro
				}
			);

			toast.success("¡Mensaje enviado! Te responderé pronto.", { id: toastId });
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			console.error("Error detallado de EmailJS:", error);
			toast.error(`Error: ${error.text || "No se pudo enviar el correo"}`, { id: toastId });
		} finally {
			setIsSending(false);
		}
	};



	return (
		<div className="contact-container z-0 flex flex-col items-center md:p-10 px-4 py-10">
			<div className="flex w-full max-w-6xl flex-wrap justify-center gap-6">

				{/* Tarjeta 1: Información */}
				<section className="max-w-[500px] min-w-[300px] flex-1 rounded-2xl border border-white/10 bg-[#cd708a9c] p-8 text-white shadow-2xl backdrop-blur-md transition-all hover:scale-[1.01]">
					<div className="mb-6 flex items-center gap-3">
						<CircleUser className="text-pink-200" size={28} />
						<h2 className="text-xl font-bold italic">Información</h2>
					</div>
					<div className="space-y-5">
						<div className="flex items-center gap-4">
							<div className="rounded-xl bg-white/10 p-3"><Mail size={22} /></div>
							<div>
								<p className="text-[10px] font-black tracking-widest text-pink-200 uppercase">Email</p>
								<p className="text-sm font-medium">gicy957@gmail.com</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="rounded-xl bg-white/10 p-3"><Phone size={22} /></div>
							<div>
								<p className="text-[10px] font-black tracking-widest text-pink-200 uppercase">Teléfono</p>
								<p className="text-sm font-medium">+57 304 376 6297</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<div className="rounded-xl bg-white/10 p-3"><MapPin size={22} /></div>
							<div>
								<p className="text-[10px] font-black tracking-widest text-pink-200 uppercase">Ubicación</p>
								<p className="text-sm font-medium">Aipe - Huila / Ibagué - Tolima</p>
							</div>
						</div>
					</div>
				</section>

				{/* Tarjeta 2: Redes Sociales */}
				<section className="max-w-[500px] min-w-[300px] flex-1 rounded-2xl border border-white/10 bg-[#cd708a9c] p-8 text-white shadow-2xl backdrop-blur-md transition-all hover:scale-[1.01]">
					<div className="mb-6 flex items-center gap-3">
						<ExternalLink className="text-pink-200" size={28} />
						<h2 className="text-xl font-bold italic">Redes Sociales</h2>
					</div>
					<div className="flex flex-col gap-4">
						<a href="https://www.linkedin.com/in/gicela-lozano" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
							<div className="flex items-center gap-4">
								<Linkedin size={24} className="group-hover:text-blue-400 transition-colors" />
								<span className="font-semibold">LinkedIn</span>
							</div>
							<ExternalLink size={14} className="opacity-40" />
						</a>
						<a href="https://github.com/gicela-28" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
							<div className="flex items-center gap-4">
								<Github size={24} className="group-hover:text-gray-400 transition-colors" />
								<span className="font-semibold">GitHub</span>
							</div>
							<ExternalLink size={14} className="opacity-40" />
						</a>
						<a href={`https://wa.me/${telefonoWA}?text=${mensajeWA}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
							<div className="rounded-xl bg-green-500/20 p-3 animate-pulso-icono">
								<svg className="w-[22px] h-[22px] fill-green-400" viewBox="0 0 24 24">
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

				{/* Tarjeta 3: Referencias */}
				<section className="w-full rounded-2xl border border-white/10 bg-[#cd708a9c] p-8 text-white shadow-2xl backdrop-blur-md">
					<div className="mb-8 flex items-center justify-center gap-3">
						<Users className="text-pink-200" size={28} />
						<h2 className="text-xl font-bold italic">Referencias Profesionales</h2>
					</div>
					<div className="flex flex-wrap justify-center gap-6">
						<div className="min-w-[280px] flex-1 rounded-xl border-t-4 border-pink-400 bg-black/20 p-5 text-center">
							<p className="text-lg font-bold text-pink-100">Kevin Hernando Lozano</p>
							<p className="mb-3 text-xs text-pink-200/70 italic text-center">Instalador de fibra óptica</p>
							<div className="flex items-center justify-center gap-2 text-sm"><Phone size={14} /> 3176380702</div>
						</div>
						<div className="min-w-[280px] flex-1 rounded-xl border-t-4 border-pink-400 bg-black/20 p-5 text-center">
							<p className="text-lg font-bold text-pink-100">Luigy Yannick Lozano</p>
							<p className="mb-3 text-xs text-pink-200/70 italic text-center">Desarrollador Web Front-end</p>
							<div className="flex items-center justify-center gap-2 text-sm"><Mail size={14} /> lui-g_lo96@hotmail.com</div>
						</div>
					</div>
				</section>

				{/* Formulario de Contacto */}
				<section className="w-full rounded-2xl bg-slate-900/50 p-10 text-white border border-white/10 backdrop-blur-sm">
					<div className="max-w-3xl mx-auto">
						<form onSubmit={handleSubmit} className="flex flex-col gap-6">
							<div className="space-y-4">
								<div className="relative group">
									<span className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400/50 group-focus-within:text-pink-400 transition-colors">
										<CircleUser size={18} />
									</span>
									<input
										type="text"
										placeholder="Nombre completo"
										value={formData.name}
										onChange={(e) => setFormData({ ...formData, name: e.target.value })}
										className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-black/20 outline-none focus:border-pink-500/50 transition-all text-sm"
										required
									/>
								</div>
								<div className="relative group">
									<span className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400/50 group-focus-within:text-pink-400 transition-colors">
										<Mail size={18} />
									</span>
									<input
										type="email"
										placeholder="Email de contacto"
										value={formData.email}
										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
										className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-black/20 outline-none focus:border-pink-500/50 transition-all text-sm"
										required
									/>
								</div>
								<textarea
									placeholder="¿En qué puedo ayudarte?"
									value={formData.message}
									onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									className="w-full h-40 p-4 rounded-xl border border-white/10 bg-black/20 outline-none focus:border-pink-500/50 transition-all text-sm resize-none"
									required
								></textarea>
							</div>
							<button
								type="submit"
								disabled={isSending}
								className={`rounded-xl p-4 font-bold transition-all ${isSending
									? 'bg-gray-600 opacity-70 cursor-not-allowed'
									: 'bg-pink-600 hover:bg-pink-500 text-white active:scale-[0.98]'
									}`}
							>
								{isSending ? "Enviando..." : "Enviar Mensaje"}
							</button>
						</form>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Contact;