let currentQuestion =
            parseInt(localStorage.getItem("currentQuestion")) || 0;
        let score =
        parseInt(localStorage.getItem("score")) || 0;

        if (currentQuestion >= questions.length) {
            currentQuestion = 0;
            localStorage.setItem("currentQuestion", 0);
        }

        const q = questions[currentQuestion];
        console.log(questions);
        console.log(q);

        document.getElementById("questionCounter").innerHTML =
        `Pregunta ${currentQuestion + 1} de ${questions.length}`;
        // Puntuacion Jugador
        document.getElementById("playerScore").innerHTML =
        `Puntos: ${score}`;

        document.getElementById("category").textContent =
            q.category;

        document.getElementById("question").textContent =
            q.question;

        for (let i = 0; i < 4; i++) {

            document.getElementById("a" + i).textContent =
                q.answers[i];

        }

        let answered = false;
        let pointAwarded = false; //proteccion extra para bucle de puntuacion

        // Guarda el índice de la respuesta elegida
        let selectedAnswer = null;

        const buttons =
            document.querySelectorAll(".answer");

        buttons.forEach((button, index) => {

            button.addEventListener("click", () => {

                if (answered) return;

                answered = true;
                // Guardamos la respuesta elegida
                selectedAnswer = index;

                button.classList.add("selected");

                buttons.forEach(btn => {

                    btn.disabled = true;

                    if (btn !== button) {
                        btn.style.opacity = "0.4";
                    }

                });

                document.getElementById("answerStatus").innerHTML =
                    "✅ Respuesta enviada";

            });

        });

        let time = 15;

        const timer =
            document.getElementById("timer");

        timer.textContent = time;

        const interval = setInterval(() => {

            time--;

            if(time <= 0){

                timer.textContent = "0";
            
                clearInterval(interval);
            
                // Desactivar todos los botones
                buttons.forEach(btn => {
            
                    btn.disabled = true;
            
                });
            
                // Si acierta suma 1 punto
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
            
                // Marcar correcta en verde
                buttons[q.correct].classList.add("correct");
            
                // Marcar incorrecta en rojo
                if(
                    selectedAnswer !== null &&
                    selectedAnswer !== q.correct
                ){
            
                    buttons[selectedAnswer]
                    .classList.add("wrong");
            
                }
            
                document.getElementById("resultBox").style.display =
                "block";
            
                document.getElementById("resultBox").innerHTML =
            
                "✅ Respuesta correcta: <strong>" +
                q.answers[q.correct] +
                "</strong><br><br>" +
                q.explanation;
            
                setTimeout(() => {
            
                    currentQuestion++;
            
                    localStorage.setItem(
                        "currentQuestion",
                        currentQuestion
                    );
            
                    if (currentQuestion < questions.length) {
            
                        location.reload();
            
                    } else {
            
                        document.body.innerHTML = `
            
                        <div class="welcome-container">
            
                            <h1 class="game-title">
                                🏆 Juego finalizado
                            </h1>
            
                            <h2>
                                Puntuación final: ${score}
                            </h2>
            
                        </div>
            
                        `;
            
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
