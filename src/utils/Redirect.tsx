import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// This component redirects to a given page
function Redirect({ to }: { to: string }) {
	// The navigate function from useNavigate is used to navigate to the given page
	const navigate = useNavigate();
	// useEffect is used to navigate to the given page when the component mounts
	useEffect(() => {
		navigate(to);
	});
	// A null element is returned because the component does not need to render anything
	return null;
}
export default Redirect;
