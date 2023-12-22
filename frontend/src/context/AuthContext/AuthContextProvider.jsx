import React, { useEffect, useState } from "react";

import AuthContext from "./AuthContext";

export default function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const tokenExists = JSON.parse(localStorage.getItem("todoUser"));

		if (tokenExists) {
			setUser(tokenExists);
		}
	}, []);

	function logout() {
		localStorage.removeItem("todoUser");
		setUser(null);
	}

	return (
		<AuthContext.Provider value={{ user, setUser, logout }}>
			{children}
		</AuthContext.Provider>
	);
}
