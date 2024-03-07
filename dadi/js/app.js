const humanDOMElement = document.querySelector('.human');
const pcDOMElement = document.querySelector('.pc');


humanDOMElement.innerHTML = Math.floor(Math.random() * 6) + 1 
pcDOMElement.innerHTML = Math.floor(Math.random() * 6) + 1;



// // preparo un array vuoto che andrò a popolare successivamente
// // e che conterrà una serie di numeri interi
// const humanNumbers = [];
// const computerNumbers = [];

// // creo un ciclo che eseguirà 7 iterazioni
// for (let iterations = 1; iterations <= 6; iterations++) {

//     // ad ogni iterazione genero un numero casuale compreso fra 1 e 6
//     // https://www.w3schools.com/js/js_random.asp
//     const randomHumanNumbers = Math.floor(Math.random() * 6) + 1;
//     const randomComputerNumbers = Math.floor(Math.random() * 6) + 1;

//     // inserisco il numero generato alla fine dell'array numbers
//     humanNumbers.push(randomHumanNumbers);
//     computerNumbers.push(randomComputerNumbers);
// }
// console.log(humanNumbers);
// console.log(computerNumbers);
