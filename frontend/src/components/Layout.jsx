import React from "react";
import MainContainer from "./MainContainer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<MainContainer>
			<Navbar />
			<Outlet />
		</MainContainer>
	);
}
