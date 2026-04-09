// import "../App.css";

import "../Pages/Css/About.css";



const About = () => {
	return (
		<div className="flex flex-col items-center min-h-screen py-12">
			<div className="z-10 flex w-full max-w-5xl flex-col gap-8 text-white">
				{/* <AnimatedSection delay="0.1s"> */}
					<section className="fade-in-card rounded-xl bg-[#cd708a9c] shadow-2xl backdrop-blur-md transition-all hover:scale-105 p-8">
						<div className="flex items-start gap-6">
							<div className="flex-shrink-0">
								<div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center text-2xl font-bold">
									GL
								</div>
							</div>
							<div className="flex-1">
								<h2 className="text-2xl font-bold mb-4 text-pink-200">¿Quién soy?</h2>
								<p className="text-lg leading-relaxed">
									Soy Gicela Lozano, desarrolladora Frontend con 1 año de experiencia especializada en crear interfaces interactivas y funcionales.
									Mi enfoque principal es desarrollar experiencias de usuario fluidas y accesibles utilizando React, JavaScript moderno y CSS avanzado.
								</p>
							</div>
						</div>
					</section>
				{/* </AnimatedSection> */}

				{/* <AnimatedSection delay="0.2s"> */}
					<section className="fade-in-card rounded-xl border border-white/10 bg-[#cd708a9c] p-8 shadow-2xl backdrop-blur-md transition-all hover:scale-105">
						<h2 className="text-2xl font-bold mb-6 text-pink-200">Mi Especialidad</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="space-y-3">
								<h3 className="text-lg font-semibold text-pink-100">Frontend Core</h3>
								<ul className="space-y-2 text-gray-200">
									<li>• HTML5, CSS3 (Flexbox, Grid, Animaciones)</li>
									<li>• JavaScript (ES6+, Async/Await, Módulos)</li>
									<li>• React (Hooks, Context, Router)</li>
									<li>• Tailwind CSS (Diseño responsivo)</li>
								</ul>
							</div>
							<div className="space-y-3">
								<h3 className="text-lg font-semibold text-pink-100">Herramientas</h3>
								<ul className="space-y-2 text-gray-200">
									<li>• Git & GitHub (Control de versiones)</li>
									<li>• Vite (Build tool)</li>
									<li>• Figma (Diseño y prototipado)</li>
									<li>• VS Code (IDE principal)</li>
								</ul>
							</div>
						</div>
					</section>
				{/* </AnimatedSection> */}

				{/* <AnimatedSection delay="0.3s"> */}
					<section className="fade-in-card rounded-xl border border-white/10 bg-[#cd708a9c] p-8 shadow-2xl backdrop-blur-md transition-all hover:scale-105">
						<h2 className="text-2xl font-bold mb-6 text-pink-200">Mi Filosofía</h2>
						<div className="space-y-4 text-gray-200">
							<p>
								<strong>Código limpio y mantenible:</strong> Escribo código que otros desarrolladores puedan entender fácilmente.
							</p>
							<p>
								<strong>Aprendizaje continuo:</strong> Me mantengo actualizada con las últimas tendencias y mejores prácticas.
							</p>
							<p>
								<strong>Enfoque en el usuario:</strong> Siempre pienso en la experiencia final del usuario al escribir cada línea de código.
							</p>
						</div>
					</section>
				{/* </AnimatedSection> */}
			</div>
		</div>
	);
};
export default About;
