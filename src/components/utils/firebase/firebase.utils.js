import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from "firebase/firestore";

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

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log("Done");
};

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, "categories");
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	const categoryMap = querySnapshot.docs.reduce((acumulator, docSnapshot) => {
		const { title, items } = docSnapshot.data();
		acumulator[title.toLowerCase()] = items;
		return acumulator
	}, {})

	return categoryMap
};

export const createUserDocumentFromAuth = async (
	userAuth,
	displayNameAuth = null
) => {
	if (!userAuth) {
		// console.log("Couldn\'t find user auth")
		return;
	}
	const userDocRef = doc(db, "users", userAuth.uid);

	// console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	// console.log(userSnapshot);
	// console.log(userSnapshot.exists());

	//if user data exists

	if (!userSnapshot.exists()) {
		userAuth.displayName
			? (userAuth.displayName = userAuth.displayName)
			: (userAuth.displayName = displayNameAuth);
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

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);
