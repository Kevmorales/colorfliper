const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Hex är siffrorna 0-9 och bokstäverna ABCDEF som representerar 10-15


const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){

let hexColor = '#'; //hex börjar alltid med #

for(let i = 0;i<6;i++) { //hex har 6 värden, vi behöver alltså loopa den 6 gånger. 

hexColor +=hex[getRandomNumber()]; // += för att annars skriver vi bara över värdet från hex till hexColor

}


color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
console.log(hexColor);
})

function getRandomNumber() {
// Math floor för att runda till närmast integer. 
  return Math.floor(Math.random() * hex.length);  //vill ha nummer mellan 0 och den sista indexen i in hex array

}