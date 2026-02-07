import Navbar from "./Navbar";
// import "../App.css";
import "../Components/Css/Header.css";
import FondoN from "/img/Documento.png";

const Header = () => {
	return (
		<header className="flex flex-col items-center justify-center" id="header-container">
			<img  src={FondoN} className="absolute inset-0 z-0 h-full w-full object-cover opacity-100 brightness-100" id="header-img" />
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
