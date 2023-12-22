import React, { useState } from "react";

import AuthContext from "./AuthContext";

export default function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);

	console.log(user);

	const test = "authcontext test";

	return (
		<AuthContext.Provider value={{ test, setUser }}>
			{children}
		</AuthContext.Provider>
	);
}
