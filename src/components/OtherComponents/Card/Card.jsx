import React from 'react';
import './card.css'

const Card = ({image, title, body, ...props}) => {
	return (
		<div className={'card'}>
			<div className={'card-content'}>
				<div className={'card-image'}><img src={image} alt={''}/></div>
				<div className={'card-header text'}>{title}</div>
				<div className={'card-body text'}>{body}</div>
			</div>
		</div>
	);
};

export default Card;