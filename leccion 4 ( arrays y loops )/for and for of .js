// const cats = ["salvage ", "domestico", "egipcio", "persa" ]
// for of para arrays 
/*for (let cat of cats ) {
    console.log(cat);
}*/

// for para iteracion sin array 
/* function calculate (constNumber){
    for (let number = 0; number <= 10 ; number++) {
    const  result  = `${constNumber} * ${number} = ${constNumber * number}`;
    console.log(result)
    }
}

calculate(99)
*/

// cuanta regreiva de 10 a 0 
/*for (let i =10; i >= 0 ; i--){
    if(i == 10 ){
        console.log(`cuenta regresiva ${i}`)
    }else if (i == 0){
        console.log(`${i} Despegue !`)
    }else{
        console.log(`${i}`)
    }
}*/

// rechazar a phil y lola
const todosPeronas  = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const listaNueva = [];

const listaRechazados = [];

for (const nuevo of todosPeronas){
    if (nuevo == "Phil" || nuevo == "Lola"){
        console.log("rechazados")
        listaRechazados.push(nuevo)
    }else {
        console.log("Admitido")
        listaNueva.push(nuevo)
    }
}
console.log(listaNueva);
console.log(listaRechazados);
