// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCFWeF7V5SRficmDhOEsalEmJX6xPJHfjg",
	authDomain: "akaboo-81f46.firebaseapp.com",
	projectId: "akaboo-81f46",
	storageBucket: "akaboo-81f46.appspot.com",
	messagingSenderId: "941019739189",
	appId: "1:941019739189:web:b4e4427b2a7f9cec37ed7c",
	measurementId: "G-FKQDVGFNDK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
export const db = getFirestore(app);
export const userCollection = collection(db, "users");
export { app };
