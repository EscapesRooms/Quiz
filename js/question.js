/* ==========================================
   PREGUNTA ACTUAL
   ========================================== */

// Recuperar pregunta guardada
let currentQuestion =
parseInt(
    localStorage.getItem("currentQuestion")
) || 0;


/* ==========================================
   MODO DESARROLLO
   ========================================== */

// Poner true sólo para pruebas
const DEV_MODE = false;

if(DEV_MODE){

    // Saltar directamente
    // a la última pregunta
    currentQuestion =
    questions.length - 1;

}


/* ==========================================
   PUNTUACIÓN
   ========================================== */

// Recuperar puntuación actual
let score =
parseInt(
    localStorage.getItem("score")
) || 0;


/* ==========================================
   VALIDAR PREGUNTA
   ========================================== */

if(currentQuestion >= questions.length){

    currentQuestion = 0;

    localStorage.setItem(
        "currentQuestion",
        0
    );

}


/* ==========================================
   CARGAR PREGUNTA
   ========================================== */

const q =
questions[currentQuestion];


/* ==========================================
   MOSTRAR INFORMACIÓN
   ========================================== */

// Mostrar número de pregunta
document.getElementById(
    "questionCounter"
).innerHTML =

`Pregunta ${currentQuestion + 1}
de ${questions.length}`;



// Mostrar puntuación
document.getElementById(
    "playerScore"
).innerHTML =

`Puntos: ${score}`;


// Mostrar categoría
document.getElementById(
    "category"
).textContent =

q.category;


// Mostrar pregunta
document.getElementById(
    "question"
).textContent =

q.question;


// Mostrar respuestas
for(let i = 0; i < 4; i++){

    document.getElementById(
        "a" + i
    ).textContent =

    q.answers[i];

}


/* ==========================================
   CONTROL DE RESPUESTA
   ========================================== */

let answered = false;

// Índice de la respuesta elegida
let selectedAnswer = null;


// Botones de respuesta
const buttons =
document.querySelectorAll(
    ".answer"
);


/* ==========================================
   EVENTOS DE RESPUESTA
   ========================================== */

buttons.forEach((button,index) => {

    button.addEventListener("click",() => {

        // Evitar responder dos veces
        if(answered) return;

        answered = true;

        // Guardar respuesta elegida
        selectedAnswer = index;

        // Resaltar respuesta
        button.classList.add(
            "selected"
        );

        // Desactivar el resto
        buttons.forEach(btn => {

            btn.disabled = true;

            if(btn !== button){

                btn.style.opacity =
                "0.4";

            }

        });

        // Mensaje informativo
        document.getElementById(
            "answerStatus"
        ).innerHTML =

        "✅ Respuesta enviada";

    });

});


/* ==========================================
   TEMPORIZADOR
   ========================================== */

let time = 15;

const timer =
document.getElementById(
    "timer"
);

timer.textContent = time;


/* ==========================================
   CUENTA ATRÁS
   ========================================== */

const interval = setInterval(() => {

    time--;

    if(time <= 0){

        timer.textContent = "0";

        clearInterval(interval);


        /* ==========================================
           DESACTIVAR RESPUESTAS
           ========================================== */

        buttons.forEach(btn => {

            btn.disabled = true;

        });


        /* ==========================================
           SUMAR PUNTOS
           ========================================== */

        if(
            selectedAnswer !== null &&
            selectedAnswer === q.correct
        ){

            score++;

            localStorage.setItem(
                "score",
                score
            );

        }


        /* ==========================================
           MARCAR RESPUESTAS
           ========================================== */

        // Correcta en verde
        buttons[q.correct]
        .classList.add("correct");


        // Incorrecta elegida en rojo
        if(
            selectedAnswer !== null &&
            selectedAnswer !== q.correct
        ){

            buttons[selectedAnswer]
            .classList.add("wrong");

        }


        /* ==========================================
           MOSTRAR RESULTADO
           ========================================== */

        document.getElementById(
            "resultBox"
        ).style.display =

        "block";


        // Si el jugador ha acertado
        if(
            selectedAnswer !== null &&
            selectedAnswer === q.correct
        ){

            document.getElementById(
                "resultBox"
            ).innerHTML =

            `
            <h3 style="color:#4ade80;">
                ✅ ¡CORRECTO!
            </h3>

            <p>
                +1 punto
            </p>

            <br>

            <p>
                ${q.explanation}
            </p>
            `;

        }
        else{

            document.getElementById(
                "resultBox"
            ).innerHTML =

            `
            <h3 style="color:#f87171;">
                ❌ INCORRECTO
            </h3>

            <p>
                La respuesta correcta era:
            </p>

            <p>
                <strong>
                    ✅ ${q.answers[q.correct]}
                </strong>
            </p>

            <br>

            <p>
                ${q.explanation}
            </p>
            `;

        }


        /* ==========================================
           SIGUIENTE PREGUNTA
           ========================================== */

        setTimeout(() => {

            currentQuestion++;

            localStorage.setItem(
                "currentQuestion",
                currentQuestion
            );


            if(
                currentQuestion <
                questions.length
            ){

                location.reload();

            }
            else{

                /* ==========================================
                   ESTADÍSTICAS FINALES
                   ========================================== */

                const playerName =
                localStorage.getItem(
                    "playerName"
                );

                const team =
                localStorage.getItem(
                    "team"
                );

                const hits = score;

                const fails =
                questions.length - score;

                const accuracy =
                Math.round(
                    (
                        score /
                        questions.length
                    ) * 100
                );


                /* ==========================================
                   PANTALLA FINAL
                   ========================================== */

                document.body.innerHTML =

                `
                <div class="welcome-container">

                    <h1 class="game-title">
                        🏆 JUEGO FINALIZADO
                    </h1>

                    <div class="rules-box">

                        <h2>
                            👤 ${playerName}
                        </h2>

                        <p>
                            🏳️ Equipo:
                            ${team}
                        </p>

                        <br>

                        <p>
                            ✅ Aciertos:
                            ${hits}
                        </p>

                        <p>
                            ❌ Fallos:
                            ${fails}
                        </p>

                        <p>
                            🎯 Precisión:
                            ${accuracy}%
                        </p>

                        <br>

                        <h2>
                            🏆 Puntuación final:
                            ${score} puntos
                        </h2>

                    </div>

                </div>
                `;


                /* ==========================================
                   REINICIAR PARTIDA
                   ========================================== */

                localStorage.setItem(
                    "currentQuestion",
                    0
                );

                localStorage.setItem(
                    "score",
                    0
                );

            }

        }, 5000);

        return;

    }

    timer.textContent = time;

}, 1000);


/* ==========================================
   GUARDAR PROGRESO AUTOMÁTICAMENTE
   ========================================== */

// Antes de cerrar la pestaña,
// cambiar de página o recargar,
// guardar pregunta y puntuación

window.addEventListener(

    "beforeunload",

    () => {

        localStorage.setItem(
            "currentQuestion",
            currentQuestion
        );

        localStorage.setItem(
            "score",
            score
        );

    }

);
