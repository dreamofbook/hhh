import React from 'react';
import Logo from "../../UI/logo/Logo.jsx";
import Navigation from "./Navigation.jsx";
import ToProfileButton from '../../UI/Buttons/ToProfileButton.jsx'
import './styles/HeaderStyles.css'

const Header = () => {
	return (
		<div className="Header container">
			<div className="wallpaper"></div>
			<Logo/>
			<Navigation/>
			<ToProfileButton/>
		</div>
	);
};

export default Header;