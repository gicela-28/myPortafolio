import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import "../Layout/css/Layout.css";

import ScrollVelocityCompnents from "../Pages/ScrollVelocityComponents.jsx";

const URL_CLOUDINARY_BASE = "https://res.cloudinary.com/db5ipg1so/image/upload/v1771373589/1800_c1wfr8.png";

const getOptimizedUrl = (url) => {
	if (!url) return "";
	// Insertamos f_auto (formato) y q_auto (calidad) para que cargue instantáneo
	// Convertimos a WebP para mejor rendimiento
	return url.replace("/upload/", "/upload/f_auto,q_auto,w_1920,dpr_auto,format_webp/");
};

const LayoutPublic = () => {
	const imagenOptimizada = getOptimizedUrl(URL_CLOUDINARY_BASE);
	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-b from-[#16223d] via-[#16223d] to-[#cd708a]">
			<Header />

			<main className="flex-grow relative pb-20">
				<div className="pointer-events-none absolute top-0 left-0 z-0 h-auto w-full opacity-60">
					<img src={imagenOptimizada} alt="" className="h-auto w-full object-cover" id="mimg" />
				</div>
				<div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-8">
					<Outlet />
				</div>
			</main>

			<footer className="bg-[#16223d] text-white py-6 w-full fixed bottom-0 left-0 z-50">
				<div className="container mx-auto px-4 text-center">
					<p>© 2024 Mi Portafolio. Todos los derechos reservados.</p>
				</div>
			</footer>
		</div>
	);
};
export default LayoutPublic;
