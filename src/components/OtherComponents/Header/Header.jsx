import React from 'react';
import Logo from "../../UI/Logo.jsx";
import Navigation from "./Navigation.jsx";

const Header = () => {
	return (
		<div>
			<Logo/>
			<Navigation/>
			<ToProfileButton/>
		</div>
	);
};

export default Header;