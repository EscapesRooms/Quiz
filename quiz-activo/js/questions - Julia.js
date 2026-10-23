export const quizId = "julia";
export const defaultLanguage = "es";

const allQuestions = [
    {
        category: "El Quiz de la Guarra",
        question: "¿Cuál es la comida favorita de Júlia?",
        answers: ["Pizza", "Sushi", "Tacos", "Paella"],
        correct: 1,
        explanation: "Este conocimiento no te hará más rico, pero tampoco más pobre.",
        translations: {
            ca: {
                category: "El Quiz de la Guarra",
                question: "Quin és el menjar preferit de la Júlia?",
                answers: ["Pizza", "Sushi", "Tacos", "Paella"],
                explanation: "Aquest coneixement no et farà ni més ric ni més pobre."
            }
        }
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Cuál es su DJ favorito/a?",
        answers: ["Nico Moreno", "Paul Kalkbrenner", "Amelie Lens", "Nova"],
        correct: 2,
        explanation: "Una pregunta fácil para quien la conoce y una emboscada para el resto.",
        translations: {
            ca: {
                category: "El Quiz de la Guarra",
                question: "Qui és el seu DJ preferit?",
                answers: ["Nico Moreno", "Paul Kalkbrenner", "Amelie Lens", "Nova"],
                explanation: "Una pregunta fàcil per a qui la coneix i una emboscada per a la resta."
            }
        }
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Cuál es el ultimo tatuaje que se ha hecho?",
        answers: ["Homerpirriki", "Pussy juice", "PopCorn Planet", "Wine Not"],
        correct: 3,
        explanation: "Información que jamás pediste, pero que ahora te pertenece.",
        translations: {
            ca: {
                category: "El Quiz de la Guarra",
                question: "Quin és l'últim tatuatge que s'ha fet?",
                answers: ["Homerpirriki", "Pussy juice", "PopCorn Planet", "Wine Not"],
                explanation: "Una informació que no havies demanat mai, però que ara ja tens."
            }
        }
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Cuál es su nombre budista?",
        answers: ["Maya", "Prajna", "Ghala", "Manjari"],
        correct: 2,
        explanation: "Júlia probablemente no esperaba que este dato acabara siendo de dominio público.",
        translations: {
            ca: {
                category: "El Quiz de la Guarra",
                question: "Quin és el seu nom budista?",
                answers: ["Maya", "Prajna", "Ghala", "Manjari"],
                explanation: "Probablement la Júlia no s'esperava que aquesta dada acabés sent de domini públic."
            }
        }
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Cuál es su color favorito?",
        answers: ["Amarillo", "Rojo", "Verde", "Azul"],
        correct: 0,
        explanation: "Si has fallado esta pregunta, seguramente también preguntas quién es el novio en las bodas.",
        translations: {
            ca: {
                category: "El Quiz de la Guarra",
                question: "Quin és el seu color preferit?",
                answers: ["Groc", "Vermell", "Verd", "Blau"],
                explanation: "Si has fallat aquesta pregunta, segurament també preguntes qui és el nuvi als casaments."
            }
        }
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Cuantos tatuajes tiene?",
        answers: ["entre 5 y 10", "Entre 10 y 20", "Entre 20 y 30", "Entre 30 y 40"],
        correct: 2,
        explanation: "Si has fallado, quizás deberías empezar a tomar apuntes.",
        translations: {
            ca: {
                category: "El Quiz de la Guarra",
                question: "Quants tatuatges té?",
                answers: ["Entre 5 i 10", "Entre 10 i 20", "Entre 20 i 30", "Entre 30 i 40"],
                explanation: "Si has fallat, potser hauries de començar a prendre apunts."
            }
        }
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Último viaje que ha hecho con las madrastras de cenicienta (Lore y Xona)?",
        answers: ["Lisboa", "Turín", "Oporto", "Pais Vasco"],
        correct: 2,
        explanation: "Cada día aprendemos algo nuevo. Hoy te ha tocado esto.",
        translations: {
            ca: {
                category: "El Quiz de la Guarra",
                question: "Quin és l'últim viatge que ha fet amb les madrastres de la Ventafocs (Lore i Xona)?",
                answers: ["Lisboa", "Torí", "Porto", "País Basc"],
                explanation: "Cada dia aprenem alguna cosa nova. Avui t'ha tocat això."
            }
        }
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Qué talla de pie tiene?",
        answers: ["35", "35,5", "36", "36,5"],
        correct: 1,
        explanation: "Si has fallado esta pregunta, Júlia acaba de perder un poco de fe en ti.",
        translations: {
            ca: {
                category: "El Quiz de la Guarra",
                question: "Quina talla de peu calça?",
                answers: ["35", "35,5", "36", "36,5"],
                explanation: "Si has fallat aquesta pregunta, la Júlia acaba de perdre una mica de fe en tu."
            }
        }
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Nombres de su padre y de su hermano?",
        answers: ["Joan y Quim", "Ricard y Marc", "Pep y Josep", "Lluis y Xavi"],
        correct: 1,
        explanation: "No todo el mundo ha tenido el placer de conocer el árbol genealógico completo.",
        translations: {
            ca: {
                category: "El Quiz de la Guarra",
                question: "Com es diuen el seu pare i el seu germà?",
                answers: ["Joan i Quim", "Ricard i Marc", "Pep i Josep", "Lluís i Xavi"],
                explanation: "No tothom ha tingut el plaer de conèixer l'arbre genealògic complet."
            }
        }
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Último color de pelo que ha tenido?",
        answers: ["Rosa", "Rojo", "Azúl", "Blanco"],
        correct: 3,
        explanation: "La utilidad práctica de este dato sigue siendo objeto de estudio.",
        translations: {
            ca: {
                category: "El Quiz de la Guarra",
                question: "Quin és l'últim color de cabell que ha tingut?",
                answers: ["Rosa", "Vermell", "Blau", "Blanc"],
                explanation: "La utilitat pràctica d'aquesta dada encara és objecte d'estudi."
            }
        }
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Cuál es su bebida favorita en una noche de fiesta?",
        answers: ["Gin tonic", "Vodka con naranja", "Whisky Cola", "Cerveza"],
        correct: 2,
        explanation: "Hay preguntas que solo las personas cercanas resuelven con un 100% de seguridad.",
        translations: {
            ca: {
                category: "El Quiz de la Guarra",
                question: "Quina és la seva beguda preferida quan surt de festa?",
                answers: ["Gintònic", "Vodka amb taronja", "Whisky amb cola", "Cervesa"],
                explanation: "Hi ha preguntes que només les persones properes poden respondre amb un 100% de seguretat."
            }
        }
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Como se llama el chupito que crea para las fiestas de la Prospe con Berta y Natalia?",
        answers: ["ChupiFresk", "FreskBall", "FireFresk", "FreskShot"],
        correct: 1,
        explanation: "Un dato que solo los más cercanos a Júlia conocen, y que ahora también tú sabes.",
        translations: {
            ca: {
                category: "El Quiz de la Guarra",
                question: "Com es diu el xarrup que prepara per a les festes de la Prospe amb la Berta i la Natalia?",
                answers: ["ChupiFresk", "FreskBall", "FireFresk", "FreskShot"],
                explanation: "Una dada que només coneixen les persones més properes a la Júlia i que ara també saps tu."
            }
        }
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Que país visito hace unos años rodeada de amigos y tempestas?",
        answers: ["Bali", "Tailandia", "Filipinas", "Indonesia"],
        correct: 2,
        explanation: "Un viaje que, por lo que se ve, dejó huella en la memoria de Júlia.",
        translations: {
            ca: {
                category: "El Quiz de la Guarra",
                question: "A quin país va viatjar fa uns anys envoltada d'amics i tempestes?",
                answers: ["Bali", "Tailàndia", "Filipines", "Indonèsia"],
                explanation: "Un viatge que, pel que sembla, va deixar empremta en la memòria de la Júlia."
            }
        }
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Nombre de la primera escuela en la que estudió?",
        answers: ["CEIP Guinardó", "Escola Estel Guinardó", "La Salle Horta", "Escola del Mar"],
        correct: 3,
        explanation: "La primera etapa de la educación es fundamental para el desarrollo personal.",
        translations: {
            ca: {
                category: "El Quiz de la Guarra",
                question: "Com es deia la primera escola on va estudiar?",
                answers: ["CEIP Guinardó", "Escola Estel Guinardó", "La Salle Horta", "Escola del Mar"],
                explanation: "La primera etapa de l'educació és fonamental per al desenvolupament personal."
            }
        }
    },
    {
        category: "El Quiz de la Guarra",
        question: "¿Como suele llamar a irse de copas con amigos?",
        answers: ["Chelas", "Pirrikis", "Pirrichis", "Pichichis"],
        correct: 1,
        explanation: "Un apodo que solo los más cercanos a Júlia conocen, y que ahora también tú sabes.",
        translations: {
            ca: {
                category: "El Quiz de la Guarra",
                question: "Com sol dir que se'n va a prendre alguna cosa amb els amics?",
                answers: ["Chelas", "Pirrikis", "Pirrichis", "Pichichis"],
                explanation: "Un sobrenom que només coneixen les persones més properes a la Júlia i que ara també saps tu."
            }
        }
    }
];

export const questions = allQuestions;
window.questions = questions;
