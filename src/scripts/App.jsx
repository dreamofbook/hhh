import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import MainPage from "../Pages/MainPage.jsx";
import SettingsPage from "../Pages/SettingsPage.jsx";
import ProfilePage from "../Pages/ProfilePage.jsx";
import HomePage from "../Pages/HomePage.jsx";
import AuthPage from "../Pages/AuthPage.jsx";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/"} element={<MainPage/>}>
					<Route index element={<HomePage/>}/>
					<Route path="/settings" element={<SettingsPage/>}/>
					<Route path="/profile" element={<ProfilePage/>}/>
					<Route path="*" element={<HomePage/>}/>
				</Route>
				<Route path="/auth" element={<AuthPage/>}/>
				<Route path={'/registration'} element={<AuthPage/>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;