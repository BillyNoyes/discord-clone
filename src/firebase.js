import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAXsbXqZAZaZUlmBZLOFNmNiVfnur3gZKs",
  authDomain: "discord-clo.firebaseapp.com",
  databaseURL: "https://discord-clo.firebaseio.com",
  projectId: "discord-clo",
  storageBucket: "discord-clo.appspot.com",
  messagingSenderId: "402483783908",
  appId: "1:402483783908:web:e6f7da6fae513e692164f1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;