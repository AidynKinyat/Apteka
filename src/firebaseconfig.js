import { initializeApp } from 'firebase/app';
import { getFirestore,setDoc,doc,updateDoc,getDocs, getDoc,collection,arrayUnion,addDoc} from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,updatePassword,updateEmail } from 'firebase/auth';

import {getStorage,ref,getDownloadURL,uploadBytes} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDZvH1fdOyrXDDsDWcSckXorbJOQSexMP4",
    authDomain: "second-now-333604.firebaseapp.com",
    databaseURL: "https://second-now-333604-default-rtdb.firebaseio.com",
    projectId: "second-now-333604",
    storageBucket: "second-now-333604.appspot.com",
    messagingSenderId: "133681558415",
    appId: "1:133681558415:web:2257aa35f5ae46d94a91fa",
    measurementId: "G-YTX4D09SVB"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth();
const database = getFirestore(app);
const storage=getStorage(app);

export{auth,getFirestore,database,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut};
export {setDoc,doc,updateDoc,getDoc,collection,getDocs,arrayUnion,storage,ref,getDownloadURL,uploadBytes,addDoc,updatePassword,updateEmail}
