// DOM - Document Object Model

// Définir la source

const form = document.querySelector("#course-form");
const listeTache = document.querySelector(".collection");
const supprimerListe = document.querySelector(".supprimer-course");
const contenuTache = document.querySelector("#contenuTache");
const filtrer = document.querySelector('#filter')

//Application 
malistedeTache()


function malistedeTache() {
    // Ajouter un évènement
    form.addEventListener("submit", ajouterUneTache);

    //supprimer une tâche
    listeTache.addEventListener("click", supprimerUneTache)

    // Nettoyer la liste de tâche
    supprimerListe.addEventListener('click', nettoyerLaListe)
    // Filtrer les tâches 
    filtrer.addEventListener("keyup", filtrerLesTaches)
}

// Ajouter une tâche
function ajouterUneTache(e) {
    if (contenuTache.value === "") {
        alert("Ajouter une tâche")
    }
    // Ajouter une balise
    const li = document.createElement("li")
    // Ajouter une classe dans <li>
    li.className = "collection-item"
    // relier le contenu du formulaire dans <li>
    li.appendChild(document.createTextNode(contenuTache.value));
    // Créer un lien <a>
    const link = document.createElement("a");

    // Ajouter une classe à  <a>
    link.className = "delete-item secondary-content";

    //Ajouter une icône
    link.innerHTML = '<ion-icon name="close-circle"></ion-icon>'

    // Relier <a> dans le <li>
    li.appendChild(link);

    //relier <li> à <ul>
    listeTache.appendChild(li);

    contenuTache.value = ""


    e.preventDefault()
}
// Supprimer une tâche
function supprimerUneTache(e) {
    if (e.target.parentElement.classList.contains("delete-item")) {
        if (confirm("Voulez-vous vraiment supprimer ? "))
            e.target.parentElement.parentElement.remove();

    }
}

// Nettoyer la liste de tâche

function nettoyerLaListe() {
    listeTache.innerHTML = ""
}

//Filtrer
function filtrerLesTaches(e) {
    const contenuClavier = e.target.value.toLowerCase()

    document.querySelectorAll('.collection-item').forEach(
        function (tache) {
            const motCle = tache.firstChild.textContent;
            if (motCle.toLocaleLowerCase().indexOf(contenuClavier) != -1) {
                tache.getElementsByClassName.display = 'block'
            } else {
                tache.style.display = 'none'
            }
        }
    );
    console.log(contenuClavier);
}