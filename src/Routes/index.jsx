import { createBrowserRouter } from "react-router";
import LayoutPublic from "../Layout/LayoutPublic";
import NotFount from "../Layout/NotFount";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Skills from "../Pages/Skills";
import Experience from "../Pages/Experience";
import About from "../Pages/About";

export const Router = createBrowserRouter([{
	path: "/",
	element: <LayoutPublic />,
	errorElement: <NotFount />,
	children: [
		{
			index: true,
			element: <Home />
		},
		{
			path: "about",
			element: <About />
		},
		{
			path: "contact",
			element: <Contact />
		},
		{
			path: "skills",
			element: <Skills />
		},
		{
			path: "experience",
			element: <Experience />
		}

	]
}]) 