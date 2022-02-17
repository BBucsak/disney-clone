import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDx1_u3pfQ3J066dREfaVHF6_UzlrHpKiI",
    authDomain: "disneyplus-clone-a02a6.firebaseapp.com",
    projectId: "disneyplus-clone-a02a6",
    storageBucket: "disneyplus-clone-a02a6.appspot.com",
    messagingSenderId: "788290262534",
    appId: "1:788290262534:web:c42b6ebdebdc708175d587"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  

  const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    });
};

