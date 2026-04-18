

import "../Pages/Css/About.css";



const About = () => {
	return (
		<div className="flex flex-col items-center py-10 justify-center">
			<div className="z-10 flex w-full flex-col md:flex-row gap-5 text-white">

				<section className="fade-in-card rounded-xl max-w-[670px] min-w-[250px] flex-1 bg-[#cd708a9c] shadow-2xl backdrop-blur-md transition-all hover:scale-105 p-6">
					<div className="flex items-start gap-4">
						<div className="shrink-0">
							<div className="w-16 h-16 rounded-full bg-linear-to-br from-pink-400 to-purple-600 flex items-center justify-center text-xl font-bold">
								GL
							</div>
						</div>
						<div className="flex-1">
							<h2 className="text-xl font-bold mb-3 text-pink-200">¿Quién soy?</h2>
							<p className="text-base leading-relaxed">
								Soy Gicela Lozano, desarrolladora Frontend con 1 año de experiencia especializada en crear interfaces interactivas y funcionales.
								Mi enfoque principal es desarrollar experiencias de usuario fluidas y accesibles utilizando React, JavaScript moderno y CSS avanzado.
							</p>
						</div>
					</div>
				</section>

				<section className="fade-in-card rounded-xl max-w-[670px] min-w-[250px] flex-1 border border-white/10 bg-[#cd708a9c] p-4 shadow-2xl backdrop-blur-md transition-all hover:scale-105">
					<h2 className="text-xl font-bold mb-4 text-pink-200">Mi Especialidad</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<h3 className="text-base font-semibold text-pink-100">Frontend Core</h3>
							<ul className="space-y-1 text-gray-200 text-sm">
								<li>• HTML5, CSS3 (Flexbox, Grid, Animaciones)</li>
								<li>• JavaScript (ES6+, Async/Await, Módulos)</li>
								<li>• React (Hooks, Context, Router)</li>
								<li>• Tailwind CSS (Diseño responsivo)</li>
							</ul>
						</div>
						<div className="space-y-2">
							<h3 className="text-base font-semibold text-pink-100">Herramientas</h3>
							<ul className="space-y-1 text-gray-200 text-sm">
								<li>• Git & GitHub (Control de versiones)</li>
								<li>• Vite (Build tool)</li>
								<li>• Figma (Diseño y prototipado)</li>
								<li>• VS Code (IDE principal)</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="fade-in-card rounded-xl max-w-[670px] min-w-[250px] flex-1 border border-white/10 bg-[#cd708a9c] p-8 shadow-2xl backdrop-blur-md transition-all hover:scale-105">
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

			</div>
		</div>
	);
};
export default About;
