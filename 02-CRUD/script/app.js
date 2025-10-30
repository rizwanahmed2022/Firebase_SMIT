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

const nowTime = new Date();
const form = document.querySelector("#form");
const grid = document.querySelector("#grid");
const title = document.querySelector("#title");
const description = document.querySelector("#Description");

const todos = [];

//get data function starts here
// async function getDataFromDB() {
//   const x = query(collection(db, "Todos"), orderBy("time", "asc"));
//   const querySnapshot = await getDocs(x);
//   querySnapshot.forEach((doc) => {
//     todos.push({
//       title: doc.data().title,
//       description: doc.data().description,
//       time: doc.data().time,
//     });
//   });
//   console.log(todos);
// }
// getDataFromDB();
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
    
<div class="group relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-70"></div>

  <div>
    <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
      ${item.title}
    </h3>
    <p class="text-sm text-gray-600 leading-relaxed">
      ${item.description}.
    </p>
  </div>

  <div class="flex flex-col gap-4 mt-6">
    <div class="flex items-center justify-between">
      <span class="text-sm text-gray-500 flex items-center gap-1">
        <span>🕒</span> Nov 1, 2025
      </span>
      <span class="text-xs font-semibold bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
        Medium
      </span>
    </div>

    <div class="flex items-center justify-between gap-2">
      <button class="flex items-center justify-center gap-2 bg-blue-50 text-blue-600 font-medium text-sm py-2 rounded-lg hover:bg-blue-100 transition flex-1">
        <input type="checkbox" class="accent-blue-600 w-4 h-4" />
        <span>Mark as done</span>
      </button>

      <button class="flex-1 bg-green-50 text-green-600 font-medium text-sm py-2 rounded-lg hover:bg-green-100 transition">
        Edit
      </button>

      <button class="flex-1 bg-red-50 text-red-600 font-medium text-sm py-2 rounded-lg hover:bg-red-100 transition">
        Delete
      </button>
    </div>
  </div>
</div>`;
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
    id: 1,
    title: title.value,
    description: description.value,
    is_completed: false,
    time: {
      year: nowTime.getFullYear(), // e.g., 2025
      month: nowTime.getMonth() + 1, // 0-11, so +1 for 1-12
      day: nowTime.getDate(), // Day of the month (1-31)
      weekday: nowTime.toLocaleString("en-US", { weekday: "long" }), // e.g., "Thursday"
      hours: nowTime.getHours(), // 0-23
      minutes: nowTime.getMinutes(), // 0-59
      seconds: nowTime.getSeconds(), // 0-59
    },
  });

  title.value = "";
  description.value = "";
  console.log("Added Succfully in Firestor.");
  console.log("Document written with ID: ", docRef.id);
  renderData(todos);
});

// const q = query(collection(db, "todos"), orderBy("time", "desc"));
//   const querySnapshot = await getDocs(q);

// Create a new Date object for current date/time

// Create an object storing the components
