// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMyvujWLOAiX6Xj3-mscLEEVbDRgDUA8A",
  authDomain: "todo-7160e.firebaseapp.com",
  projectId: "todo-7160e",
  storageBucket: "todo-7160e.appspot.com",
  messagingSenderId: "270229717288",
  appId: "1:270229717288:web:b324883ffa7c74cc91501d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth