import React, {useState} from 'react';
import './singForm.css'


const useValidation = (value, validations) => {

	const [isEmpty, setIsEmpty] = useState(true);
	const [minLength, setMinLength] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [isInputValid, setIsInputValid] = useState(false);

	React.useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					value.length < validations[validation] ? setMinLength(true) : setMinLength(false);
					break;

				case 'isEmpty':
					value? setIsEmpty(false) : setIsEmpty(true);
					break;

				case 'emailError':
					const reEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
					reEmail.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
					break;

				case 'passwordError':
					const rePassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
					rePassword.test(String(value)) ? setPasswordError(false) : setPasswordError(true);
					break;
			}
		}
	}, [value]);

	React.useEffect(() => {
		if (isEmpty || minLength || emailError || passwordError){
			setIsInputValid(false);
		} else {
			setIsInputValid(true);
		}
	}, [isEmpty, minLength, emailError, passwordError]);


	return {isEmpty, minLength, emailError, passwordError, isInputValid};
}

const useInput = (initialValue, validations) => {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setIsDirty] = useState(false);
	const valid = useValidation(value, validations);


	const onChange = (e) => {
		setValue(e.target.value);
	}

	const onBlur = (e) => {
		setIsDirty(true)
	}

	let errorMessage = '';
	if (isDirty){
		if (valid.isEmpty){
			errorMessage = 'Это поле не может быть пустым';
		} else if (valid.emailError || valid.passwordError) {
			errorMessage = valid.emailError ? 'Введите корректный email' : 'Введите корректный пароль';
		}
	}

	return {
		value, onChange, onBlur, isDirty, errorMessage, ...valid
	}
}

const SignForm = () => {

	const email = useInput('', {isEmpty: true, minLength: 3, emailError: false, isAllValid: false});
	const password = useInput('',{isEmpty: true, passwordError: false, isAllValid: false});

	return (
		<div className="sign-form">
			<div className="first-text-box">
				<p></p>
			</div>
			<div className="inputs-box">
				{email.errorMessage && <div className={'error-text'}>{email.errorMessage}</div>}
				<input
					className="email-input"
					type="email"
					onChange={(e) => email.onChange(e)}
					onBlur={(e) => email.onBlur(e)}
					value={email.value}
					placeholder="Email"
				/>
				{password.errorMessage && <div className={'error-text'}>{password.errorMessage}</div>}
				<input
					onChange={(e) => password.onChange(e)}
					onBlur={(e) => password.onBlur(e)}
					className="password-input"
					type="password"
					value={password.value}
					placeholder="Password"
				/>
			</div>
			<button
				className="button"
				onClick={() => {
					console.log(email.value, password.value);}}
				disabled={!(email.isInputValid && password.isInputValid)}
			>Войти</button>
			<div className="after-text-box">
				<p></p>
			</div>
		</div>
	);
};

export default SignForm;