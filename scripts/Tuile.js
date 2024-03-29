import { ajouterSession } from "./session.js"

export class Tuile {
    constructor(elt,panier) {
        this.elt = elt;
        this.panier = panier;      
        this.btn_acheter = elt.querySelector('[data-js-buy]');

        
        this.init();
    }

    init = () => {
        this.activerTuiles()
    }

    activerTuiles = () => {
        this.btn_acheter.addEventListener('click', () => { 
            ajouterSession(this.elt)
            this.panier.raffraichir_compteur()
            if (this.panier.compteur.innerHTML =="1")
            this.panier.afficher_btn_commande()
        });
    }
}