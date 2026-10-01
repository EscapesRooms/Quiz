/* ==========================================
   IMPORTAR FIREBASE
   ========================================== */

import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
   getAuth,
   signInAnonymously
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    collection,
    getDocs,
    query,
    orderBy
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


/* ==========================================
   CONFIGURACIÓN FIREBASE
   ========================================== */

const firebaseConfig = {

    apiKey: "AIzaSyBonaZQAH_5whKokDV8lnl2eP70WINPRTw",

    authDomain:
    "quiz-teams-414d7.firebaseapp.com",

    projectId:
    "quiz-teams-414d7",

    storageBucket:
    "quiz-teams-414d7.firebasestorage.app",

    messagingSenderId:
    "834996635016",

    appId:
    "1:834996635016:web:c48a60c6643d27bb6c263d"

};


/* ==========================================
   INICIALIZAR FIREBASE
   ========================================== */

const app =
initializeApp(firebaseConfig);


/* ==========================================
   INICIALIZAR FIRESTORE
   ========================================== */

const db =
getFirestore(app);

const auth =
getAuth(app);

async function getPlayerId(){

   if(auth.currentUser){
      return auth.currentUser.uid;
   }

   const credential =
   await signInAnonymously(auth);

   return credential.user.uid;

}


/* ==========================================
   EXPORTAR OBJETOS
   ========================================== */

export {
    db,
   getPlayerId,
    doc,
    setDoc,
    getDoc,
    collection,
    getDocs,
    query,
    orderBy
};
