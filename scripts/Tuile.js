import { ajouterSession } from "./session.js"

export class Tuile {
    constructor(elt) {
        this.elt = elt;

        this.eltNomProduit = elt.querySelector('[data-js-name]');
        this.eltPrixProduit = elt.querySelector('[data-js-price]');
        this.eltImageProduit = elt.querySelector('[data-js-image]');        
        this.tuiles = elt.querySelectorAll('[data-js-buy]');


        this.init();
    }

    init = () => {
        this.activerTuiles(this.tuiles)
    }

    activerTuiles = (tuiles) => {
        for (let tuile of tuiles) {
        
            //Si 'inventaire' -= 0 this.allTiles.classList.add('btn--disabled');

            tuile.addEventListener('click', (e) => {
                e.preventDefault();

                let nomProduit = this.eltNomProduit.innerHTML,
                    prixProduit = this.eltPrixProduit.innerHTML,
                    imageProduit = this.eltImageProduit.src;
                    
                ajouterSession(nomProduit, prixProduit, imageProduit);
            });
        }
    }
}