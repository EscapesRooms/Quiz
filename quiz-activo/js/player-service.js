/* ==========================================
   SERVICIO DE JUGADORES
   ========================================== */

import {
    db,
    getPlayerId,
    doc,
    setDoc,
    collection,
    getDocs,
    query,
    orderBy
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

    if(await getPlayerId() !== playerId){
        throw new Error("El jugador no coincide con la sesión autenticada");
    }

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

/* ==========================================
   ACTUALIZAR PUNTUACIÓN
   ========================================== */

export async function updatePlayerScore(

    playerId,
    playerName,
    team,
    score

){

    if(await getPlayerId() !== playerId){
        throw new Error("El jugador no coincide con la sesión autenticada");
    }

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
            score,
            updatedAt: new Date().toISOString()
        }

    );

}

/* ==========================================
   OBTENER RANKING
   ========================================== */

export async function getPlayersRanking(){

    await getPlayerId();

    const playersRef =
    collection(
        db,
        "players"
    );

    const rankingQuery =
    query(
        playersRef,
        orderBy("score", "desc")
    );

    const snapshot =
    await getDocs(rankingQuery);

    return snapshot.docs.map(
        item => ({
            id: item.id,
            ...item.data()
        })
    );

}
