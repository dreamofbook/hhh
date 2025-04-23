import React from 'react';
import Header from '../components/OtherComponents/Header/Header.jsx';
import Footer from '../components/OtherComponents/Footer/Footer.jsx';
import {Outlet} from "react-router";

const MainPage = () => {
	return (
		<div>
			<Header/>
			<Outlet/>
			<Footer/>
		</div>
	);
};

export default MainPage;