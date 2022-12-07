import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {GoogleAuthProvider, getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
//import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSdxT9gyN3BAQ_usp2IWpvdj98soQA0Bs",
    authDomain: "whatsapp-clone-4462a.firebaseapp.com",
    projectId: "whatsapp-clone-4462a",
    storageBucket: "whatsapp-clone-4462a.appspot.com",
    messagingSenderId: "972120783698",
    appId: "1:972120783698:web:08d9ccef532d00833b588b",
    measurementId: "G-VT58V58FF8"
  };
   const firebaseApp = initializeApp (firebaseConfig);
   const db = getFirestore(firebaseApp);
   const auth = getAuth();
   const provider = new GoogleAuthProvider();
   const storage =getStorage();
   export {auth,provider, storage};
   export default db;
