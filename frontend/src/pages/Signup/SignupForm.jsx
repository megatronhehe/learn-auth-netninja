import React, { useState } from "react";

import { useSignup } from "../../hooks/useSignup";
import { useShowPassword } from "../../hooks/useShowPassword";

import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

export default function SignupForm() {
	const { signup, loading, error } = useSignup();
	const { isShow, toggleShowPassword } = useShowPassword();

	const [form, setForm] = useState({
		email: "",
		password: "",
		confirm_password: "",
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	}

	const errorElement = error && error.split(",").map((msg) => <li>{msg}</li>);

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
				type={isShow ? "text" : "password"}
				name="password"
				onChange={handleChange}
				value={form.password}
				placeholder="your password here"
				className="px-4 py-2 border outline-none rounded-xl focus:border-gray-400"
			/>
			<label htmlFor="confirm_password">Confirm Password</label>
			<input
				id="confirm_password"
				type={isShow ? "text" : "password"}
				name="confirm_password"
				onChange={handleChange}
				value={form.confirm_password}
				placeholder="repeat your password here"
				className="px-4 py-2 border outline-none rounded-xl"
			/>
			{error && (
				<ul className="px-4 py-2 text-red-400 border border-red-400 rounded-xl">
					{errorElement}
				</ul>
			)}
			<button
				onClick={(e) => {
					e.preventDefault();
					signup(form.email, form.password);
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
