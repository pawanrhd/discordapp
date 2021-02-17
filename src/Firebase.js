import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLraXKw2FjJrjPIj1Me5N-w5rWV_XFvwI",
  authDomain: "discord-clone-3205b.firebaseapp.com",
  projectId: "discord-clone-3205b",
  storageBucket: "discord-clone-3205b.appspot.com",
  messagingSenderId: "38528830229",
  appId: "1:38528830229:web:a2e8a9d16220ac3496f71c",
  measurementId: "G-00CS3G93GV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
