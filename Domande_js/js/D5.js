/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];
for(i=0; i < pets.length; i++){
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

let alfabetico = pets.sort();
for(i=0; i < alfabetico.length; i++){
  console.log(alfabetico[i]);
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

let inverso = pets.reverse();
for(i=0; i < inverso.length; i++){
  console.log(inverso[i]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let a = pets[0];
pets.shift(0);
pets.push(a);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
for (let i = 0; i < cars.length; i++) {
  let x = cars[i];
  switch(true) {
    case i == 0:
      x.licensePlate = "AA123AA"
      break;
    case i == 1: 
      x.licensePlate = "BB123BB"
      break;
    case i == 2: 
      x.licensePlate = "CC123CC";
      break;
  }
  console.log(x); 
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: "Ferrari",
  model:  "Purosangue" ,
  color:  "red" ,
  trims: ["sport","supercar",],
  licensePlate: "DD123DD"
});
console.log(cars);
 
for (let i = 0; i < cars.length; i++) {
  let y = cars[i];
  y.trims.pop();  
  console.log(y);
} 

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  let y = cars[i];
  let x = y.trims[0];
  justTrims.push(x);
}
console.log(justTrims);  


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  let y = cars[i];
  let x = y.color;
  if (x.substr(0, 1) == "b")
  {console.log("Fizz");}
  else 
  {console.log("Buzz");}

}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let m = 0;
while(m < numericArray.length && numericArray[m] !=32) {
  console.log(numericArray[m]);
  m++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ['g', 'n', 'u', 'z', 'd']
let lettere = [];
for (let e = 0; e < charactersArray.length; e++) {
let y = charactersArray[e];
switch(true) {
    case y === "a":
    lettere.push(1);
    break;
    case y === "b":
    lettere.push(2);
    break;
    case y === "c":
    lettere.push(3);
    break;
    case y === "d":
    lettere.push(4);
    break;
    case y === "e":
    lettere.push(5);
    break;
    case y === "f":
    lettere.push(6);
    break;
    case y ==="g":
    lettere.push(7);
    break;
    case y === "h":
    lettere.push(8);
    break;
    case y === "i":
    lettere.push(9);
    break;
    case y === "l":
    lettere.push(10);
    break;
    case y === "m":
    lettere.push(11);
    break;
    case y === "n":
    lettere.push(12);
    break;
    case y === "o":
    lettere.push(13);
    break;
    case y === "p":
    lettere.push(14);
    break;
    case y === "q":
    lettere.push(15);
    break;
    case y === "r":
    lettere.push(16);
    break;
    case y === "s":
    lettere.push(17);
    break;
    case y === "t":
    lettere.push(18);
    break;
    case y ==="u":
    lettere.push(19);
    break;
    case y === "v":
    lettere.push(20);
    break;
    case y === "z":
    lettere.push(21);
    break;
 }
}
console.log(lettere);

