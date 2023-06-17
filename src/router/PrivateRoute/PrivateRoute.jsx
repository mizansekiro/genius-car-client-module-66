import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
	}

	return children;
};

export default PrivateRoute;
