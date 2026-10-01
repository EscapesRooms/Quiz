/* ==========================================
   IMPORTAR SERVICIO DE JUGADORES
   ========================================== */

import {
    savePlayer
}
from "./player-service.js";

import { language, copy } from "./quiz-config.js";

document.documentElement.lang = language;
document.title = copy.title;
document.getElementById("gameTitle").textContent = copy.title;
document.getElementById("languageLabel").textContent = copy.languageLabel;
document.getElementById("language").value = language;
document.getElementById("description").textContent = copy.description;
document.getElementById("playerName").placeholder = copy.playerPlaceholder;
document.getElementById("continueBtn").textContent = copy.start;
document.getElementById("continueExistingPlayer").textContent = copy.continueAs;
document.getElementById("resetPlayerBtn").textContent = copy.changePlayer;

document.getElementById("language").addEventListener("change", (event) => {
    const hasProgress = Number(localStorage.getItem("currentQuestion")) > 0
        || Number(localStorage.getItem("score")) > 0;

    if (hasProgress && !window.confirm(copy.languageChangeWarning)) {
        event.target.value = language;
        return;
    }

    localStorage.removeItem("currentQuestion");
    localStorage.removeItem("score");
    localStorage.setItem("quizLanguage", event.target.value);
    location.reload();
});

/* ==========================================
   VARIABLES
   ========================================== */

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

// Botón continuar
const continueBtn =
document.getElementById("continueBtn");

// Campo nombre jugador
const playerName =
document.getElementById("playerName");


/* ==========================================
   DETECTAR JUGADOR EXISTENTE
   ========================================== */

// Recuperar jugador guardado
const savedPlayer =
localStorage.getItem("playerName");

// Zona donde mostraremos la información
const savedPlayerInfo =
document.getElementById("savedPlayerInfo");

/* ==========================================
   JUGADOR YA CONFIGURADO
   ========================================== */

if(savedPlayer){

    savedPlayerInfo.innerHTML = `

        <div class="rules-box">

            <h2>
                👤 ${savedPlayer}
            </h2>

            <p>
                ${copy.playerConfigured}
            </p>

        </div>

    `;

    // Mostrar acciones disponibles
    document
    .getElementById("existingPlayerActions")
    .style.display = "block";

    // Ocultar selector de nombre
    playerName.style.display = "none";

    // Ocultar botón continuar normal
    continueBtn.style.display = "none";
}


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
        playerName.value.trim() !== ""
    ){

        continueBtn.disabled = false;

    }
    else{

        continueBtn.disabled = true;

    }

}

// Ejecutar validación inicial para casos con valor ya rellenado
checkReady();


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

            const playerNameValue =
            playerName.value.trim();

            if(!playerNameValue){
                return;
            }

            // Guardar nombre localmente
            localStorage.setItem(
                "playerName",
                playerNameValue
            );

            // Guardar equipo localmente como valor por defecto
            localStorage.setItem(
                "team",
                "General"
            );

            /* ==========================================
               GUARDAR JUGADOR EN FIRESTORE
               ========================================== */

            await savePlayer(

                playerId,
                playerNameValue,
                "General",
                0

            );

            console.log(
                "Jugador guardado en Firestore"
            );

            // Ir a normas
            window.location.href =
            "rules-module.html";

        }
        catch(error){

            console.error(
                "Error Firebase:",
                error
            );

            alert(copy.savePlayerError);

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
        "rules-module.html";

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
