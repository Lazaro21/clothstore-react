import {
	auth,
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../sing-up-form.component/sign-up-form.component";
import SignInForm from "../../sign-in-form.component/sign-in-form.component";

const SignIn = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		createUserDocumentFromAuth(response.user);
	};

	useEffect(() => {
		const returnRedirectResult = async () => {
			const response = await getRedirectResult(auth);
			if (response) {
				createUserDocumentFromAuth(response.user);
			}
		};

		returnRedirectResult();
	}, []);

	return (
		<div>
			<h1>Sign in Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Pop Up</button>
			{/* <button onClick={signInWithGoogleRedirect}>
				Sign in with Google Redirect
			</button> */}
			<SignUpForm />
			<SignInForm />
		</div>
	);
};

export default SignIn;
