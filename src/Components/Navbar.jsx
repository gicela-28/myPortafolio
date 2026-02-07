import { NavLink } from "react-router";
import "../App.css";
import ScrollVelocityCompnents from "../Pages/ScrollVelocityComponents";

const Navbar = () => {
	return (
		<header className="fixed top-0 right-0 left-0 z-60 w-full">
			<nav className="bg-linear-to-r from-[#232942bd] to-[#cd708ac8] shadow-lg">
				<div className="container mx-auto px-54">
					<div className="flex flex-col items-center justify-between py-3 md:flex-row">
						{/* Logo */}
						<div className=" flex items-center md:mb-0" id="logo">
							<NavLink to="/" className="flex items-center">
								<img src="/img/LOGO.png" alt="Logo" className="absolute mt-9 h-22 w-auto" />
								{/* <span className="ml-2 hidden text-xl font-bold text-white sm:inline-block">Mi Portfolio</span> */}
							</NavLink>
						</div>

						{/* Navigation Links */}
						<div className="flex flex-wrap justify-center gap-2 md:gap-4">
							<NavLink
								to="/about"
								className="rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[#cd708b] md:text-base"
								activeClassName="bg-[#cd708b]"
							>
								Sobre Mí
							</NavLink>

							<NavLink
								to="/skills"
								className="rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[#cd708b] md:text-base"
								activeClassName="bg-[#cd708b]"
							>
								Habilidades
							</NavLink>

							<NavLink
								to="/experience"
								className="rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[#cd708b] md:text-base"
								activeClassName="bg-[#cd708b]"
							>
								Experiencia
							</NavLink>

							<NavLink
								to="/contact"
								className="rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[#cd708b] md:text-base"
								activeClassName="bg-[#cd708b]"
							>
								Contacto
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
