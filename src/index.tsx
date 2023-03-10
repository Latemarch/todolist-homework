import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Active from "./pages/Active";
import Completed from "./pages/Completed";
import Detail from "./pages/Detail";
import All from "./pages/All";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <All /> },
			{ path: "/all", element: <All /> },
			{ path: "/active", element: <Active /> },
			{ path: "/completed", element: <Completed /> },
			{ path: ":id", element: <Detail /> },
		],
	},
]);
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
