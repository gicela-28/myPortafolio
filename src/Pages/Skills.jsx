import Masonry from "../Animations/Masonry";
import "../Pages/Css/Skills.css";

const Skills = () => {
	const getOptimized = (idCloudinary) => `https://res.cloudinary.com/db5ipg1so/image/upload/f_auto,q_auto,w_500/${idCloudinary}`;

	const items = [
		{ id: "1", img: getOptimized("/v1770846056/WhatsApp_Image_2026-02-11_at_4.39.09_PM_npvpdb.jpg"), height: 595 },
		{ id: "2", img: getOptimized("/v1770846056/WhatsApp_Image_2026-02-11_at_4.34.08_PM_njevvs.jpg"), height: 360 },
		{ id: "3", img: getOptimized("/v1770846056/WhatsApp_Image_2026-02-11_at_4.39.46_PM_hnsmfu.jpg"), height: 495 },
		{ id: "4", img: getOptimized("/v1770846056/WhatsApp_Image_2026-02-11_at_4.33.48_PM_n8suus.jpg"), height: 400 },
		{ id: "5", img: getOptimized("/v1770846056/doctor_xtm3l4.jpg"), height: 595 },
		{ id: "6", img: getOptimized("/v1770846056/blanco_jvj9vz.jpg"), height: 200 },
		{ id: "7", img: getOptimized("/v1770846056/WhatsApp_Image_2026-03-03_at_6.05.46_PM_fifoik.jpg"), height: 595 },
		{ id: "8", img: getOptimized("/v1770846056/nieve_k5ujpd.jpg"), height: 350 },
		{ id: "9", img: getOptimized("/v1770846056/WhatsApp_Image_2026-02-11_at_4.39.46_PM_hnsmfu.jpg"), height: 590 },
		{ id: "10", img: getOptimized("/v1770846056/WhatsApp_Image_2026-02-11_at_4.33.48_PM_n8suus.jpg"), height: 250 },
		{ id: "11", img: getOptimized("/v1770846056/nieve_k5ujpd.jpg"), height: 590 },
		{ id: "12", img: getOptimized("/v1770846056/blanco_jvj9vz.jpg"), height: 300 },
		// ... agrega el resto igual
	];

	// const items = [
	// 	{
	// 		id: "1",
	// 		img: "../public/img/nieve.jpeg",
	// 		// url: "https://example.com/one",
	// 		height: 380,
	// 	},
	// 	{
	// 		id: "2",
	// 		img: "../public/img/blanco.jpeg",

	// 		height: 220,
	// 	},
	// 	{
	// 		id: "3",
	// 		img: "../public/img/bebe.jpeg",

	// 		height: 410,
	// 	},

	// 	{
	// 		id: "4",
	// 		img: "../public/img/nieve.jpeg",
	// 		height: 250,
	// 	},
	// 	{
	// 		id: "5",
	// 		img: "../public/img/doctor.jpeg",
	// 		height: 400,
	// 	},
	// 	{
	// 		id: "6",
	// 		img: "../public/img/doctor.jpeg",
	// 		height: 410,
	// 	},
	// 	{
	// 		id: "7",
	// 		img: "../public/img/nieve.jpeg",
	// 		height: 250,
	// 	},
	// 	{
	// 		id: "8",
	// 		img: "../public/img/bebe.jpeg",
	// 		height: 400,
	// 	},
	// 	{
	// 		id: "9",
	// 		img: "../public/img/bebe.jpeg",
	// 		height: 410,
	// 	},
	// 	{
	// 		id: "10",
	// 		img: "../public/img/bebe.jpeg",

	// 		height: 350,
	// 	},
	// 	{
	// 		id: "11",
	// 		img: "../public/img/nieve.jpeg",

	// 		height: 300,
	// 	},
	// 	{
	// 		id: "12",
	// 		img: "../public/img/nieve.jpeg",

	// 		height: 200,
	// 	},
	// ];

	return (
		<div className="flex flex-col items-center gap-8">
			<div className="z-10 text-center">
				<h2 className="text-2xl text-white"> MI STACK DE HABILIDADES</h2>
			</div>
			<div className="relative z-10 grid w-full grid-cols-1 gap-6 p-6 text-white md:grid-cols-3" id="content-grid">
				<section className="card-content rounded-xl bg-[#cd708a9c] p-7 shadow-xl/30">
					<h1 className="rounded-xl text-center shadow-xl/30">Creatividad y Diseño</h1>
					<ul className="card mt-5">
						<li>Composición Visual: Aplicación de reglas de dibujo (proporción, equilibrio y perspectiva) al diseño de interfaces.</li>
						<li>Atención al Detalle: Capacidad de pulir interfaces con la misma precisión con la que realizo un sombreado a lápiz.</li>
						<li>Ideación y Wireframing: Bocetado rápido de soluciones creativas antes de llevarlas a la pantalla.</li>
					</ul>
					<div className="divisor-content absolute opacity-100 brightness-100"></div>
				</section>

				<section className="card-content rounded-xl bg-[#cd708a9c] p-7 shadow-xl/30">
					<h1 className="rounded-xl text-center text-lg shadow-xl/30">Desarrollo Técnico </h1>
					<ul className="card mt-5">
						<li>Frontend Core: HTML5, CSS3 (Layouts, Animaciones, Flexbox/Grid).</li>
						<li>Interactividad: JavaScript (ES6+) para dar vida a los diseños.</li>
						<li>Frameworks: React, Vue o Angular.</li>
						<li>Control de Versiones: Git y GitHub para mantener un historial impecable.</li>
					</ul>
				</section>
				<section className="card-content rounded-xl bg-[#cd708a9c] p-7 shadow-xl/30">
					<h1 className="rounded-xl text-center text-lg shadow-xl/30">Soft Skills </h1>
					<ul className="card mt-5">
						<li>Resolución Creativa de Problemas: Enfoque artístico para encontrar soluciones lógicas fuera de lo común.</li>
						<li>Comunicación Visual: Capacidad de explicar conceptos técnicos a través de esquemas y prototipos.</li>
						<li>Aprendizaje Continuo: Disciplina y práctica diaria (la misma que requiere dominar el dibujo).</li>
					</ul>
				</section>
			</div>
			<div className=" min-h-screen w-full" style={{ position: " relative" }}>
				<h2 className="mb-4 text-center text-2xl text-white/30 italic">Galería de trazos a mano</h2>
				<Masonry
					items={items}
					loading="lazy"
					ease="power3.out"
					duration={0.6}
					stagger={0.05}
					animateFrom="bottom"
					scaleOnHover
					hoverScale={0.95}
					blurToFocus
					colorShiftOnHover={false}
				/>
			</div>
		</div>
	);
};
export default Skills;
