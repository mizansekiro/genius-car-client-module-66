import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import LoginLayout from "../../Layout/LoginLayout";
import SignUp from "../../Pages/SignUP/SignUp";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import CheckOut from "../../Pages/CheckOut/CheckOut";

import AddNewService from "../../Pages/AddNewService/AddNewService";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},

			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "chackout",
				element: <CheckOut></CheckOut>,
			},
			{
				path: "addNewService",
				element: <AddNewService></AddNewService>,
			},
		],
	},
	{
		path: "/",
		element: <LoginLayout></LoginLayout>,
		children: [
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "signup",
				element: <SignUp></SignUp>,
			},
			{
				path: "*",
				element: <ErrorPage></ErrorPage>,
			},
		],
	},
	{
		path: "*",
		element: <ErrorPage></ErrorPage>,
	},
]);

export default router;
