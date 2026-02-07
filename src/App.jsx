import React from "react";
import { Router } from "./Routes/index";
import Header from "./Components/Header";


export const App = () => {
	return (
		<>
			<div className="App">
				<div className="">
					<Header />
				</div>
				<div>
					<Router />
				</div>

				
			</div>
		</>
	);
};
