import Masonry from "../Animations/Masonry";

const Skills = () => {
	const items = [
		{
			id: "1",
			img: "../public/img/nieve.jpeg",
			// url: "https://example.com/one",
			height: 380,
		},
		{
			id: "2",
			img: "../public/img/blanco.jpeg",

			height: 220,
		},
		{
			id: "3",
			img: "../public/img/bebe.jpeg",

			height: 410,
		},

		{
			id: "4",
			img: "../public/img/nieve.jpeg",
			height: 250,
		},
		{
			id: "5",
			img: "../public/img/doctor.jpeg",
			height: 400,
		},
		{
			id: "6",
			img: "../public/img/doctor.jpeg",
			height: 410,
		},
		{
			id: "7",
			img: "../public/img/nieve.jpeg",
			height: 250,
		},
		{
			id: "8",
			img: "../public/img/bebe.jpeg",
			height: 400,
		},
		{
			id: "9",
			img: "../public/img/bebe.jpeg",
			height: 410,
		},
		{
			id: "10",
			img: "../public/img/bebe.jpeg",

			height: 350,
		},
		{
			id: "11",
			img: "../public/img/nieve.jpeg",

			height: 300,
		},
		{
			id: "12",
			img: "../public/img/nieve.jpeg",

			height: 200,
		},
	];
	return (
		<div className="flex min-h-screen flex-col items-center p-6">
			<div className="z-10 mt-2 mb-2 text-center">
				<h1 className="text-2xl text-white"> MI STACK DE HABILIDADES</h1>
			</div>
			<div className="relative z-10 grid w-full grid-cols-1 gap-6 p-6 text-white md:grid-cols-3">
				<section className="card-content bg-[#cd708a9c] p-7 shadow-xl/30">
					<h1 className="text-center text-lg shadow-xl/30">Creatividad y Diseño</h1>
					<ul className="mt-5">
						<li>Composición Visual: Aplicación de reglas de dibujo (proporción, equilibrio y perspectiva) al diseño de interfaces.</li>
						<li>Atención al Detalle: Capacidad de pulir interfaces con la misma precisión con la que realizo un sombreado a lápiz.</li>
						<li>Ideación y Wireframing: Bocetado rápido de soluciones creativas antes de llevarlas a la pantalla.</li>
					</ul>
					<div className="divisor-content absolute opacity-100 brightness-100"></div>
				</section>

				<section className="content bg-[#cd708a9c] p-7 shadow-xl/30">
					<h1 className="text-center text-lg shadow-xl/30">Desarrollo Técnico </h1>
					<ul className="mt-5">
						<li>Frontend Core: HTML5, CSS3 (Layouts, Animaciones, Flexbox/Grid).</li>
						<li>Interactividad: JavaScript (ES6+) para dar vida a los diseños.</li>
						<li>Frameworks: React, Vue o Angular.</li>
						<li>Control de Versiones: Git y GitHub para mantener un historial impecable.</li>
					</ul>
				</section>
				<section className="content bg-[#cd708a9c] p-7 shadow-xl/30">
					<h1 className="text-center text-lg shadow-xl/30">Soft Skills </h1>
					<ul className="mt-5">
						<li>Resolución Creativa de Problemas: Enfoque artístico para encontrar soluciones lógicas fuera de lo común.</li>
						<li>Comunicación Visual: Capacidad de explicar conceptos técnicos a través de esquemas y prototipos.</li>
						<li>Aprendizaje Continuo: Disciplina y práctica diaria (la misma que requiere dominar el dibujo).</li>
					</ul>
				</section>
			</div>
			<div className="mt-5 mb-15 w-full" style={{ height: "460px", position: "relative" }}>
				<h2 className="mb-4 text-center text-white/30 italic">Galería de trazos a mano</h2>
				<Masonry items={items} ease="power3.out" duration={0.6} stagger={0.05} animateFrom="bottom" scaleOnHover hoverScale={0.95} blurToFocus colorShiftOnHover={false} />
			</div>
		</div>
	);
};
export default Skills;
