import { HamburgerMenuIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { themes } from "../../../daisyui.config.js";
import { main, navigation } from "../../configure.tsx";
import NavigationTree from "../../components/NavigationTree.tsx";
/** Here is located global wrapper for entire application, here you canfind:
 * - Drawer - contains navigation buttons
 * - Navbar - contains hamburger menu and theme selector
 * - Outlet - contains active page content
 * - App theme controll
 */
function App() {
	const [theme, setTheme] = useState<string>("adient");
	const [openDrawer, setOpenDrawer] = useState<boolean>(false);

	useEffect(() => {
		document.querySelector("html")?.setAttribute("data-theme", theme);
		// To resolve this issue, you can use the import.meta.env object instead of process.env. The import.meta.env object is provided by Vite.js and allows you to access environment variables in your code.
		document.title = import.meta.env.VITE_APP_NAME;
	}, [theme, openDrawer]);

	// Always open/close drawer
	const handleDrawerStatus = () => {
		setOpenDrawer(!openDrawer);
	};
	const handleDrawerStatusForNavigationButton = () => {
		//Check if window is 1024px or bigger
		if (window.innerWidth <= 1024) {
			handleDrawerStatus();
		}
	};
	const handleThemeChange = (theme: string) => {
		setTheme(theme);
		console.log("Theme changed to " + theme, "info", 10);
	};

	return (
		<div>
			{/* Root drawer container */}
			<div className={"drawer " + (openDrawer ? "lg:drawer-open" : "")}>
				{/* A hidden checkbox to toggle the visibility of the drawer */}
				<input
					id="my-drawer"
					type="checkbox"
					placeholder="drawer-checkbox"
					className="drawer-toggle"
					checked={openDrawer}
					onChange={handleDrawerStatus}
				/>
				{/* The actual drawer content */}
				<div className="drawer-content">
					{/* Navbar */}
					<div className="navbar bg-neutral text-neutral-content">
						{/* Left side navbar */}
						<div className="flex-1">
							<label
								htmlFor="my-drawer"
								className="btn btn-circle btn-neutral drawer-button"
							>
								<HamburgerMenuIcon className="w-6 h-6" />
							</label>
							<Link to="/" className="text-lg font-bold ml-8">
								{main.program_name}
							</Link>
						</div>
						{/* Right side navbar */}
						<div className="flex-none gap-2">
							<div className="dropdown dropdown-bottom dropdown-end">
								<button tabIndex={0} className="btn btn-circle m-1">
									<SunIcon className="w-6 h-6" />
								</button>
								<ul
									tabIndex={0}
									className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-fit mt-4 max-h-24 sm:max-h-96  flex flex-col items-center flex-nowrap overflow-y-auto"
								>
									{themes.map((theme) => (
										<li key={theme}>
											<a className="prose" onClick={() => handleThemeChange(theme)}>
												{theme}
											</a>
										</li>
									))}
								</ul>
							</div>
							<button className="btn m-1">Log out</button>
						</div>
					</div>
					{/* App/active_drawer content */}
					<div className="max-w text-sm breadcrumbs pl-6 shadow">
						<ul>
							{/*Automatically generated breadcrumbs based on routing table from configuration file and active path*/}
							{/*Get active route and find it in routing file*/}
							TODO: make breadcrumbs
						</ul>
					</div>
					<Outlet />
				</div>
				{/* Drawer sidebar wrapper */}
				<div className="drawer-side">
					<label htmlFor="my-drawer" className="drawer-overlay"></label>
					<ul className="menu bg-base-200 w-56 h-full">
						<NavigationTree routes={navigation} />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
