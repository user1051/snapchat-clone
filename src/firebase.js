import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCIs1BoedwMVAqer_Xu_QqiXfG7ubgFb_M",
  authDomain: "snapchat-clone-9bcc8.firebaseapp.com",
  projectId: "snapchat-clone-9bcc8",
  storageBucket: "snapchat-clone-9bcc8.appspot.com",
  messagingSenderId: "414226534790",
  appId: "1:414226534790:web:643e848b4ee7a9e1c35c07",
  measurementId: "G-7SNM684RJT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider }