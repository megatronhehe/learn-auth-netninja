import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../context/AuthContext/AuthContext";
import TodosContext from "../context/TodosContext/TodosContext";

export default function Navbar() {
	const { user, logout } = useContext(AuthContext);
	const { setTodos } = useContext(TodosContext);

	return (
		<nav className="flex items-center justify-between p-6 mb-6 border-b">
			<h1 className="text-xl font-semibold">TodoApp</h1>
			{user?.email}
			<div className="flex gap-6 text-sm">
				{user ? (
					<>
						<Link to=".">My Todos</Link>
						<button
							onClick={() => {
								logout();
								setTodos([]);
							}}
						>
							Log out
						</button>
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
