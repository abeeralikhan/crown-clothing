import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-L36oULx5cVJo4-TjhRRoji39dNhuWrI",
  authDomain: "crown-clothing-6a0b4.firebaseapp.com",
  projectId: "crown-clothing-6a0b4",
  storageBucket: "crown-clothing-6a0b4.appspot.com",
  messagingSenderId: "172525308307",
  appId: "1:172525308307:web:d86d1bf61413025ad30066",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
