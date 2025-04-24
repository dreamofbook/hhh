import React from 'react';
import profileDefault from '../../../assets/image/profile_default.svg'
import './profileButton.css'
import {Link} from "react-router";

const ToProfileButton = () => {
	return (
		<Link to={'/profile'}>
			<button className="ToProfileButton">
				<img className={'button-profile-img-default'} src={profileDefault} alt={'profile'}/>
			</button>
		</Link>
	);
};

export default ToProfileButton;