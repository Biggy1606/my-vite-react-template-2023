import { CustomRouteObject } from "../configure";

interface FlatternRoutingTableElement {
	path: string;
	name: string;
}
export const ClearMultiplePathSlashes = (inputPath: string): string => {
	return inputPath.replace(/\/{2,}/g, "/");
};
//! WARNING: This function will generate error if paths aren't unique, disableInNavbar or disableRedirect to prevent this. It's a useful feature to prevent duplicate path in navbar
/**
 * @description Convert a existing routing table as a flat array
 */
export const FlatternRoutingTable = (
	routes: CustomRouteObject[],
	previousPath = "undefined",
): FlatternRoutingTableElement[] => {
	const result: FlatternRoutingTableElement[] = [];
	routes.forEach((route: CustomRouteObject) => {
		if (route.additionalProps.disableRedirect) return; // Skip if disable redirect, children are skipped too
		if (
			typeof route.path !== "undefined" &&
			typeof previousPath === "undefined" &&
			!route.additionalProps.disableInNavbar
		) {
			result.push({
				path: route.path,
				name: route.additionalProps.name,
			});
		}
		if (
			typeof route.path !== "undefined" &&
			typeof previousPath !== "undefined" &&
			!route.additionalProps.disableInNavbar
		) {
			result.push({
				path: ClearMultiplePathSlashes(`/${previousPath}/${route.path}`),
				name: route.additionalProps.name,
			});
		}
		if (route.children && typeof previousPath === "undefined") {
			result.push(...FlatternRoutingTable(route.children));
		}
		if (route.children && typeof previousPath !== "undefined") {
			result.push(...FlatternRoutingTable(route.children, route.path));
		}
		// Errors handling
		if (typeof route.path === "undefined")
			console.error(`Route ${route.additionalProps.name} is missing path`);
	});
	return result;
};
