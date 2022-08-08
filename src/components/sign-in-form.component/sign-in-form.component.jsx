import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import {
	signInAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
} from "../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";

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

	const SignInWithGoogle = async () => {
		const response = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(response.user);
	};

	const handleSubmit = async (event) => {
		console.log("here")
		event.preventDefault();
		console.log("teste");
		console.log(event);

		try {
			console.log("teste");
			const response = await signInAuthUserWithEmailAndPassword(email, password);
			console.log(response)
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert('incorrect password')
					break;
				case "auth/user-not-found":
					alert("no user associated with this email")
					break
				default:
					console.log(error);
			}

		}
	};

	return (
		<div className="sign-in-container">
			<h2>Already Have an Account?</h2>
			<span>Sign in with your email and password</span>
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
				<div className="buttons-container">
					<Button type="submit">Sign In</Button>
					<Button buttonType="google" type="button" onClick={SignInWithGoogle}>
						Google Sign in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
