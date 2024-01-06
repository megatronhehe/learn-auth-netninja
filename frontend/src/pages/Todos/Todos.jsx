import React, { useContext, useEffect } from "react";

import AuthContext from "../../context/AuthContext/AuthContext";

import TodosContext from "../../context/TodosContext/TodosContext";

import { Navigate } from "react-router-dom";

export default function Todos() {
	const { user } = useContext(AuthContext);

	// NOT AUTHENTICATED
	if (!user) {
		return <Navigate to="/login" />;
	}

	// YES AUTHENTICATED
	const { todos, setTodos, fetchTodos, deleteTodo } = useContext(TodosContext);

	useEffect(() => {
		fetchTodos(user.token);
	}, []);

	return (
		<div className="px-8">
			<form className="flex gap-3 p-3 border rounded-xl">
				<input
					required
					placeholder="Workout, Code, Work, ..."
					className="w-full px-3 py-1 border outline-none"
					type="text"
				/>

				<button className="w-12 text-white duration-200 bg-green-300 border border-green-300 rounded-xl hover:rounded-none hover:bg-white hover:text-green-300 aspect-square ">
					+
				</button>
			</form>
			<h1 className="pb-4 my-4 text-xl text-center border-b">Todos</h1>
			<ul className="flex flex-col gap-4">
				{todos.map((todo) => (
					<li
						key={todo._id}
						className="flex items-center justify-between px-3 py-2 border rounded-xl"
					>
						{todo.title}
						<button
							onClick={() => deleteTodo(user.token, todo._id)}
							className="px-3 py-1 text-xs text-white bg-red-300 rounded-md"
						>
							delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
