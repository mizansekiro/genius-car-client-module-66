import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../Context/AuthProvider";
import { FaUserSecret } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

const Header = () => {
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

	const menuItem = (
		<>
			<li className="font-semibold">
				<Link to="/">Home</Link>
			</li>

			{user?.uid ? (
				<>
					<li className="font-semibold">
						<Link to="/carts">Carts</Link>
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

					<li className="font-semibold">
						<button onClick={handleLogout} to="/login">
							Logout
						</button>
					</li>
				</>
			) : (
				<>
					<li className="font-semibold">
						<Link to="/">About</Link>
					</li>
					<li className="font-semibold">
						<Link to="/">Services</Link>
					</li>
					<li className="font-semibold">
						<Link to="/">Blog</Link>
					</li>
					<li className="font-semibold">
						<Link to="/">Contact</Link>
					</li>
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
				<button tabIndex={0} className="btn btn-ghost btn-circle">
					<div className="indicator">
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
								d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</div>
				</button>
				<button className="btn btn-ghost btn-circle">
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
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
				<div>
					<Link to="/" className="btn mx-3">
						Appointment
					</Link>
				</div>

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
								<li className="font-semibold"></li>
								<li>
									<Link to="/addNewService">Add new Service</Link>
								</li>
								<li>
									<Link onClick={handleLogout} to="/login">
										Logout
									</Link>
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

export default Header;
