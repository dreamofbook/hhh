import React from 'react';
import '../Styles/authPage.css'
import {Link} from "react-router";
import SignForm from "../components/UI/Forms/SignForm/SignForm.jsx";

const AuthPage = () => {

	return (
		<div className="wallpaper">
			<div className="square-auth">
				<div className="glass">
					<div className="text-sign-in">
						Войдите в учетную запись или <br/><Link to={'/auth/registration'}>зарегистрируйтесь</Link>
					</div>
					<SignForm />
				</div>
			</div>
		</div>
	);
};

export default AuthPage;