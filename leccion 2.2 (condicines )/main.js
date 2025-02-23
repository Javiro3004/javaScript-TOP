/* 
// condicionales 

let x = 10;
let y = 5 

if ( x > y) {
    console.log(`${x} es mayor a ${y}`)
}

// tabla de verdad or 

console.log(true || true ) ;// true 
console.log(true || false ) ;// true 
console.log(false || true ) ;// true 
console.log(false || false ); // false 

let hour = 15;

if (hour < 6 || hour > 18  ) {
    console.log (`son las ${hour} horas nuestra oficina estan cerradas abrimos de las 6 a las 18 horas`);
}else{
    console.log(`son las ${hour} horas nuestra oficina esta abierta de las `)
}


// tabla de verdad and 

console.log(true && true ); // true 
console.log(false && true ); // false 
console.log(true && false  ); // false 
console.log(false  && false  ); // false 

let time = 20;

if (time >= 1 && time <= 12 ) {
    console.log(`hola son las ${time }:00 a.m buenos dias ` )
}else if (time >= 13 && time  <= 18 ){
    console.log(`hola son las ${time }:00 p.m buenas tardes ` )
}else {
    console.log(`${time }:00 p.m buenas noches  `)
}

// tabla de verdad not

console.log(!true); // false 
console.log(!false); // true 
*/

// ejercicio 

/*let number = prompt("ingresa un number");

let toNumber = Number(number);

function numberChecker() {
	if(toNumber >= 10) {
        return true 
	} else {
        return false 
	}
}

console.log(numberChecker());

if(toNumber >= 10) {
	console.log("El número es mayor o igual a 10");
} else {
	console.log("unexpectd error");
}*/

// ejercicio 2

/*
const a = 1 + 8 ;
const b = 22 * 3 ; 
const c = 5 % 4 ;
const d = a - 27
const e = a + b + c + d

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
*/

/*
// ejercicio 3 predicciones el nombre completo mas la edad 
const birthYear = 1947;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";

const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

console.log(greeting);
*/

// ejercicio 4 creacion de una presentacion 

/*
let nombre = "javier ";
let apellido = "rodriguez ";
let año = 2025;
let nacimiento = 2009;
let presentacion = `hola my nombre es ${nombre} ${apellido} tengo ${año - nacimiento} años y aprendo javascript `;

console.log (presentacion);
*/
