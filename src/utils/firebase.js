// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAwKbz6Wo1UVp1BzKSJVXV6hTz3vwy74k8",
//   authDomain: "netflixgpt-57a56.firebaseapp.com",
//   projectId: "netflixgpt-57a56",
//   storageBucket: "netflixgpt-57a56.appspot.com",
//   messagingSenderId: "1093133802935",
//   appId: "1:1093133802935:web:c284961959cce2a54adc32",
//   measurementId: "G-DEHFXGZ999",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth();



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYy3S-TqhpnLjav_AzmiuvgvW4ME7GL8E",
  authDomain: "netflix-gpt-309b0.firebaseapp.com",
  projectId: "netflix-gpt-309b0",
  storageBucket: "netflix-gpt-309b0.appspot.com",
  messagingSenderId: "291088081446",
  appId: "1:291088081446:web:2749394aa38ed7b9843ce7",
  measurementId: "G-81198QJBFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
