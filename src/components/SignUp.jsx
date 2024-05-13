import React from 'react'

export default function SignUp() {
      // React.useEffect(() => {
      // 	const ui =
      // 		firebaseui.auth.AuthUI.getInstance() ||
      // 		new firebaseui.auth.AuthUI(getAuth(app));
      // 	const auth = getAuth();
      // 	onAuthStateChanged(auth, (user) => {
      // 		if (user) {
      // 			// User is signed in, see docs for a list of available properties
      // 			// https://firebase.google.com/docs/reference/js/auth.user
      // 			const uid = user.uid;
      // 			console.log("uid", uid);
      // 		} else {
      // 			// User is signed out
      // 			console.log("user is signed out");
      // 		}
      // 	});
      // 	const uiConfig = {
      // 		signInSuccessUrl: "/",
      // 		signInOptions: [
      // 			{
      // 				provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // 				clientId:
      // 					"941019739189-846mrcmc3kffdcmo51b9ppj51tmg13j0.apps.googleusercontent.com",
      // 				fullLabel: "Join With Google",
      // 			},
      // 			{
      // 				provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // 				fullLabel: "Join With Email",
      // 			},
      // 		],
      // 		credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
      // 		callbacks: {
      // 			signInSuccessWithAuthResult: function (
      // 				authResult,
      // 				redirectUrl
      // 			) {
      // 				if (
      // 					authResult.user &&
      // 					authResult.additionalUserInfo.isNewUser
      // 				) {
      // 					console.log(
      // 						"authResult.user",
      // 						authResult,
      // 						authResult.user
      // 					);
      // 					// This is a new user, check if email is verified
      // 					if (!authResult.user.emailVerified) {
      // 						sendEmailVerification(authResult.user);
      // 					}
      // 				}
      // 				// Return true to redirect to the signInSuccessUrl
      // 				return true;
      // 			},
      // 		},
      // 	};

      // 	ui.start("#firebaseui-auth-container", uiConfig);
      // }, []);
  return (
				{/* <div
					className="signUp--buttons"
					id="firebaseui-auth-container"
				></div> */}
  )
}
