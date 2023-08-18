import { RouteObject } from "react-router-dom";
import AboutPage from "./features/About/AboutPage";
import App from "./features/App/App";
import HomePage from "./features/Home/HomePage";
import LoginPage from "./features/Login/LoginPage";

//Custom Route Object for handling custom behaviours on app navigation
export interface RouteObjectAdditionalProps {
	name: string;
	disableRedirect: boolean;
	disableInNavbar: boolean;
	disableInBreadcrumbs: boolean;
}

export interface CustomRouteObject extends Omit<RouteObject, "children"> {
	additionalProps: RouteObjectAdditionalProps;
	children?: CustomRouteObject[];
}
//----
//Main configuration, static data, mostly used here
export const main = {
	program_name: import.meta.env.VITE_APP_NAME,
	program_version: "1.0.0",
};
//About page configuration
export const about = {
	program_description: `This is a ${main.program_name} for <purpose>.`,
	program_authors: [{ name: "Author Name", email: "email@example.com" }],
};
const loader = () => <span className="loading loading-ring loading-lg"></span>;
// Based on https://reactrouter.com/en/main/start/overview#nested-routes with additional props
export const navigation = [
	{
		path: "/",
		element: <App />,
		additionalProps: {
			name: "Root",
			disableRedirect: false, //if true will not be included in the react-router redirect list, will cut out childs
			disableInNavbar: true, //if true entry will not be rendered in the navbar
			disableInBreadcrumbs: true, //if true entry will not be rendered in the breadcrumbs
		},
		children: [
			{
				path: "/",
				element: <HomePage />,
				additionalProps: {
					name: "Home",
					disableRedirect: false,
					disableInNavbar: false,
					disableInBreadcrumbs: false,
				},
			},
			{
				path: "about",
				element: <AboutPage />,
				additionalProps: {
					name: "About",
					disableRedirect: false,
					disableInNavbar: false,
					disableInBreadcrumbs: false,
				},
				children: [
					{
						path: "child",
						element: <div>CHILD</div>,
						additionalProps: {
							name: "About Child",
							disableRedirect: false,
							disableInNavbar: false,
							disableInBreadcrumbs: false,
						},
					},
				],
			},
			{
				path: "login",
				element: <LoginPage />,
				additionalProps: {
					name: "Login",
					disableRedirect: false,
					disableInNavbar: false,
					disableInBreadcrumbs: false,
				},
			},
		],
	},
];
