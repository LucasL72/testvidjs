// DOM - Document Object Model
/* Query selector
let liste;

liste = document.querySelector("li:nth-child(3)")

liste.style.color = "white";;
liste.style.backgroundColor = "green";
console.log(liste);

liste = document.querySelectorAll("ul li");
liste[1].style.color ="red"
for (var i = 0; i < liste.length; i++) {
    liste[i].style.backgroundColor = "green"
    liste[i].style.color = "white"

} 
console.log(liste); */

/* let liste;
liste = document.getElementsByClassName("collection-item")
liste[1].style.color = "red"
liste[2].textContent = " des fraises"

for ( var i = 0; i < liste.length; i++) {
    liste[i].style.color = "red"
}

console.log(liste); */

/*-----For each ----*

let n = document.querySelectorAll("li")
console.log(n);

n.forEach (function(li) {
    li.style.backgroundColor = "green"
}
) */

/* -----Les Events ------*/
//const h3 = document.querySelector("h3")

/*
h3.onclick = function() {
console.log("coucou");
}


h3.onmouseover = function() {
    console.log("Hop la!");
}

*/
/*
h3.addEventListener("click" , function (e) {
    console.log(e.target);

})
*/

/*
const form = document.getElementById("main")
form.addEventListener("mousemove", mouseTracking);

function mouseTracking(e) {
    h3.textContent = `L'axe x: ${e.offsetX} - L'axe Y: ${e.offsetY}` 
}

/*
function messageBienvenue() {
    let delay = new Date().getTime() + 4000;
    while(new Date()< delay) {}
    prompt(`Bonjour, quel est votre prénom ? `) 
}
messageBienvenue()
*/

/*----Get Attribute----*/
/*
let li = document.querySelector("li")

let n = li

n = li.getAttribute("class")
n = li.setAttribute("style","font-style: italic; color:red")
li.style.fontSize = "30px"

li.removeAttribute("style")
console.log(n);
*/

/*let img = document.querySelector("img");
img.onclick = function () {
    //let src = img.getAttribute("src")
    //alert(src)
    let src = img.setAttribute("src", "https://cdn.freelogovectors.net/wp-content/uploads/2016/02/fanta-logo.jpg")
}

console.log(img);
*/

/* -----navigation dans le Dom *
let nav;

const liste = document.querySelector("li.collection-item")
nav = liste.parentNode.parentNode.parentNode
nav = liste.parentElement.style.color = "red"

nav = liste.childNodes
nav = liste.children
nav = liste.firstChild
nav = liste.lastChild
nav = liste.firstElementChild
console.log(nav);
*/