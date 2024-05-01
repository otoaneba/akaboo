import React from 'react'
import { addDoc, getDocs } from 'firebase/firestore'
import { userCollection, app } from '../firebase'
import { getAuth, sendEmailVerification, onAuthStateChanged } from 'firebase/auth';
import 'firebaseui/dist/firebaseui.css'
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import { getFunctions, httpsCallable } from 'firebase/functions';

export default function Intro() {
  const [userEmail, setUserEmail] = React.useState("");
  const [temp, setTemp] = React.useState({});
  const functions = getFunctions(app);
  const sendEmailFunction = httpsCallable(functions, 'sendEmail');



  React.useEffect(() => {
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(getAuth(app));
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log('uid', uid)
      } else {
        // User is signed out
        // ...
        console.log('user is signed out')
      }
    });
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          clientId: "941019739189-846mrcmc3kffdcmo51b9ppj51tmg13j0.apps.googleusercontent.com",
          fullLabel: "Sign Up With Google"
        },
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          fullLabel: "Sign Up With Email"
        },
      ],
      credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          if (authResult.user && authResult.additionalUserInfo.isNewUser) {
            console.log("authResult.user", authResult, authResult.user)
            // This is a new user, check if email is verified
            if (!authResult.user.emailVerified) {
              sendEmailVerification(authResult.user)
            }
          }
          // Return true to redirect to the signInSuccessUrl
          return true;
        }
      }
    }
 
    ui.start('#firebaseui-auth-container', uiConfig);
 
  }, []);

  function updateEmail(value) {
    console.log(value)
    setUserEmail(value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const newUser = {
      email: userEmail,
      createdAt: Date.now()
    }

    const userExists = checkExistingUser(newUser.email)
    const newUserRef = await addDoc(userCollection, newUser)
  }

  async function checkExistingUser(email) {
    const querySnapshot = await getDocs(userCollection);
  
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      });
    
  }

  return (
    <div className="intro">
        <div className="product--tagline">
          <h1>Sell Without the Stress</h1>
          <p>Fast and free pickup. Plus we offer photography and cleanup. All you ahve to do is wait.</p>
          <div className="signUp--buttons" id="firebaseui-auth-container"></div>
      {/* <form onSubmit={handleSubmit}>
          <input onChange={e => updateEmail(e.target.value)} value={userEmail} type="email" id="email" name="email"></input>
          <button>Sign Up</button>
      </form> */}
         
        </div>
        <img src="/shopping.png" width="700px"/>
    </div>
  )
}
