import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5yKVB9y8E1KhB4TlNAc6Tb5B7drEsWB8",
  authDomain: "rizwan1-63e5f.firebaseapp.com",
  projectId: "rizwan1-63e5f",
  storageBucket: "rizwan1-63e5f.firebasestorage.app",
  messagingSenderId: "131859817757",
  appId: "1:131859817757:web:30cd2109bbc15550a02df4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);








