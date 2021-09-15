const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn'); //knappen fick id btn
const color = document.querySelector(".color"); //Span class .color

btn.addEventListener('click', function() {

console.log(document.body) // dubbelkolla så de funkar. Hämtar Body det är den färgen som byts ut
// Målet är att få ett random nummer mellan 0-3

const randomNumber = getRandomNumber(); 
console.log(randomNumber);


document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];

})

function getRandomNumber() { //skapar funktion för att slumpa fram nån av färgerna hos colors
    // Math floor för att runda till närmast integer. 
    return Math.floor(Math.random() * colors.length); //vi vill ha random mellan längden på colors array antalet.

}