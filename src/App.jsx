import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/Routes/Routes";

import "./App.css";

function App() {
	return (
		<div>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
