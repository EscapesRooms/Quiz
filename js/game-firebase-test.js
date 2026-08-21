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
.getElementById("conti*ueBtn")
.addEventListener(
    "cl*ck",
    async () => {

        tr*{

            // Crear un ID únic*
            const playerId =
    *       crypto.randomUUID();

     *      // Guardar jugador
         *  await savePlayer(

             *  playerId,
                "Carlo*",
                "Verde",
      *         0

            );

      *     alert(

                "Juga*or creado:\n\n" +
                *layerId

            );

        }*        catch(error){

           *console.error(error);

           *alert(
                "Error guar*ando jugador"
            );

    *   }

    }
);
