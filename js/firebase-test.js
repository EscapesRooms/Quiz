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

    try {

        /* ==========================================
           CREAR ID ÚNICO
           ========================================== */

        const playerId =
        crypto.randomUUID();


        /* ==========================================
           CREAR JUGADOR EN FIRESTORE
           ========================================== */

        await setDoc(

            doc(
                db,
                "players",
                playerId
            ),

            {
                playerId: playerId,
                playerName: "Carlos",
                team: "Verde",
                score: 0
            }

        );


        /* ==========================================
           CONFIRMACIÓN
           ========================================== */

        alert(

            "Jugador creado:\n\n" +
            playerId

        );

    }
    catch(error){

        console.error(error);

        alert(
            "Error creando jugador"
        );

    }

});
