import React from "react";
import { HelmetProvider } from 'react-helmet-async';
import { Router } from "./Routes/index";
import Header from "./Components/Header";


export const App = () => {
	return (
		<HelmetProvider>
			<div className="App">
				<div className="">
					<Header />
				</div>
				<div>
					<Router />
				</div>
			</div>
		</HelmetProvider>
	);
};
