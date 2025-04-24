import React from 'react';
import FeedbackCard from "./FeedbackCard.jsx";
import './styles/carusel.css';

const FeedbackCarusel = () => {
	return (
		<div className={"carusel"}>
			<div className={"blackOut1"}></div>
			<FeedbackCard body={'Сервис работает нормально, все крутится, работает и пишет!'} name={'Вячеслав'} position={'Полный долбаеб'}/>
			<FeedbackCard body={'Сервис работает нормально, все крутится, работает и пишет!'} name={'Вячеслав'} position={'Полный долбаеб'}/>
			<FeedbackCard body={'Сервис работает нормально, все крутится, работает и пишет!'} name={'Вячеслав'} position={'Полный долбаеб'}/>
			<FeedbackCard body={'Сервис работает нормально, все крутится, работает и пишет!'} name={'Вячеслав'} position={'Полный долбаеб'}/>
			<FeedbackCard body={'Сервис работает нормально, все крутится, работает и пишет!'} name={'Вячеслав'} position={'Полный долбаеб'}/>
			<div className={"blackOut2"}></div>
		</div>
	);
};

export default FeedbackCarusel;