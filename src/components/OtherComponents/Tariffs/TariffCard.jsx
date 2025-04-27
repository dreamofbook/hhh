import React from 'react';
import BuyButton from "../../UI/Buttons/BuyButton.jsx";

const TariffCard = ({coast, title, scopeArr, description, ...props}) => {
	return (
		<div className={"TariffCard"}>
			<div className="title">{title}</div>
			<div className="coast">{coast}</div>
			<div className="scope">
				<ul>
					{scopeArr.map((item, i) =>
						<li key={i}> • {item}</li>
					)}
				</ul>
			</div>
			<div className="description">{description}</div>
			<BuyButton>Присоединиться</BuyButton>
		</div>
	);
};

export default TariffCard;