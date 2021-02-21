export class Tiles {
    constructor(el) {
        this._el = el;

        this._elProductName = this._el.querySelectorAll('[data-js-name]');
        this._elProductPrice = this._el.querySelectorAll('[data-js-price]');
        this._elProductImage = this._el.querySelectorAll('[data-js-image]');        
        this._elProduct = this._el.querySelector('[data-js-product]');        
        
        this._allTiles = this._el.querySelectorAll('[data-js-product]');
        
        console.log(this._el);
        console.log(this._elProductName);
        console.log(this._allTiles);

        this.init();
    }

    init = () => {

        for (let i = 0, l = this._allTiles.length; i < l; i++) {
        
            //Si 'inventaire' -= 0 this._allTiles.classList.add('btn--disabled');

            this._allTiles[i].addEventListener('click', (e) => {
                e.preventDefault();

                //btn commander ok + incrément nb produit panier
                console.log('click');
                console.log(this._elProduct[i]);

                let productName = this._elProductName[i].innerHTML,
                    productPrice = this._elProductPrice[i].innerHTML,
                    productImage = this._elProductImage[i].src;
                    
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
        
        //this._elBtnCommand.classList.add('btn--hidden');
        console.log(commande);
        //this.changePage()
    }
}
