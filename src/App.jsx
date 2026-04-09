import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

// 1. Importamos el Layout (el diseño que se mantiene fijo: Header, Fondo, Footer)
import LayoutPublic from "./Layout/LayoutPublic";

// 2. Importamos las páginas (los componentes que cambian en el centro)
import Home from "./Pages/Home";
import SobreMi from "./Pages/SobreMi";
import Proyectos from "./Pages/Proyectos";
import Contacto from "./Pages/Contacto";

export const App = () => {
	return (

		<HelmetProvider>
			<BrowserRouter>
				<div className="App">
					<Home />
				</div>
			</BrowserRouter>
		</HelmetProvider>
	);
};

export default App;