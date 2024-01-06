import React, { useContext } from "react";

import AuthContext from "../../context/AuthContext/AuthContext";

import TodosContext from "../../context/TodosContext/TodosContext";

import { Navigate } from "react-router-dom";

export default function Todos() {
	const { user } = useContext(AuthContext);

	if (!user) {
		return <Navigate to="/login" />;
	}

	const { test } = useContext(TodosContext);

	console.log(test);

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
		</div>
	);
}
