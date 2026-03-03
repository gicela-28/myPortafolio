import { NavLink } from "react-router-dom"; // Asegúrate de que sea react-router-dom
import "../Components/Css/Navbar.css";

const Navbar = () => {
	return (
		<header className="sticky top-0 z-50 w-full shadow-lg" >
			<nav className="bg-linear-to-r from-[#232942bd] to-[#cd708ac8] backdrop-blur-md" id="nav-content">
				<div className="container mx-auto px-4 md:px-10">
					<div className="flex flex-col items-center justify-between py-2 md:flex-row" id="nav-container">
						<div className="mb-2 flex items-center md:mb-0" id="logo">
							<NavLink to="/" className="logo flex items-center">
								<img src="/img/LOGO.png" alt="Logo" className="h-12 w-auto transition-all duration-300 md:h-16" />
							</NavLink>
						</div>

						<div className="flex flex-wrap justify-center gap-3 md:gap-6">
							{["about", "skills", "experience", "contact"].map((path) => (
								<NavLink
									key={path}
									to={`/${path}`}
									className={({ isActive }) =>
										`rounded-md px-3 py-2 text-sm font-medium text-white transition-all hover:bg-[#cd708b] md:text-base ${
											isActive ? "bg-[#cd708b] shadow-md" : ""
										}`
									}
								>
									{path === "about" ? "Sobre Mí" : path === "skills" ? "Habilidades" : path === "experience" ? "Experiencia" : "Contacto"}
								</NavLink>
							))}
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
