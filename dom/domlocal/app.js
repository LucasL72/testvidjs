// DOM - Document Object Mode
/*
localStorage.setItem("name","toto")
localStorage.setItem("age", "100")

sessionStorage.setItem("name", "sandra")
//localStorage.removeItem("name")

let name = localStorage.getItem("name")
*/

/* Créer l'évènement *
function save() {
    let tache = document.getElementById(`tache`).value;
    localStorage.setItem(`nameTask`, tache)
}

function remove () {
    document.getElementById('tache').value = "";
    localStorage.removeItem("nameTask")
}
 Créer l'évènement preventdefault() */

const lienGoogle = document.getElementById("google")
const cg = document.getElementById("cg")

lienGoogle.addEventListener("click", function(e) {
    if (!cg.checked) {
        e.preventDefault()
    }

})