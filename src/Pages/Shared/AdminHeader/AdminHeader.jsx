import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../Context/AuthProvider";
import { FaUserSecret } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

const AdminHeader = () => {
	const navigate = useNavigate();
	const { user, logOutUser } = useContext(AuthContext);
	const handleLogout = () => {
		logOutUser()
			.then(() => {
				toast.success("Sign-out successful!");
				navigate("/");
			})
			.catch((error) => {
				// An error happened.
			});
	};
	//Order            Order Review            Manage Inventory            Login
	const menuItem = (
		<>
			<li className="font-semibold">
				<Link to="/">Home</Link>
			</li>
			<li className="font-semibold">
				<Link to="/orders">Orders</Link>
			</li>
			<li className="font-semibold">
				<Link to="/">Order Review</Link>
			</li>
			<li className="font-semibold">
				<Link to="/">Manage Inventory</Link>
			</li>

			{user?.uid ? (
				<li className="font-semibold">
					<button onClick={handleLogout} to="/login">
						Logout
					</button>
				</li>
			) : (
				<>
					<li className="font-semibold">
						<Link to="/login">Login</Link>
					</li>
					<li className="font-semibold">
						<Link to="/signup">Sign Up</Link>
					</li>
				</>
			)}

			<li className="font-semibold">
				<Link to="/logout">{user?.displayName}</Link>
			</li>
		</>
	);
	return (
		<div className="navbar  bg-base-100 mt-4 p-0 ">
			<Toaster />
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						{menuItem}
					</ul>
				</div>
				<Link to="/">
					<img src={logo} alt="" />
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{menuItem}</ul>
			</div>
			<div className="navbar-end">
				{user?.uid ? (
					<>
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								{user?.photoURL ? (
									<div className="w-10 rounded-full">
										<img src={user?.photoURL} />
									</div>
								) : (
									<>
										<div className="rounded-full text-3xl btn btn-ghost btn-circle avatar p-2">
											<FaUserSecret />
										</div>
									</>
								)}
							</label>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li>
									<a className="justify-between">Profile</a>
								</li>
								<li>
									<a>Settings</a>
								</li>
								<li>
									<a>Logout</a>
								</li>
							</ul>
						</div>
					</>
				) : (
					<>
						<div className="rounded-full text-3xl btn btn-ghost btn-circle avatar p-2">
							<FaUserSecret />
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default AdminHeader;
