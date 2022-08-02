import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import { SignInAuthUserWithEmailAndPassword } from "../utils/firebase/firebase.utils";

const initialState = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(initialState);
	const { email, password } = formFields;

	const handleChange = (event) => {
		const { value, name } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
        // console.log("test")
		SignInAuthUserWithEmailAndPassword(email, password);
        // console.log("after test")
	};

	return (
		<div>
			<h1>Sign in with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					onChange={handleChange}
                    type="email"
                    name="email"
					value={email}
				/>
				<FormInput
					label="Password"
					onChange={handleChange}
                    type="password"
                    name="password"
					value={password}
				/>
				<button type="submit">Sign In</button>
			</form>
		</div>
	);
};

export default SignInForm;
