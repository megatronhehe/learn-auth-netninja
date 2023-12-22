import React from "react";
import LoginForm from "./LoginForm";

export default function Login() {
	return (
		<section className="flex justify-center rounded-xl">
			<div className="w-full max-w-lg p-6 border shadow-md rounded-xl">
				<h1 className="text-center">Login</h1>
				<LoginForm />
			</div>
		</section>
	);
}
