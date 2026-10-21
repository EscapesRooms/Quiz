/* ==========================================
   IMPORTAR SERVICIO DE JUGADORES
   ========================================== */

import {
    updatePlayerScore,
    getPlayersRanking,
    subscribePlayersRanking
} from "./player-service.js";
import { getPlayerId } from "./firebase.js";

import { language, copy, questions, quizId } from "./quiz-config.js";

document.documentElement.lang = language;
document.title = copy.question;
document.getElementById("nextQuestionBtn").textContent = copy.next;

/* ==========================================
   VARIABLES DE ESTADO
   ========================================== */

const DEV_MODE = false;

let currentQuestion = parseInt(localStorage.getItem("currentQuestion"), 10) || 0;
let score = parseInt(localStorage.getItem("score"), 10) || 0;

if (DEV_MODE && questions.length > 0) {
    currentQuestion = questions.length - 1;
}

/* ==========================================
   VALIDAR PREGUNTAS
   ========================================== */

if (!questions || questions.length === 0) {
    document.body.innerHTML = `
        <div class="welcome-container">
            <h1 class="game-title">⚠️ ${copy.title}</h1>
            <div class="rules-box">
                <p>${copy.noQuestions}</p>
            </div>
        </div>
    `;

    throw new Error("No hay preguntas cargadas");
}

if (currentQuestion >= questions.length) {
    currentQuestion = 0;
    localStorage.setItem("currentQuestion", "0");
}

/* ==========================================
   CARGAR PREGUNTA ACTUAL
   ========================================== */

const q = questions[currentQuestion];

/* ==========================================
   MOSTRAR INFORMACIÓN
   ========================================== */

document.getElementById("questionCounter").textContent = `${copy.question} ${currentQuestion + 1} / ${questions.length}`;
document.getElementById("playerScore").textContent = `${copy.points}: ${score}`;
document.getElementById("category").textContent = q.category;
document.getElementById("question").textContent = q.question;

for (let i = 0; i < 4; i++) {
    document.getElementById("a" + i).textContent = q.answers[i];
}

/* ==========================================
   CONTROL DE RESPUESTA
   ========================================== */

let answered = false;
let selectedAnswer = null;
const buttons = document.querySelectorAll(".answer");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");

function escapeHtml(value){
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
    })[character]);
}

function renderFinalRanking(players){
    const rankingBody = document.getElementById("finalRankingBody");
    const rankingStatus = document.getElementById("finalRankingStatus");
    rankingBody.replaceChildren();

    if (players.length === 0) {
        rankingStatus.textContent = copy.rankingEmpty;
        return;
    }

    players.forEach((player, index) => {
        const row = document.createElement("tr");
        const updatedAt = player.updatedAt && Number.isFinite(Date.parse(player.updatedAt))
            ? new Date(player.updatedAt).toLocaleString(language === "ca" ? "ca-ES" : "es-ES")
            : "—";

        [
            String(index + 1),
            player.playerName || "Jugador",
            player.team || "General",
            String(player.score ?? 0),
            updatedAt
        ].forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        rankingBody.appendChild(row);
    });

    rankingStatus.textContent = copy.rankingLive;
}

async function refreshFinalRanking(){
    const refreshButton = document.getElementById("refreshRankingBtn");
    const rankingStatus = document.getElementById("finalRankingStatus");
    refreshButton.disabled = true;
    rankingStatus.textContent = copy.rankingLoading;

    try {
        renderFinalRanking(await getPlayersRanking(quizId));
    } catch (error) {
        console.error("Error cargando el ranking del quiz:", error);
        rankingStatus.textContent = copy.rankingLoadError;
    } finally {
        refreshButton.disabled = false;
    }
}

function goToNextQuestion() {
    currentQuestion += 1;
    localStorage.setItem("currentQuestion", String(currentQuestion));

    if (currentQuestion < questions.length) {
        location.reload();
        return;
    }

    const playerName = localStorage.getItem("playerName") || "Jugador";
    const team = localStorage.getItem("team") || "General";
    const playerId = localStorage.getItem("playerId") || "unknown";

    const hits = score;
    const fails = questions.length - score;
    const accuracy = Math.round((score / questions.length) * 100);

    let bestScore = parseInt(localStorage.getItem("bestScore"), 10) || 0;
    let newRecord = false;

    if (score > bestScore) {
        bestScore = score;
        newRecord = true;
        localStorage.setItem("bestScore", String(bestScore));
    }

    const finalMessage = score >= 10
        ? `<p class="prize-message">${copy.prizeWon}</p>`
        : `<p class="prize-message">${copy.prizeLost}</p>`;

    document.body.innerHTML = `
        <div class="welcome-container">
            <h1 class="game-title">🏆 ${copy.finished}</h1>
            <div class="rules-box">
                <h2>👤 ${playerName}</h2>
                <p>🏳️ ${copy.team}: ${team}</p>
                <br>
                <p>✅ ${copy.hits}: ${hits}</p>
                <p>❌ ${copy.misses}: ${fails}</p>
                <p>🎯 ${copy.accuracy}: ${accuracy}%</p>
                <p>🏆 ${copy.bestScore}: ${bestScore}</p>
                ${finalMessage}
                <br>
                <h2>🏆 ${copy.finalScore}: ${score}</h2>
            </div>
        </div>
    `;

    localStorage.setItem("currentQuestion", "0");
    localStorage.setItem("score", "0");
}

