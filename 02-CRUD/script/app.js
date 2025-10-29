import { db } from "./firebaseconfig.js";
import {
  collection,
  addDoc,
  Timestamp,
  getDocs,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const form = document.querySelector("#form");
const title = document.querySelector("#title");
const description = document.querySelector("#Description");



// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(title.value);
//   console.log(description.value);
// });

// const todoContainer = document.querySelector(".allTodos");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const userData = {
    title: title.value,
    description: description.value,
    time: Timestamp.fromDate(new Date()),
  };

  try {
    const docRef = await addDoc(collection(db, "todos"), userData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});
