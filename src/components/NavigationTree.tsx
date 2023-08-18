import { CustomRouteObject } from "../configure";
import { Link, useLocation } from "react-router-dom";
import { ClearMultiplePathSlashes } from "../utils/RoutingTableUtils";
import { v4 as uuidv4 } from "uuid";

/**
 * @returns Navigation tree elements, require to be used in \<ul className="menu bg-base-200 w-56 h-full"\>
 */
function NavigationTree(props: {
	routes: CustomRouteObject[];
}): React.JSX.Element {
	const locationHook = useLocation();

	const GenerateNavigationEntries = (
		routes: CustomRouteObject[],
		parentPath?: string,
	): any => {
		return (
			routes.map((route, index) => {
				// Prepare path for links
				let combinedPath = undefined;
				if (parentPath !== undefined && route.path !== undefined)
					combinedPath = ClearMultiplePathSlashes(`/${parentPath}/${route.path}`);
				else combinedPath = route.path;
				// Does it have children and enabled? Make entry with `/{parent.path}/{route.path}`
				if (route.children && !route.additionalProps.disableInNavbar) {
					return (
						<ul key={uuidv4()}>
							<li key={uuidv4()}>
								<Link
									to={combinedPath || "/"}
									className={locationHook.pathname === combinedPath ? "active" : ""}
								>
									{route.additionalProps.name}
								</Link>
								{route.children ? (
									<ul>{GenerateNavigationEntries(route.children, combinedPath)}</ul>
								) : null}
							</li>
						</ul>
					);
				}
				// Does it have children and not visible? Skip this entry and call this function for children passing path.
				else if (route.children && route.additionalProps.disableInNavbar) {
					return GenerateNavigationEntries(route.children, combinedPath);
				}
				// Make
				else {
					return (
						<li key={uuidv4()}>
							<Link
								to={combinedPath || "/"}
								className={locationHook.pathname === combinedPath ? "active" : ""}
							>
								{route.additionalProps.name}
							</Link>
						</li>
					);
				}
			}) || <>empty navigation tree</>
		);
	};

	return <>{GenerateNavigationEntries(props.routes)}</>;
}

export default NavigationTree;
