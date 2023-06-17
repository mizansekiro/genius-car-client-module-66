import React, { useContext, useState } from "react";
import loginImage from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import googleLogo from "../../assets/icons/google.svg";
import { AuthContext } from "../../Context/AuthProvider";

const SignUp = () => {
	const { createUser, updateUserProfile, googleSignUpSignIn } =
		useContext(AuthContext);
	const [error, setError] = useState("");
	console.log(error);
	const handleSignUp = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				if (user.uid) {
					event.target.reset();
					setError("");
					handleProfileUpdate(name); //call update profile
				}
			})
			.catch((err) => setError(err.code));
	};

	// handleProfileUpdate
	const handleProfileUpdate = (name) => {
		const updateUser = {
			displayName: name,
		};
		console.log(updateUser);
		updateUserProfile(updateUser)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((err) => {
				setError(err.code);
			});
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
						<h1 className="text-4xl text-center font-semibold">Sign Up</h1>
						<form onSubmit={handleSignUp}>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="text"
									placeholder="Your Name"
									className="input input-bordered"
									name="name"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									placeholder="Your email"
									className="input input-bordered"
									name="email"
									required
								/>
							</div>
							<div className="form-control ">
								<label className="label">
									<span className="label-text">Confirm Password</span>
								</label>
								<input
									type="text"
									placeholder="Confirm password"
									className="input input-bordered"
									name="password"
									required
								/>
								<label className="label">
									<span className="label-text text-[#FF3811] ">{error}</span>
								</label>
							</div>
							<div className="form-control">
								<input
									className="btn bg-[#FF3811] text-white hover:bg-[#FF3811]"
									type="submit"
									value="Sign Up"
								/>
							</div>
						</form>
						<div className="text-center text-[#444444] ">
							<div className="mb-3">
								<div className="divider">OR</div>
							</div>
							<div className="mb-2">
								<button
									onClick={handleGoogleSignUpSignIn}
									className="btn btn-outline border-[#FF3811] hover:bg-white  hover:text-[#FF3811] hover:border-accent"
								>
									<img src={googleLogo} alt="" width={30} />
									<p>Sign in with Google</p>
								</button>
							</div>
							<div>
								<p>
									Already have an account?
									<Link to="/login">
										<span className="text-[#FF3811]"> Login</span>
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

export default SignUp;
