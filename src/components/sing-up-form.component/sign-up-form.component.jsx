import { useState, useContext } from "react";

import {
	createAuthUserWithEmailAndPasword,
	createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import {SignUpContainer} from './sign-up-form.styles.jsx'
import Button from "../button/button.component";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		// console.log(formFields[name].length)
		setFormFields({ ...formFields, [name]: value });
		
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const {user} = await createAuthUserWithEmailAndPasword(email, password);
		resetFormFields()
		if (password !== confirmPassword) {
			alert("passwords do not match");
		}

		createUserDocumentFromAuth(user, displayName)


	};

	return (
		<SignUpContainer>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					name="displayName"
					required
					onChange={handleChange}
					value={displayName}
				/>
				<FormInput
					label="Email"
					type="email"
					name="email"
					required
					onChange={handleChange}
					value={email}
				/>
				<FormInput
					label="Password"
					type="password"
					name="password"
					required
					onChange={handleChange}
					value={password}
				/>
				<FormInput
					label="Confirm Password"
					type="password"
					name="confirmPassword"
					required
					onChange={handleChange}
					value={confirmPassword}
				/>
				<Button type="submit">Sign Up</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;
