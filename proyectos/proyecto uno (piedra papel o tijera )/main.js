// variabeles globales 

let humanScore = 0;
let compucore = 0;

// eleccion humana
function play () {
function humanChoice (){
    let userChoice = prompt("escribe piedra papel o tijera " );

    
    switch (userChoice) {
        case "0" :
            return ("piedra");
            break;

        case "1" :
            return ("papel");
            break;

        case "2" :
            return ("tijera");
            break
    }
}

// funcion de elecccion de la computadora
function getComputerChoice (){
    let randomNumber = Math.floor(Math.random() *3);

    switch (randomNumber) {
        case 0 :
            return ("piedra");
            break;

        case 1 :
            return ("papel");
            break;

        case 2 :
            return ("tijera");
            break


    }
} 

let human = humanChoice();
let computer = getComputerChoice();


//variables de funcion 


function onePlay ( ) {
    console.log(`Humano: ${human}, Computadora: ${computer}`); // Mostrar elecciones

    if ((human == "papel" && computer == "papel"  )||(human == "piedra" && computer == "piedra" ) || (human == "tijera" && computer == "tijera" )){
        console.log(`Human score: ${humanScore}, Computer score: ${compucore}`);
        console.log( "Empate"); // Devolver mensaje de empate
    } else if ((human === "piedra" && computer === "tijeras" ) || (human === "papel" && computer === "piedra") ||(human === "tijera" && computer === "papel")) {
        humanScore++; // Incrementar puntaje del humano
        console.log(`Human score: ${humanScore}, Computer score: ${compucore}`);
        console.log( "Ganaste"); // Devolver mensaje de victoria
    } else {
        compucore++; // Incrementar puntaje de la computadora
        console.log(`Human score: ${humanScore}, Computer score: ${compucore}`);
        console.log("Perdiste"); // Devolver mensaje de derrota
    }
}

onePlay();

function playAgain () {
    let question = prompt("quieres jugar de nuevo ? ")
    switch (question) {
        case "si" :
            return play(); 
            break;
        case "no " :
            return console.log(fin)
    }
}
playAgain()
}

play()

function playAgain () {
    let question = prompt("quieres jugar de nuevo ? ")
    switch (question) {
        case "si" :
            return play(); 
            break;
        case "no " :
            return console.log(fin)
    }
}

playAgain();



