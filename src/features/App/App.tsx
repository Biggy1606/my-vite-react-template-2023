import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { themes } from "../../../daisyui.config.js";
import NotificationStack from "../../components/Notification/NotificationStack.js";
import { useNotification } from "../../components/Notification/useNotification.js";
function App() {
	const [theme, setTheme] = useState<string>("dark");
	const [openDrawer, setOpenDrawer] = useState<boolean>(false);
	const { addNotification } = useNotification();

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
		addNotification("Theme changed to " + theme, "info", 10);
	};

	return (
		<div>
			{/* Root drawer container */}
			<div className={"drawer " + (openDrawer ? "lg:drawer-open" : "")}>
				{/* A hidden checkbox to toggle the visibility of the drawer */}
				<input
					id="my-drawer"
					type="checkbox"
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
								<HamburgerMenuIcon />
							</label>
						</div>
						{/* Right side navbar */}
						<div className="flex-none gap-2">
							<div className="dropdown dropdown-bottom dropdown-end">
								<label tabIndex={0} className="btn m-1">
									Theme
								</label>
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
						</div>
					</div>
					{/* App/active_drawer content */}
					<Outlet />
				</div>
				{/* Drawer sidebar wrapper */}
				<div className="drawer-side">
					<label htmlFor="my-drawer" className="drawer-overlay"></label>
					<ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
						{/* Drawer sidebar content here */}
						<li>
							<Link to="/" onClick={handleDrawerStatusForNavigationButton}>
								Home
							</Link>
						</li>
						<li>
							<Link to="/login" onClick={handleDrawerStatusForNavigationButton}>
								Login
							</Link>
						</li>
						<li>
							<Link to="/products" onClick={handleDrawerStatusForNavigationButton}>
								Products
							</Link>
						</li>
						<li>
							<Link to="/transactions" onClick={handleDrawerStatusForNavigationButton}>
								Transactions
							</Link>
						</li>
						<li>
							<Link to="/about" onClick={handleDrawerStatusForNavigationButton}>
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<NotificationStack />
		</div>
	);
}

export default App;
