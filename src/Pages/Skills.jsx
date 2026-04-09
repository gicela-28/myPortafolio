import { useState } from "react";
import { useScrollAnimation } from "../Hooks/useScrollAnimation";
import { Github, ExternalLink, Code, Palette, Smartphone, Database } from "lucide-react";

const AnimatedSection = ({ children, delay = "0s" }) => {
	const [ref, isVisible] = useScrollAnimation();
	
	return (
		<section ref={ref} style={{ animationDelay: delay }} className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
			{children}
		</section>
	);
};

const Skills = () => {
	const [filter, setFilter] = useState("all");

	const projects = [
		{
			id: 1,
			title: "Ecosistema Digital Personal",
			description: "Plataforma completa para exhibición y venta de obras artísticas con React y MongoDB",
			tech: ["React", "Tailwind CSS", "MongoDB", "Node.js"],
			category: "fullstack",
			image: "https://res.cloudinary.com/db5ipg1so/image/upload/f_auto,q_auto,w_400,format_webp/v1770846056/WhatsApp_Image_2026-02-11_at_4.39.09_PM_npvpdb.jpg",
			github: "https://github.com/gicela-28",
			demo: "#"
		},
		{
			id: 2,
			title: "Portfolio Interactivo",
			description: "Portafolio profesional con animaciones GSAP y diseño responsivo",
			tech: ["React", "GSAP", "Tailwind CSS", "Framer Motion"],
			category: "frontend",
			image: "https://res.cloudinary.com/db5ipg1so/image/upload/f_auto,q_auto,w_400,format_webp/v1770846056/WhatsApp_Image_2026-02-11_at_4.34.08_PM_njevvs.jpg",
			github: "https://github.com/gicela-28",
			demo: "#"
		},
		{
			id: 3,
			title: "Dashboard de Analytics",
			description: "Panel de control con gráficos interactivos y visualización de datos",
			tech: ["React", "Chart.js", "CSS Grid", "JavaScript"],
			category: "frontend",
			image: "https://res.cloudinary.com/db5ipg1so/image/upload/f_auto,q_auto,w_400,format_webp/v1770846056/WhatsApp_Image_2026-02-11_at_4.39.46_PM_hnsmfu.jpg",
			github: "https://github.com/gicela-28",
			demo: "#"
		}
	];

	const skills = {
		frontend: {
			icon: <Code size={24} />,
			title: "Frontend Development",
			items: ["React", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
		},
		design: {
			icon: <Palette size={24} />,
			title: "Diseño UI/UX",
			items: ["Figma", "Responsive Design", "CSS Animations", "Color Theory", "Typography"]
		},
		tools: {
			icon: <Smartphone size={24} />,
			title: "Herramientas",
			items: ["Git & GitHub", "Vite", "VS Code", "Chrome DevTools", "NPM"]
		}
	};

	const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

	return (
		<div className="min-h-screen py-12">
			<div className="container mx-auto px-4">
				<AnimatedSection delay="0.1s">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Proyectos & Habilidades</h1>
						<p className="text-xl text-gray-300 max-w-2xl mx-auto">
							Explora mis proyectos más recientes y las tecnologías que domino
						</p>
					</div>
				</AnimatedSection>

				<AnimatedSection delay="0.2s">
					<div className="mb-8">
						<div className="flex flex-wrap justify-center gap-4">
							{["all", "frontend", "fullstack"].map(cat => (
								<button
									key={cat}
									onClick={() => setFilter(cat)}
									className={`px-6 py-2 rounded-full font-medium transition-all ${filter === cat
										? "bg-[#cd708a] text-white"
										: "bg-white/10 text-gray-300 hover:bg-white/20"
										}`}
								>
									{cat === "all" ? "Todos" : cat === "frontend" ? "Frontend" : "Full Stack"}
								</button>
							))}
						</div>
					</div>
				</AnimatedSection>

				<AnimatedSection delay="0.3s">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
						{filteredProjects.map((project) => (
							<div key={project.id} className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:scale-105 transition-all duration-300">
								<div className="h-48 overflow-hidden">
									<img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
									<p className="text-gray-300 mb-4 text-sm">{project.description}</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.tech.map((tech, i) => (
											<span key={i} className="px-3 py-1 bg-[#cd708a]/20 text-pink-300 rounded-full text-xs">
												{tech}
											</span>
										))}
									</div>
									<div className="flex gap-4">
										<a href={project.github} className="text-white hover:text-pink-400 transition-colors">
											<Github size={20} />
										</a>
										<a href={project.demo} className="text-white hover:text-pink-400 transition-colors">
											<ExternalLink size={20} />
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</AnimatedSection>

				<AnimatedSection delay="0.4s">
					<div className="grid md:grid-cols-3 gap-8">
						{Object.entries(skills).map(([key, skill]) => (
							<div key={key} className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
								<div className="flex items-center gap-3 mb-6">
									<div className="text-pink-400">{skill.icon}</div>
									<h3 className="text-xl font-bold text-white">{skill.title}</h3>
								</div>
								<ul className="space-y-3">
									{skill.items.map((item, i) => (
										<li key={i} className="flex items-center gap-2 text-gray-300">
											<div className="w-2 h-2 bg-pink-400 rounded-full"></div>
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</AnimatedSection>
			</div>
		</div>
	);
};
export default Skills;
