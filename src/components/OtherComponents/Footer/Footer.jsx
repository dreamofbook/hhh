import React from 'react';
import './footer.css'
import Logo from "../../UI/logo/Logo.jsx";
import arr from './footerData.json'
import {Link} from "react-router";

const Footer = () => {
	return (
		<div className={'footer'}>
			<div className="container">
				<Logo/>
				<div className="mainBox">
					<div className="links">
						{arr.map((item, i) =>
							<Link key={i} to={item.path}>{item.text}</Link>
						)}
					</div>
					<p>© 2025 APM.</p>
				</div>
				<a href={''} className={'go-up'}>Наверх</a>
			</div>
		</div>
	);
};

export default Footer;