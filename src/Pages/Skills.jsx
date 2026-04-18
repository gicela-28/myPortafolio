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
			tech: ["React", "Tailwind CSS", "Node.js"],
			category: "fullstack",
			image: "https://res.cloudinary.com/db5ipg1so/image/upload/f_auto,q_auto,w_400,format_webp/v1770846056/WhatsApp_Image_2026-02-11_at_4.39.09_PM_npvpdb.jpg",
			github: "https://github.com/gicela-28",
			demo: "#"
		},
		{
			id: 2,
			title: "Portfolio Interactivo",
			description: "Portafolio profesional con animaciones GSAP y diseño responsivo",
			tech: ["React", "Tailwind CSS", "Framer Motion"],
			category: "frontend",
			image: "https://res.cloudinary.com/db5ipg1so/image/upload/f_auto,q_auto,w_400,format_webp/v1770846056/WhatsApp_Image_2026-02-11_at_4.34.08_PM_njevvs.jpg",
			github: "https://github.com/gicela-28",
			demo: "#"
		},
		{
			id: 3,
			title: "Dashboard de Analytics",
			description: "Panel de control con gráficos interactivos y visualización de datos",
			tech: ["React", "CSS Grid", "JavaScript"],
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
			items: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
		},
		design: {
			icon: <Palette size={24} />,
			title: "Diseño UI/UX",
			items: ["Figma", "Responsive Design", "Color Theory", "Typography"]
		},
		tools: {
			icon: <Smartphone size={24} />,
			title: "Herramientas",
			items: ["Git & GitHub", "Vite", "VS Code", "NPM"]
		}
	};

	const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

	return (
		<div className="flex flex-col items-center mb-15  mt-8">
			<div className="z-10 flex w-full max-w-4xl flex-col gap-6 text-white">
				<AnimatedSection delay="0.1s">
					<div className="flex flex-col items-center ">
						<p className="text-xl text-gray-300 max-w-2xl mx-auto">
							Explora mis proyectos más recientes y las tecnologías que domino
						</p>
					</div>
				</AnimatedSection>

				<AnimatedSection delay="0.2s">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{filteredProjects.map((project) => (
							<div key={project.id} className="bg-[#cd708a9c] rounded-xl p-5 border border-white/10 shadow-xl backdrop-blur-md transition-all hover:scale-105 hover:border-[#cd708a]/50">
								<h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
								<p className="text-gray-200 mb-4 text-sm leading-relaxed">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech, index) => (
										<span key={index} className="bg-white/10 px-2 py-1 rounded text-xs text-gray-300">
											{tech}
										</span>
									))}
								</div>
								<div className="flex gap-3">
									{project.github && (
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-pink-300 hover:text-pink-200 transition-colors"
										>
											<Github size={18} />
											<span className="text-sm">Código</span>
										</a>
									)}
									{project.demo && (
										<a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-pink-300 hover:text-pink-200 transition-colors"
										>
											<ExternalLink size={18} />
											<span className="text-sm">Demo</span>
										</a>
									)}
								</div>
							</div>
						))}
					</div>
				</AnimatedSection>

				<AnimatedSection delay="0.4s">
					<div className="grid md:grid-cols-1 gap-4">
						{Object.entries(skills).map(([key, skill]) => (
							<div key={key} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
								<div className="flex items-center gap-3">
									<div className="text-pink-400">{skill.icon}</div>
									<h3 className="text-lg font-bold text-white">{skill.title}</h3>
								</div>
								<ul className="space-y-2">
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
