// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9XLcREbkcyshUizOhJfSx_GfydzNX4jE",
  authDomain: "hotel-management-native.firebaseapp.com",
  projectId: "hotel-management-native",
  storageBucket: "hotel-management-native.appspot.com",
  messagingSenderId: "546390649981",
  appId: "1:546390649981:web:58febff6ac7961eb701514"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);