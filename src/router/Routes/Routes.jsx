import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import LoginLayout from "../../Layout/LoginLayout";
import SignUp from "../../Pages/SignUP/SignUp";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import CheckOut from "../../Pages/CheckOut/CheckOut";

import AddNewService from "../../Pages/AddNewService/AddNewService";
import Orders from "../../Pages/Orders/Orders";
import Carts from "../../Pages/Cart/Carts";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () => fetch(`http://localhost:5000/services`),
			},
			{
				path: "checkout",
				element: <CheckOut></CheckOut>,
			},
			{
				path: "checkout/:id",
				element: (
					<PrivateRoute>
						<CheckOut></CheckOut>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/services/${params.id}`),
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
				path: "orders",
				element: (
					<PrivateRoute>
						<Orders></Orders>
					</PrivateRoute>
				),
			},
			{
				path: "carts",
				element: <Carts></Carts>,
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
