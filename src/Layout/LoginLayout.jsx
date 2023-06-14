import React from "react";
import Header from "../Pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
	return (
		<div>
			<div className="max-w-screen-xl mx-auto">
				<Header></Header>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default LoginLayout;
