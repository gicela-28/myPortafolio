import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import "../Css/Layout.css";
import miImagen from "/img/1800.png";
import ScrollVelocityCompnents from "../Pages/ScrollVelocityComponents.jsx";

const LayoutPublic = () => {
	return (
		<div className="min-h-screen bg-linear-to-b from-[#16223d] via-[#16223d] to-[#cd708a]">
			<div className="top-0 left-0 z-0 row-start-1 h-full w-full brightness-75">
				<Header />

				<ScrollVelocityCompnents texts={[""]} className="bg-transparent" />
			</div>

			<main className="grid-rows mx-auto grid min-h-[90vh] w-full max-w-10/12 justify-center gap-4 px-4 py-8">
				<div className="pointer-events-none absolute top-140 left-0 z-0 row-start-2 h-auto w-full opacity-60 brightness-75">
					<img src={miImagen} alt="" className="h-auto w-full object-cover" id="mimg" />
				</div>
				<Outlet />
			</main>

			<footer className="row-span-3 mt-4 grid h-20 grid-rows-subgrid items-center justify-center gap-4 bg-[#16223d] text-white">
				<p>© 2024 Mi Portafolio. Todos los derechos reservados.</p>
			</footer>
		</div>
	);
};
export default LayoutPublic;
