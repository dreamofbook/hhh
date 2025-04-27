import React from 'react';
import TariffCard from "./TariffCard.jsx";
import Switcher from "../../UI/Switcher/Switcher.jsx";
import './Tariffs.css'
import arr from './data/tariff.json'

const TariffsList = () => {

	const inactive = () => {
		const offText = document.querySelector('.switchOff-text')
		const onText = document.querySelector('.switchOn-text')
		const cards = document.querySelectorAll('.TariffCard')

		offText.style.color = '#ff9ae1';
		onText.style.color = '#ececec';
		console.log('active WEEK');

		cards.forEach((card, index) => {
			card.style.background = '#d3d3d3';
			card.style.color = '#000000';
			card.style.border = 'none';
			card.style.boxShadow = '0 0 10px #ffffff';

			const textArr = arr["WEEKLY"][index];
			const Coast = card.querySelector('.coast');

			Coast.textContent = textArr.coast;
		})
	}

	const active = () => {
		const offText = document.querySelector('.switchOff-text')
		const onText = document.querySelector('.switchOn-text')
		const cards = document.querySelectorAll('.TariffCard')

		onText.style.color = '#ff9ae1';
		offText.style.color = '#ececec';
		console.log('active MONTH');

		cards.forEach((card, index) => {
			card.style.background = '#000000';
			card.style.color = '#ececec';
			card.style.border = '1px solid #535353';
			card.style.boxShadow = 'none';

			console.log(card)
			const textArr = arr["MONTHLY"][index];
			const Coast = card.querySelector('.coast');

			Coast.textContent = textArr.coast;
		})
	}


	return (
		<div className={"Tariffs"}>
			<div className={"switchBox"}>
				<p className={'switchOff-text'}>Неделя</p>
				<Switcher scriptOff={inactive} scriptOn={active}/>
				<p className={'switchOn-text'}>Месяц</p>
			</div>
			<div className={"TariffsList"}>
				{arr["WEEKLY"].map((item, index) =>
					<TariffCard
						title={item.title}
						key={index}
						coast={item.coast}
						description={item.description}
						scopeArr={item.scopeArr}
					/>
				)}
			</div>
		</div>
	);
};

export default TariffsList;