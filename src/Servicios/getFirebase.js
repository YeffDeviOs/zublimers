import firebase from "firebase"
import "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyB_Pxpfd5v4tdGAFcJOxfIBEJhyahpvfl0",
  authDomain: "ecommerce-zublimers.firebaseapp.com",
  projectId: "ecommerce-zublimers",
  storageBucket: "ecommerce-zublimers.appspot.com",
  messagingSenderId: "1057577102280",
  appId: "1:1057577102280:web:b34defe8af4e18f486aefd"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export function getFirebase() {
	return app
}


export function getFirestore() {
	return firebase.firestore(app)
}