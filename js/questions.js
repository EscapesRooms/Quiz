const questions = [
{
    category: "Historia",
    question: "¿Qué civilización construyó Machu Picchu?",
    answers: ["Azteca","Maya","Inca","Olmeca"],
    correct: 2,
    explanation: "Machu Picchu fue construido por el Imperio Inca en el siglo XV."
},

{
    category: "Ciencia",
    question: "¿Qué elemento químico tiene el símbolo Ag?",
    answers: ["Oro","Argón","Plata","Aluminio"],
    correct: 2,
    explanation: "Ag proviene del latín Argentum, nombre de la plata."
},

{
    category: "Geografía",
    question: "¿Cuál es el único país que limita con Portugal?",
    answers: ["Francia","Andorra","España","Italia"],
    correct: 2,
    explanation: "Portugal comparte toda su frontera terrestre con España."
},

{
    category: "Tecnología",
    question: "¿En qué año se lanzó Windows 95?",
    answers: ["1993","1995","1998","2000"],
    correct: 1,
    explanation: "Windows 95 fue lanzado por Microsoft el 24 de agosto de 1995."
},

{
    category: "Música",
    question: "¿Qué grupo publicó el álbum 'The Dark Side of the Moon'?",
    answers: ["Queen","Pink Floyd","Genesis","Dire Straits"],
    correct: 1,
    explanation: "Pink Floyd lanzó este álbum en 1973."
},

{
    category: "Deportes",
    question: "¿Qué país ganó el Mundial de fútbol de 2010?",
    answers: ["Alemania","Brasil","Argentina","España"],
    correct: 3,
    explanation: "España ganó a Países Bajos en la final disputada en Sudáfrica."
},

{
    category: "Cine",
    question: "¿Quién dirigió la trilogía original de El Señor de los Anillos?",
    answers: ["James Cameron","Peter Jackson","Steven Spielberg","Ridley Scott"],
    correct: 1,
    explanation: "Peter Jackson dirigió la famosa trilogía basada en la obra de Tolkien."
},

{
    category: "Historia",
    question: "¿Qué batalla marcó la derrota definitiva de Napoleón?",
    answers: ["Austerlitz","Trafalgar","Waterloo","Leipzig"],
    correct: 2,
    explanation: "Napoleón fue derrotado definitivamente en Waterloo en 1815."
},

{
    category: "Geografía",
    question: "¿Cuál es la capital de Nueva Zelanda?",
    answers: ["Auckland","Christchurch","Wellington","Hamilton"],
    correct: 2,
    explanation: "Wellington es la capital del país."
},

{
    category: "Tecnología",
    question: "¿Qué significa SSD en informática?",
    answers: ["Solid State Drive","Super Speed Disk","System Storage Device","Secure System Drive"],
    correct: 0,
    explanation: "SSD significa Solid State Drive."
},

{
    category: "Ciencia",
    question: "¿Qué planeta tiene más lunas conocidas actualmente?",
    answers: ["Júpiter","Saturno","Urano","Neptuno"],
    correct: 1,
    explanation: "Saturno es actualmente el planeta con más satélites conocidos."
},

{
    category: "Música",
    question: "¿Qué compositor escribió 'Las Cuatro Estaciones'?",
    answers: ["Mozart","Bach","Vivaldi","Haydn"],
    correct: 2,
    explanation: "Antonio Vivaldi compuso esta famosa obra barroca."
},

{
    category: "Deportes",
    question: "¿Cuántos anillos tiene el símbolo olímpico?",
    answers: ["4","5","6","7"],
    correct: 1,
    explanation: "Los cinco anillos representan los cinco continentes habitados."
},

{
    category: "Geografía",
    question: "¿Qué desierto ocupa gran parte del norte de África?",
    answers: ["Gobi","Kalahari","Sáhara","Atacama"],
    correct: 2,
    explanation: "El Sáhara es el desierto cálido más grande del mundo."
},

{
    category: "Historia",
    question: "¿Quién fue el primer presidente de Estados Unidos?",
    answers: ["Thomas Jefferson","Abraham Lincoln","George Washington","John Adams"],
    correct: 2,
    explanation: "George Washington ocupó el cargo entre 1789 y 1797."
},

{
    category: "Tecnología",
    question: "¿Qué empresa creó el lenguaje Java?",
    answers: ["Microsoft","Sun Microsystems","IBM","Oracle"],
    correct: 1,
    explanation: "Java fue desarrollado por Sun Microsystems en los años 90."
},

{
    category: "Cine",
    question: "¿Qué actor interpreta a Iron Man en Marvel?",
    answers: ["Chris Evans","Chris Hemsworth","Robert Downey Jr.","Mark Ruffalo"],
    correct: 2,
    explanation: "Robert Downey Jr. interpretó a Tony Stark durante más de una década."
},

{
    category: "Ciencia",
    question: "¿Cuál es la velocidad aproximada de la luz en el vacío?",
    answers: ["300.000 km/s","150.000 km/s","3.000 km/s","3.000.000 km/s"],
    correct: 0,
    explanation: "La velocidad de la luz es de aproximadamente 300.000 km/s."
},

{
    category: "Geografía",
    question: "¿Qué país tiene forma de bota?",
    answers: ["Grecia","Italia","Portugal","Croacia"],
    correct: 1,
    explanation: "La península italiana es conocida por su característica forma de bota."
},

{
    category: "Música",
    question: "¿Qué artista lanzó el álbum 'Thriller'?",
    answers: ["David Bowie","Bruno Mars","Michael Jackson","Elton John"],
    correct: 2,
    explanation: "Thriller es el álbum más vendido de la historia."
},

{
    category: "Historia",
    question: "¿Qué barco se hundió en su viaje inaugural en 1912?",
    answers: ["Britannic","Titanic","Lusitania","Olympic"],
    correct: 1,
    explanation: "El RMS Titanic se hundió tras chocar con un iceberg."
},

{
    category: "Tecnología",
    question: "¿Qué sistema operativo utiliza el kernel Linux?",
    answers: ["Android","macOS","Windows","ChromeOS"],
    correct: 0,
    explanation: "Android está basado en el kernel Linux."
},

{
    category: "Deportes",
    question: "¿En qué deporte destaca Michael Phelps?",
    answers: ["Atletismo","Natación","Ciclismo","Remo"],
    correct: 1,
    explanation: "Michael Phelps es el deportista olímpico con más medallas."
},

{
    category: "Cine",
    question: "¿Cuál fue la primera película de Pixar?",
    answers: ["Bichos","Monstruos S.A.","Toy Story","Cars"],
    correct: 2,
    explanation: "Toy Story fue el primer largometraje completamente animado por ordenador."
},

{
    category: "Ciencia",
    question: "¿Qué órgano del cuerpo humano produce insulina?",
    answers: ["Hígado","Páncreas","Riñón","Bazo"],
    correct: 1,
    explanation: "La insulina es producida por células especializadas del páncreas."
},

{
    category: "Historia",
    question: "¿Qué imperio tenía su capital en Constantinopla?",
    answers: ["Romano","Bizantino","Persa","Otomano"],
    correct: 1,
    explanation: "Constantinopla fue la capital del Imperio Bizantino durante siglos."
},

{
    category: "Geografía",
    question: "¿Cuál es el lago más profundo del mundo?",
    answers: ["Victoria","Superior","Baikal","Titicaca"],
    correct: 2,
    explanation: "El lago Baikal, en Rusia, supera los 1.600 metros de profundidad."
},

{
    category: "Tecnología",
    question: "¿Qué significan las siglas HTML?",
    answers: ["HyperText Markup Language","High Transfer Machine Language","Hyper Tool Machine Language","Home Text Markup Language"],
    correct: 0,
    explanation: "HTML es el lenguaje de marcado utilizado para crear páginas web."
},

{
    category: "Música",
    question: "¿Qué instrumento utilizaba habitualmente Louis Armstrong?",
    answers: ["Trombón","Saxofón","Trompeta","Clarinete"],
    correct: 2,
    explanation: "Louis Armstrong fue uno de los trompetistas de jazz más influyentes."
},

{
    category: "Deportes",
    question: "¿Cuántos hoyos tiene una vuelta completa de golf profesional?",
    answers: ["9","12","18","24"],
    correct: 2,
    explanation: "Una ronda estándar de golf consta de 18 hoyos."
}
];
