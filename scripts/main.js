import { ListeProduits } from "./ListeProduits.js"

document.addEventListener("DOMContentLoaded", function() {
	
	let elListeProduits = document.querySelector('[data-js-list]'),
    liste_produits
    
    if (elListeProduits) liste_produits = new ListeProduits(elListeProduits)
});