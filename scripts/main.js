import { Panier } from "./Panier.js"
import { ListeProduits } from "./ListeProduits.js"

document.addEventListener("DOMContentLoaded", function() {
	
	let eltPanier = document.querySelector('header'),
	    eltListeProduits = document.querySelector('[data-js-list]'),
        panier,
        liste_produits
    
    if (eltPanier) panier = new Panier(eltPanier)
    if (eltListeProduits) liste_produits = new ListeProduits(eltListeProduits,panier)
});