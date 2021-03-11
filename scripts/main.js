import { ListeProduits } from "./ListeProduits.js"

document.addEventListener("DOMContentLoaded", function() {
	
	let eltListeProduits = document.querySelector('[data-js-list]'),
    liste_produits
    
    if (eltListeProduits) liste_produits = new ListeProduits(eltListeProduits)
});