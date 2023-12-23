import React, { useState } from "react";

export default function SignupForm() {
	const [form, setForm] = useState({
		email: "",
		password: "",
		confirm_password: "",
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
			<label htmlFor="password">Password</label>
			<input
				id="password"
				type="password"
				name="password"
				onChange={handleChange}
				value={form.password}
				placeholder="your password here"
				className="px-4 py-2 border outline-none rounded-xl focus:border-gray-400"
			/>
			<label htmlFor="confirm_password">Confirm Password</label>
			<input
				id="confirm_password"
				type="password"
				name="confirm_password"
				onChange={handleChange}
				value={form.confirm_password}
				placeholder="repeat your password here"
				className="px-4 py-2 border outline-none rounded-xl"
			/>

			<button
				onClick={(e) => {
					e.preventDefault();
				}}
				className={`py-2 font-normal text-white  rounded-xl bg-green-400`}
			>
				Submit
			</button>
		</form>
	);
}
