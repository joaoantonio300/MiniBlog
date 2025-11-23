import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey:,
  authDomain:,
  projectId: ,
  storageBucket:,
  messagingSenderId: ,
  appId: 
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth }

// lembrar que aqui é uma conf padrao 
// eu poderia ter chamado o getAuth aqui tbm mas n houve necessidade
