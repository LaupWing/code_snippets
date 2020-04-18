import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz_Sjk8oIWswasR7vZ72wnaDbb8EceyIg",
    authDomain: "codesnippets-ccc09.firebaseapp.com",
    databaseURL: "https://codesnippets-ccc09.firebaseio.com",
    projectId: "codesnippets-ccc09",
    storageBucket: "codesnippets-ccc09.appspot.com",
    messagingSenderId: "209080404206",
    appId: "1:209080404206:web:d87159a7e7f1cc7aa6cbff",
    measurementId: "G-BFMW9E2325"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();