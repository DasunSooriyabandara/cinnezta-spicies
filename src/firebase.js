import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJUSElYgdQNv_-Dym3_rV_vsI5bcUS2og",
  authDomain: "cinnezta-9addd.firebaseapp.com",
  projectId: "cinnezta-9addd",
  storageBucket: "cinnezta-9addd.appspot.com",
  messagingSenderId: "227545053367",
  appId: "1:227545053367:web:8fd3484b756c02532ff532"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default app;
export { db }