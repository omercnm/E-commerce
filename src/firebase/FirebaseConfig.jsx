import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgPnrLEnqsVixgHdK_xtYvAuMEjZXTq6Y",
  authDomain: "luxe-e-commerce-513bc.firebaseapp.com",
  projectId: "luxe-e-commerce-513bc",
  storageBucket: "luxe-e-commerce-513bc.appspot.com",
  messagingSenderId: "759369515577",
  appId: "1:759369515577:web:b89487dbc6c01e6c7a83e8",
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
