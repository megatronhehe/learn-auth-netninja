import React, { useContext } from "react";
import LoginForm from "./LoginForm";

import AuthContext from "../../context/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

export default function Login() {
	const { user } = useContext(AuthContext);

	if (user) {
		return <Navigate to="/" />;
	}

	return (
		<section className="flex justify-center rounded-xl">
			<div className="w-full max-w-lg p-6 border shadow-md rounded-xl">
				<h1 className="text-center">Login</h1>
				<LoginForm />
			</div>
		</section>
	);
}
