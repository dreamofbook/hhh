import React from 'react';
import './Switcher.css'

const Switcher = ({scriptOff, scriptOn}) => {

	const [isActive, setIsActive] = React.useState(false);


	const changeStylesSwitcher = (status) => {
		let switcher = document.querySelector('.Switcher');
		let circle = document.querySelector('.Circle');

		if (status) {
			switcher.classList.add('active');
			scriptOn();
		} else {
			switcher.classList.remove('active');
			scriptOff();
		}
	};

	React.useEffect(() => {
		changeStylesSwitcher(isActive);
	})

	const touch = () => {
		setIsActive(!isActive);
	}


	return (
		<div className={"Switcher"} onClick={touch}>
			<div className={'Circle'}></div>
		</div>
	);
};

export default Switcher;