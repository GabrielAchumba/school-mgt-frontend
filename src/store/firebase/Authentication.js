import { auth } from './firebaseConfig.js'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signInWithPhoneNumber, signOut, ApplicationVerifier, RecaptchaVerifier} from 'firebase/auth'

auth.onAuthStateChanged(function(user) {
    if (user) {
        console.log("USER LOGGED IN")
    } else {
        // No user is signed in.
        console.log("USER NOT LOGGED IN")
    }
});

const recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
        size: "normal",
        callback: (response) => {
            submitPhoneNumberAuth();
        }
    },
    auth
);

// IF you want to hide the recaptcha, use 'invisible' the size
// window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//   "sign-in-button",
//   {
//     size: "invisible",
//     callback: function(response) {
//       submitPhoneNumberAuth();
//      }
//   }
// );


// This function runs when the 'sign-in-button' is clicked
// Takes the value from the 'phoneNumber' input and sends SMS to that phone number
const submitPhoneNumberAuth = (phoneNumber) => {
    // We are using the test phone numbers we created before
    // var phoneNumber = document.getElementById("phoneNumber").value;
    //var phoneNumber = '+16005551234';
    var appVerifier = recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then(function(confirmationResult) {
        window.confirmationResult = confirmationResult;
    })
    .catch(function(error) {
        console.log(error);
    });
}

// This function runs when the 'confirm-code' button is clicked
// Takes the value from the 'code' input and submits the code to verify the phone number
// Return a user object if the authentication was successful, and auth is complete
const submitPhoneNumberAuthCode = (code) => {
    // We are using the test code we created before
    // var code = document.getElementById("code").value;
    //var code = '123456';
    confirmationResult
    .confirm(code)
    .then(function(result) {
        var user = result.user;
        console.log(user);
    })
    .catch(function(error) {
        console.log(error);
    });
}

/* const register = async (context, { email, password, name}) => {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    if (response) {
        console.log('SET_USER', response.user)
        response.user.updateProfile({displayName: name})
    } else {
        console.log('Unable to register user')
    }
}

const logIn = async ({ email, password }) => {
  const response = await signInWithEmailAndPassword(auth, email, password)
  if (response) {
      console.log('SET_USER', response.user)
  } else {
    console.log('login failed')
  }
}

const logOut = async (context) => {
  await signOut(auth)
} */

export { submitPhoneNumberAuth, submitPhoneNumberAuthCode }