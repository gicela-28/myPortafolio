import { NavLink } from "react-router-dom"; // Asegúrate de que sea react-router-dom
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../Components/Css/Navbar.css";

const URL_CLOUDINARY_BASE = "https://res.cloudinary.com/db5ipg1so/image/upload/v1771373563/LOGO_zwramf.png";


const getOptimizedUrl = (url) => {
	if (!url) return "";

	return url.replace("/upload/", "/upload/f_auto,q_auto,w_500,dpr_auto/");
};

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const imagenOptimizada = getOptimizedUrl(URL_CLOUDINARY_BASE);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className="sticky z-50 w-full shadow-lg">
			<nav className="bg-linear-to-r from-[#232942bd] to-[#cd708ac8] backdrop-blur-md" id="nav-content">
				<div className="container mx-auto md:px-10 max-w-5xl">
					<div className="flex items-center justify-between h-10 px-4" id="nav-container">
						<div className="flex items-center" id="logo">
							<NavLink to="/" className="logo flex items-center relative" onClick={closeMenu}>
								<img src={imagenOptimizada} alt="Logo" className="h-7 w-auto transition-all duration-300 md:h-10" />
							</NavLink>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex flex-wrap gap-3">
							{["about", "skills", "experience", "contact"].map((path) => (
								<NavLink
									key={path}
									to={`/${path}`}
									onClick={closeMenu}
									className={({ isActive }) =>
										`rounded-md px-3 py-2 text-sm font-medium text-white transition-all hover:bg-[#cd708b] ${isActive ? "bg-[#cd708b] shadow-md" : ""
										}`
									}
								>
									{path === "about" ? "Sobre Mí" : path === "skills" ? "Habilidades" : path === "experience" ? "Experiencia" : "Contacto"}
								</NavLink>
							))}
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={toggleMenu}
							className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
							aria-label="Toggle menu"
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>

					{/* Mobile Navigation */}
					<div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
						<div className="px-4 py-2 space-y-1">
							{["about", "skills", "experience", "contact"].map((path) => (
								<NavLink
									key={path}
									to={`/${path}`}
									onClick={closeMenu}
									className={({ isActive }) =>
										`block rounded-md px-3 py-2 text-sm font-medium text-white transition-all hover:bg-[#cd708b] ${isActive ? "bg-[#cd708b] shadow-md" : ""
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
