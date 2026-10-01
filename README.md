# Quiz

El quiz compartido está en `quiz-activo/`. Usa `index.html` para iniciar; allí puedes elegir castellano o catalán. `Quiz/index.html` redirige a esta entrada y `admin.html` muestra el ranking.

## Cambiar las preguntas

Abre `quiz-activo/js/quiz-config.js` y cambia los imports de `spanishQuestions` y `catalanQuestions` por los archivos del nuevo perfil. Cada archivo debe exportar `questions` con esta estructura: `category`, `question`, `answers` (cuatro opciones), `correct` (índice de 0 a 3) y `explanation`.

Las traducciones de botones, reglas y resultados también están en `quiz-config.js`. El CSS y la dinámica se comparten entre ambos idiomas. Abre el quiz mediante un servidor local para que el navegador cargue los módulos JavaScript.

## Firebase

El proyecto usa autenticación anónima y Firestore. En Firebase Console, activa **Authentication > Sign-in method > Anonymous**. Después, desde esta carpeta, despliega las reglas con `firebase deploy --only firestore:rules`. Sin ese paso, Firestore seguirá rechazando los registros aunque el código esté publicado.
