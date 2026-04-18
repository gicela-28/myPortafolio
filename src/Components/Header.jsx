import Navbar from "./Navbar";
import "../Components/Css/Header.css";

// URLs de imágenes en Cloudinary
const URL_CLOUDINARY_DESKTOP = "https://res.cloudinary.com/db5ipg1so/image/upload/v1776480065/HeaderNcopia_jkbqoa.png";
// URL para móvil - DEBES REEMPLAZAR ESTA CON TU IMAGEN MÓVIL OPTIMIZADA
const URL_CLOUDINARY_MOBILE = "https://res.cloudinary.com/db5ipg1so/image/upload/q_auto/f_auto/v1775767062/FondoPeq_pjsmam.png";

// Función para generar URLs optimizadas según el ancho
const getOptimizedUrl = (url, baseWidth, dpr = 1) => {
	const width = baseWidth * dpr;
	return url.replace(
		"/upload/",
		`/upload/f_auto,q_auto,w_${width},dpr_${dpr},c_scale/`
	);
};

const Header = () => {
	// URLs optimizadas para diferentes resoluciones
	const imageSources = {
		// Mobile: hasta 768px - usar imagen móvil específica
		mobile: getOptimizedUrl(URL_CLOUDINARY_MOBILE, 768, 1),
		// Tablet y desktop: 769px+ - usar imagen desktop
		desktop: getOptimizedUrl(URL_CLOUDINARY_DESKTOP, 1920, 1)
	};

	return (
		<header className="header-container fixed top-0 left-0 right-0 z-50 w-ful h-72 ">
			<Navbar />

			{/* Imagen responsive con imagen móvil específica */}
			<div className="imagen-header absolute inset-0 z-0 w-full h-full opacity-100">
				<picture>
					{/* Mobile: hasta 768px - usa imagen móvil optimizada */}
					<source
						media="(max-width: 768px)"
						srcSet={imageSources.mobile}
					/>

					{/* Desktop y Tablet: 769px+ - usa imagen desktop */}
					<img
						src={imageSources.desktop}
						alt="Decoración curva header portafolio"
						className="w-full h-full object-cover"
						loading="eager"
						style={{
							objectPosition: 'center top',
							minHeight: '100%',
							width: '100%',
							height: '100%'
						}}
					/>
				</picture>
			</div>

			<section className="absolute inset-0 z-10 flex w-full items-center justify-center px-2 py-2 md:py-4 mt-1">
				<div className="tittle-sha mx-auto flex flex-col items-center space-y-4 md:space-y-7 text-center text-white">
					<h2 className="mb-2 text-lg sm:text-xl md:text-3xl lg:text-3xl font-bold drop-shadow-lg">
						Bienvenidos a mi Portafolio
					</h2>

				</div>
			</section>
		</header>
	);
};

export default Header;
