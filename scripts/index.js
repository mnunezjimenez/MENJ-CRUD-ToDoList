// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGRv2tmKYbkkNSQF8sQCAKILdMAaIsUO4",
  authDomain: "menj-web-crud.firebaseapp.com",
  projectId: "menj-web-crud",
  storageBucket: "menj-web-crud.appspot.com",
  messagingSenderId: "760919471241",
  appId: "1:760919471241:web:7971f992229f630daec258"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;