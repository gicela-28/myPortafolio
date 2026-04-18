import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import "../Layout/css/Layout.css";
import { Toaster } from 'sonner';


const LayoutPublic = () => {
	// const imagenOptimizada = getOptimizedUrl(URL_CLOUDINARY_BASE);
	return (
		<div className="min-h-screen flex flex-col bg-linear-to-b from-[#16223d] via-[#16223d] to-[#cd708a]">
			<Header />

			<main className="grow relative flex justify-center items-center ">
				<div className="relative z-10 mx-auto max-w-7xl px-3 pb-3">
					<Outlet />
				</div>
			</main>

			<footer className="bg-[#16223d] text-white py-3 w-full fixed bottom-0 left-0 z-50">
				<div className="container mx-auto px-3 text-center">
					<p className="text-xs">© 2024 Mi Portafolio. Todos los derechos reservados.</p>
				</div>
			</footer>
		</div>
	);
};
export default LayoutPublic;
