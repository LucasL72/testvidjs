/* -----Var----------*
var lastName = "Gavroche";
console.log(lastName)
lastName = "Cassette"
console.log(lastName)

/* -----let----------*
let letFirstName ="Thenardier"
let letAge = 11
console.log(letFirstName, letAge);
letFirstName = "Val";
console.log(letFirstName);

/* -----Const----------*
const ThénardierFamily = {
    name: "Gavroche",
    age: 11
}
console.log(ThénardierFamily);
ThénardierFamily.name = "Guillaume"
console.log(ThénardierFamily)

const pizza = ["pâtes", "fromage","jambon"]
console.log(pizza);
pizza.push ("tomates")
console.log(pizza)
pizza.pop()

/* -----Type de données----------
var firstName ="Thénardier";
var age = 26;
var job = false;
var country;
var email = null;
var symbol = symbol();
var date = [1789, 1790, 1791];

var ThénardierFamily = {
    name : "gavroche",
    age : 11
}
 console.log(typeof ThénardierFamily);
 *

let yearComan = 2021 - 1995;
console.log(yearComan);

/** Addition*
let year, 
yearMuller;
year = 2021;
yearMuller = year - 1989; 
console.log(yearMuller)

const yearNeuyer = 1986;
let ageNeuyer = year - yearNeuyer;
console.log(ageNeuyer);

const trois = 3;
const quatre = 4;
let total;
total = trois + quatre;
console.log(total)

/* --- Math Objects---
console.log(Math.PI);
console.log (Math.round(10.9)); 

console.log(Math.sqrt(25));
console.log(Math.abs(14.99));
console.log(Math.ceil(2.1));
console.log(Math.floor(4.9));
console.log(Math.min(9,8,7,6));
console.log(Math.max(9,8,7,6));
console.log(Math.random());

/*---Type coercion--*
const x = 5 * "5" ;
console.log(x);
const messageWelcome = "Bonjour " + "Bienvenue";
console.log(messageWelcome);
const z ="Breton" + 3 + 5;
console.log(z);

const zz = 3 + 5 + "Breton";
console.log(zz);

/*----- Concaténation---
const firstName ="Gavroche";
const lastName ="Thénardier"
const age =26;
const citation ="texte texte bla bla bla bla"

let user;
//user = firstName + lastName + age;
//user ="je m'appelle " + firstName + " " + lastName + " et j'ai " + age + " ans.";
//console.log(user);

/* ---Méthode concat ---
user = firstName.concat(' ', lastName);
console.log(user);

/* ---Méthode Uppercase ---

user = firstName.toUpperCase();
user = firstName[0];
console.log(user);

/* Méthode endsWith*
user = citation.endsWith("a");
console.log(user);

/* Méthode include
user = citation.includes("bla");
console.log(user);

/* Méthode replace
user = citation.replace(/bla/g, "Tonneau")
console.log(user);

/* Méthode search
user = citation.search("bla");
console.log(user);

/* Méthode prototype.split
user = citation.split('');
console.log(user);

/*---- template litterals--
const name = "Gavroche";
const age = 26;
const hello = `Yo : je m'appelle ${name} ! et j'ai ${age}`;

console.log(hello);

/* ---Array----------*

const number = [1, 2, 3, 4, 5];
console.log(number);

const avenger = ["thor", "Ironman", "spidermann"];
const dc = ["batman","superman", "flash"]

const hero = ["thor", 30, true, {lvlAttack : 20, lvlDefense : 30}, [1,2,3], function(){return "Boum!"}]

console.log(hero);

const légumes = new Array ("tomates", "radis", "poireau");
//console.log(légumes);

const longueur = number.length;
console.log(longueur);

/* Méthode indexof *
const index = hero.indexOf(true);
console.log(index);

/* Méthode push *
avenger.push("Captain Marvel");
console.log(avenger);

/* Méthode unshift *
avenger.unshift("Captain America");
console.log(avenger);

/* Méthode pop *
légumes.pop("poireau");
console.log(légumes);

/* Méthode splice *
number.splice(1,3,100);
console.log(number);

/* Méthode reverse *
avenger.reverse();
console.log(avenger);

/* Méthode concat *
let newHero = avenger.concat(dc);
console.log(newHero);

/*--- --------Dates----------*
const date = new Date();
console.log(date);

let today;
today = date;
console.log(`Aujourd hui nous somme le ${today}`);

/*let month = date.getMonth();
console.log(month);*

let year = date.getFullYear();
console.log(year);

let month = new Array();
month[0] = "Janvier";
month[1] = "Février";
month[2] = "Mars";
month[3] = "Avril";
month[4] = "Mai";
month[5] = "Juin";
month[6] = "Juillet";
month[7] = "Aout";
month[8] = "Septembre";
month[9] = "Octobre";
month[10] = "Novembre";
month[11] = "Décembre";

let mois = month[date.getMonth()];
console.log(mois);

/* ---- les conditions-----*/
/* ---- If-----*
let numloto = 20;
if (numloto = 20) {
    console.log("bravo c'est gagné!");
} else {
    console.log("désolé c'est perdu!");
}
let gilet = "bleu";
if (gilet != "jaune") {
    console.log("Open");
} else {
    console.log("on reste chez nous");
}

const yearofBirth = 1995;
if (yearofBirth === 1995) {
    console.log("tu es né en 1995");
} else {
    console.log("dommage");
}

let department = 72;

if (department === 72) {
    console.log("Tu es de Sarthe");
} else if (department === 85) {
    console.log("tu es de vendée");
} else if (department === 17) {
    console.log("Tu viens de Charente-maritime");
} else { 
    console.log("Tu ne viens pas de l'Ouest");
}
 /* -&&-*

 if (1 ===1 && 4 === 3) {
     console.log("C'est vrai");
 } else {
     console.log("c'est faux");
 }


 if (1 ===1 || 4 === 4) {
    console.log("C'est vrai");
} else {
    console.log("c'est faux");
}

/*-----Le switch-----*
let job = "Autres";
switch (job) {
    case "maçon":
        console.log("Il s'occupe des murs");
        break;
    case "plombier":
        console.log("il s'occupe de l'eau");
        break;
    case "électricien":
    console.log("Il s'occupe de l'éléctricité");
    break;
    default : console.log("il travaille pas dans le bâtiment");
    break;
}

let day;

switch (new Date().getDay()) {
    case 0 :
    day = "Dimanche";
    break;
    case 1 :
    day = "lundi";
    break;
    case 2 :
    day = "Mardi";
    case 3 :
    break;
    case 4 :
    day = "Jeudi";
    break;
    case 5 :
    day = "Vendredi";
    break;
    case 6 :
    day = "Samedi";
    break;
}

console.log(`Aujourd'hui on est le ${day}`);;

/*----- les Fonctions--------*

let hello = function () {
    console.log("hello");
}
console.log(hello());

let superficie = function (largeur, longueur) {
    return `la surface est de: ${largeur * longueur} m2.`

}
console.log(superficie(8, 10));


let calculPérimètre = function (rayon) {
    let périmètre = 2 * Math.PI * rayon
    return périmètre
}
console.log(calculPérimètre(5));

/* IIFE ------*
(function (){
    console.log(`je suis une function IIFE`);
})();

( function ( Nname){
    console.log(`Bonjour ${Nname}`);
}
)("coco");

/* -----Méthodes----------*
const Member = {
    add: function (){
        console.log("ajouter une personne");
    },
    edit : function (player) {
        console.log(`la fiche du joueur ${player} est modifié`);
    }
}
console.log(Member.edit("John"));

/* -----Les Boucles----------*

for (let distancemarathon = 5; distancemarathon < 42; distancemarathon++)
    console.log(distancemarathon); *


let player = ["chaudard","pitivier","tassin","colonel blanchet"];
for (let i = 0; i < 4; i++) {
    console.log(player[i]);
}

for (let i = 0; i < 4; i++) {
    if (player[i] === "pitivier") {
        console.log(`${player[i]}: J'ai glissé chef!`);
    }
}
/*------*
let fruit = ["pomme","poire","banane","fraise"];
let i = 0;
while ( i <= fruit.length ) {
    console.log(fruit[i]);
    i++
}
/*-----*
let fruit = ["pomme","poire","banane","fraise"];
let i = 0;
do  {
    console.log(fruit[i]);
        i++
}
while (
    i < fruit.length
)
*/

let champ = ["thresh","bard","morgana","nautilus"]
for (let i = 0; i < 4; i++){
    console.log(i);
}
for (let i = 0; i < 4; i++) {
    if (champ[i] === "thresh") {
        console.log(`${champ[i]}: C'est mon supp ça chef!`);
    }
}

