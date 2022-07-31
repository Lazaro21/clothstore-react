import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup()
		createUserDocumentFromAuth(response.user)
	}
	return (
		<div>
			<h1>Sign in Page</h1>
			<button onClick={logGoogleUser}>
				Sign in with Google Pop Up
			</button>
		</div>
	);
};

export default SignIn;
