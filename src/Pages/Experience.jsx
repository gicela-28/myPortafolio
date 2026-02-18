import SplitText from "../Animations/SplitText.jsx";
import "../Pages/Css/About.css";

const handleAnimationComplete = () => {
	console.log("Letter animation completed!");
};

const Experience = () => {
	return (
		<div className="min-h-full p-4 text-center">
			<SplitText
				text="Aqui podemos ver la experiencia!"
				className="mb-7 flex text-center text-2xl font-semibold text-white"
				delay={100}
				duration={0.8}
				ease="power3.out"
				splitType="chars"
				from={{ opacity: 0, y: 40 }}
				to={{ opacity: 1, y: 0 }}
				threshold={0.1}
				rootMargin="-100px"
				textAlign="center"
				onLetterAnimationComplete={handleAnimationComplete}
			/>

			<div className="max-w-7xl mx-auto flex flex-col justify-center gap-10 text-white">
				<div className="rounded-xl border border-white/10 bg-[#cd708a9c] p-3 text-white shadow-2xl backdrop-blur-md transition-transform hover:scale-105">
					<h1 className="bg-white/10 py-4 text-center font-bold text-2xl">Experiencia Laboral</h1>
					<div className="grid divide-x-2 divide-white/20 md:grid-cols-2 justify-center text-right">
						<div className="flex flex-col justify-center gap-25 p-6 text-2xl w-3xm  " id="divEx">
							<p>2022 - 2023: GRUPO ENERGIA DE BOGOTA:<br/> Aprendiz.</p>
							<p>2023 - 2025: E realizado diferentes proyectos de <br/> front-end con Angular, react, css, tailwindcss, mongo </p>
							<p>2025 - Present: Desarrollo de Ecosistema Digital Personal y Galería de Arte.</p>
						</div>

						<div className="flex flex-col justify-center gap-6 p-3">
							<div className="text-left">
								<ul>
									<li>- Análisis de vulnerabilidades: Identificación y evaluación de riesgos en sistemas y redes.</li>
									<li>- Implementación de medidas de seguridad: sistemas de detección de intrusiones y políticas de acceso.</li>
									<li>- Reportes Técnicos: "Elaboración de informes de remediación dirigidos a los equipos de infraestructura </li>
								</ul>
							</div>
							<div className="text-left">
								<ul>
									<li>- Desarrollo Front-end: Creación de interfaces de usuario interactivas y responsivas utilizando Angular.</li>
									<li>- Integración con Backend: Conexión de aplicaciones front-end con servicios backend desarrollados en Node.js y MongoDB.</li>
									<li>- CRUD Completo: donde permiten Crear, Leer, Actualizar y Borrar datos.</li>
								</ul>
							</div>
							<div className="text-left">
								<ul>
									<li>- Proyecto Personal: Desarrollo de un ecosistema digital personal para la exhibición y venta de obras artísticas.</li>
									<li>- Tecnologías Utilizadas: React para el front-end, Tailwind CSS para el diseño responsivo y MongoDB para la gestión de datos.</li>
									<li>- Diseño Adaptativo: "Uso avanzado de Tailwind CSS para garantizar una experiencia fluida en dispositivos móviles y escritorio" </li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="rounded-xl border border-white/10 bg-[#cd708a9c] p-7 text-white shadow-2xl backdrop-blur-md transition-transform hover:scale-105">
					<h1 className="bg-white/10 py-4 text-center font-bold text-2xl">Educación</h1>
					<div className="divide-x-2 divide-white/20">
						<div className="top-3 flex flex-col justify-center gap-13 p-4 text-2xl" id="divEx">
							<p>2001 AIPE/HUILA - Escuela primaria V. Pata v. el pata – Aipe/Huila </p>
							<p>2012 AIPE/HUILA - Colegio secundario Jesus Maria Aguirre Charri </p>
							<p>2021 CHIA/CUNDINAMARCA - ANALISIS Y DESARROLLO DE SISTEMAS DE INDORMACION - SENA</p>
						</div>
						{/* <div className="flex flex-col justify-center gap-28 p-6">
							<ul>
								<li>- Educación Primaria: Escuela primaria V. Pata v. el pata – Aipe/Huila (2001)</li>
								<li>- Educación Secundaria: Colegio secundario Jesus Maria Aguirre Charri – Aipe/Huila (2012)</li>
								<li>- Formación Técnica: Análisis y Desarrollo de Sistemas de Información en el SENA, Chia/Cundinamarca (2021)</li>
							</ul>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Experience;
