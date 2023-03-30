import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyB8a8O82A-oSRFAxpkTK4wUdDjHWHFpELs",
    authDomain: "react-contact-27d8d.firebaseapp.com",
    projectId: "react-contact-27d8d",
    storageBucket: "react-contact-27d8d.appspot.com",
    messagingSenderId: "486428420559",
    appId: "1:486428420559:web:cca146026bb0e5fa6b4aba"
  };

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();