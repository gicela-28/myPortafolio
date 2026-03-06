import { useScrollAnimation } from "../Hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ExternalLink, Code, Zap, Users } from "lucide-react";
import SEO from "../Components/SEO";

const AnimatedSection = ({ children, delay = "0s" }) => {
	const [ref, isVisible] = useScrollAnimation();

	return (
		<section
			ref={ref}
			style={{ animationDelay: delay }}
			className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
		>
			{children}
		</section>
	);
};

const Home = () => {
	const stats = [
		{ label: "Años de Experiencia", value: "1+", icon: <Code size={24} /> },
		{ label: "Proyectos Completados", value: "10+", icon: <Zap size={24} /> },
		{ label: "", value: "", icon: <Users size={24} /> }
	];

	const quickLinks = [
		{ href: "/about", label: "Sobre Mí", icon: <Users size={20} /> },
		{ href: "/skills", label: "Habilidades", icon: <Code size={20} /> },
		{ href: "/experience", label: "Experiencia", icon: <ExternalLink size={20} /> },
		{ href: "/contact", label: "Contacto", icon: <Mail size={20} /> }
	];

	return (
		<>
			<SEO
				title="Inicio"
				description="Gicela Lozano - Desarrolladora Frontend Creativa. Especializada en React, JavaScript y diseño web moderno. Descubre mis proyectos y experiencia profesional."
				keywords={["desarrolladora frontend", "React", "JavaScript", "portafolio", "diseño web", "UI/UX"]}
			/>
			<div className="min-h-screen flex flex-col">
				{/* Hero Section */}
				<section className="flex-grow relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-[#16223d] via-[#2a3f5f] to-[#cd708a] opacity-90"></div>

					<div className="relative z-10 flex items-center justify-center min-h-screen px-4">
						<div className="text-center max-w-4xl mx-auto">
							<AnimatedSection delay="0.1s">
								<div className="mb-8">
									<div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
										GL
									</div>
								</div>

								<h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
									Gicela Lozano
								</h1>
								<h2 className="text-xl md:text-2xl text-pink-200 mb-6 font-light">
									Desarrolladora Frontend Creativa
								</h2>

								<p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
									Especializada en crear experiencias web excepcionales con React, JavaScript moderno y diseño responsivo.
									Transformo ideas en interfaces intuitivas y funcionales.
								</p>
							</AnimatedSection>

							<AnimatedSection delay="0.3s">
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
									{stats.map((stat, index) => (
										<div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
											<div className="flex items-center justify-center mb-3 text-pink-400">
												{stat.icon}
											</div>
											<div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
											<div className="text-sm text-gray-300">{stat.label}</div>
										</div>
									))}
								</div>
							</AnimatedSection>

							<AnimatedSection delay="0.5s">
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Link
										to="/about"
										className="bg-[#cd708a] hover:bg-[#b85f78] text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
									>
										Conóceme Mejor
									</Link>
									<Link
										to="/contact"
										className="border-2 border-[#cd708a] text-white hover:bg-[#cd708a] px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
									>
										Iniciar Proyecto
									</Link>
								</div>
							</AnimatedSection>
						</div>
					</div>
				</section>

				{/* Quick Access Section */}
				<section className="bg-[#16223d] py-12">
					<div className="container mx-auto px-4">
						<AnimatedSection delay="0.7s">
							<h3 className="text-2xl font-bold text-white text-center mb-8">Navegación Rápida</h3>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
								{quickLinks.map((link, index) => (
									<Link
										key={index}
										to={link.href}
										className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 flex flex-col items-center gap-3 transition-all hover:scale-105 group"
									>
										<div className="text-pink-400 group-hover:text-pink-300 transition-colors">
											{link.icon}
										</div>
										<span className="text-white font-medium text-sm">{link.label}</span>
									</Link>
								))}
							</div>
						</AnimatedSection>
					</div>
				</section>
			</div>
		</>
	);
};

export default Home;