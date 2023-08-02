import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { setupAxiosInterceptors } from "./api/AxiosService";
import "./main.css";
import router from "./routes";

setupAxiosInterceptors();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		{/* fallbackElement - use when routing table is quite big to load, it will display desired element in convention of loading screen */}
		<RouterProvider
			router={router}
			fallbackElement={<p>Loading route table...</p>}
		/>
	</React.StrictMode>,
);
