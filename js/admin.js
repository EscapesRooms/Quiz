import {
    getPlayersRanking,
    getUnassignedLegacyRanking
} from "../quiz-activo/js/player-service.js";

const rankingList = document.getElementById("rankingList");
const emptyState = document.getElementById("emptyState");
const refreshBtn = document.getElementById("refreshBtn");
const quizSelect = document.getElementById("quizSelect");

function renderRanking(players) {
    rankingList.innerHTML = "";

    if (!players || players.length === 0) {
        emptyState.style.display = "block";
        return;
    }

    emptyState.style.display = "none";

    players.forEach((player, index) => {
        const row = document.createElement("tr");

        const date = player.updatedAt
            ? new Date(player.updatedAt).toLocaleString("es-ES")
            : "Sin fecha";

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.playerName || "Sin nombre"}</td>
            <td>${player.team || "Sin equipo"}</td>
            <td>${player.score ?? 0}</td>
            <td>${date}</td>
        `;

        rankingList.appendChild(row);
    });
}

async function loadRanking() {
    try {
        let players;

        if (quizSelect.value === "legacy") {
            players = await getUnassignedLegacyRanking();
        } else {
            players = await getPlayersRanking(quizSelect.value);

            if (quizSelect.value === "julia") {
                const historicalPlayers = await getUnassignedLegacyRanking();
                const playersById = new Map(
                    historicalPlayers
                        .filter(player => player.updatedAt && Number.isFinite(Date.parse(player.updatedAt)))
                        .map(player => [player.id, player])
                );

                for (const player of players) {
                    playersById.set(player.id, player);
                }

                players = [...playersById.values()].sort((a, b) => b.score - a.score);
            }
        }

        renderRanking(players);
    }
    catch (error) {
        console.error("Error cargando ranking:", error);
        rankingList.innerHTML = `
            <tr>
                <td colspan="5">No se pudo cargar el ranking.</td>
            </tr>
        `;
    }
}

refreshBtn.addEventListener("click", loadRanking);
quizSelect.addEventListener("change", loadRanking);
loadRanking();
