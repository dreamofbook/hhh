import React from 'react';
import './logoStyle.css'
import {Link} from "react-router";

const Logo = () => {
	return (
		<Link className={'logo'} to={'/'}>
			APM.
		</Link>
	);
};

export default Logo;