import {signOut, onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";



onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid)
    // ...
  } else {
    window.location = 'login.html'
  }
});


const logout = document.querySelector('#logout')


logout.addEventListener('click', ()=>{
    signOut(auth)
      .then(() => {
          window.location = 'login.html'
      })
      .catch((error) => {
        console.log(error)
      });
    
    
})














