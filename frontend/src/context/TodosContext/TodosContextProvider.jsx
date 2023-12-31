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

	async function deleteTodo(token, id) {
		try {
			const response = await fetch(`http://localhost:4000/api/todos/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				method: "DELETE",
			});

			const json = await response.json();

			if (!response.ok) {
				throw new Error("something went wrong");
			}

			setTodos((prev) => prev.filter((todo) => todo._id !== id));
		} catch (error) {
			return alert(error.message);
		}
	}

	async function createTodo(token, input) {
		try {
			const response = await fetch(`http://localhost:4000/api/todos/`, {
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(input),
				method: "POST",
			});

			const json = await response.json();

			if (!response.ok) {
				throw new Error("something went wrong");
			}

			setTodos((prev) => [...prev, json]);
		} catch (error) {
			return alert(error.message);
		}
	}

	return (
		<TodosContext.Provider
			value={{ todos, setTodos, fetchTodos, deleteTodo, createTodo }}
		>
			{children}
		</TodosContext.Provider>
	);
}
