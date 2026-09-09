function shuffleArray(items) {
    const array = [...items];

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

const allQuestions = [
    {
        category: "El Quiz de la Guarra",
        question: "¿Cuál es la comida favorita de Júlia?",
        answers: ["Pizza", "Sushi", "Tacos", "Paella"],
        correct: 1,
        explanation: "."
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Cuál es su DJ favorito/a?",
        answers: ["Nico Moreno", "Paul Kalkbrenner", "Amelie Lens", "Nova"],
        correct: 2,
        explanation: "."
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Cuál es el ultimo tatuaje que se ha hecho?",
        answers: ["Superpirriki", "Juguito de chocho", "Snitch Harry Potter", "Wine"],
        correct: 3,
        explanation: "."
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Cuál es su nombre budista?",
        answers: ["Maya", "Prajna", "Ghala", "Manjari"],
        correct: 2,
        explanation: "."
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Cuál es su color favorito?",
        answers: ["Amarillo", "Rojo", "Verde", "Azul"],
        correct: 1,
        explanation: "."
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Cuantos tatuajes tiene?",
        answers: ["entre 5 y 10", "Entre 10 y 20", "Entre 20 y 30", "Entre 30 y 40"],
        correct: 2,
        explanation: "."
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Último viaje que ha hecho con las madrastras de cenicienta (Lore y Xona)?",
        answers: ["Lisboa", "Turín", "Oporto", "Pais Vasco"],
        correct: 2,
        explanation: "."
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Qué talla de pie tiene?",
        answers: ["35", "35,5", "36", "36,5"],
        correct: 1,
        explanation: "."
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Nombres de su padre y de su hermano?",
        answers: ["Joan y Joaquin", "Ricard y Marc", "Pep y Josep", "Luis y Xavi"],
        correct: 1,
        explanation: "."
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Último color de pelo que ha tenido?",
        answers: ["Rosa", "Rojo", "Azúl", "Blanco"],
        correct: 3,
        explanation: "."
    }
];

export const questions = shuffleArray(allQuestions);
window.questions = questions;
