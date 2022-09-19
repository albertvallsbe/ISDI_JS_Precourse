//https://quonomy.com/juego-de-pasapalabra-para-ninos-con-respuestas
//https://secoloma.wordpress.com/activitats/curs-2012-13/construim-un-passaparaula/
let questionsHP = [
  {
    letter: "a",
    answer: "alohomora",
    status: 0,
    question:
      "CON LA A. Hechizo utilizado para abrir cerraduras.",
  },
  {
    letter: "b",
    answer: "boggart",
    status: 0,
    question:
      "CON LA B. Ser que adopta la forma de lo que más teme la persona quien lo mira.",
  },
  {
    letter: "c",
    answer: "charlie",
    status: 0,
    question: "CON LA C. Pertenece a la familia Weasley y estudia dragones en Rumania.",
  },
  {
    letter: "d",
    answer: "dementor",
    status: 0,
    question:
      "CON LA D. Ser horrible que se alimenta de la felicidad y de los recuerdos alegres, dejando solo la tristeza y la desolación.",
  },
  {
    letter: "e",
    answer: "expelliarmus",
    status: 0,
    question:
      "CON LA E. Hechizo para desarmar a un enemigo.",
  },
  {
    letter: "f",
    answer: "fleur",
    status: 0,
    question: "CON LA F. Nombre de la participante en el Torneo de los Tres Magos del colegio Beauxbatons.",
  },
  {
    letter: "g",
    answer: "gigante",
    status: 0,
    question:
      "CON LA G. Especie a la que pertenece Grawp.",
  },
  {
    letter: "h",
    answer: "hedwig",
    status: 0,
    question: "CON LA H. Criatura con la que Sirius Black logró escapar de Hogwarts.",
  },
  {
    letter: "i",
    answer: "imperius",
    status: 0,
    question: "CON LA I. Maldición imperdonable que manipula la voluntad de la víctima.",
  },
  {
    letter: "j",
    answer: "james",
    status: 0,
    question:
      "CON LA J. Nombre del padre de Harry Potter.",
  },
  {
    letter: "k",
    answer: "krum",
    status: 0,
    question: "CON LA K. Apellido del mejor jugador de la selección Húngara de Quidditch.",
  },
  {
    letter: "l",
    answer: "lumos",
    status: 0,
    question: "CON LA L. Encantamiento que produce un haz de luz en la punta de la varita.",
  },
  {
    letter: "m",
    answer: "multijugos",
    status: 0,
    question:
      "CON LA M. Poción que preparan Harry, Ron y Hermione en los baños de Myrtle la Llorona.",
  },
  {
    letter: "n",
    answer: "nymphadora",
    status: 0,
    question: "CON LA N. Metamorfomaga o cambiaforma, prima de Draco Malfoy.",
  },
  {
    letter: "o",
    answer: "obliviate",
    status: 0,
    question:
      "CON LA O. Hechizo que te hace olvidar.",
  },
  {
    letter: "p",
    answer: "peeves",
    status: 0,
    question:
      "CON LA P. Poltergeist cuyo mayor temor es el Barón Sanguinario.",
  },
  {
    letter: "q",
    answer: "quisquilloso",
    status: 0,
    question:
      "CON LA Q. Revista dirigida por el padre de Luna Lovegood.",
  },
  { 
    letter: "r", 
    answer: "ridiculus", 
    status: 0, 
    question: "CON LA R. Hechizo para combartir a los boggarts."},
  {
    letter: "s",
    answer: "sectumsempra",
    status: 0,
    question: "CON LA S. Hechizo que utiliza Harry para combatir contra Malfoy, el cual encuentra en un misterioso libro de Pociones.",
  },
  {
    letter: "t",
    answer: "traslador",
    status: 0,
    question:
      "CON LA T. Objeto encantado que te transporta a otro lugar tras tocarlo.",
  },
  {
    letter: "u",
    answer: "umbridge",
    status: 0,
    question:
      "CON LA U. Apellido de la máxima inquisidora del Colegio Hogwarts.",
  },
  {
    letter: "v",
    answer: "veritaserum",
    status: 0,
    question:
      "CON LA V. Poción de la verdad.",
  },
  {
    letter: "w",
    answer: "wingardium",
    status: 0,
    question:
      "CON LA W. Con este hechizo Ron derrota a un Troll en su primer año de colegio.",
  },
  {
    letter: "x",
    answer: "xenophilius",
    status: 0,
    question: "CON LA X. Nombre del padre de Luna Lovegood.",
  },
  {
    letter: "y",
    answer: "diggory",
    status: 0,
    question:
      "CONTIENE LA Y. Apellido del campeón de Gryffindor fallecido a manos de Voldemort durante el Torneo de los Tres Magos.",
  },
  {
    letter: "z",
    answer: "zombies",
    status: 0,
    question:
      "CON LA Z. Tipo de criatura que son los Inferi en la cultura occidental.",
  },
];
let questionsSW = [
  {
    letter: "a",
    answer: "anakin",
    status: 0,
    question:
      "CON LA A. Nombre original de Darth Vader.",
  },
  {
    letter: "b",
    answer: "bowcaster",
    status: 0,
    question:
      "CON LA B. Arma preferida de Chewbacca.",
  },
  {
    letter: "c",
    answer: "caedus",
    status: 0,
    question: "CON LA C. Título Darth que recibió Jacen Solo tras su caída al lado oscuro.",
  },
  {
    letter: "d",
    answer: "darth",
    status: 0,
    question:
      "CON LA D. Título que reciben los Sith.",
  },
  {
    letter: "e",
    answer: "ewoks",
    status: 0,
    question:
      "CON LA E. Criaturas que viven en Endor y que ayudaron a los rebeldes a derrotar a la segunda Estrella de la Muerte.",
  },
  {
    letter: "f",
    answer: "falleen",
    status: 0,
    question: "CON LA F. Planeta de origen de la raza Falleen.",
  },
  {
    letter: "g",
    answer: "genosis",
    status: 0,
    question:
      "CON LA G. Planeta desértico done empezaron las Guerras Clon.",
  },
  {
    letter: "h",
    answer: "han",
    status: 0,
    question: "CON LA H. Nombre de pila del capitán del Halcón Milenario más conocido.",
  },
  {
    letter: "i",
    answer: "insectomorfos",
    status: 0,
    question: "CON LA I. Especie domesticada de cuatro patas del planeta Malastare que los soldados de Dug usaban como monturas en Star Wars: The Clone Wars.",
  },
  {
    letter: "j",
    answer: "jabba",
    status: 0,
    question:
      "CON LA J. Nombre del Hutt que dominó Tatooine hasta su muerte a manos de Leia Organa.",
  },
  {
    letter: "k",
    answer: "kamino",
    status: 0,
    question:
      "CON LA K. Planeta lluvioso conocido por sus instalaciones para la clonación.",
  },
  {
    letter: "l",
    answer: "lando",
    status: 0,
    question: "CON LA L. Nombre del anterior propietario del Halcón Milenario al que Han Solo ganó la nave en Bespin.",
  },
  {
    letter: "m",
    answer: "mara",
    status: 0,
    question:
      "CON LA M. Nombre de la esposa de Luke Skywalker desde el 19 DBY.",
  },
  {
    letter: "n",
    answer: "noruega",
    status: 0,
    question: "CON LA N. País dónde se filmaron las secuencias de Hoth.",
  },
  {
    letter: "o",
    answer: "organa",
    status: 0,
    question:
      "CON LA O. Apellido del último senador de Alderaan en la República y padre adoptivo de Leia Skywalker.",
  },
  {
    letter: "p",
    answer: "palpatine",
    status: 0,
    question:
      "CON LA P. Nombre del último canciller de la República Galáctica y primer Emperador Galáctico.",
  },
  {
    letter: "q",
    answer: "qui-gon",
    status: 0,
    question:
      "CON LA Q. Nombre de pila del maestro final de Obi-Wan Kenobi.",
  },
  { 
    letter: "r", 
    answer: "rojo", 
    status: 0, 
    question: 
      "CON LA R. Color del brazo de C-3PO en Star Wars: The Force Awakens. "},
  {
    letter: "s",
    answer: "saneamiento",
    status: 0,
    question: "CON LA S. Trabajo que Finn le dijo a Han Solo que tenía en la base Starkiller.",
  },
  {
    letter: "t",
    answer: "tusken",
    status: 0,
    question:
      "CON LA T. Raza autóctona de Tatooine derivada de los humanos.",
  },
  {
    letter: "u",
    answer: "utapau",
    status: 0,
    question:
      "CON LA U. Planeta en el que Grievous se ocultó, junto al Consejo Separatista, tras el ataque a su Mano Invisible. ",
  },
  {
    letter: "v",
    answer: "verde",
    status: 0,
    question:
      "CON LA V. Color del sable láser de Qui-Gon Jinn.",
  },
  {
    letter: "w",
    answer: "wyyrlok",
    status: 0,
    question:
      "CON LA W. Sobrenombre Darth del sith que sirvió en la Nueva Orden Sith, de raza Chagrian.",
  },
  {
    letter: "x",
    answer: "xanatos",
    status: 0,
    question: "CON LA X. Ex-aprendiz de Qui-Gon Jinn que cayó al lado oscuro.",
  },
  {
    letter: "y",
    answer: "yoda",
    status: 0,
    question: "CON LA Y. Legendario maestro Jedi, quien acabó exiliándose a Dagobah.",
  },
  {
    letter: "z",
    answer: "zabrak",
    status: 0,
    question: "CON LA Z. Raza del Sith Darth Maul.",
  },
];
let questionsAnillos = [
  {
    letter: "a",
    answer: "aragorn",
    status: 0,
    question: "CON LA A. Nombre real del montaraz al que apodaban Trancos.",
  },
  {
    letter: "b",
    answer: "boromir",
    status: 0,
    question: "CON LA B. Miembro de la comunidad del anillo que murió durante el viaje.",
  },
  {
    letter: "c",
    answer: " celebrant",
    status: 0,
    question: "CON LA C. Donde acaba Isildur cuando le tienden una emboscada y pierde el Anillo Único.",
  },
  {
    letter: "d",
    answer: "durin",
    status: 0,
    question: "CON LA D. Nombre de uno de los primeros siete padres de los enanos.",
  },
  {
    letter: "e",
    answer: "elrond",
    status: 0,
    question: "CON LA E. Medio elfo que enfrentó a Sauron y luchó en la Guerra de la Última Alianza y en la invasión de Eriador.",
  },
  {
    letter: "f",
    answer: "faramir",
    status: 0,
    question: "CON LA F. Hijo del Senescal de Gondor que consiguió resistir la tentación del Anillo Único.",
  },
  {
    letter: "g",
    answer: "gandalf",
    status: 0,
    question: "CON LA G. Mago que, tras su caída en Moria a manos del Balrog, volvió a la Tierra Media vestido totalmente de blanco.",
  },
  {
    letter: "h",
    answer: "híbridos",
    status: 0,
    question: "CON LA H. Constitución original de la raza de orcos.",
  },
  {
    letter: "i",
    answer: "istari",
    status: 0,
    question: "CON LA I. Grupo de Maiar que fueron enviados a la Tierra Media con la misión de liberar a los Pueblos Libres de la sombra de Sauron.",
  },
  {
    letter: "j",
    answer: "juramento",
    status: 0,
    question: "CON LA J. Pacto realizado por Fëanor y sus hijos al comienzo de la rebelión de los Noldor que les provocó un final terrible y maligno.",
  },
  {
    letter: "k",
    answer: "khamul",
    status: 0,
    question: "CON LA K. Único nombre conocido de uno de los nueve Nazgûl, cuyo poder casi alcanzaba al del Rey Brujo.",
  },
  {
    letter: "l",
    answer: "lembas",
    status: 0,
    question: "CON LA L. Pan élfico que ayuda a recupera las fuerzas de aquel que lo toma.",
  },
  {
    letter: "m",
    answer: "moria",
    status: 0,
    question: "CON LA M. Localización de la puerta donde aparece el mensaje: “Di amigo y entra. ",
  },
  {
    letter: "n",
    answer: "negra",
    status: 0,
    question: "CON LA N. Tipo de lengua utilizada en el Anillo del Poder.",
  },
  {
    letter: "o",
    answer: "orthanc",
    status: 0,
    question: "CON LA O. Torre de Saruman en la que se encuentra Gandalf cuando el Nazgûl persigue a los Hobbits en la frontera de la comarca.",
  },
  {
    letter: "p",
    answer: "pippin ",
    status: 0,
    question: "CON LA P. Quién pronunció en el Concilio de Elrond la siguiente frase: “os hace falta gente inteligente para este tipo de... misión... cometido... cosa” ",
  },
  {
    letter: "q",
    answer: "quebradas",
    status: 0,
    question: "CON LA Q. pequeñas colinas blancas formadas en la frontera oeste de la Comarca.",
  },
  { 
    letter: "r", 
    answer: "rohan", 
    status: 0, 
    question: "CON LA R. Reino fundado por los Hombres del Norte que ocupa las grandes llanuras, se caracterizan por ser amantes de los caballos y por ser los principales aliados del reino de Gondor."},
  {
    letter: "s",
    answer: "sindarin",
    status: 0,
    question: "CON LA S. Principal, y más importante, idioma de los elfos conocido y hablado a lo largo de la Tierra Media.",
  },
  {
    letter: "t",
    answer: "tirith",
    status: 0,
    question: "CON LA T. Ciudad cuyas minas están más próximas a Mordor.",
  },
  {
    letter: "u",
    answer: "urur",
    status: 0,
    question: "CON LA U. El hechizo que utiliza Gandalf para protegerse del primer ataque del Balrog contiene la flama de…",
  },
  {
    letter: "v",
    answer: "valar",
    status: 0,
    question: "CON LA V. Aquellos de los Ainur de mayor jerarquía que decidieron entrar en Eä para completar la visión de Ilúvatar.",},
  {
    letter: "w",
    answer: "wargos",
    status: 0,
    question: "CON LA W. Criaturas lobunas utilizadas como monturas por los orcos de Saruman.",
  },
  {
    letter: "y",
    answer: "yazneg",
    status: 0,
    question: "CON LA Y. Brutal capitán orco y caballero Wargo, segundo al mando de Azog.",
  },
  {
    letter: "z",
    answer: " zarcillo ",
    status: 0,
    question: "CON LA Z. Personaje que pertenece a la raza de los ents, cuya forma corporal se asemeja a un árbol y poseen capacidades humanas.",
  },
];

