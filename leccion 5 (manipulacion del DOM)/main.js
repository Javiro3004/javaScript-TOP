/*codigo js metodo 2 con class */

const btn = document.querySelector(".btn");

btn.onclick = () => alert("hello world !")

/* codigo js metodo 3 con addeventlistener */

const btnByID = document.querySelector("#btnMethod")

btnByID.addEventListener("click", () => {
    alert("Method 3 ")
});