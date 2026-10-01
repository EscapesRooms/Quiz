import { questions as spanishQuestions } from "./questions-module - Montse.js";
import { questions as catalanQuestions } from "./questions-module - Ricard.js";

const supportedLanguages = ["es", "ca"];
const requestedLanguage = new URLSearchParams(location.search).get("lang");

if (supportedLanguages.includes(requestedLanguage)) {
    localStorage.setItem("quizLanguage", requestedLanguage);
}

export const language = supportedLanguages.includes(localStorage.getItem("quizLanguage"))
    ? localStorage.getItem("quizLanguage")
    : "es";

export const questions = language === "ca" ? catalanQuestions : spanishQuestions;

export const copy = language === "ca" ? {
    title: "Quiz Battle",
    continueAs: "Continuar amb aquest jugador",
    changePlayer: "Canviar de jugador",
    playerConfigured: "Jugador configurat",
    savePlayerError: "No s'ha pogut desar el jugador.",
    languageChangeWarning: "Canviar l'idioma reiniciarà la partida desada. Vols continuar?",
    description: "Escriu el teu nom per començar el quiz i desar la puntuació.",
    playerPlaceholder: "Escriu el teu nom",
    start: "Començar quiz",
    languageLabel: "Idioma",
    rulesTitle: "Regles del joc",
    ruleNoTime: "No hi ha límit de temps per pregunta.",
    rulePoint: "Cada resposta correcta suma 1 punt.",
    rulePrize: "Aconsegueix 10 punts per guanyar el premi!",
    startGame: "Començar partida",
    continueGame: "Continuar partida",
    question: "Pregunta",
    points: "Punts",
    next: "Pregunta següent",
    submitted: "Resposta enviada",
    correct: "Correcte!",
    incorrect: "Incorrecte",
    correctAnswer: "Resposta correcta:",
    information: "Informació",
    finished: "Partida acabada",
    team: "Equip",
    hits: "Encerts",
    misses: "Errors",
    accuracy: "Precisió",
    bestScore: "Millor puntuació",
    finalScore: "Puntuació final",
    prizeWon: "Has guanyat el premi!",
    prizeLost: "Aquesta vegada no hi ha premi.",
    noQuestions: "No s'han carregat preguntes. Revisa la selecció del banc de preguntes."
} : {
    title: "Quiz Battle",
    continueAs: "Continuar como este jugador",
    changePlayer: "Cambiar de jugador",
    playerConfigured: "Jugador configurado",
    savePlayerError: "No se ha podido guardar el jugador.",
    languageChangeWarning: "Cambiar el idioma reiniciará la partida guardada. ¿Quieres continuar?",
    description: "Escribe tu nombre para comenzar el quiz y guardar tu puntuación.",
    playerPlaceholder: "Introduce tu nombre",
    start: "Comenzar quiz",
    languageLabel: "Idioma",
    rulesTitle: "Reglas del juego",
    ruleNoTime: "No hay límite de tiempo por pregunta.",
    rulePoint: "Cada respuesta correcta suma 1 punto.",
    rulePrize: "¡Consigue 10 puntos para ganar el premio!",
    startGame: "Comenzar partida",
    continueGame: "Continuar partida",
    question: "Pregunta",
    points: "Puntos",
    next: "Siguiente pregunta",
    submitted: "Respuesta enviada",
    correct: "¡Correcto!",
    incorrect: "Incorrecto",
    correctAnswer: "Respuesta correcta:",
    information: "Información",
    finished: "Partida finalizada",
    team: "Equipo",
    hits: "Aciertos",
    misses: "Fallos",
    accuracy: "Precisión",
    bestScore: "Mejor puntuación",
    finalScore: "Puntuación final",
    prizeWon: "¡Has ganado el premio!",
    prizeLost: "Esta vez no hay premio.",
    noQuestions: "No se han cargado preguntas. Revisa la selección del banco de preguntas."
};