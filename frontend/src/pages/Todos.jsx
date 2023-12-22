import React, { useContext } from "react";

import AuthContext from "../context/AuthContext/AuthContext";

export default function Todos() {
	const { test } = useContext(AuthContext);

	return <div>ur authenticated {test}</div>;
}
