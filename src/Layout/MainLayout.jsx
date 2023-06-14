import React from "react";
import Header from "../Pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const MainLayout = () => {
	return (
		<div>
			<div className="max-w-screen-xl mx-auto">
				<Header></Header>
				<Outlet></Outlet>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default MainLayout;
