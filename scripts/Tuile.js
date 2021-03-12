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

                //btn commander ok + incrément nb produit panier
                console.log('click');

                let nomProduit = this.eltNomProduit.innerHTML,
                    prixProduit = this.eltPrixProduit.innerHTML,
                    imageProduit = this.eltImageProduit.src;
                    
                this.ajouterSession(nomProduit, prixProduit, imageProduit);
            });
        }
    }

    ajouterSession = (nomProduit, prixProduit, imageProduit) => {

        let product = {
            'nom' : nomProduit,
            'prix' : prixProduit,
            'image' : imageProduit
        };
        
        let commande =  JSON.parse(sessionStorage.getItem('products')) || [];
            commande.push(product);
            sessionStorage.setItem('products', JSON.stringify(commande));
        
        console.log(commande)
        //this.eltBtnCommand.classList.add('btn--hidden');
        //console.log(commande);
        //this.changePage()
    }
}