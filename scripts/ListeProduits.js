import { ajaxRequest } from './ajax.js'
import { Tuile } from "./Tuile.js"

export class ListeProduits {
    constructor(elt) {
        this.elt = elt
        this.items = elt.querySelectorAll('[data-js-product]')
        this.option_filtre = elt.querySelector('[data-js-select]')
        this.page_container = this.elt.querySelector('.page-container')
        this.liste_container = this.elt.querySelector('.page-container_wrapper')
        this.eltBtn = elt.querySelector('[data-js-more]')
        
        console.log(this.liste_container.parentNode)

        //this.paramAjax = []
        //this.paramAjaxObjet = {}
        this.liste_produit_Id = 0
        this.produits_par_page = 12

        this.init()
    }

    init = () => { 
        this.obtenirTotal() 
        this.option_filtre.addEventListener('change', () => {
            this.pagination = 0
            let listes = this.elt.querySelectorAll('.page-container_wrapper')

            for (let liste of listes)
                liste.innerHTML = ""

            this.afficherListeProduits()
        })
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
            method : "GET",
            action : `index.php?Ajax&action=obtenirTotalProduits`
        }
        ajaxRequest(this.paramAjax, (reponse_ajax) => {
            this.elt.dataset.totalProduit = reponse_ajax
            //this.activerBtn()
        })
    }

    afficherListeProduits = () => {
        this.afficherProduit()
        //this.activerBtn()
    }

    afficherProduit = () => {
        let offset = this.liste_produit_Id * this.produits_par_page,
            filtre = this.option_filtre.value
            console.log(offset)
            console.log(filtre)
        this.paramAjax = {
            method : "GET",
            action : `index.php?Ajax&action=afficheProduitsSuivants&offset=${offset}&filtre=${filtre}`
        }
            ajaxRequest(this.paramAjax, (reponse_ajax) => {
                let items = this.afficherListe(reponse_ajax)
                this.creerTuiles(items)
            })
    }

    afficherListe = (items) => {
        let produits_suivants = document.createElement('div')
            produits_suivants.innerHTML = items
            produits_suivants = this.page_container.insertBefore(produits_suivants, document.querySelector('.load'))
        return produits_suivants.querySelectorAll('[data-js-product]')
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
