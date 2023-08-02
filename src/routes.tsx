import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "./features/App/App";
import Redirect from "./utils/Redirect.tsx";
import { navigation } from "./configure.tsx";

const loader = () => <span className="loading loading-ring loading-lg"></span>;

// It generates navigation buttons for the navbar
export const routes: RouteObject[] = [
	{
		path: "/",
		element: <App />,
		loader: loader,
		children: navigation
			.filter((route) => !route.disableRedirect)
			.map(
				(route): RouteObject => ({
					path: route.path,
					element: route.component,
					id: route.name,
				}),
			),
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
