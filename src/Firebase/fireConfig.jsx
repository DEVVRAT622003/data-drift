import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALReJk10W-3dtX8hAT-2pFcR0422Mz1D4",
  authDomain: "data-drift.firebaseapp.com",
  projectId: "data-drift",
  storageBucket: "data-drift.appspot.com",
  messagingSenderId: "970338028151",
  appId: "1:970338028151:web:e47117696f5804071fd472"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);

export {auth , app , googleProvider , fireDB , storage }