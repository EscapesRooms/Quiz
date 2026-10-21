# Quiz

El quiz compartido está en `quiz-activo/`. Usa `index.html` para iniciar; allí puedes elegir castellano o catalán. `Quiz/index.html` redirige a esta entrada y `admin.html` muestra el ranking.

## Cambiar las preguntas

Para elegir las preguntas en castellano, abre `quiz-activo/js/quiz-config.js` y cambia únicamente el archivo del import `spanishQuestions`, por ejemplo, entre `./questions - Julia.js` y `./questions - Montse.js`. No hace falta modificar la lógica del juego ni copiar preguntas a otro archivo. El idioma catalán sigue usando el banco indicado en el import `catalanQuestions`. Cada banco exporta `questions` con la misma estructura (`category`, `question`, `answers` con cuatro opciones, `correct` como índice de 0 a 3 y `explanation`) y un `quizId` estable para separar las puntuaciones.

Las traducciones de botones, reglas y resultados también están en `quiz-config.js`. El CSS y la dinámica se comparten entre ambos idiomas. Abre el quiz mediante un servidor local para que el navegador cargue los módulos JavaScript.

## Firebase

El proyecto usa autenticación anónima y Firestore. En Firebase Console, activa **Authentication > Sign-in method > Anonymous**. Los perfiles de jugador se guardan en `players`; las puntuaciones nuevas quedan separadas en `quiz/{quizId}/players` (por ejemplo, `quiz/montse/players/{playerId}`). Las puntuaciones anteriores permanecen en `players` como histórico sin clasificar. Tras actualizar el código, publica las reglas desde esta carpeta con `firebase deploy --only firestore:rules`; Firestore creará las rutas al guardar los primeros resultados, sin crear colecciones a mano. Sin desplegar las reglas, Firestore rechazará la lectura y escritura de las nuevas puntuaciones.
