import firebase from 'firebase';

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCq35JM7fMtPjKpm-TX_-fhIvdLEaYZc08",
    authDomain: "react-hulu-vb.firebaseapp.com",
    databaseURL: "https://react-hulu-vb.firebaseio.com",
    projectId: "react-hulu-vb",
    storageBucket: "react-hulu-vb.appspot.com",
    messagingSenderId: "714467218294",
    appId: "1:714467218294:web:bcdb12877307f007fce057",
    measurementId: "G-KLFTKYDD6H"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};

export default db;


