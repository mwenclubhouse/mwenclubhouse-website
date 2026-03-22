import { initializeApp } from "firebase/app";
// ============================================================================
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// ============================================================================

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FB_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGINGSENDER_ID,
    appId: process.env.NEXT_PUBLIC_FB_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FB_MEASUREMENT_ID
};


// Initialize Firebase (disable for now)
// @ts-ignore
export const app = initializeApp(firebaseConfig);