import React, { useState } from "react";

import AuthContext from "./AuthContext";

export default function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);

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
