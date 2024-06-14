import readlineSync from "readline-sync";

const name = readlineSync.question("Wie heißt du?");
    console.log(`Hello ${name} !`);
const birthYear = parseInt(readlineSync.question("In welchem Jahr wurdest du geboren?"));
    console.log(`${birthYear} großartiges Jahr`);
const birthTown = readlineSync.question("In welcher Stadt wurdest du geboren?");
    console.log(`${birthTown}`)

const lives = readlineSync.question("Wo lebst du jetzt?")
    console.log(`${lives}`)
const actualYear = parseInt(readlineSync.question("Was ist das aktuelle Jahr?"));
    console.log(`${actualYear}`)

let age = actualYear - birthYear;
    console.log(`Hello! Mein Name ist ${name}. 
Ich bin ${age} Jahre alt und in ${birthTown} geboren. Jetzt lebe ich in ${lives}.`);