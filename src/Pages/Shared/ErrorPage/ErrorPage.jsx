import React from "react";
import errorImage from "../../../assets/images/notFound/404.png";

const ErrorPage = () => {
	return (
		<div className="flex justify-center items-center min-h-[500px] ">
			<img className="w-1/2" src={errorImage} alt="" />
		</div>
	);
};

export default ErrorPage;
