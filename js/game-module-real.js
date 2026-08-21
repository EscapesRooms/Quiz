/* ==========================================
   IMPORTAR SERVICIO DE JUGADORES
   ========================================== */

import {
    savePlayer
}
from "./player-service.js";

/* ==========================================
   VARIABLES
   ========================================== */

// Equipo seleccionado
let selectedTeam = "";
/* ==========================================
   ID ÚNICO DEL JUGADOR
   ========================================== */

// Recuperar ID existente
let playerId =
localStorage.getItem(
    "playerId"
);

// Si no existe crear uno
if(!playerId){

    playerId =
    crypto.randomUUID();

    localStorage.setItem(
        "playerId",
        playerId
    );

}

/* ==========================================
   REFERENCIAS HTML
   ========================================== */

// Botones de equipos
const teamButtons =
document.querySelectorAll(".team");

// Botón continuar
const continueBtn =
document.getElementById("continueBtn");

// Texto del equipo seleccionado
const selectedTeamText =
document.getElementById("selectedTeam");

// Campo nombre jugador
const playerName =
document.getElementById("playerName");


/* ==========================================
   DETECTAR JUGADOR EXISTENTE
   ========================================== */

// Recuperar jugador guardado
const savedPlayer =
localStorage.getItem("playerName");

// Recuperar equipo guardado
const savedTeam =
localStorage.getItem("team");

// Zona donde mostraremos la información
const savedPlayerInfo =
document.getElementById("savedPlayerInfo");

/* ==========================================
   JUGADOR YA CONFIGURADO
   ========================================== */

if(savedPlayer && savedTeam){

    savedPlayerInfo.innerHTML = `

        <div class="rules-box">

            <h2>
                👤 ${savedPlayer}
            </h2>

            <p>
                Equipo ${savedTeam}
            </p>

            <p>
                Jugador ya configurado
            </p>

        </div>

    `;

    // Mostrar acciones disponibles
    document
    .getElementById("existingPlayerActions")
    .style.display = "block";

    // Ocultar selector de nombre
    playerName.style.display = "none";

    // Ocultar equipos
    document
    .querySelector(".team-grid")
    .style.display = "none";

    // Ocultar texto equipo seleccionado
    selectedTeamText.style.display = "none";

    // Ocultar botón continuar normal
    continueBtn.style.display = "none";
}


/* ==========================================
   SELECCIÓN DE EQUIPO
   ========================================== */

teamButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Guardar equipo seleccionado
        selectedTeam =
        button.dataset.team;

        // Mostrar equipo en pantalla
        selectedTeamText.innerHTML =
        "Equipo seleccionado: <strong>" +
        selectedTeam +
        "</strong>";

        // Comprobar si puede continuar
        checkReady();

    });

});


/* ==========================================
   CONTROL DE FORMULARIO
   ========================================== */

// Revisar cambios en el nombre
playerName.addEventListener(
    "input",
    checkReady
);

// Activar o desactivar botón continuar
function checkReady(){

    if(
        playerName.value.trim() !== "" &&
        selectedTeam !== ""
    ){

        continueBtn.disabled = false;

    }
    else{

        continueBtn.disabled = true;

    }

}


/* ==========================================
   GUARDAR JUGADOR Y EQUIPO
   ========================================== */

/* ==========================================
   GUARDAR JUGADOR Y EQUIPO
   ========================================== */

continueBtn.addEventListener(
    "click",
    async () => {

        try{

            // Guardar nombre localmente
            localStorage.setItem(
                "playerName",
                playerName.value
            );

            // Guardar equipo localmente
            localStorage.setItem(
                "team",
                selectedTeam
            );

            /* ==========================================
               GUARDAR JUGADOR EN FIRESTORE
               ========================================== */

            await savePlayer(

                playerId,
                playerName.value,
                selectedTeam,
                0

            );

            console.log(
                "Jugador guardado en Firestore"
            );

            // Ir a normas
            window.location.href =
            "rules.html";

        }
        catch(error){

            console.error(
                "Error Firebase:",
                error
            );

            alert(
                "Error guardando jugador"
            );

        }

    }
);

/* ==========================================
   CONTINUAR CON JUGADOR EXISTENTE
   ========================================== */

const continueExistingPlayer =
document.getElementById(
    "continueExistingPlayer"
);

if(continueExistingPlayer){

    continueExistingPlayer
    .addEventListener("click",()=>{

        window.location.href =
        "rules.html";

    });

}

/* ==========================================
   CAMBIAR JUGADOR
   ========================================== */

const resetPlayerBtn =
document.getElementById(
    "resetPlayerBtn"
);

if(resetPlayerBtn){

    resetPlayerBtn
    .addEventListener("click",()=>{

        // Borrar TODO
        localStorage.removeItem(
            "playerName"
        );

        localStorage.removeItem(
            "team"
        );

        localStorage.removeItem(
            "score"
        );

        localStorage.removeItem(
            "currentQuestion"
        );

        // Recargar página
        location.reload();

    });

}
