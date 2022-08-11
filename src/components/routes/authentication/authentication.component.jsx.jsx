import SignUpForm from "../../sing-up-form.component/sign-up-form.component";
import SignInForm from "../../sign-in-form.component/sign-in-form.component";

import {AuthenticationContainer} from "./authentication.styles.jsx";

const Authentication = () => {
	return (
		<AuthenticationContainer className="authentication-container">
			{/* <button onClick={signInWithGoogleRedirect}>
				Sign in with Google Redirect
			</button> */}
			<SignInForm />
			<SignUpForm />
		</AuthenticationContainer>
	);
};

export default Authentication;
