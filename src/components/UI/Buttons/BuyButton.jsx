import React from 'react';
import {Link} from "react-router";
import './buyButton.css'

const BuyButton = ({children}) => {
	return (
		<Link to={`/buy`}>
			<button className={'buyButton'}>
				{children}
			</button>
		</Link>
	);
};

export default BuyButton;