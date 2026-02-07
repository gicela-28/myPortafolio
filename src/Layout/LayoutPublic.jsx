import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import "../App";
import miImagen from "/img/1800.png";
import ScrollVelocityCompnents from "../Pages/ScrollVelocityComponents.jsx";

const LayoutPublic = () => {
	return (
		<div className="flex min-h-screen flex-col bg-linear-to-b from-[#16223d] via-[#16223d] to-[#cd708a]">
			<Header />
			<ScrollVelocityCompnents texts={[""]} className="bg-transparent" />

			<main className="mx-auto flex min-h-[90vh] w-full max-w-10/12 justify-center">
				<div className="pointer-events-none absolute top-150 left-0 z-0 h-auto w-full opacity-60 brightness-75">
					<img src={miImagen} alt="" className="h-auto w-full object-cover" id="mimg" />
				</div>
				<div className="w-full">
					<Outlet />
				</div>
			</main>

			<footer className="mt-4 flex h-20 items-center justify-center bg-[#16223d] text-white">
				<p>© 2024 Mi Portafolio. Todos los derechos reservados.</p>
			</footer>
		</div>
	);
};
export default LayoutPublic;
