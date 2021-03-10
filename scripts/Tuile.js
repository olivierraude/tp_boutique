export class Tuile {
    constructor(elt) {
        this.elt = elt;

        /* this.eltProductName = this.elt.querySeltectorAll('[data-js-name]');
        this.eltProductPrice = this.elt.querySeltectorAll('[data-js-price]');
        this.eltProductImage = this.elt.querySeltectorAll('[data-js-image]');        
        this.eltProduct = this.elt.querySeltector('[data-js-product]');        
        
        this.allTiles = this.elt.querySeltectorAll('[data-js-product]');
        
        console.log(this.elt);
        console.log(this.eltProductName);
        console.log(this.allTiles); */

        this.init();
    }

    init = () => {

/*         for (let i = 0, l = this.allTiles.length; i < l; i++) {
        
            //Si 'inventaire' -= 0 this.allTiles.classList.add('btn--disabled');

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
        
        //this.eltBtnCommand.classList.add('btn--hidden');
        console.log(commande);
        //this.changePage()
    } */
    }
}