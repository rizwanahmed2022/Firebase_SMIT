import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth, provider } from "./firebaseconfig.js";








const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const google = document.querySelector("#google");
const register = document.querySelector("#register");
const forgotBtn = document.querySelector("#forgotBtn");



/////signin with email password
form.addEventListener("submit", (event) => {
  event.preventDefault();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location = "index.html";

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});


////reset password if forgot
forgotBtn.addEventListener("click", () => {
  sendPasswordResetEmail(auth, prompt("Enter Your Email Here"))
    .then(() => {
      console.log("Password Reseted");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
});


google.addEventListener('click', ()=>{

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ...
  });



})







register.addEventListener("click", () => {
  window.location = "register.html";
});
