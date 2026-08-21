/* ==========================================
   IMPORTAR SERVICIO DE JUGADORES
   ========================================== */

import {
    savePlayer
}
from "./player-service.js";


/* ==========================================
   BOTÓN DE PRUEBA
   ========================================== */

const continueBtn =
document.getElementById(
    "continueBtn"
);


/* ==========================================
   REGISTRO DE JUGADOR FIREBASE
   ========================================== */

continueBtn.addEventListener(
    "click",
    async () => {

        try{

            // Crear ID único
            const playerId =
            crypto.randomUUID();

            // Crear jugador prueba
            await savePlayer(

                playerId,
                "Carlos",
                "Verde",
                0

            );

            alert(
                "Jugador guardado en Firestore"
            );

        }
        catch(error){

            console.error(error);

            alert(
                "Error guardando jugador"
            );

        }

    }
);
