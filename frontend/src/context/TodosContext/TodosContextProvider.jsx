import React, { useState } from "react";

import TodosContext from "./TodosContext";

export default function TodosContextProvider({ children }) {
	const [todos, setTodos] = useState([]);

	async function fetchTodos(token) {
		try {
			const response = await fetch("http://localhost:4000/api/todos", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const json = await response.json();

			if (!response.ok) {
				throw new Error("something went wrong");
			}

			setTodos(json);
		} catch (error) {
			return alert(error.message);
		}
	}

	return (
		<TodosContext.Provider value={{ todos, setTodos, fetchTodos }}>
			{children}
		</TodosContext.Provider>
	);
}
