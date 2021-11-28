import firebase from "firebase/compat/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBlN0Gk9oUGmsBKDBSoNnSr8v-u19hM6a4",
    authDomain: "recreate-5f12c.firebaseapp.com",
    projectId: "recreate-5f12c",
    storageBucket: "recreate-5f12c.appspot.com",
    messagingSenderId: "526526843793",
    appId: "1:526526843793:web:646ddffc3f05a17e522830",
    measurementId: "G-D9LG2N5NHG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export {db};