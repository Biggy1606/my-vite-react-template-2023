import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "./features/App/App";
import HomePage from "./features/Home/HomePage";
import AboutPage from "./features/About/AboutPage";
import Redirect from "./utils/Redirect.tsx";

const loader = () => <span className="loading loading-ring loading-lg"></span>;

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <App />,
		loader: loader,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/about",
				element: <AboutPage />,
			},
		],
	},
	/* Every unmached route are redirected to '/' */
	{
		path: "*",
		element: <Redirect to="/" />,
	},
];

export const router = createBrowserRouter(routes, {
	basename: "/",
	future: {
		// Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
		v7_normalizeFormMethod: true,
	},
});

export default router;
