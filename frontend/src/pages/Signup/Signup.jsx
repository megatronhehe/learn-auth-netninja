import React from "react";
import SignupForm from "./SignupForm";

export default function Signup() {
	return (
		<section className="flex justify-center rounded-xl">
			<div className="w-full max-w-lg p-6 border shadow-md rounded-xl">
				<h1 className="text-center">Signup</h1>
				<SignupForm />
			</div>
		</section>
	);
}
