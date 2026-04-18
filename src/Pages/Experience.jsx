import { useScrollAnimation } from "../Hooks/useScrollAnimation";
import { Briefcase, GraduationCap, Calendar, MapPin, Award, ExternalLink } from "lucide-react";

const AnimatedSection = ({ children, delay = "0s" }) => {
	const [ref, isVisible] = useScrollAnimation();
	return (
		<section ref={ref} style={{ animationDelay: delay }} className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
			{children}
		</section>
	);
};

const Experience = () => {
	const workExperience = [
		{
			id: 1,
			company: "Freelance Frontend Developer",
			position: "Desarrolladora Frontend Independiente",
			period: "2024 - Presente",
			location: "Remoto",
			description: "Desarrollo de sitios web y aplicaciones para clientes diversos, especializándome en interfaces modernas y responsivas con React y JavaScript.",
			achievements: [
				"Implementé diseños responsivos compatibles con todos los dispositivos",
				"Optimicé el rendimiento de sitios web mejorando tiempos de carga en un 40%",

			],
			technologies: ["React", "JavaScript ES6+", "Tailwind CSS", "HTML5", "CSS3", "Git"],
			type: "work"
		},
		{
			id: 2,
			company: "Proyectos Personales",
			position: "Desarrolladora Full Stack",
			period: "2023 - 2024",
			location: "Estudio Personal",
			description: "Desarrollo de proyectos personales para fortalecer habilidades y explorar nuevas tecnologías.",
			achievements: [
				"Creé un portafolio interactivo con animaciones GSAP",
				"Exploré patrones de diseño y arquitecturas modernas"
			],
			technologies: ["React", "Node.js", "MongoDB", "GSAP", "Framer Motion"],
			type: "work"
		}
	];

	const education = [
		{
			id: 1,
			institution: "Formación Autodidacta",
			degree: "Desarrollo Web Full Stack",
			period: "2023 - Presente",
			location: "Online",
			description: "Formación intensiva en desarrollo web moderno a través de cursos, documentación y práctica constante.",
			achievements: [
				"Completé cursos avanzados de React",
				"Realicé proyectos prácticos para aplicar conocimientos",
				"Mantengo actualización constante con nuevas tecnologías"
			],
			technologies: ["React", "JavaScript", "CSS3", "HTML5", "Node.js", "MongoDB"],
			type: "education"
		},
		{
			id: 2,
			institution: "Platzi & Udemy",
			degree: "Especialización Frontend",
			period: "2023 - 2024",
			location: "Online",
			description: "Cursos especializados en desarrollo frontend, diseño UI/UX y mejores prácticas.",
			achievements: [
				"Certificación en React y JavaScript avanzado",
				"Cursos de diseño UI/UX y accesibilidad web",
			],
			technologies: ["React", "UI/UX Design", "Git"],
			type: "education"
		}
	];

	const TimelineCard = ({ item }) => {
		const isWork = item.type === "work";
		const Icon = isWork ? Briefcase : GraduationCap;

		return (
			<div className="relative group">
				{/* Timeline line */}
				<div className="absolute left-5 top-5 bottom-0 w-0.5 bg-linear-to-b from-[#cd708a] to-transparent opacity-30"></div>

				{/* Timeline dot */}
				<div className="absolute left-4 top-9 w-4 h-4 bg-[#cd708a] rounded-full border-4 border-[#16223d] z-10"></div>

				{/* Card */}
				<div className="ml-9 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-[1.02] transition-all duration-300 group-hover:bg-white/15">
					<div className="flex items-start justify-between mb-4">
						<div className="flex-1">
							<div className="flex items-center gap-3 mb-2">
								<Icon size={17} className="text-pink-400" />
								<h3 className="text-l font-bold text-white">{isWork ? item.position : item.degree}</h3>
							</div>
						</div>
						<div className="text-right">
							<div className="flex items-center gap-2 text-gray-300 text-sm mb-1">
								<Calendar size={14} />
								{item.period}
							</div>
							<div className="flex items-center gap-2 text-gray-400 text-sm">
								<MapPin size={14} />
								{item.location}
							</div>
						</div>
					</div>

					<p className="text-gray-300 mb-3">{item.description}</p>

					<div className="mb-4">
						<h5 className="text-xs font-semibold text-pink-300 mb-2">Logros destacados:</h5>
						<ul className="space-y-1">
							{item.achievements.map((achievement, i) => (
								<li key={i} className="flex items-start gap-2 text-gray-300 text-xs">
									<div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-1 shrink-0"></div>
									{achievement}
								</li>
							))}
						</ul>
					</div>

					<div>
						<h5 className="text-sm font-semibold text-pink-300 mb-2">Tecnologías:</h5>
						<div className="flex flex-wrap gap-2">
							{item.technologies.map((tech, i) => (
								<span key={i} className="px-3 py-1 bg-[#cd708a]/20 text-pink-300 rounded-full text-xs">
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className=" items-center min-h-screen mt-12">
			<div className="z-10 flex   md:flex-row  text-white flex-col">
				<div className="experiencia  flex max-w-[700px] min-w-[280px] flex-1">
					<AnimatedSection delay="0.2s">
						<div className="mb-8 flex-col-1">
							<div className="title text-center gap-0 mb-4">
								<h2 className="text-md font-bold text-pink-200 text-center">Experiencia Laboral</h2>
								<p className="text-xs text-gray-300 max-w-2xl mx-auto">
									Mi trayectoria profesional y logros académicos
								</p>
							</div>
							<div className="space-y-4">
								{workExperience.map((item) => (
									<TimelineCard key={item.id} item={item} />
								))}
							</div>
						</div>
					</AnimatedSection>
				</div>
				<div className="educacion flex max-w-[700px] min-w-[280px] flex-1">

					<AnimatedSection delay="0.3s">
						<div className="flex-col-2">
							<h2 className="text-md font-bold text-pink-200 mb-6 text-center">Educación</h2>
							<div className="space-y-4">
								{education.map((item) => (
									<TimelineCard key={item.id} item={item} />
								))}
							</div>
						</div>
					</AnimatedSection>
				</div>

			</div>
				<AnimatedSection delay="0.4s">
					<div className="mb-16 text-center">
						<div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
							<div className="flex items-center justify-center gap-3 mb-3">
								<Award size={24} className="text-pink-400" />
								<h3 className="text-xl font-bold text-white">Resumen Profesional</h3>
							</div>
							<p className="text-gray-300 max-w-2xl mx-auto">
								Desarrolladora Frontend con 1+ año de experiencia especializada en crear interfaces modernas y funcionales.
								Apasionada por el aprendizaje continuo y la entrega de soluciones de alta calidad que impacten positivamente en la experiencia del usuario.
							</p>
							<div className="flex justify-center gap-4 mt-6">
								<div className="text-center">
									<div className="text-2xl font-bold text-pink-400">10+</div>
									<div className="text-sm text-gray-400">Proyectos</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-pink-400">1+</div>
									<div className="text-sm text-gray-400">Años</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-pink-400">100%</div>
									<div className="text-sm text-gray-400">Compromiso</div>
								</div>
							</div>
						</div>
					</div>
				</AnimatedSection>
		</div>
	);
};

export default Experience;
