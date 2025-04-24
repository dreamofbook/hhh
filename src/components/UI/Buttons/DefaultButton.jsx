import React from 'react';
import {Link} from "react-router";
import './defButton.css'

const DefaultButton = ({children, path, ...props}) => {
	return (
		<Link to={path}>
			<button className="default-button">{children}</button>
		</Link>
	);
};

export default DefaultButton;