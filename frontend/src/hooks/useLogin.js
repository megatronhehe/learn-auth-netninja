import { useContext, useState } from "react";

import AuthContext from "../context/AuthContext/AuthContext";

export function useLogin() {
	const { setUser } = useContext(AuthContext);

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	async function login(email, password) {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch("http://localhost:4000/api/user/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			const json = await response.json();

			if (!response.ok) {
				throw new Error(json.error);
			}

			localStorage.setItem("todoUser", JSON.stringify(json));
			setUser(json);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}

	return { login, loading, error };
}
