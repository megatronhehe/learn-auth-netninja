import React, { useContext } from "react";

import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate, redirect } from "react-router-dom";

export default function Todos() {
	const { user } = useContext(AuthContext);

	if (!user) {
		return <Navigate to="/login" />;
	}

	return <div>ur authenticated</div>;
}
