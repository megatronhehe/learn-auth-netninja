import React, { useState } from "react";

export default function LoginForm() {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	}

	return (
		<form className="flex flex-col gap-4 mt-4 text-sm">
			<label htmlFor="email">Email</label>
			<input
				id="email"
				type="email"
				name="email"
				onChange={handleChange}
				value={form.email}
				placeholder="john@doe.com"
				className="px-4 py-2 border outline-none rounded-xl"
			/>
			<label>Password</label>
			<input
				id="password"
				type="password"
				name="password"
				onChange={handleChange}
				value={form.password}
				placeholder="your password here"
				className="px-4 py-2 border outline-none rounded-xl"
			/>
			<button className="py-2 font-normal text-white bg-green-400 rounded-xl">
				Submit
			</button>
		</form>
	);
}
