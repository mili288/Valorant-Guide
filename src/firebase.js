
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAEa4LJy49Pi3uaXu4KpqU7qD0XtcWKTw4",
  authDomain: "auth-development-f1bce.firebaseapp.com",
  projectId: "auth-development-f1bce",
  storageBucket: "auth-development-f1bce.appspot.com",
  messagingSenderId: "477198081201",
  appId: "1:477198081201:web:8aed63c1f1dbc1c1361690"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;