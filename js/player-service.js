/* ==========================================
   SERVICIO DE JUGADORES
   ========================================== */

import {
    db,
    doc,
    setDoc
}
from "./firebase.js";


/* ==========================================
   CREAR O ACTUALIZAR JUGADOR
   ========================================== */

export async function savePlayer(

    playerId,
    playerName,
    team,
    score

){

    await setDoc(

        doc(
            db,
            "players",
            playerId
        ),

        {
            playerId,
            playerName,
            team,
            score
        }

    );

}
