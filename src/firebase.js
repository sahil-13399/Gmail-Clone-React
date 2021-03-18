import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAEoaZmKKMoPeji8rsV0z7kvmA6vs6SzZ4",
    authDomain: "clone-76809.firebaseapp.com",
    projectId: "clone-76809",
    storageBucket: "clone-76809.appspot.com",
    messagingSenderId: "955425677114",
    appId: "1:955425677114:web:187941cdc0613f8c6bba03"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig); 
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};