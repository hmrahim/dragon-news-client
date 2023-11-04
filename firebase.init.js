// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ10152cio1AmV7w_JIWOimbu7_OVrn1E",
  authDomain: "dragon-newsbd.firebaseapp.com",
  projectId: "dragon-newsbd",
  storageBucket: "dragon-newsbd.appspot.com",
  messagingSenderId: "876605821575",
  appId: "1:876605821575:web:151c2cdb65ad5d4d831e22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app