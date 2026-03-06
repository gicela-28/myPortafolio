import Navbar from "./Navbar";

import "../Components/Css/Header.css";

const URL_CLOUDINARY_BASE = "https://res.cloudinary.com/db5ipg1so/image/upload/v1771372751/Documento_rbecrj.png";
const URL_PEQUENA = "https://res.cloudinary.com/db5ipg1so/image/upload/v1772660371/header_peque%C3%B1o_tcjtug.png";

const getOptimizedUrl = (url, width) => {
	if (!url) return "";

	return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width},dpr_auto/`);
};
const Header = () => {
	const imagenOptimizada = getOptimizedUrl(URL_CLOUDINARY_BASE, 1700);
	const imagenMovilOptimizada = getOptimizedUrl(URL_PEQUENA, 700);

	return (
		<header className="header-container fixed items-center justify-center">
			<Navbar />
			<div className="imagen-header absolute top-0 left-0 z-0 w-full  opacity-100 brightness-100">
				<picture className="h-full w-full">
					{/* MÓVIL: Si la pantalla es menor a 768px */}
					<source media="(max-width: 867px)" srcSet={imagenMovilOptimizada} />

					{/* PC: Por defecto usa la grande */}
					<img
						src={imagenOptimizada}
						alt="Decoración curva"
						className="h-full w-full object-cover"
						loading="lazy"
					/>
				</picture>
				{/* <img src={imagenOptimizada} alt="Decoración curva" className="h-full w-full opacity-100 brightness-100" loading="lazy" /> */}
			</div>
			<section className="-px-4 -py-55 absolute inset-0 z-10 flex w-full items-center justify-center md:py-2">
				<div className="tittle-sha mx-auto flex-col space-y-7 text-center text-white" loading="lazy">
					<h1 className="mb-2 text-5xl font-bold drop-shadow-lg">Bienvenidos a mi Portafolio</h1>
					<h3 className="text-xl drop-shadow-md">Aquí está toda mi Información</h3>
				</div>
			</section>
		</header>
	);
};
export default Header;