let playerName;
let wrongWord = 0;
let correctWord = 0;
let questionNumber = 0;
let questionSelected;
let isPlaying = true;
let players = [];
let counter;
let endCounter = false;

const welcome = () => alert('¡Bienvenido al juego PASAPALABRA edición películas!🎬📽');

const getPlayerName = () => {
            playerName = prompt('¿Cuál es tu nombre de usuario?');
            if (!playerName) { 
              alert('Necesitamos saber tu nombre de usuario para empezar el juego.')
                        return getPlayerName();
            } 
            console.log(`¡Hola ${playerName}, estás jugando a PASAPALABRA!`);
            return instructions();
};

const instructions = () => {
  
  alert(`¡Hola ${playerName}! Vamos a comentar las reglas del juego:
- Te daremos tres opciones temáticas.
- Tendrás 130 segundos para responder a todas la preguntas.
- Las respuestas correctas suman y las errónea restaran un punto. 
- Si no sabes la respuesta contesta "pasapalabra" para no perder el punto.
- Puedes terminar el juego en cualquier momento escribiendo "END".
- Si no completas toda la rueda no podrás ver tus puntuación total.
¡BUENA SUERTE! 🍀`);
}

const selectQuestions = () => {
  
  let options = prompt(`Selecciona la categoría que prefieres:
1. Harry Potter
2. Star Wars
3. El Señor de los Anillos
`);
  if(!options){
        alert('Tienes que escoger una de las categorías para poder empezar el juego.') 
        selectQuestions();
  } else {
    options = parseFloat(options);
    switch (options) {
        case 1:
            alert('¡Has escogido la catergoría de Harry Potter!')
            questionSelected = questionsHP;            
            break;
        case 2:
            alert('¡Has escogido la catergoría de Star Wars!')
            questionSelected = questionsSW;
            break;
        case 3:
            alert('¡Has escogido la catergoría de El Señor de los Anillos!')
            questionSelected = questionsAnillos;
            break;
        default:
            alert('Tienes que escoger una de las categorías para poder empezar el juego.')
            selectQuestions();
            break;
    }
  } 
}

