// import "../App.css";
import { useScrollAnimation } from "../Hooks/useScrollAnimation";
import "../Pages/Css/About.css";

const AnimatedSection = ({ children, delay = "0s" }) => {
	const [ref, isVisible] = useScrollAnimation();

	return (
		<section
			ref={ref}
			style={{ animationDelay: delay }}
			className={`rounded-xl border border-white/10 bg-[#cd708a9c] p-7 shadow-2xl backdrop-blur-md transition-all hover:scale-105 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
		>
			{children}
		</section>
	);
};

const About = () => {
	return (
		<div className="flex flex-col items-center">
			<div className="md:flex-cols-1 z-10 mt-8 flex w-full max-w-5xl flex-col gap-9 text-white">
				<AnimatedSection delay="0.1s">
					<section className="fade-in-card rounded-xl border border-white/10 bg-[#cd708a9c] p-7 shadow-2xl backdrop-blur-md transition-all hover:scale-105">
						<div className="">
							<p className="" id="text1">
								Soy Gicela lozano,desarrolladora Frontend con un año de experiencia transformando diseños en interfaces interactivas y funcionales. Mi enfoque
								principal es crear experiencias de usuario fluidas y accesibles utilizando React y CSS moderno. Angular, tailwind, bootstrap entre otros. Apasionada
								por la innovación tecnológica, siempre busco aprender nuevas herramientas y técnicas para mejorar mis habilidades y entregar soluciones siempre
								buscando el equilibrio entre técnica y resultados."
							</p>
						</div>
					</section>
				</AnimatedSection>

				<AnimatedSection delay="0.1s">
					<section className="fade-in-card rounded-xl border border-white/10 bg-[#cd708a9c] p-7 shadow-2xl backdrop-blur-md transition-all hover:scale-105">
						<div className="">
							<p id="text2">
								Durante este último año, me he dedicado a perfeccionar mis bases en JavaScript (ES6+), react, tailwind y a entender profundamente cómo construir
								sitios que no solo se vean bien, sino que carguen rápido. Soy una aprendiz constante y disfruto enfrentándome a retos técnicos que me obliguen a
								salir de mi zona de confort."
							</p>
						</div>
					</section>
				</AnimatedSection>
				<AnimatedSection delay="0.1s">
					<section className="fade-in-card rounded-xl border border-white/10 bg-[#cd708a9c] p-7 shadow-2xl backdrop-blur-md transition-all hover:scale-105">
						<div className="">
							<p id="text3">
								Desarrolladora Frontend apasionada por la intersección entre el diseño y la lógica. Cuento con 1 año de experiencia trabajando con Vue.js, Tailwind
								o TypeScript donde me he especializado en construir componentes reutilizables y código limpio. desarrollo. He colaborado en proyectos enfocados en
								la responsividad y la optimización de rendimiento, siempre con la mente puesta en la experiencia final del usuario."
							</p>
						</div>
					</section>
				</AnimatedSection>
			</div>
		</div>
	);
};
export default About;
