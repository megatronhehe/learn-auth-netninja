import React, { useState } from "react";

import AuthContext from "./AuthContext";

export default function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);

	return (
		<AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
	);
}
