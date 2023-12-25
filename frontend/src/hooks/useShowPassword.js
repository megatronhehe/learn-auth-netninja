import { useState } from "react";

export function useShowPassword() {
	const [isShow, setIsShow] = useState(false);

	function toggleShowPassword(e) {
		e.preventDefault();
		setIsShow((prev) => !prev);
	}

	return { isShow, toggleShowPassword };
}
