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

continueBtn.addEventListener("click", () => {

    localStorage.setItem(
        "playerName",
        playerName.value
    );

    localStorage.setItem(
        "team",
        selectedTeam
    );

    window.location.href = "rules.html";

});
