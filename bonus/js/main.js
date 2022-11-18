// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

let campominato = document.querySelector(".campo-minato");
let campoPunteggio = document.getElementById("campo-punteggio");

const btn = document.getElementById("btn");
const difficolta = document.getElementById("difficolta").value;
console.log(difficolta);
//serie di variabili utili alla difficolta del gioco
let nBomb = 0;
let nCaselle = 0;
let nClick = 0;
let nRiga = 0;

if (difficolta == "default") {
    nBomb = 16;
    nCaselle = 100;
    nClick = 30;
    nRiga = 10;
} else if(difficolta == "media"){
    nBomb = 20;
    nCaselle = 81;
    nClick = 20;
    nRiga = 9;
} else{
    nBomb = 23;
    nCaselle = 49;
    nClick = 15;
    nRiga = 7;
}

//crea un array di bombe
const myArrNum = genArrMinMax(nBomb, 1, 100);
console.log(myArrNum);
let punteggio = 0;

//aggiungo al css la width personalizzata



btn.addEventListener("click",

    function () {

        let CountButtonHomeClicks = 0;
        campominato.innerHTML = '';
        for (let i = 1; i <= nCaselle; i++) {
            let nuovoElemento = creaBox(nRiga);
            nuovoElemento.append(i);


            nuovoElemento.addEventListener("click",
                function () {
                    if (CountButtonHomeClicks != nClick) {
                        CountButtonHomeClicks++;
                        console.log(CountButtonHomeClicks);
                        if (myArrNum.includes(i)) {
                            nuovoElemento.classList.add("red");
                            punteggio--;
                        } else {
                            nuovoElemento.classList.add("blue");
                            punteggio++;
                        }

                    } else {
                        campoPunteggio.innerText = "il tuo punteggio e di: " + punteggio + " punti";
                    }
                });

            campominato.appendChild(nuovoElemento);
        }
    });


// funzioni

function randomInteger(min, max) {
    return (Math.floor(Math.random() * ((max + 1) - min)));
}

function genArrMinMax(quanti, minNum, maxNum) {

    const arrayRandom = [];
    // genera array di numeri random
    while (arrayRandom.length < quanti) {
        let newNumber = randomInteger(minNum, maxNum);
        if (!arrayRandom.includes(newNumber)) {
            arrayRandom.push(newNumber);
        }

    }

    return arrayRandom;
}

function creaBox(nRighe) {

    const box = document.createElement("div");
    box.classList.add("box");

    box.style.width =`calc(100%/${nRighe})`;
    return box;
}



//tramite la difficolta aumento/diminuisco il numero di bombe
//diminuisco/aumento il numero di caselle
//diminisco/aumento il numero di click

//facile: 100 caselle / 16 bome / 30 click (default)

//media 81 caselle / 20 bombe / 20 click

//difficile 49 caselle / 23 bombe / 15 click