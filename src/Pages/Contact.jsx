
import { Mail, Phone, MapPin, Linkedin, Github, Users, ExternalLink, CircleUser } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {

	const fadeInVariant = {
		hidden: { opacity: 0, y: 30 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.2, // Las tarjetas aparecen una tras otra
				duration: 0.6,
				ease: "easeOut",
			},
		}),
	};

	// 1. El estado VA AQUÍ ADENTRO
	const [formData, setFormData] = useState({ name: "", email: "", message: "" });

	// 2. La función handleSubmit VA AQUÍ ADENTRO
	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const response = await fetch("https://myportafolio-wi6u.onrender.com/api/contact", {
	// 			method: "POST",
	// 			headers: { "Content-Type": "application/json" },
	// 			body: JSON.stringify(formData),
	// 		});

	// 		if (response.ok) {
	// 			alert("¡Gracias! Tu mensaje ha sido guardado.");
	// 			setFormData({ name: "", email: "", message: "" });
	// 		}
	// 	} catch {
	// 		alert("Hubo un error al conectar con el servidor.");
	// 	}
	// };

	const telefonoWA = "573043766297"; // Tu número principal
	const mensajeWA = encodeURIComponent("Hola Gicela, vi tu portafolio y me gustaría contactar contigo.");

	// const emailDestino = "gicy957@gmail.com";
	// const asuntoEmail = encodeURIComponent("Contacto desde tu portafolio - [Tu Nombre / Empresa]");

	const [isSending, setIsSending] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSending(true);
		try {
			// ... tu lógica de fetch ...
			if (response.ok) {
				// Aquí podrías usar una notificación flotante más elegante
				toast.success("¡Mensaje enviado!");
			}
		} finally {
			setIsSending(false);
		}
	};

	return (
		<div className="contact-container z-0 flex flex-col items-center md:p-10">
			{/* Contenedor Flex Principal */}
			<div className="flex w-full max-w-6xl flex-wrap justify-center gap-6">
				{/* Tarjeta 1 */}
				<section className="max-w-[500px] min-w-[300px] flex-1 rounded-2xl border border-white/10 bg-[#cd708a9c] p-8 text-white shadow-2xl backdrop-blur-md transition-all hover:scale-[1.02]">
					<div className="mb-6 flex items-center gap-3">
						<CircleUser className="text-pink-200" size={28} />
						<h2 className="text-xl font-bold italic">Información</h2>
					</div>
					<div className="space-y-5">
						<div className="flex items-center gap-4">
							<div className="rounded-xl bg-white/10 p-3 shadow-inner">
								<Mail size={22} />
							</div>
							<div>
								<p className="text-[10px] font-black tracking-widest text-pink-200 uppercase">Email</p>
								<p className="text-sm font-medium">gicy957@gmail.com</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="rounded-xl bg-white/10 p-3 shadow-inner">
								<Phone size={22} />
							</div>
							<div>
								<p className="text-[10px] font-black tracking-widest text-pink-200 uppercase">Teléfono</p>
								<p className="text-sm font-medium">+57 304 376 6297</p>
								<p className="text-sm font-medium">+57 316 318 9083</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="rounded-xl bg-white/10 p-3 shadow-inner">
								<MapPin size={22} />
							</div>
							<div>
								<p className="text-[10px] font-black tracking-widest text-pink-200 uppercase">Ubicación</p>
								<p className="text-sm leading-tight font-medium">Aipe - Huila / Ibagué - Tolima</p>
							</div>
						</div>
					</div>
				</section>


				{/* Tarjeta 2*/}



				<section className="max-w-[500px] min-w-[300px] flex-1 rounded-2xl border border-white/10 bg-[#cd708a9c] p-8 text-white shadow-2xl backdrop-blur-md transition-all hover:scale-[1.02]">
					<div className="mb-6 flex items-center gap-3">
						<ExternalLink className="text-pink-200" size={28} />
						<h2 className="text-xl font-bold italic">Redes Sociales</h2>
					</div>
					<div className="flex flex-col gap-4">
						<a href="www.linkedin.com/in/gicela-lozano" className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
							<div className="flex items-center gap-4">
								<Linkedin size={24} className="transition-colors group-hover:text-blue-400" />
								<span className="font-semibold">LinkedIn</span>
							</div>
							<ExternalLink size={14} className="opacity-40 group-hover:opacity-100" />
						</a>
						<a href="https://github.com/gicela-28/myPortafolio.git" className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
							<div className="flex items-center gap-4">
								<Github size={24} className="transition-colors group-hover:text-gray-400" />
								<span className="font-semibold">GitHub</span>
							</div>
							<ExternalLink size={14} className="opacity-40 group-hover:opacity-100" />
						</a>
						<a
							href={`https://wa.me/${telefonoWA}?text=${mensajeWA}`}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-4 group cursor-pointer rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10"
						>
							{/* AÑADE LA CLASE 'animate-pulso-icono' AQUÍ */}
							<div className="rounded-xl bg-green-500/20 p-3 shadow-inner group-hover:bg-green-500/40 transition-colors animate-pulso-icono">
								<svg className="w-[22px] h-[22px] fill-green-400" viewBox="0 0 24 24">
									<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.438-9.89 9.886-.001 2.125.593 3.457 1.574 5.111l-.973 3.548 3.61-.947z" />
								</svg>
							</div>
							<div>
								<p className="text-[10px] font-black tracking-widest text-green-300 uppercase">WhatsApp</p>
								<p className="text-sm font-medium group-hover:text-green-300 transition-colors">Chat Directo</p>
							</div>
						</a>
					</div>
				</section>


				{/* Tarjeta 3: Referencias (Ocupa todo el ancho abajo) */}
				<section className="w-full rounded-2xl border border-white/10 bg-[#cd708a9c] p-8 text-white shadow-2xl backdrop-blur-md">
					<div className="mb-8 flex items-center justify-center gap-3">
						<Users className="text-pink-200" size={28} />
						<h2 className="text-xl font-bold italic">Referencias Profesionales</h2>
					</div>
					<div className="flex flex-wrap justify-center gap-6">
						<div className="min-w-[280px] flex-1 rounded-xl border-t-4 border-pink-400 bg-black/20 p-5">
							<p className="text-lg font-bold text-pink-100">Kevin Hernando Lozano</p>
							<p className="mb-3 text-xs text-pink-200/70 italic">Instalador de fibra óptica</p>
							<div className="flex items-center gap-2 text-sm">
								<Phone size={14} /> 3176380702
							</div>
						</div>
						<div className="min-w-[280px] flex-1 rounded-xl border-t-4 border-pink-400 bg-black/20 p-5">
							<p className="text-lg font-bold text-pink-100">Luigy Yannick Lozano</p>
							<p className="mb-3 text-xs text-pink-200/70 italic">Desarrollador Web Front-end</p>
							<div className="flex items-center gap-2 text-sm">
								<Mail size={14} /> lui-g_lo96@hotmail.com
							</div>
						</div>
					</div>
				</section>

				{/* formulario de contacto */}


				<section className="w-full rounded-2xl bg-slate-900 p-10 text-white">

					<div className="flex-1">
						<form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-inner">
							<div className="space-y-4">
								{/* Campo Nombre */}
								<div className="relative group">
									<span className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400/50 group-focus-within:text-pink-400 transition-colors">
										<CircleUser size={18} />
									</span>
									<input
										type="text"
										placeholder="Nombre completo"
										value={formData.name}
										onChange={(e) => setFormData({ ...formData, name: e.target.value })}
										className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-black/20 outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all text-sm"
										required
									/>
								</div>

								{/* Campo Email */}
								<div className="relative group">
									<span className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400/50 group-focus-within:text-pink-400 transition-colors">
										<Mail size={18} />
									</span>
									<input
										type="email"
										placeholder="Email de contacto"
										value={formData.email}
										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
										className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-black/20 outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all text-sm"
										required
									/>
								</div>

								{/* Campo Mensaje */}
								<textarea
									placeholder="¿En qué puedo ayudarte?"
									value={formData.message}
									onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									className="w-full h-40 p-4 rounded-xl border border-white/10 bg-black/20 outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all text-sm resize-none"
									required
								></textarea>
							</div>

							<button
								type="submit"
								className="group relative overflow-hidden rounded-xl bg-pink-600 px-8 py-4 font-bold text-white transition-all hover:bg-pink-500 active:scale-95 shadow-lg shadow-pink-600/20"
							>
								<span className="relative z-10 flex items-center justify-center gap-2">
									Enviar Mensaje <ExternalLink size={18} />
								</span>
								<div className="absolute inset-0 -z-0 bg-gradient-to-r from-pink-400 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
							</button>
						</form>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Contact;
