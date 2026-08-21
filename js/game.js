let selectedTeam = "";

const teamButtons = document.querySelectorAll(".team");
const continueBtn = document.getElementById("continueBtn");
const selectedTeamText = document.getElementById("selectedTeam");
const playerName = document.getElementById("playerName");

teamButtons.forEach(button => {

    button.addEventListener("click", () => {

        selectedTeam = button.dataset.team;

        selectedTeamText.innerHTML =
        "Equipo seleccionado: <strong>" +
        selectedTeam +
        "</strong>";

        checkReady();

    });

});

playerName.addEventListener("input", checkReady);

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

    // Guardar nombre del jugador
    localStorage.setItem(
        "playerName",
        playerName.value
    );

    // Guardar equipo elegido
    localStorage.setItem(
        "team",
        selectedTeam
    );

    // Ir a la pantalla de normas
    window.location.href =
    "rules.html";

});
