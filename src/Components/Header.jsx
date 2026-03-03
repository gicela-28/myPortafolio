import Navbar from "./Navbar";

import "../Components/Css/Header.css";

const URL_CLOUDINARY_BASE = "https://res.cloudinary.com/db5ipg1so/image/upload/v1771372751/Documento_rbecrj.png";

const getOptimizedUrl = (url) => {
	if (!url) return "";
	// Insertamos f_auto (formato) y q_auto (calidad) para que cargue instantáneo
	return url.replace("/upload/", "/upload/f_auto,q_auto,w_1920,dpr_auto/");
};
const Header = () => {
	const imagenOptimizada = getOptimizedUrl(URL_CLOUDINARY_BASE);

	return (
		<header className="items-center fixed justify-center header-container">
			<Navbar />
			<div className="imagen-header w-full h-full absolute top-0 left-0 z-0 opacity-100 brightness-100">
				<img src={imagenOptimizada} alt="Decoración curva" className="w-full h-full opacity-100 brightness-100" loading="lazy" />
			</div>
			<section className="-px-4 -py-55 absolute inset-0 flex items-center z-10 w-full justify-center md:py-2">
				<div className="tittle-sha mx-auto flex-col space-y-7 text-center text-white" loading="lazy">
					<h1 className="mb-2 text-5xl font-bold drop-shadow-lg">Bienvenidos a mi Portafolio</h1>
					<h3 className="text-xl drop-shadow-md">Aquí está toda mi Información</h3>
				</div>
			</section>
		</header>
	);
};
export default Header;
