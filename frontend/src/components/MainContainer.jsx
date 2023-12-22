import React from "react";

export default function MainContainer({ children }) {
	return (
		<main className="flex justify-center w-full font-extralight">
			<div className="w-full max-w-5xl">{children}</div>
		</main>
	);
}
