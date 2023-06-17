import React from "react";

import { Outlet } from "react-router-dom";
import AdminHeader from "../Pages/Shared/AdminHeader/AdminHeader";

const LoginLayout = () => {
	return (
		<div>
			<div className="max-w-screen-xl mx-auto">
				<AdminHeader></AdminHeader>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default LoginLayout;
