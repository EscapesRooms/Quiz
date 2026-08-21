/* ==========================================
   IMPORTAR FIREBASE
   ========================================== */

import { initializeApp }
from *https://www.gstatic.com/firebasejs*12.2.1/firebase-app.js";

import {*    getFirestore,
    doc,
    setDoc
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


/* ==========================================
   CONFIGURACIÓN FIREBASE
   ========================================== */

const firebaseConfig = {

    a*iKey: "AIzaSyBonaZQAH_5whKokDV8lnl*eP70WINPRTw",

    authDomain:
   *"quiz-teams-414d7.firebaseapp.com"*

    projectId:
    "quiz-teams-4*4d7",

    storageBucket:
    "qui*-teams-414d7.firebasestorage.app",*
    messagingSenderId:
    "83499*635016",

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


/* ==========================================
   EXPORTAR OBJETOS
   ========================================== */

export {
    db,
    doc,
*   setDoc
};
