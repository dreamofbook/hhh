import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import MainPage from "../Pages/MainPage.jsx";
import Catalog from "../Pages/Catalog.jsx";
import ContactPage from "../Pages/ContactPage.jsx";
import ProfilePage from "../Pages/ProfilePage.jsx";
import HomePage from "../Pages/HomePage.jsx";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/"} element={<MainPage/>}>
					<Route index element={<HomePage/>}/>
					<Route path="/catalog" element={<Catalog/>}/>
					<Route path="/project" element={<ContactPage/>}/>
					<Route path="/settings" element={<ProfilePage/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;