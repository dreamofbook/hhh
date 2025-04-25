import React from 'react';
import FeedbackCard from "./FeedbackCard.jsx";
import './styles/carusel.css';

const FeedbackCarusel = () => {

	const Scroll = () => {
		var Cards = document.querySelectorAll('.feedbackCard');
		const last = Cards.length - 1;
		const parent = document.querySelector('.carusel');

		Cards.forEach((card, index) => {
				let position = card.getBoundingClientRect()
				card.style.transform += `translateX(${position.width + 10}px)`;
		})
		
		parent.prepend(Cards[last]);
		console.log('effect used')
	}

	let interval = setInterval(Scroll, 4000)
	React.useEffect(() => {
		interval;
	})

	return (
		<div className={"carusel"}>
			{/*<div className={"blackOut1"}></div>*/}
			<FeedbackCard body={'зуй пизда член 1'} name={'Вячеслав'} position={'Полный долбаеб'}/>
			<FeedbackCard body={'зуй пизда член 2'} name={'Вячеслав'} position={'Полный долбаеб'}/>
			<FeedbackCard body={'зуй пизда член 3'} name={'Вячеслав'} position={'Полный долбаеб'}/>
			<FeedbackCard body={'зуй пизда член 4'} name={'Вячеслав'} position={'Полный долбаеб'}/>
			<FeedbackCard body={'зуй пизда член 5'} name={'Вячеслав'} position={'Полный долбаеб'}/>
			{/*<div className={"blackOut2"}></div>*/}
		</div>
	);
};

export default FeedbackCarusel;