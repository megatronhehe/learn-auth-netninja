import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import AuthContextProvider from "./context/AuthContext/AuthContextProvider.jsx";
import TodosContextProvider from "./context/TodosContext/TodosContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthContextProvider>
			<TodosContextProvider>
				<App />
			</TodosContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
