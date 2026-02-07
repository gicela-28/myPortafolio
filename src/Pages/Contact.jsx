import { Mail, Phone, MapPin, Linkedin, Github, Users, ExternalLink, CircleUser } from "lucide-react";

import { useState } from "react";

const Contact = () => {
	// 1. El estado VA AQUÍ ADENTRO
	const [formData, setFormData] = useState({ name: "", email: "", message: "" });

	// 2. La función handleSubmit VA AQUÍ ADENTRO
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:5000/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				alert("¡Gracias! Tu mensaje ha sido guardado.");
				setFormData({ name: "", email: "", message: "" });
			}
		} catch (error) {
			alert("Hubo un error al conectar con el servidor.");
		}
	};

	return (
		<div className="contact-container z-0 flex flex-col items-center md:p-10">
			{/* Contenedor Flex Principal */}
			<div className="flex w-full max-w-6xl flex-wrap justify-center gap-6">
				{/* Tarjeta 1: Información (Ancho fijo en md para simular columnas) */}
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

				{/* Tarjeta 2: Redes Sociales */}
				<section className="max-w-[500px] min-w-[300px] flex-1 rounded-2xl border border-white/10 bg-[#cd708a9c] p-8 text-white shadow-2xl backdrop-blur-md transition-all hover:scale-[1.02]">
					<div className="mb-6 flex items-center gap-3">
						<ExternalLink className="text-pink-200" size={28} />
						<h2 className="text-xl font-bold italic">Redes Sociales</h2>
					</div>
					<div className="flex flex-col gap-4">
						<a href="#" className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
							<div className="flex items-center gap-4">
								<Linkedin size={24} className="transition-colors group-hover:text-blue-400" />
								<span className="font-semibold">LinkedIn</span>
							</div>
							<ExternalLink size={14} className="opacity-40 group-hover:opacity-100" />
						</a>
						<a href="#" className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
							<div className="flex items-center gap-4">
								<Github size={24} className="transition-colors group-hover:text-gray-400" />
								<span className="font-semibold">GitHub</span>
							</div>
							<ExternalLink size={14} className="opacity-40 group-hover:opacity-100" />
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
			<section className="rounded-2xl bg-slate-900 p-10  w-full text-white">
				<div className="flex flex-col gap-10 md:flex-row">
					{/* Lado Izquierdo: Info */}
					<div className="flex-1 space-y-6">
						<h2 className="flex items-center gap-2 text-3xl font-bold">
							<CircleUser className="text-pink-400" /> Información de Contacto
						</h2>
						<p>Estoy disponible para nuevos proyectos. ¡Hablemos!</p>
					</div>

					{/* Lado Derecho: Formulario */}
					<div className="flex-1">
						<form onSubmit={handleSubmit} className="flex flex-col gap-4">
							<input
								type="text"
								placeholder="Nombre"
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								className="rounded border border-white/20 bg-white/10 p-3 outline-none focus:border-pink-400"
								required
							/>
							<input
								type="email"
								placeholder="Email"
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								className="rounded border border-white/20 bg-white/10 p-3 outline-none focus:border-pink-400"
								required
							/>
							<textarea
								placeholder="Tu mensaje"
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								className="h-32 rounded border border-white/20 bg-white/10 p-3 outline-none focus:border-pink-400"
								required
							></textarea>
							<button type="submit" className="rounded-lg bg-pink-600 p-3 font-bold transition-all hover:bg-pink-500">
								Enviar Mensaje
							</button>
						</form>
					</div>
				</div>
			</section>
			</div>
		</div>
	);
};

export default Contact;
