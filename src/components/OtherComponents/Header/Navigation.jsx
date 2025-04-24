import './styles/navigation.css'
import HeaderSection from "./HeaderSection.jsx";
import {useState} from "react";
import arr from './data/data.json'

const Navigation = () => {

	const [inNav, setInNav] = useState(null);
	const [active, setActive] = useState(0);

	return (
		<div className={'navigation'}
		     onMouseEnter={() => {setInNav(true);
			     let division = document.querySelector(".Minis");
			     division.style.pointerEvents = 'all';
			     setInNav(true);
		     }}
		     onMouseLeave={() => {setInNav(false);
			     setInNav(false);

			     let division = document.querySelector(".Minis");
			     division.style.scale = 0.8;
			     division.style.opacity = 0;
			     division.style.pointerEvents = 'none';
			     setActive(0);
		     }}
		>
			<div className="NavBar">
				{arr.map((item, index) =>
					<HeaderSection
						path={item.path}
						id={item.id}
						className={item.Title}
						inNav={inNav}
						active={active}
						setActive={setActive}
						key={index}
					>{item.Title}</HeaderSection>
				)}
			</div>
			<div className="Minis-padding"></div>
			<div className={'Minis'}>
			</div>
		</div>
	);
};
export default Navigation;