import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	SignInWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCDi4BrOSC0csPfQbn2TACpr92Xpw3DlCQ",
	authDomain: "crwn-clothing-db-1f2b9.firebaseapp.com",
	projectId: "crwn-clothing-db-1f2b9",
	storageBucket: "crwn-clothing-db-1f2b9.appspot.com",
	messagingSenderId: "520471418699",
	appId: "1:520471418699:web:fc726e53557a2d43aa3ace",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	if (!userAuth) {
		// console.log("Couldn\'t find user auth")
		return;
	}
	const userDocRef = doc(db, "users", userAuth.uid);

	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());

	//if user data exists

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;

		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log("error creating the user".error.message);
		}
	}
	//if user data does not exist
	return userDocRef;
};

export const createAuthUserWithEmailAndPasword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const SignInAuthUserWithEmailAndPassword = (email, password) => {
	console.log('haven\'t entered if')
	if (!email || !password) {
		console.log(email, password)
	}
	

	console.log("inside sign in auth")
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(user)
		})
		.catch((error) => {
			console.log(error);
		});
};
