let currentQuestion =
   parseInt(localStorage.getItem("currentQuestion"))
   || 0;
      /* ==========================================
         PRINCIPIO MODO DESARROLLO
         ========================================== */
      
      // Poner true sólo para pruebas
      const DEV_MODE = false;
      
      if(DEV_MODE){
      
          currentQuestion =
          questions.length - 1;
      
      }
  /* ==========================================
         FINAL MODO DESARROLLO
         ========================================== */
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
            
                                  /* ==========================================
                     MOSTRAR RESULTADO DE LA PREGUNTA
                     ========================================== */
                  
                  // Si el jugador ha acertado
                  if(
                      selectedAnswer !== null &&
                      selectedAnswer === q.correct
                  ){
                  
                      document.getElementById("resultBox").innerHTML =
                  
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
                  
                      // Si ha fallado o no ha respondido
                  
                      document.getElementById("resultBox").innerHTML =
                  
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
                setTimeout(() => {
            
                    currentQuestion++;
            
                    localStorage.setItem(
                        "currentQuestion",
                        currentQuestion
                    );
            
                    if (currentQuestion < questions.length) {
            
                        location.reload();
            
                    } else {
            
                                                /* ==========================================
                           ESTADÍSTICAS FINALES
                           ========================================== */
                        
                        // Recuperar datos del jugador
                        const playerName =
                        localStorage.getItem("playerName");
                        
                        const team =
                        localStorage.getItem("team");
                        
                        // Número de aciertos
                        const hits = score;
                        
                        // Número de fallos
                        const fails =
                        questions.length - score;
                        
                        // Porcentaje de acierto
                        const accuracy =
                        Math.round(
                            (score / questions.length) * 100
                        );
                        
                        
                        /* ==========================================
                           PANTALLA FINAL
                           ========================================== */
                        
                        document.body.innerHTML = `
                        
                        <div class="welcome-container">
                        
                            <h1 class="game-title">
                                🏆 JUEGO FINALIZADO
                            </h1>
                        
                            <div class="rules-box">
                        
                                <h2>
                                    👤 ${playerName}
                                </h2>
                        
                                <p>
                                    🏳️ Equipo: ${team}
                                </p>
                        
                                <br>
                        
                                <p>
                                    ✅ Aciertos: ${hits}
                                </p>
                        
                                <p>
                                    ❌ Fallos: ${fails}
                                </p>
                        
                                <p>
                                    🎯 Precisión: ${accuracy}%
                                </p>
                        
                                <br>
                        
                                <h2>
                                    🏆 Puntuación final:
                                    ${score} puntos
                                </h2>
                        
                            </div>
                        
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

/* ==========================================
   GUARDAR PROGRESO AUTOMÁTICAMENTE
   ========================================== */

// Antes de cerrar la pestaña,
// cambiar de página o recargar,
// guardar la pregunta actual y la puntuación.

window.addEventListener(
    "beforeunload",
    () => {

        // Guardar pregunta actual
        localStorage.setItem(
            "currentQuestion",
            currentQuestion
        );

        // Guardar puntuación
        localStorage.setItem(
            "score",
            score
        );

    }
);
