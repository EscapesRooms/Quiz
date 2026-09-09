import { getPlayersRanking } from "./player-service.js";

const rankingList = document.getElementById("rankingList");
const emptyState = document.getElementById("emptyState");
const refreshBtn = document.getElementById("refreshBtn");

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
        const players = await getPlayersRanking();
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
loadRanking();
