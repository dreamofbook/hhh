import React from 'react';
import FeedbackCard from "./FeedbackCard.jsx";
import './styles/carusel.css';

const FeedbackCarusel = () => {

	const Scroll = () => {
		var Cards = document.querySelectorAll('.feedbackCard');
		console.log(Cards.length);
		const last = Cards.length - 1;
		const parent = document.querySelector('.carusel');

		function prependElement (){
			parent.prepend(Cards[last])
		}

		for (let i = 0; i < Cards.length - 1; i++) {
			let position = Cards[i].getBoundingClientRect()
			Cards[i].style.transform += `translateX(${position.width + 10}px)`;
		}

		setTimeout(prependElement, 1000)

		console.log('effect used')
	}

	// let interval = setInterval(Scroll, 2000)
	// React.useEffect(() => {
	// 	interval;
	// })

	return (
		<div className={"carusel"}>
			<div className={"blackOut1"}></div>
			<div className="feedbackCard" style={{display: "none"}}></div>
			<FeedbackCard body={'зуй пизда член 1'} name={'Вячеслав'} position={'Полный долбаеб'}/>
			<FeedbackCard body={'ебануться пиздец блять 2'} name={'Вячеслав'} position={'Полный долбаеб'}/>
			<FeedbackCard body={'хуесосы ебаные сука 3'} name={'Вячеслав'} position={'Полный долбаеб'}/>
			<FeedbackCard body={'по реестрам просто 4'} name={'Вячеслав'} position={'Полный долбаеб'}/>
			<FeedbackCard body={'ебливый пидор несчастный  5'} name={'Вячеслав'} position={'Полный долбаеб'}/>
			<div className={"blackOut2"}></div>
		</div>
	);
};

export default FeedbackCarusel;