import Navbar from "./Navbar";
// import "../App.css";
import "../Components/Css/Header.css";
// import FondoN from "/img/Documento.png";

const URL_CLOUDINARY_BASE = "https://res.cloudinary.com/db5ipg1so/image/upload/v1771372751/Documento_rbecrj.png";

const getOptimizedUrl = (url) => {
	if (!url) return "";
	// Insertamos f_auto (formato) y q_auto (calidad) para que cargue instantáneo
	return url.replace("/upload/", "/upload/f_auto,q_auto,w_1920,dpr_auto/");
};
const Header = () => {
	const imagenOptimizada = getOptimizedUrl(URL_CLOUDINARY_BASE);

	return (
		<header className="flex flex-col items-center justify-center" id="header-container">
			<img src={imagenOptimizada} alt="Decoración curva" className="inset-0 z-0 h-full w-full object-cover opacity-100 brightness-100" id="mimg" loading="lazy" />
			{/* <img src={FondoN} className="absolute inset-0 z-0 h-full w-full object-cover opacity-100 brightness-100" id="header-img" />a */}
			<Navbar />

			<section className="absolute top-42 z-10" id="section-content">
				<div className="mx-auto flex flex-col space-y-7 text-center text-white">
					<h1 className="mb-2 text-5xl font-bold drop-shadow-lg">Bienvenidos a mi Portafolio</h1>
					<h3 className="text-xl drop-shadow-md">Aquí está toda mi Información</h3>
				</div>
			</section>
		</header>
	);
};
export default Header;
