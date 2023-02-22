import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBZidOKP2ckQjrWmqIvs2tZFgiWiAEPIbw",
  authDomain: "monkey-blogging-43465.firebaseapp.com",
  projectId: "monkey-blogging-43465",
  storageBucket: "monkey-blogging-43465.appspot.com",
  messagingSenderId: "153922314154",
  appId: "1:153922314154:web:e9a10842b85f825b7a95d3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
