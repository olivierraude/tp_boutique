import { ajaxRequest } from './ajax.js'
import { Tuile } from "./Tuile.js"

export class ListeProduits {
    constructor(elt) {
        this.elt = elt
        this.items = this.elt.querySelectorAll('[data-js-product]')
        this.filter = elt.querySelector('[data-js-select]')
        this.eltBtn = elt.querySelector('[data-js-more]')
        this.eltResults = elt.querySelector('[data-js-results]')

        console.log(this.elt)
        console.log(this.items)
        this.paramAjax = []

        this.init()
    }

    init = () => { 
        this.obtenirTotal() 
        this.creerTuiles(this.items) 
    }

    creerTuiles = (items) => {
        for (let item of items) {
            new Tuile(item)
        }
    }


    obtenirTotal(){
        this.paramAjax =
        {
            methode : "GET",
            action : `index.php?Ajax&action=obtenirTotalProduits`
        }
        ajaxRequest(this.paramAjax, (response_ajax) => {
            this.elt.dataset.totalProduits = response_ajax
            this.active_btn()
            console.log(this.elt.dataset.totalProduits)
        })
    }

    /* ajouteSession = (productName, productPrice, productImage) => {

        let product = {
            'nom' : productName,
            'prix' : productPrice,
            'image' : productImage
        };

        let commande =  JSON.parse(sessionStorage.getItem('products')) || [];
        commande.push(product);
        sessionStorage.setItem('products', JSON.stringify(commande));
        
        console.log(commande.length);
    }


    activeTiles = () => {

        for (let i = 0, l = this._allTiles.length; i < l; i++) {
            
            let productInventaire = this.eltProductInventaire[i].value;

            if (productInventaire <= 0) {
            this.allTiles[i].disabled = true;
            this.allTiles[i].classList.add('btn--disabled');
            this.allTiles[i].classList.remove('grid-item');
            } else { this.allTiles[i].disabled = false; } 
            
            this.allTiles[i].addEventListener('click', (e) => {
                e.preventDefault();

                //btn commander ok + incrément nb produit panier
                console.log('click');
                console.log(this.eltProduct[i]);

                let productName = this.eltProductName[i].innerHTML,
                    productPrice = this.eltProductPrice[i].innerHTML,
                    productImage = this.eltProductImage[i].src;
                    
                    console.log(sessionStorage.getItem('products'));
                    
                this.ajouteSession(productName, productPrice, productImage);
            });
        }
    }  */   
}