const startGame = () => {  
  getPlayerName();
  selectQuestions();
  
  counter = timeCounter();
  if (Date.now() <= counter) {
      checkAnswers(); 
      if(isPlaying || endCounter){
         return;
       }
  }
}

const checkAnswers =()=>{

   do{
      if (counter < Date.now()) {
		alert("UPS! Se ha acabado el tiempo...");
		endCounter = true;
        endGame();
		return;
	  } 
      let userAnswers = prompt(questionSelected[questionNumber].question); 
        if (!userAnswers) {
             isPlaying = false;
             endGame();
             break;
            }
        if(userAnswers !== null){
            switch (userAnswers.toLowerCase()) {
                case questionSelected[questionNumber].answer:
                    alert(`¡CORRECTO! La respuesta es '${questionSelected[questionNumber].answer}'.`);
                    console.log(`Con la letra ${questionSelected[questionNumber].letter}: ${userAnswers.toLowerCase()} 🟢`)
                    questionSelected[questionNumber].status = 1;
                    questionNumber++;
                    correctWord++
                    break;
                case "pasapalabra":
                    alert("Has contestado 'pasapalabra', esta pregunta no puntuará.");
                    console.log(`Con la letra ${questionSelected[questionNumber].letter}: ${userAnswers.toLowerCase()} 🟡`)
                    questionNumber++;
                    break;
                case "end":
                    isPlaying = false;
                    endGame();
                    break;
                default:
                    alert(`¡ERROR! La respuesta correcta es '${questionSelected[questionNumber].answer}'.`);
                    console.log(`Con la letra ${questionSelected[questionNumber].letter}: ${userAnswers.toLowerCase()} 🔴`)
                    questionSelected[questionNumber].status = 2;
                    questionNumber++;
                    wrongWord++;
                    break;
        }
      }  
  }while (questionSelected[questionNumber].status === 0);  
   endGame();
   resetGame();
}

