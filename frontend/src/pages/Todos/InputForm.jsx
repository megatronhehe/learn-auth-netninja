import React, { useContext, useState } from "react";
import TodosContext from "../../context/TodosContext/TodosContext";
import AuthContext from "../../context/AuthContext/AuthContext";

export default function InputForm() {
	const [input, setInput] = useState({
		title: "",
		isDone: false,
	});

	const { createTodo } = useContext(TodosContext);
	const { user } = useContext(AuthContext);

	function handleInput(e) {
		setInput((prev) => ({ ...prev, title: e.target.value }));
	}

	return (
		<form className="flex gap-3 p-3 border rounded-xl">
			<input
				required
				onChange={handleInput}
				value={input.title}
				placeholder="Workout, Code, Work, ..."
				className="w-full px-3 py-1 border outline-none"
				type="text"
			/>

			<button
				onClick={(e) => {
					e.preventDefault();
					createTodo(user.token, input);
				}}
				className="w-12 text-white duration-200 bg-green-300 border border-green-300 rounded-xl hover:rounded-none hover:bg-white hover:text-green-300 aspect-square "
			>
				+
			</button>
		</form>
	);
}
