// variabeles globales 

let humanScore = 0;
let compucore = 0;
//variables de DOM




let humanChoice ; 
// eleccion humana
function play () {

    function resetDOM (){
        document.querySelector('.score').innerHTML = '';
        humanScore = 0;
        compucore =0 ;
    }

    resetDOM();

    function humanElection (){
        const buttons = document.querySelectorAll(".rock, .scissors, .paper");

        buttons.forEach(button =>{
            button.addEventListener ("click", (e) =>{
                if (e.target.classList.contains("rock")){
                    humanChoice="piedra";
                    console.log("elejio piedra");
                    onePlay();
                }else if  (e.target.classList.contains("paper")){
                    humanChoice="papel";
                    console.log("elejio papel");
                    onePlay();
                } else if (e.target.classList.contains("scissors")){
                    humanChoice= "tijeras";
                    console.log("elejio tijeras");
                    onePlay();
                }
            })
        })
    }

humanElection();

function getComputerChoice (){
    let randomNumber = Math.floor(Math.random() *3);

    switch (randomNumber) {
        case 0 :
            return ("piedra");

        case 1 :
            return ("papel");

        case 2 :
            return ("tijeras");


    }
} 

let computer = getComputerChoice();


//variables de funcion 


function onePlay ( ) {

    const div = document.querySelector(".score")

    const h1Div = document.createElement("h1")
    h1Div.textContent = `Humano: ${humanChoice}, Computadora: ${computer}`; // Mostrar elecciones
    div.appendChild(h1Div);

    if ((humanChoice== "papel" && computer == "papel"  )||(humanChoice == "piedra" && computer == "piedra" ) || (humanChoice== "tijeras" && computer == "tijeras" )){
        const scoreDiv = document.createElement("h3")
        const loseDiv= document.createElement("p")
        scoreDiv.textContent= `human score: ${humanScore}, Computer score: ${compucore}`;
        loseDiv.textContent= "Empate"; // Devolver mensaje de empate
        div.appendChild(loseDiv)
        div.appendChild(scoreDiv)

    } else if ((humanChoice=== "piedra" && computer === "tijeras" ) || (humanChoice=== "papel" && computer === "piedra") ||(humanChoice=== "tijeras" && computer === "papel")) {
        humanScore++; // Incrementar puntaje del humano
        const scoreDiv = document.createElement("h3")
        const winDiv= document.createElement("p")
        scoreDiv.textContent= `human score: ${humanScore}, Computer score: ${compucore}`;
        winDiv.textContent= "Ganaste"; // Devolver mensaje de victoria
        div.appendChild(winDiv)
        div.appendChild(scoreDiv)
    } else {
        compucore++; // Incrementar puntaje de la computadora
        const scoreDiv = document.createElement("h3")
        const loseDiv= document.createElement("p")
        scoreDiv.textContent= `human score: ${humanScore}, Computer score: ${compucore}`;
        loseDiv.textContent= "Perdiste"; // Devolver mensaje de derrota
        div.appendChild(loseDiv)
        div.appendChild(scoreDiv)
    }

    if(humanScore === 5){
        const win = document.createElement("h1")
        win.textContent="ganaste"
        document.body.appendChild(win);
        playAgain();
        resetDOM();
    }else if (compucore === 5 ) {
        const lose = document.createElement("h1")
        lose.textContent="perdiste"
        document.body.appendChild(lose);
        playAgain();
        resetDOM();
    }
}

}
play()

function playAgain () {
    let question = prompt("volver a jugar ?")
    switch (question) {
        case "si" :
            return play(); 
            
        case "no " :
            return console.log(fin)
    }
}






