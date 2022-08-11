import React, { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import {
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from "../utils/firebase/firebase.utils";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {SignInContaier, ButtonsContainer} from "./sign-in-form.styles.jsx";

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

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();

	};

	const handleSubmit = async (event) => {
		// console.log("here")
		event.preventDefault();
		// console.log("teste");
		// console.log(event);

		try {
			// console.log("teste");
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("incorrect password");
					break;
				case "auth/user-not-found":
					alert("no user associated with this email");
					break;
				default:
					console.log(error);
			}
		}
	};

	return (
		<SignInContaier>
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
				<ButtonsContainer>
					<Button type="submit">Sign In</Button>
					<Button
						buttonType={BUTTON_TYPE_CLASSES.google}
						type="button"
						onClick={signInWithGoogle}
					>
						Google Sign in
					</Button>
				</ButtonsContainer>
			</form>
		</SignInContaier>
	);
};

export default SignInForm;
