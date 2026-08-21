/* ==========================================
   IMPORTAR SERVICIO
   ========================================== */

import {
    updatePlayerScore
}
from "./player-service.js";


/* ==========================================
   BOTÓN DE PRUEBA
   ========================================== */

document
.getElementById("updateBtn")
.addEventListener(
    "click",
    async () => {

        try{

            const playerId =
            prompt(
                "Introduce PlayerID"
            );

            await updatePlayerScore(

                playerId,
                "Carlos",
                "Verde",
                99

            );

            alert(
                "Puntuación actualizada"
            );

        }
        catch(error){

            console.error(error);

            alert(
                "Error actualizando"
            );

        }

    }
);
