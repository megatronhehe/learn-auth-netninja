import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between p-6 mb-6 border-b">
			<h1 className="text-xl font-semibold">TodoApp</h1>
			<div className="flex gap-4 text-sm">
				<Link to=".">Todos</Link>
				<Link to="signup">Sign up</Link>
				<Link to="login">Log in</Link>
			</div>
		</nav>
	);
}
