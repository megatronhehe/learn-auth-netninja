import React from "react";

import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";

import Todos from "./pages/Todos";
import Layout from "./components/Layout";
import Login from "./pages/Login/Login";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />}>
				<Route index element={<Todos />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<h1>signup</h1>} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;

// const [error, setError] = useState({});
// const [todos, setTodos] = useState([]);

// async function fetchTodos() {
// 	try {
// 		const response = await fetch("http://localhost:4000/api/todos/aaa");
// 		const json = await response.json();

// 		if (!response.ok) {
// 			throw new Error(json.error, { cause: json.emptyFields });
// 		}

// 		setTodos(json);
// 	} catch (error) {
// 		setError(error);
// 	}
// }

// useEffect(() => {
// 	fetchTodos();
// }, []);

// console.log(error.cause);
