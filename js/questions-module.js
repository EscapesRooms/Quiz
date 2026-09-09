function shuffleArray(items) {
    const array = [...items];

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

window.questions = shuffleArray([
    {
        category: "Persona",
        question: "¿Cuál es la comida favorita de esta persona?",
        answers: ["Pizza", "Sushi", "Tacos", "Paella"],
        correct: 0,
        explanation: "La pizza suele ser una elección muy típica cuando se habla de comida favorita en un perfil general."
    },
    {
        category: "Persona",
        question: "¿Qué tipo de música suele escuchar esta persona?",
        answers: ["Rock", "Reggaeton", "Jazz", "Clásica"],
        correct: 1,
        explanation: "En muchos perfiles, el reggaeton es una opción muy popular por su energía y ritmo."
    },
    {
        category: "Persona",
        question: "¿Cuál es su actividad favorita en su tiempo libre?",
        answers: ["Salir con amigos", "Leer", "Hacer deporte", "Ver series"],
        correct: 2,
        explanation: "La actividad más habitual de mucha gente suele ser hacer deporte como forma de desconectar."
    },
    {
        category: "Persona",
        question: "¿Qué lugar suele elegir para relajarse?",
        answers: ["La playa", "La montaña", "Un centro comercial", "El trabajo"],
        correct: 1,
        explanation: "La montaña suele asociarse con calma, paz y desconexión, por eso es una respuesta muy frecuente."
    },
    {
        category: "Persona",
        question: "¿Qué suele hacer cuando está nerviosa?",
        answers: ["Se pone a cantar", "Empieza a morderse las uñas", "Se queda quieta", "Se va a dormir"],
        correct: 1,
        explanation: "Morderse las uñas es un gesto muy típico cuando alguien está nervioso o ansioso."
    },
    {
        category: "Persona",
        question: "¿Qué tipo de película suele gustarle más?",
        answers: ["Comedia", "Terror", "Documental", "Acción"],
        correct: 0,
        explanation: "Las comedias suelen ser una respuesta muy común porque son agradables y fáciles de disfrutar."
    },
    {
        category: "Persona",
        question: "¿Qué tipo de viaje le encanta más?",
        answers: ["De playa", "De aventura", "De ciudad", "De trabajo"],
        correct: 1,
        explanation: "Los viajes de aventura suelen ser muy populares porque ofrecen experiencias nuevas y emocionantes."
    },
    {
        category: "Persona",
        question: "¿Qué animal le parece más adorable?",
        answers: ["Perro", "Tiburón", "Cocodrilo", "Araña"],
        correct: 0,
        explanation: "Los perros son una de las opciones más comunes en preguntas sobre animales adorables."
    },
    {
        category: "Persona",
        question: "¿Qué suele decir cuando quiere animarte?",
        answers: ["¡Tú puedes!", "¡Vamos a dormir!", "¡No te preocupes, no importa!", "¡Eso está mal!"],
        correct: 0,
        explanation: "“¡Tú puedes!” es una frase muy típica para motivar a otra persona."
    },
    {
        category: "Persona",
        question: "¿Cuál es su mayor sueño o meta?",
        answers: ["Viajar por el mundo", "Trabajar sin descanso", "Odiar cambiar", "No tener metas"],
        correct: 0,
        explanation: "Viajar por el mundo es una meta muy representativa de personas que buscan experiencias y libertad."
    }
]);
