import { db } from "./firebaseconfig.js";

import {
  collection,
  addDoc,
  getDocs,
  Timestamp,
  doc,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const form = document.querySelector("#form");
const grid = document.querySelector("#grid");
const title = document.querySelector("#title");
const description = document.querySelector("#Description");

const todos = [];

//get data function starts here
async function getDataFromDB() {
  const x = query(collection(db, "Todos"), orderBy("time", "asc"));
  const querySnapshot = await getDocs(x);
  querySnapshot.forEach((doc) => {
    todos.push({
      title: doc.data().title,
      description: doc.data().description,
      time: doc.data().time,
    });
  });
  console.log(todos);
}
getDataFromDB();
///get data function ends here
//
//
//
//
//
//
//
//
//
//render function starts here
function renderData(data) {
  grid.innerHTML = " ";
  data.map((item) => {
    grid.innerHTML += `
    
    <div
              class="bg-white p-4 rounded shadow hover:shadow-md transition relative"
            >
              <h2 class="font-bold text-lg mb-2">${item.title}</h2>
              <p class="text-gray-600 mb-2">${item.description}</p>
              <p class="text-xs text-gray-400 mb-3">kjljkl</p>

              <!-- Buttons -->
              <div class="flex space-x-2">
                <button
                  class="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 text-sm"
                >
                  Edit
                </button>
                <button
                  class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
    
    `;
  });
}
  renderData(todos);
///render function ends here
//
//
//
//
//
//
//
//
//

//Adding Data to Firestor
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "Todos"), {
    title: title.value,
    description: description.value,
    time: Timestamp.fromDate(new Date()),
  });
  todos.push({
    title: title.value,
    description: description.value,
    time: Timestamp.fromDate(new Date()),
  })

  title.value = "";
  description.value = "";
  console.log("Added Succfully in Firestor.");
  console.log("Document written with ID: ", docRef.id);
  renderData(todos)
});

// const q = query(collection(db, "todos"), orderBy("time", "desc"));
//   const querySnapshot = await getDocs(q);
