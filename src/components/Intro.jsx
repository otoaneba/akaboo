import React from "react";
import { addDoc, getDocs } from "firebase/firestore";
import { userCollection, app } from "../firebase";
import {
	getAuth,
	sendEmailVerification,
	onAuthStateChanged,
} from "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import { getFunctions, httpsCallable } from "firebase/functions";
import Modal from "./Modal";
import modalData from "../assets/modalData";

export default function Intro() {
	const [userEmail, setUserEmail] = React.useState("");

	const functions = getFunctions(app);
	const sendEmailFunction = httpsCallable(functions, "sendEmail");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    zipCode: '',
    ageRange: '',
    interest: [],
    categories: []
});

	React.useEffect(() => {
		const ui =
			firebaseui.auth.AuthUI.getInstance() ||
			new firebaseui.auth.AuthUI(getAuth(app));
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const uid = user.uid;
				console.log("uid", uid);
			} else {
				// User is signed out
				console.log("user is signed out");
			}
		});
		const uiConfig = {
			signInSuccessUrl: "/",
			signInOptions: [
				{
					provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
					clientId:
						"941019739189-846mrcmc3kffdcmo51b9ppj51tmg13j0.apps.googleusercontent.com",
					fullLabel: "Join With Google",
				},
				{
					provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
					fullLabel: "Join With Email",
				},
			],
			credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
			callbacks: {
				signInSuccessWithAuthResult: function (
					authResult,
					redirectUrl
				) {
					if (
						authResult.user &&
						authResult.additionalUserInfo.isNewUser
					) {
						console.log(
							"authResult.user",
							authResult,
							authResult.user
						);
						// This is a new user, check if email is verified
						if (!authResult.user.emailVerified) {
							sendEmailVerification(authResult.user);
						}
					}
					// Return true to redirect to the signInSuccessUrl
					return true;
				},
			},
		};

		ui.start("#firebaseui-auth-container", uiConfig);
	}, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        // Add to array
        setFormData(prevState => ({
            ...prevState,
            [name]: [...prevState[name], value]
        }));
      } else {
          // Remove from array
          setFormData(prevState => ({
              ...prevState,
              [name]: prevState[name].filter(item => item !== value)
          }));
      }
    } else {
        setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setModalOpen(false);
  };

  const closeModal = () => {
      setActiveModal(-1);
  };


	return (
		<div className="intro">
			<div className="product--tagline">
				<h1>Join the Waitlist</h1>
				<p>
					Get exclusive early access to Akaboo, your go-to marketplace
					for pre-owned baby gear.
				</p>
        <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>
      <Modal 
          isOpen={modalOpen} 
          closeModal={() => setModalOpen(false)} 
          handleSubmit={handleSubmit} 
          handleChange={handleChange} 
      />
				<div
					className="signUp--buttons"
					id="firebaseui-auth-container"
				></div>
			</div>
		</div>
	);
}
