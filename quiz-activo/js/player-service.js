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
    orderBy,
    onSnapshot
}
from "./firebase.js";

function rankingFromSnapshot(snapshot){
    return snapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
    }));
}

function mergeJuliaHistory(currentPlayers, historicalPlayers){
    const playersById = new Map(
        historicalPlayers
            .filter(player => player.updatedAt && Number.isFinite(Date.parse(player.updatedAt)))
            .map(player => [player.id, player])
    );

    for (const player of currentPlayers) {
        playersById.set(player.id, player);
    }

    return [...playersById.values()].sort((a, b) => b.score - a.score);
}

/* ==========================================
   CREAR O ACTUALIZAR JUGADOR
   ========================================== */

export async function savePlayer(

    playerId,
    playerName,
    team

){

    if(await getPlayerId() !== playerId){
        throw new Error("El jugador no coincide con la sesión autenticada");
    }

    await setDoc(
        doc(db, "players", playerId),
        {
            playerId,
            playerName,
            team
        },
        { merge: true }
    );

}

/* ==========================================
   ACTUALIZAR PUNTUACIÓN
   ========================================== */

export async function updatePlayerScore(

    quizId,
    playerId,
    playerName,
    team,
    score

){

    if(await getPlayerId() !== playerId){
        throw new Error("El jugador no coincide con la sesión autenticada");
    }

    await setDoc(
        doc(db, "quiz", quizId, "players", playerId),
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

export async function getPlayersRanking(quizId){

    await getPlayerId();

    const playersRef = collection(db, "quiz", quizId, "players");
    const rankingQuery = query(playersRef, orderBy("score", "desc"));
    const snapshot = await getDocs(rankingQuery);
    const currentPlayers = rankingFromSnapshot(snapshot);

    if (quizId !== "julia") {
        return currentPlayers;
    }

    const historicalPlayers = await getUnassignedLegacyRanking();
    return mergeJuliaHistory(currentPlayers, historicalPlayers);
}

export async function subscribePlayersRanking(quizId, onUpdate, onError){

    await getPlayerId();

    const playersRef = collection(db, "quiz", quizId, "players");
    const rankingQuery = query(playersRef, orderBy("score", "desc"));
    let currentPlayers = [];
    let historicalPlayers = [];
    let currentReady = false;
    let historicalReady = quizId !== "julia";

    const publishRanking = () => {
        if (!currentReady || !historicalReady) {
            return;
        }

        onUpdate(quizId === "julia"
            ? mergeJuliaHistory(currentPlayers, historicalPlayers)
            : currentPlayers);
    };

    const unsubscribeCurrent = onSnapshot(
        rankingQuery,
        snapshot => {
            currentPlayers = rankingFromSnapshot(snapshot);
            currentReady = true;
            publishRanking();
        },
        onError
    );

    if (quizId !== "julia") {
        return unsubscribeCurrent;
    }

    try {
        const historicalRef = collection(db, "players");
        const historicalQuery = query(historicalRef, orderBy("score", "desc"));
        const unsubscribeHistorical = onSnapshot(
            historicalQuery,
            snapshot => {
                historicalPlayers = rankingFromSnapshot(snapshot);
                historicalReady = true;
                publishRanking();
            },
            onError
        );

        return () => {
            unsubscribeCurrent();
            unsubscribeHistorical();
        };
    } catch (error) {
        unsubscribeCurrent();
        throw error;
    }
}

export async function getUnassignedLegacyRanking(){

    await getPlayerId();

    const playersRef = collection(db, "players");
    const rankingQuery = query(playersRef, orderBy("score", "desc"));
    const snapshot = await getDocs(rankingQuery);

    return rankingFromSnapshot(snapshot);

}
