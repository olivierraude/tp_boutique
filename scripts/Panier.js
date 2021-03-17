import { ajaxRequest } from "./ajax.js";

export class Panier {
    constructor(elt) {
        this.elt = elt
        this.compteur = elt.querySelector('[data-js-compteur]');
        this.svg = elt.querySelector('[data-js-svg]');
        this.btn_command = elt.querySelector('[data-js-command]');
        
        this.init()
    }

    init = () => {
        this.init_compteur()
    }

    init_compteur = () => {
        console.log(sessionStorage.commande)
        if (!sessionStorage.commande)
        this.compteur.innerHTML = 0
        else{
            this.calc_compteur()
            //this.afficher_compteur()
        }
    }

    calc_compteur = () => {
        let commande = JSON.parse(sessionStorage.commande),
            total_panier = 0
            console.log(commande)

        for (let item in commande){
            total_panier += commande[item]["quantite"]
        }
        this.compteur.innerHTML = total_panier  
    }
    
    afficher_compteur = () => {
        
    }

}