# Quiz

El quiz compartido está en `quiz-activo/`. Usa `index.html` para iniciar; allí puedes elegir castellano o catalán. `Quiz/index.html` redirige a esta entrada y `admin.html` muestra el ranking.

## Cambiar las preguntas

El selector de idioma cambia el idioma de la interfaz y de las preguntas del mismo banco. Para elegir otro cuestionario, abre `quiz-activo/js/quiz-config.js` y cambia el archivo del import `activeQuestions` (por ejemplo, `./questions - Julia.js`, `./questions - Montse.js` o `./questions - Ricard.js`). No hay que elegir un banco distinto para cada idioma.

Cada banco debe exportar `questions`, `quizId` y `defaultLanguage` (`"es"` o `"ca"`). Las preguntas mantienen `category`, `question`, `answers` (cuatro opciones), `correct` (índice de 0 a 3) y `explanation` en su idioma predeterminado, y añaden `translations` para el otro idioma con esos mismos campos de texto. Por ejemplo:

```js
export const quizId = "mi-quiz";
export const defaultLanguage = "es";

export const questions = [
    {
        category: "Mi quiz",
        question: "¿Cuál es su color favorito?",
        answers: ["Rojo", "Azul", "Verde", "Amarillo"],
        correct: 1,
        explanation: "Una pista.",
        translations: {
            ca: {
                category: "El meu quiz",
                question: "Quin és el seu color preferit?",
                answers: ["Vermell", "Blau", "Verd", "Groc"],
                explanation: "Una pista."
            }
        }
    }
];
```

Mantén el mismo orden de respuestas en ambas traducciones y el mismo índice `correct` para que la respuesta acertada no cambie. Cada banco conserva un `quizId` estable para separar las puntuaciones. Los bancos actuales ya incluyen ambos idiomas. Las traducciones de botones, reglas y resultados están en `quiz-config.js`. Abre el quiz mediante un servidor local para que el navegador cargue los módulos JavaScript.

## Firebase

El proyecto usa autenticación anónima y Firestore. En Firebase Console, activa **Authentication > Sign-in method > Anonymous**. Los perfiles de jugador se guardan en `players`; las puntuaciones nuevas quedan separadas en `quiz/{quizId}/players` (por ejemplo, `quiz/montse/players/{playerId}`). Las puntuaciones históricas de `players` que tengan `updatedAt` también aparecen en el ranking de Júlia; los resultados actuales de Júlia prevalecen si un jugador ya tiene puntuación en ambas rutas. Los documentos de perfil sin puntuación no son resultados históricos y deben conservarse. Tras actualizar el código, publica las reglas desde esta carpeta con `firebase deploy --only firestore:rules`; Firestore creará las rutas al guardar los primeros resultados, sin crear colecciones a mano. Sin desplegar las reglas, Firestore rechazará la lectura y escritura de las nuevas puntuaciones.

Este proyecto comparte el mismo conjunto de reglas con los proyectos `Template` y los juegos. Mantén sincronizados sus archivos `firestore.rules`: incluyen las reglas del quiz y los accesos de las aventuras de Harry Potter y Stranger Things. Publicar las reglas desde cualquiera de los proyectos reemplaza la configuración remota compartida.

Al terminar una partida, la pantalla de resultados muestra y actualiza en tiempo real el ranking de ese quiz, con un botón para recargarlo manualmente. La página `admin.html` no se enlaza desde la experiencia de los jugadores. Si se publica como archivo estático, su URL sigue siendo accesible para quien la conozca; para restringir realmente el acceso al panel habría que añadir autenticación y reglas específicas para administradores.
