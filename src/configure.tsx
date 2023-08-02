import AboutPage from "./features/About/AboutPage";
import HomePage from "./features/Home/HomePage";
import LoginPage from "./features/Login/LoginPage";

export const main = {
	program_name: "Program Name",
	program_version: "1.0.0",
};
export const about = {
	program_description: `This is a ${main.program_name} for <prpose>.`,
	program_authors: [{ name: "Author Name", email: "email@example.com" }],
};
export const navigation = [
	{ name: "Home", path: "/", component: <HomePage />, showInNavbar: true, disableRedirect: false},
	{
		name: "About",
		path: "/about",
		component: <AboutPage />,
		showInNavbar: true,
		disableRedirect: false,
	},
	{
		name: "Login",
		path: "/login",
		component: <LoginPage />,
		showInNavbar: false,
		disableRedirect: false,
	},
];