nextQuestionBtn.addEventListener("click", async () => {
    const playerName = localStorage.getItem("playerName") || "Jugador";
    const team = localStorage.getItem("team") || "General";
    if (currentQuestion >= questions.length - 1) {
        let bestScore = parseInt(localStorage.getItem("bestScore"), 10) || 0;
        let newRecord = false;

        if (score > bestScore) {
            bestScore = score;
            newRecord = true;
            localStorage.setItem("bestScore", String(bestScore));
        }

        try {
            const playerId = await getPlayerId();
            localStorage.setItem("playerId", playerId);
            await updatePlayerScore(quizId, playerId, playerName, team, score);
        } catch (error) {
            console.error("Error actualizando score:", error);
            window.alert(copy.scoreSaveError);
        }

        const finalMessage = score >= 10
            ? `<p class="prize-message">${copy.prizeWon}</p>`
            : `<p class="prize-message">${copy.prizeLost}</p>`;

        document.body.innerHTML = `
            <main class="welcome-container final-result">
                <h1 class="game-title">🏆 ${copy.finished}</h1>
                <div class="rules-box">
                    <h2>👤 ${escapeHtml(playerName)}</h2>
                    <p>🏳️ ${copy.team}: ${escapeHtml(team)}</p>
                    <br>
                    <p>✅ ${copy.hits}: ${score}</p>
                    <p>❌ ${copy.misses}: ${questions.length - score}</p>
                    <p>🎯 ${copy.accuracy}: ${Math.round((score / questions.length) * 100)}%</p>
                    <p>🏆 ${copy.bestScore}: ${bestScore}</p>
                    ${finalMessage}
                    <br>
                    <h2>🏆 ${copy.finalScore}: ${score}</h2>
                </div>
                <section class="final-ranking" aria-labelledby="finalRankingTitle">
                    <h2 id="finalRankingTitle">${copy.rankingTitle}</h2>
                    <p id="finalRankingStatus" aria-live="polite">${copy.rankingLoading}</p>
                    <button id="refreshRankingBtn" class="continue-btn" type="button">${copy.refreshRanking}</button>
                    <div class="final-ranking-table-wrap">
                        <table class="final-ranking-table">
                            <thead>
                                <tr>
                                    <th>${copy.rankingPosition}</th>
                                    <th>${copy.rankingPlayer}</th>
                                    <th>${copy.team}</th>
                                    <th>${copy.rankingScore}</th>
                                    <th>${copy.rankingUpdatedAt}</th>
                                </tr>
                            </thead>
                            <tbody id="finalRankingBody"></tbody>
                        </table>
                    </div>
                </section>
            </main>
        `;

        document.body.classList.add("has-final-result");
        document.getElementById("refreshRankingBtn").addEventListener("click", refreshFinalRanking);
        refreshFinalRanking();
        try {
            await subscribePlayersRanking(
                quizId,
                renderFinalRanking,
                error => {
                    console.error("Error en la actualización del ranking:", error);
                    document.getElementById("finalRankingStatus").textContent = copy.rankingLoadError;
                }
            );
        } catch (error) {
            console.error("No se pudo iniciar la actualización del ranking:", error);
            document.getElementById("finalRankingStatus").textContent = copy.rankingLoadError;
        }

        localStorage.setItem("currentQuestion", "0");
        localStorage.setItem("score", "0");
        return;
    }

    goToNextQuestion();
});

buttons.forEach((button, index) => {
    button.addEventListener("click", async () => {
        if (answered) return;

        answered = true;
        selectedAnswer = index;

        button.classList.add("selected");

        buttons.forEach((btn) => {
            btn.disabled = true;
            if (btn !== button) {
                btn.classList.add("answer--faded");
            }
        });

        document.getElementById("answerStatus").textContent = `✅ ${copy.submitted}`;

        if (selectedAnswer === q.correct) {
            score += 1;
            localStorage.setItem("score", String(score));
            document.getElementById("playerScore").textContent = `${copy.points}: ${score}`;
        }

        buttons[q.correct].classList.add("correct");

        if (selectedAnswer !== q.correct) {
            buttons[selectedAnswer].classList.add("wrong");
        }

        document.getElementById("resultBox").hidden = false;
        nextQuestionBtn.hidden = false;

        if (selectedAnswer === q.correct) {
            document.getElementById("resultBox").innerHTML = `
                <div class="result-correct">
                    <div class="result-title">✅ ${copy.correct}</div>
                        <p>+1 ${copy.points.toLowerCase()}</p>
                </div>
                <div class="result-info">
                        <strong>ℹ️ ${copy.information}</strong>
                    <br><br>
                    ${q.explanation}
                </div>
            `;
        } else {
            document.getElementById("resultBox").innerHTML = `
                <div class="result-wrong">
                    <div class="result-title">❌ ${copy.incorrect}</div>
                        <p>${copy.correctAnswer}</p>
                    <strong>✅ ${q.answers[q.correct]}</strong>
                </div>
                <div class="result-info">
                    <strong>ℹ️ ${copy.information}</strong>
                    <br><br>
                    ${q.explanation}
                </div>
            `;
        }

    });
});

/* ==========================================
   GUARDAR PROGRESO AUTOMÁTICAMENTE
   ========================================== */

window.addEventListener("beforeunload", () => {
    localStorage.setItem("currentQuestion", String(currentQuestion));
    localStorage.setItem("score", String(score));
});
