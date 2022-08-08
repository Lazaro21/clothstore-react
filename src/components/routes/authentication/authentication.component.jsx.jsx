import SignUpForm from "../../sing-up-form.component/sign-up-form.component";
import SignInForm from "../../sign-in-form.component/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
	return (
		<div className="authentication-container">
			{/* <button onClick={signInWithGoogleRedirect}>
				Sign in with Google Redirect
			</button> */}
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
