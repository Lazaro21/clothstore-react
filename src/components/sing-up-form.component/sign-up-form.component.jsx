import { useState } from "react";

import {
	createAuthUserWithEmailAndPasword,
	createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
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

	const handleSubmit = (event) => {
		event.preventDefault();
		const response = createAuthUserWithEmailAndPasword(email, password);

		if (password !== confirmPassword) {
			alert("passords do not match");
		}


		response
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				user.displayName = displayName;
				createUserDocumentFromAuth(user);
				resetFormFields();
			})
			.catch((error) => {
				if (error.code === "auth/email-already-in-use") {
					alert("Cannot create user, email already in use");
				} else {
					console.log(error);
				}
			});
	};

	return (
		<div className="sign-up-container">
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
		</div>
	);
};

export default SignUpForm;
