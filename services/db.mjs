import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let db = '';

export const getDB = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAuQ5tcKL5SaHCD7MKw6Us6bh7RHDvpG_w",
    authDomain: "investeazy.firebaseapp.com",
    databaseURL: "https://investeazy-default-rtdb.firebaseio.com",
    projectId: "investeazy",
    storageBucket: "investeazy.appspot.com",
    messagingSenderId: "205097259687",
    appId: "1:205097259687:web:cbe833395515e00acd8182",
    measurementId: "G-ENYDMWW7Q4"
  };

  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);

  return db;
}
