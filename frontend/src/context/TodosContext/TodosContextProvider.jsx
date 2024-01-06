import React from "react";

import TodosContext from "./TodosContext";

export default function TodosContextProvider({ children }) {
	const test = "this is todos context";

	return (
		<TodosContext.Provider value={{ test }}>{children}</TodosContext.Provider>
	);
}
