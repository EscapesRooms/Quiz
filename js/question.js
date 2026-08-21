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
            <div class="result-correct">
            
                <div class="result-title">
                    ✅ ¡CORRECTO!
                </div>
            
                <p>
                    +1 punto
                </p>
            
            </div>
            
            <div class="result-info">
            
                <strong>
                    ℹ️ Información
                </strong>
            
                <br><br>
            
                ${q.explanation}
            
            </div>
            `;

        }
        else{

            document.getElementById(
                "resultBox"
            ).innerHTML =

            `
            <div class="result-wrong">
            
                <div class="result-title">
                    ❌ INCORRECTO
                </div>
            
                <p>
                    Respuesta correcta:
                </p>
            
                <strong>
                    ✅ ${q.answers[q.correct]}
                </strong>
            
            </div>
            
            <div class="result-info">
            
                <strong>
                    ℹ️ Información
                </strong>
            
                <br><br>
            
                ${q.explanation}
            
            </div>
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
               RÉCORD PERSONAL
               ========================================== */
               
               // Recuperar mejor puntuación histórica
               let bestScore =
               parseInt(
                   localStorage.getItem("bestScore")
               ) || 0;
               
               // Indicar si se ha batido el récord
               let newRecord = false;
               
               // Si la puntuación actual es mejor
               if(score > bestScore){
               
                   bestScore = score;
               
                   newRecord = true;
               
                   // Guardar nuevo récord
                   localStorage.setItem(
                       "bestScore",
                       bestScore
                   );
               
               }

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

                        <p>
                            🏆 Mejor puntuación:
                            ${bestScore}
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
