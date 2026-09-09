/* ==========================================
   DATOS DEL JUGADOR
   ========================================== */

// Recuperar nombre guardado
const player =
localStorage.getItem("playerName");

// Recuperar equipo guardado
const team =
localStorage.getItem("team");

// Mostrar jugador y equipo si existe el contenedor
const playerInfo =
document.getElementById("playerInfo");

if(playerInfo){

    playerInfo.innerHTML = `

        <h2>${player}</h2>

        <h3>Equipo ${team}</h3>

    `;

}


/* ==========================================
   DATOS DE PARTIDA
   ========================================== */

// Recuperar pregunta actual
const currentQuestion =
parseInt(
    localStorage.getItem("currentQuestion")
) || 0;


// Recuperar puntuación
const score =
parseInt(
    localStorage.getItem("score")
) || 0;


// Referencia al botón continuar si existe
const continueBtn =
document.getElementById(
    "continueGameBtn"
);


/* ==========================================
   PARTIDA GUARDADA
   ========================================== */

if(currentQuestion > 0 && continueBtn){

    continueBtn.style.display =
    "inline-block";

    continueBtn.innerHTML =

    `↩️ Continuar partida
    <br>
    Pregunta ${currentQuestion + 1}
    <br>
    Puntos: ${score}`;

    const saveInfo =
    document.getElementById("saveInfo");

    if(saveInfo){

        saveInfo.innerHTML =

        `<p style="
        margin-bottom:20px;
        color:#4ade80;
        ">
        💾 Partida guardada detectada
        </p>`;

    }

}


/* ==========================================
   NUEVA PARTIDA
   ========================================== */

const newGameBtn =
document.getElementById("newGameBtn");

if(newGameBtn){

    newGameBtn
    .addEventListener("click",()=>{

        localStorage.setItem(
            "currentQuestion",
            0
        );

        localStorage.setItem(
            "score",
            0
        );

        window.location.href =
        "question-module.html";

    });

}


/* ==========================================
   CONTINUAR PARTIDA
   ========================================== */

if(continueBtn){

    continueBtn
    .addEventListener("click",()=>{

        window.location.href =
        "question-module.html";

    });

}
