let selectedTeam = "";

const teamButtons = document.querySelectorAll(".team");
const continueBtn = document.getElementById("continueBtn");
const selectedTeamText = document.getElementById("selectedTeam");

teamButtons.forEach(button => {

    button.addEventListener("click", () => {

        selectedTeam = button.dataset.team;

        selectedTeamText.innerHTML =
            "Equipo seleccionado: <strong>" +
            selectedTeam +
            "</strong>";

        continueBtn.disabled = false;

        localStorage.setItem("team", selectedTeam);

    });

});

continueBtn.addEventListener("click", () => {

    alert("Perfecto. Más adelante irá a la pantalla de reglas.");

});
