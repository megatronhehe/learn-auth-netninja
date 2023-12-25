import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useShowPassword } from "../../hooks/useShowPassword";

import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

export default function LoginForm() {
	const { login, loading, error } = useLogin();
	const { isShow, toggleShowPassword } = useShowPassword();

	const [form, setForm] = useState({
		email: "satya@gmail.com",
		password: "Abc123*asdasdasd",
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

			<div className="flex items-center justify-between">
				<label htmlFor="password">Password</label>
				<button
					onClick={toggleShowPassword}
					className="flex items-center gap-2 text-gray-400"
				>
					<span className="text-xs">{isShow ? "hide" : "show"} password</span>
					{isShow ? <RiEyeLine /> : <RiEyeCloseLine />}
				</button>
			</div>
			<input
				id="password"
				type={`${isShow ? "text" : "password"}`}
				name="password"
				onChange={handleChange}
				value={form.password}
				placeholder="your password here"
				className="px-4 py-2 border outline-none rounded-xl"
			/>
			{error && (
				<h2 className="px-4 py-2 text-center text-red-400 border border-red-400 rounded-xl">
					{error}
				</h2>
			)}
			<button
				onClick={(e) => {
					e.preventDefault();
					login(form.email, form.password);
				}}
				disabled={loading}
				className={`py-2 font-normal text-white  rounded-xl ${
					loading ? "bg-gray-300" : "bg-green-400"
				}`}
			>
				Submit
			</button>
		</form>
	);
}
