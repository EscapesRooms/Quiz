export const quizId = "ricard";
export const defaultLanguage = "ca";

const allQuestions = [
    {
        category: "El gran Quiz",
        question: "¿Menjar preferit de Júlia?",
        answers: ["Fricandó", "Arròs amb cigrons", "Escalivada", "Paella"],
        correct: 0,
        explanation: "Aquest coneixement no t'afectarà ni així ni així, però tampoc no et farà més ric.",
        translations: {
            es: {
                category: "El gran Quiz",
                question: "¿Cuál es la comida favorita de Júlia?",
                answers: ["Fricandó", "Arroz con garbanzos", "Escalivada", "Paella"],
                explanation: "Este conocimiento no te afectará ni de una forma ni de otra, pero tampoco te hará más rico."
            }
        }
    },
    {
        category: "El gran Quiz",
        question: "¿Com es deia el peluix que el seu germà li va arrencar un ull?",
        answers: ["Pepitu", "Lemur", "Pastanaga", "Dormilega"],
        correct: 2,
        explanation: "Una pregunta fàcil per a qui la coneix i una emboscada per la resta.",
        translations: {
            es: {
                category: "El gran Quiz",
                question: "¿Cómo se llamaba el peluche al que su hermano le arrancó un ojo?",
                answers: ["Pepitu", "Lemur", "Pastanaga", "Dormilega"],
                explanation: "Una pregunta fácil para quien la conoce y una emboscada para el resto."
            }
        }
    },
    {
        category: "El gran Quiz",
        question: "¿Nom de l'àvia paterna?",
        answers: ["Antonia", "Júlia", "Enriqueta", "Rita"],
        correct: 3,
        explanation: "Informació que només coneixen les persones més pròximes a Júlia.",
        translations: {
            es: {
                category: "El gran Quiz",
                question: "¿Cómo se llama su abuela paterna?",
                answers: ["Antonia", "Júlia", "Enriqueta", "Rita"],
                explanation: "Información que solo conocen las personas más cercanas a Júlia."
            }
        }
    },
    {
        category: "El gran Quiz",
        question: "¿Quin és el seu nom budista?",
        answers: ["Maya", "Prajna", "Ghala", "Manjari"],
        correct: 2,
        explanation: "Júlia probablement no esperava que aquesta dada acabés sent de domini públic.",
        translations: {
            es: {
                category: "El gran Quiz",
                question: "¿Cuál es su nombre budista?",
                answers: ["Maya", "Prajna", "Ghala", "Manjari"],
                explanation: "Probablemente Júlia no esperaba que este dato acabara siendo de dominio público."
            }
        }
    },
    {
        category: "El gran Quiz",
        question: "¿Quin és el seu color favorit?",
        answers: ["Groc", "Vermell", "Verd", "Blau"],
        correct: 0,
        explanation: "Si has fallat aquesta pregunta, la Júlia acaba de perdre una mica de fe en tu.",
        translations: {
            es: {
                category: "El gran Quiz",
                question: "¿Cuál es su color favorito?",
                answers: ["Amarillo", "Rojo", "Verde", "Azul"],
                explanation: "Si has fallado esta pregunta, Júlia acaba de perder un poco de fe en ti."
            }
        }
    },
    {
        category: "El gran Quiz",
        question: "¿Quants tatuatges té?",
        answers: ["entre 5 y 10", "Entre 10 y 20", "Entre 20 y 30", "Entre 30 y 40"],
        correct: 3,
        explanation: "Si has fallat aquesta pregunta, hauries de comptar-li de tant en tant.",
        translations: {
            es: {
                category: "El gran Quiz",
                question: "¿Cuántos tatuajes tiene?",
                answers: ["Entre 5 y 10", "Entre 10 y 20", "Entre 20 y 30", "Entre 30 y 40"],
                explanation: "Si has fallado esta pregunta, deberías contárselos de vez en cuando."
            }
        }
    },
    {
        category: "El gran Quiz",
        question: "¿Últim viatje que ha fet aquest estiu?",
        answers: ["Itàlia", "Grècia i Albània", "Portugal", "Vietnam"],
        correct: 1,
        explanation: "Un viatge que, per lo que es veu, va deixar petjada a la memòria de Júlia.",
        translations: {
            es: {
                category: "El gran Quiz",
                question: "¿Cuál fue el último viaje que hizo este verano?",
                answers: ["Italia", "Grecia y Albania", "Portugal", "Vietnam"],
                explanation: "Un viaje que, por lo que parece, dejó huella en la memoria de Júlia."
            }
        }
    },
    {
        category: "El gran Quiz",
        question: "¿Quina és la seva talla de peu?",
        answers: ["35", "35,5", "36", "36,5"],
        correct: 1,
        explanation: "Si has fallat aquesta pregunta, li deus unes sabates.",
        translations: {
            es: {
                category: "El gran Quiz",
                question: "¿Qué número de pie calza?",
                answers: ["35", "35,5", "36", "36,5"],
                explanation: "Si has fallado esta pregunta, le debes unos zapatos."
            }
        }
    },
    {
        category: "El gran Quiz",
        question: "¿Nom de la seva amiga de la infancia?",
        answers: ["Sara", "Berta", "Mari", "Paula"],
        correct: 2,
        explanation: "No tothom ha tingut el plaer de conèixer el àrbol genealògic complet.",
        translations: {
            es: {
                category: "El gran Quiz",
                question: "¿Cómo se llama su amiga de la infancia?",
                answers: ["Sara", "Berta", "Mari", "Paula"],
                explanation: "No todo el mundo ha tenido el placer de conocer el árbol genealógico completo."
            }
        }
    },
    {
        category: "El gran Quiz",
        question: "¿Nom del poble de l'àvia materna?",
        answers: ["Arroyo del Ojanco", "Beas de Segura", "Úbeda", "Arbuniel"],
        correct: 0,
        explanation: "Necessitaràs un mapa per trobar-lo.",
        translations: {
            es: {
                category: "El gran Quiz",
                question: "¿Cómo se llama el pueblo de su abuela materna?",
                answers: ["Arroyo del Ojanco", "Beas de Segura", "Úbeda", "Arbuniel"],
                explanation: "Necesitarás un mapa para encontrarlo."
            }
        }
    },
    {
        category: "El gran Quiz",
        question: "¿Quina beguda li agrada més?",
        answers: ["Vermut", "Vi Blanc", "Vi Negre", "Cervessa"],
        correct: 2,
        explanation: "Si has fallat aquesta pregunta, hauries de comprar-li una ampolla de vi.",
        translations: {
            es: {
                category: "El gran Quiz",
                question: "¿Qué bebida le gusta más?",
                answers: ["Vermut", "Vino blanco", "Vino tinto", "Cerveza"],
                explanation: "Si has fallado esta pregunta, deberías comprarle una botella de vino."
            }
        }
    },
    {
        category: "El gran Quiz",
        question: "¿Quin sobrenom utilizava el tio Antonio per referir-se a la Júlia?",
        answers: ["Porqueta", "Tonteta", "Nineta", "Ruqueta"],
        correct: 3,
        explanation: "Aquest mot la feia plorar.",
        translations: {
            es: {
                category: "El gran Quiz",
                question: "¿Qué apodo utilizaba el tío Antonio para referirse a Júlia?",
                answers: ["Porqueta", "Tonteta", "Nineta", "Ruqueta"],
                explanation: "Esta palabra la hacía llorar."
            }
        }
    },
    {
        category: "El gran Quiz",
        question: "¿Quin joc de mòbil li ha enganxat a jugar el seu pare recentment?",
        answers: ["Sudoku", "Vita Mahjong", "Tetris", "Snake"],
        correct: 1,
        explanation: "Tots dos son força dolents.",
        translations: {
            es: {
                category: "El gran Quiz",
                question: "¿A qué juego de móvil se ha enganchado a jugar su padre últimamente?",
                answers: ["Sudoku", "Vita Mahjong", "Tetris", "Snake"],
                explanation: "Los dos son bastante malos."
            }
        }
    },
    {
        category: "El gran Quiz",
        question: "¿Nom de la seva primera escola?",
        answers: ["CEIP Guinardó", "Escola Estel Guinardó", "La Salle Horta", "Escola del Mar"],
        correct: 3,
        explanation: "La escola on va passar la seva infància.",
        translations: {
            es: {
                category: "El gran Quiz",
                question: "¿Cómo se llamaba su primera escuela?",
                answers: ["CEIP Guinardó", "Escola Estel Guinardó", "La Salle Horta", "Escola del Mar"],
                explanation: "La escuela donde pasó su infancia."
            }
        }
    },
    {
        category: "El gran Quiz",
        question: "¿On estiuejava la Júlia quan era petita?",
        answers: ["Premià de Mar", "Blanes", "Segur de Calafell", "St Pol de Mar"],
        correct: 2,
        explanation: "L'estiu es una època especial per a Júlia.",
        translations: {
            es: {
                category: "El gran Quiz",
                question: "¿Dónde pasaba los veranos Júlia cuando era pequeña?",
                answers: ["Premià de Mar", "Blanes", "Segur de Calafell", "St Pol de Mar"],
                explanation: "El verano es una época especial para Júlia."
            }
        }
    }
];

export const questions = allQuestions;
window.questions = questions;
