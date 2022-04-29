import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCW7xnglcmUhZU9_c5keceRY3YzuBH6BnE",
  authDomain: "encuesta-lyg.firebaseapp.com",
  projectId: "encuesta-lyg",
  storageBucket: "encuesta-lyg.appspot.com",
  messagingSenderId: "341140602721",
  appId: "1:341140602721:web:8ca1731890d72fca550f20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;