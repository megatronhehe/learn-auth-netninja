import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../context/AuthContext/AuthContext";

export default function Navbar() {
	const { user } = useContext(AuthContext);

	return (
		<nav className="flex items-center justify-between p-6 mb-6 border-b">
			<h1 className="text-xl font-semibold">TodoApp</h1>
			<div className="flex gap-4 text-sm">
				{user ? (
					<>
						<Link to=".">Todos</Link>
						<h2>{user.email}</h2>
					</>
				) : (
					<>
						<Link to="signup">Sign up</Link>
						<Link to="login">Log in</Link>
					</>
				)}
			</div>
		</nav>
	);
}
