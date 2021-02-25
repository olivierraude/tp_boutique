import { Tiles } from "./Tiles.js"

export class ProductList {
    constructor(elt) {
        this.elt = elt
        this.eltList = elt.querySelector(['data-js-list'])
        this.eltTiles = elt.querySelectorAll('[data-js-product]')
        this.eltSelect = elt.querySelector('[data-js-select]')
        this.eltBtn = elt.querySelector('[data-js-more]')
        this.eltResults = elt.querySelector('[data-js-results]')

        this.init()
    }

    init = () => {
        this.showItems();
        
    
    }

    showItems = () => {
        console.log('Hello world!')

    }

    ajouteSession = (productName, productPrice, productImage) => {

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
            this._allTiles[i].disabled = true;
            this._allTiles[i].classList.add('btn--disabled');
            this._allTiles[i].classList.remove('grid-item');
            } else { this._allTiles[i].disabled = false; } 
            
            this._allTiles[i].addEventListener('click', (e) => {
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
    }    
}
