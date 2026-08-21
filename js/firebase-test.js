/* ==========================================
   IMPORTAR FIREBASE
   ========================================== */

import { db }
from "./firebase.js";

import {
    doc,
    setDoc
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


/* ==========================================
   BOTÓN DE PRUEBA
   ========================================== */

document
.getElementById("testBtn")
.addEventListener("click", async () => {

    try{

        await setDoc(

            doc(
                db,
                "players",
                "test"
            ),

            {
                playerName: "Carlos",
                team: "Verde",
                score: 10
            }

        );

        alert(
            "Documento creado correctamente"
        );

    }
    catch(error){

        console.error(error);

        alert(
            "Error creando documento"
        );

    }

});
