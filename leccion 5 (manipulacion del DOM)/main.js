// p
const p = document.createElement("P");

p.style.color ="red"
p.textContent="¡Hola, soy rojo!"

document.body.appendChild(p);
//h3
const h3 = document.createElement("h3")

h3.style.color ="blue"
h3.textContent="¡Hola, soy un H3 azul!"

document.body.appendChild(h3);

// div 
const div = document.createElement("div");

div.style.backgroundColor="pink"

document.body.appendChild(div);
//h1/div 

const h1Div = document.createElement("h1")

h1Div.textContent="estoy en un div"

div.appendChild(h1Div)

//p/div 

const pDiv = document.createElement("p")

pDiv.textContent="yo igual"

div.appendChild(pDiv)

