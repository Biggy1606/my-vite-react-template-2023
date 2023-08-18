/**
 * This file is used to configure react-router-dom.
 * Do not change anything here, unless you know what you are doing.
 * Every path and route is configured in `configure.tsx` file.
 */

import { createBrowserRouter, RouteObject } from "react-router-dom";
import Redirect from "./utils/Redirect.tsx";
import { CustomRouteObject, navigation } from "./configure.tsx";

/**
 * This function is used to convert `CustomRouteObject` to `RouteObject` and process all additionalProps
 */
const createRoutingFromCustomRouteObject = (
	routes: CustomRouteObject[],
): RouteObject[] => {
	const result: RouteObject[] = []; //Final routes that will be used for navigation
	routes.forEach((route) => {
		// Extract everything except additionalProps and children
		const { additionalProps, children, ...routeNative } = route;
		//Filter routes that are disabled for navigation
		//! WARNING: It will cut off all children routes as well
		if (additionalProps.disableRedirect) {
			return;
		}
		//Add route to navigationRoutes, array that will be returned
		if (children === undefined || children.length === 0) {
			result.push({
				...routeNative,
			});
		} else {
			result.push({
				path: route.path,
				element: route.element,
				children: createRoutingFromCustomRouteObject(children),
			});
		}
	});
	//In case of empty routes, add a default route with message
	if (result.length === 0) {
		result.push({
			path: "/",
			element: <div>Empty routes</div>,
		});
	}
	//Always add redirect unmached route to root at the end
	return result;
};

// It is main variable that handle all navigation rules and paths
export const routes: RouteObject[] = [
	...createRoutingFromCustomRouteObject(navigation),
	{
		path: "*",
		element: <Redirect to="/" />,
	},
];

// It is variable that have routes for react-router-dom, final form
export const router = createBrowserRouter(routes, {
	basename: "/",
	future: {
		// Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
		v7_normalizeFormMethod: true,
	},
});

export default router;
