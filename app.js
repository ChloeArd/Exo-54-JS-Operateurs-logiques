let x = 1;
let y = 4;
let z = -1;

let paragraphe = document.getElementById("introduction");
if (x < 2) {
    paragraphe.innerHTML = "x est plus petit que 2";
}

let paragraphe2 = document.getElementById("introduction2");
if (y > 3) {
    paragraphe2.innerHTML = "y est plus grand que 3";
}

let paragraphe3 = document.getElementById("introduction3");
if (z <= 0){
    paragraphe3.innerHTML = " z est inférieur ou égal à 3";
}

let paragraphe4 = document.getElementById("introduction4");
if ((x < 2) && (y > 3) && (z <= 0)) {
    paragraphe4.innerHTML = "x est plus petit que 2 et y est plus grand que 3 et z est inférieur ou égal à 3";
}

let paragraphe5 = document.getElementById("introduction5");
if (((x < 2) && (y > 3)) || z === -1) {
    paragraphe5.innerHTML = "x est inférieur à 2 et y est supérieur à 3 ou z est strictement égal à -1"
}

