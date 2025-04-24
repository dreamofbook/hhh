import React from 'react';
import './styles/feedbackcard.css';

const FeedbackCard = ({body, name, position,}) => {
	return (
		<div className={"feedbackCard"}>
			<div className={"feedbackCardContent"}>
				<div className={"feedbackCardBody"}>{body}</div>
				<div className={"feedbackCardPerson"}>- {name}, {position}</div>
			</div>
		</div>
	);
};

export default FeedbackCard;