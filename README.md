# Quiz

El quiz compartido está en `quiz-activo/`. Usa `index.html` para iniciar; allí puedes elegir castellano o catalán. `Quiz/index.html` redirige a esta entrada y `admin.html` muestra el ranking.

## Cambiar las preguntas

Para elegir las preguntas en castellano, abre `quiz-activo/js/quiz-config.js` y cambia únicamente el archivo del import `spanishQuestions`, por ejemplo, entre `./questions - Julia.js` y `./questions - Montse.js`. No hace falta modificar la lógica del juego ni copiar preguntas a otro archivo. El idioma catalán sigue usando el banco indicado en el import `catalanQuestions`. Todos los bancos deben exportar `questions` con la misma estructura: `category`, `question`, `answers` (cuatro opciones), `correct` (índice de 0 a 3) y `explanation`.

Las traducciones de botones, reglas y resultados también están en `quiz-config.js`. El CSS y la dinámica se comparten entre ambos idiomas. Abre el quiz mediante un servidor local para que el navegador cargue los módulos JavaScript.

## Firebase

El proyecto usa autenticación anónima y Firestore. En Firebase Console, activa **Authentication > Sign-in method > Anonymous**. Después, desde esta carpeta, despliega las reglas con `firebase deploy --only firestore:rules`. Sin ese paso, Firestore seguirá rechazando los registros aunque el código esté publicado.
