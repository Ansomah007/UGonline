import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth"


// const firebaseConfig = {
//     apiKey: "AIzaSyB9HzNE4jBCMNGari2c9M6UknqK-pM1Ii4",
//     authDomain: "group20-ugonline.firebaseapp.com",
//     projectId: "group20-ugonline",
//     storageBucket: "group20-ugonline.appspot.com",
//     messagingSenderId: "43999445882",
//     appId: "1:43999445882:web:613f0679afd103286d0cc3"
// };
const firebaseConfig = {
    apiKey: "AIzaSyB9HzNE4jBCMNGari2c9M6UknqK-pM1Ii4",
    authDomain: "group20-ugonline.firebaseapp.com",
    projectId: "group20-ugonline",
    storageBucket: "group20-ugonline.appspot.com",
    messagingSenderId: "43999445882",
    appId: "1:43999445882:web:613f0679afd103286d0cc3"
  };


let app;

if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();


export {db, auth};