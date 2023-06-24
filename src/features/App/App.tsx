import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link, Outlet } from "react-router-dom";
function App() {
	return (
		<>
			{/* Root drawer container */}
			<div className="drawer lg:drawer-open">
				{/* A hidden checkbox to toggle the visibility of the drawer */}
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
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
							<div className="form-control">
								<input
									type="text"
									placeholder="Search"
									className="input max-auto input-bordered"
								/>
							</div>
							{/* User account avatar and doropdown */}
							<div className="dropdown dropdown-end">
								<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
									<div className="w-10 rounded-full">
										<img src="icon.png" />
									</div>
								</label>
								<ul
									tabIndex={0}
									className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
								>
									<li>
										<a className="justify-between">
											Profile
											<span className="badge">New</span>
										</a>
									</li>
									<li>
										<a>Settings</a>
									</li>
									<li>
										<a>Logout</a>
									</li>
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
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