const resetGame = () => {
   questionNumber = 0;
   correctWord = 0;
   wrongWord = 0;
   isPlaying = true;
   endCounter = false;
}

const showRanking = () => {
  alert('¡Enhorabuena a todos los participantes!')
  players.sort((stepOne, stepTwo) => {
  return stepTwo.score - stepOne.score;
  });
  console.log("\n");
  console.log('Aquí esta el ranking de participantes:');
  players.forEach((player) => {
  console.log(`Usuario: ${player.user} - Puntuación: ${player.score}`);
  }); 
}

const newGame = () => confirm("¿Quieres jugar otra partida?")

const timeCounter = () => {
 let startCounter = new Date().getTime();
 let endCounter = startCounter + 200000 
 return endCounter;
}

const endGame = () => {
      if (!isPlaying){
          alert("Has cancelado la partida, tus resultados no quedarán guardados.");
          questionNumber=26;
          return;
      } 
        alert(`Enhorabuena ${playerName}, has terminado la partida. 
Has conseguido ${correctWord} aciertos y ${wrongWord} fallos.`);  
        let score = correctWord-wrongWord;
        console.log(`${playerName}, tu puntuación total es de ${score} puntos.`) 
        players.push({user: playerName, score: score});
}

const game =()=>{
  welcome();
  
  do{
  startGame();
  } while (newGame());
  
  showRanking();
  
  alert("¡Hasta la próxima!✨"); 

};

game();