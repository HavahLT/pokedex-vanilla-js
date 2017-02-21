// recuperer les boutons fleches sur la page html :
var fLeft = document.querySelector("#f-left");
var fRight = document.querySelector("#f-right");
// initialisation de i
var i = 0;
// recupt emplacement des elements du pokedex
var emplacementNumero = document.querySelector("#pkmn-number");
var emplacementName = document.querySelector("#pkmn-name .name");
var emplacementImgEtShiny = document.querySelector("#ecran-img");
var emplacementTypes1et2 = document.querySelector("#types");
var emplacementDescription = document.querySelector("#description");
// creation des elements HTML pour insérer les infos
var pkmnNumero = document.createElement("p");
var pkmnName = document.createElement('span');
var pkmnImg = document.createElement('img');
var pkmnShiny = document.createElement('img');
var pkmnType1 = document.createElement("span");
var pkmnType2 = document.createElement("span");
var pkmnDescription = document.createElement('p');
// fonction de recupération des infos du tableau + ajout des balises crées sur le index.html
function recuperationDonnees(i){
pkmnNumero.textContent = pkmnDonnees[i].numero;
  emplacementNumero.appendChild(pkmnNumero);
pkmnName.textContent = pkmnDonnees[i].nom;
  emplacementName.appendChild(pkmnName);
pkmnImg.setAttribute('src', pkmnDonnees[i].img);
pkmnShiny.setAttribute('src', pkmnDonnees[i].shiny);
  emplacementImgEtShiny.appendChild(pkmnImg);
  emplacementImgEtShiny.appendChild(pkmnShiny);
    pkmnType1.classList.add(pkmnDonnees[i].type1);
    pkmnType2.classList.add(pkmnDonnees[i].type2);
pkmnType1.textContent = pkmnDonnees[i].type1;
pkmnType2.textContent = pkmnDonnees[i].type2;
  emplacementTypes1et2.appendChild(pkmnType1);
  emplacementTypes1et2.appendChild(pkmnType2);
pkmnDescription.textContent = pkmnDonnees[i].description;
  emplacementDescription.appendChild(pkmnDescription);
}
recuperationDonnees(i);

if(i > pkmnDonnees[i].length - 1){
  i = 0;
}

//fonctions au clic du bouton GAUCHE
fLeft.addEventListener("click", function(){
  i = i - 1;
  recuperationDonnees(i);
});

fRight.addEventListener("click", function(){
  i = i + 1;
  recuperationDonnees(i);
});
