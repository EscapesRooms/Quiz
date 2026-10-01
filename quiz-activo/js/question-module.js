/* ==========================================
   IMPORTAR SERVICIO DE JUGADORES
   ========================================== */

import {
    updatePlayerScore
} from "./player-service.js";

import { language, copy, questions } from "./quiz-config.js";

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
        ? `<p style="color:#facc15;font-weight:bold;font-size:1.2rem;margin-top:20px;">${copy.prizeWon}</p>`
        : `<p style="color:#facc15;font-weight:bold;font-size:1.2rem;margin-top:20px;">${copy.prizeLost}</p>`;

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
    const playerId = localStorage.getItem("playerId") || "unknown";

    if (currentQuestion >= questions.length - 1) {
        let bestScore = parseInt(localStorage.getItem("bestScore"), 10) || 0;
        let newRecord = false;

        if (score > bestScore) {
            bestScore = score;
            newRecord = true;
            localStorage.setItem("bestScore", String(bestScore));
        }

        try {
            await updatePlayerScore(playerId, playerName, team, score);
        } catch (error) {
            console.error("Error actualizando score:", error);
        }

        const finalMessage = score >= 10
            ? `<p style="color:#facc15;font-weight:bold;font-size:1.2rem;margin-top:20px;">${copy.prizeWon}</p>`
            : `<p style="color:#facc15;font-weight:bold;font-size:1.2rem;margin-top:20px;">${copy.prizeLost}</p>`;

        document.body.innerHTML = `
            <div class="welcome-container">
                <h1 class="game-title">🏆 ${copy.finished}</h1>
                <div class="rules-box">
                    <h2>👤 ${playerName}</h2>
                    <p>🏳️ ${copy.team}: ${team}</p>
                    <br>
                    <p>✅ ${copy.hits}: ${score}</p>
                    <p>❌ ${copy.misses}: ${questions.length - score}</p>
                    <p>🎯 ${copy.accuracy}: ${Math.round((score / questions.length) * 100)}%</p>
                    <p>🏆 ${copy.bestScore}: ${bestScore}</p>
                    ${finalMessage}
                    <br>
                    <h2>🏆 ${copy.finalScore}: ${score}</h2>
                </div>
            </div>
        `;

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
                btn.style.opacity = "0.4";
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

        document.getElementById("resultBox").style.display = "block";
        nextQuestionBtn.style.display = "block";

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
