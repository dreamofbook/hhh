import React from 'react';
import "./styles/headerSection.css"
import HoverScript from './scripts/HoverScript.js'
import OutScript from "./scripts/OutScript.js";
import {Link} from "react-router";

const HeaderSection = ({id, className, inNav, active, setActive, path}) => {

	return (
		<Link
			className={className + ' menu'}
			to={path}
			id={id}
			onMouseOver={() => HoverScript(id, className, active, setActive)}
			onMouseOut={() => {
				if (!inNav) {
					let division = document.querySelector(".Minis");
					division.style.scale = 0.8;
					division.style.opacity = 0;
				}
				OutScript(id, className, active, setActive);
			}}
		>
			{className}
		</Link>
	)
};

export default HeaderSection;