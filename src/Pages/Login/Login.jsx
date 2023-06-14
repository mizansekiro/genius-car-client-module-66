import React, { useContext, useState } from "react";
import loginImage from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
	const { logInUser, googleSignUpSignIn } = useContext(AuthContext);
	const [error, setError] = useState("");

	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		logInUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				if (user.uid) {
					event.target.reset();
				}
			})
			.catch((err) => setError(err.code));
	};

	const handleGoogleSignUpSignIn = () => {
		googleSignUpSignIn()
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((err) => setError(err.code));
	};
	return (
		<div className="hero w-full">
			<div className="hero-content p-0 gap-40 flex-col lg:flex-row">
				<div className="text-center lg:text-left">
					<img className="" src={loginImage} alt="" />
				</div>
				<div className="card flex-shrink-0 w-3/4 max-w-sm shadow-2xl bg-base-100 border">
					<div className="card-body ">
						<h1 className="text-4xl text-center font-semibold">Login</h1>
						<form onSubmit={handleLogin}>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="text"
									placeholder="Your email"
									className="input input-bordered"
									name="email"
									required
								/>
							</div>
							<div className="form-control ">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									placeholder="Your password"
									className="input input-bordered"
									name="password"
									required
								/>
								<label className="label">
									<Link className="label-text-alt link link-hover">
										Forgot password?
									</Link>
								</label>
								<label className="label">
									<span className="label-text text-[#FF3811] ">{error}</span>
								</label>
							</div>
							<div className="form-control">
								<input
									className="btn bg-[#FF3811] text-white hover:bg-[#FF3811]"
									type="submit"
									value="Login"
								/>
							</div>
						</form>
						<div className="text-center text-[#444444] ">
							<div className="mb-4">
								<p>Or Sign In With</p>
							</div>
							<div className="grid grid-flow-col gap-4 justify-center items-center my-2">
								<Link className="btn btn-circle text-2xl hover:bg-[#FF3811] hover:text-white">
									<FaFacebookF />
								</Link>
								<Link className="btn btn-circle text-2xl hover:bg-[#FF3811] hover:text-white">
									<FaLinkedinIn />
								</Link>
								<button
									onClick={handleGoogleSignUpSignIn}
									className="btn btn-circle text-2xl hover:bg-[#FF3811] hover:text-white"
								>
									<FaGoogle />
								</button>
							</div>
							<div>
								<p>
									Don't Have an account?
									<Link to="/signup">
										<span className="text-[#FF3811]"> Sign Up</span>
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
