import { ajaxRequest } from "./ajax.js";

export class Panier {
    constructor(elt) {
        this.elt = elt
        this.panier = elt.querySelector('[data-js-panier]');
        this.compteur = elt.querySelector('[data-js-compteur]');
        this.svg = elt.querySelector('[data-js-svg]');
        this.btn_command = elt.querySelector('[data-js-command]');

        console.log(this.panier)
        this.init()
    }

    init = () => {
        this.init_compteur()
        this.afficher_btn_commande()
    }

    init_compteur = () => {
        if (!sessionStorage.commande)
        this.compteur.innerHTML = 0
        else{
            this.raffraichir_compteur()
        }
    }

    raffraichir_compteur = () => {
        this.calc_compteur()
        this.afficher_compteur() 
    }
    
    calc_compteur = () => {
        let commande = JSON.parse(sessionStorage.commande),
            total_panier
            total_panier = commande.length
        
        this.compteur.innerHTML = total_panier  
    }
    
    afficher_compteur = () => {
        let total_panier = parseInt(this.compteur.innerHTML)
        if (total_panier >= 0 && this.compteur.matches('.hidden')){
            this.compteur.classList.remove('hidden')
        }else if (total_panier <= 0 && !this.compteur.matches('.hidden')){
            this.compteur.classList.add('hidden')
        }
    }

    afficher_btn_commande = () => {
        if (sessionStorage.commande){
            this.btn_command.classList.remove('hidden')
            this.panier.classList.add('actif')
        } else if (!sessionStorage.commande){
            this.btn_command.classList.add('hidden')
            this.panier.classList.remove('actif')
        }
    }

}