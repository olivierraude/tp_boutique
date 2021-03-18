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
            this.afficher_compteur()
        }
    }

    calc_compteur = () => {
        let commande = JSON.parse(sessionStorage.commande),
            total_panier = commande.length
            console.log(total_panier)
        
        this.compteur.innerHTML = total_panier  
    }
    
    afficher_compteur = () => {
        let total_panier = parseInt(this.compteur.innerHTML)
        if (total_panier >= 0 && this.compteur.matches('.hidden') && this.btn_command.matches('.hidden')){
            this.compteur.classList.remove('hidden')
            this.btn_command.classList.remove('hidden')
        }else if (total_panier <= 0 && !this.compteur.matches('.hidden') && !this.btn_command.matches('.hidden')){
            this.compteur.classList.add('hidden')
            this.btn_command.classList.add('hidden')
        }
    }

}