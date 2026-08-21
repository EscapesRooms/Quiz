/* ==========================================
   IMPORTAR SERVICIO DE JUGADORES
   ========================================== */

import {
    savePlayer
}
from "./player-service.js";


/* ==========================================
   CREAR JUGADOR EN FIRESTORE
   ========================================== */

document
.getElementById("continueBtn")
.addEventListener(
    "click",
    async () => {

        try{

            // Crear un ID único
            const playerId =
            crypto.randomUUID();

            // Guardar jugador
            await savePlayer(

                playerId,
                "Carlos",
                "Verde",
                0

            );

            alert(

                "Jugador creado:\n\n" +
                playerId

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
