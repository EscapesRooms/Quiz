/* ==========================================
   VARIABLES
   ========================================== */

// Equipo seleccionado
let selectedTeam = "";


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

// Si existe un jugador guardado
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
                Ya existe un jugador configurado.
            </p>

        </div>

    `;
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

continueBtn.addEventListener("click", () => {

    // Guardar nombre
    localStorage.setItem(
        "playerName",
        playerName.value
    );

    // Guardar equipo
    localStorage.setItem(
        "team",
        selectedTeam
    );

    // Ir a normas
    window.location.href =
    "rules.html";

});
