// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
    authDomain: "mwenclubhouse.firebaseapp.com",
    databaseURL: "https://mwenclubhouse.firebaseio.com",
    projectId: "mwenclubhouse",
    storageBucket: "mwenclubhouse.appspot.com",
    messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGINGSENDER_ID,
    appId: "1:284911242659:web:3a8b844394682b57839e16",
    measurementId: process.env.NEXT_PUBLIC_FB_MEASUREMENT_ID
};


// Initialize Firebase (disable for now)
// @ts-ignore
// export const app = undefined;
export const app = initializeApp(firebaseConfig);