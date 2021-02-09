class ProductList {
    constructor(el) {
        this._el = el;

        this._elSelect = this._el.querySelector('[data-js-select]');
        this._elBtn = this._el.querySelector('[data-js-more]');
        this._elResults = this._el.querySelector('[data-js-results]');

        this.init();
    }

    init = () => {

        window.addEventListener("load", () => {
            //e.preventDefault();

            this.showFirstList();
            console.log('je eme suis rendu ici')
        });
        
        this._elBtn.addEventListener('click', (e) => {
            e.preventDefault();

            console.log('click');

            this.showProductList();
        });

        this._elSelect.addEventListener('change', () => {
            
            console.log('change');
            console.log(this._elSelect.value);
            
            this.showProductList();
        });
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
        console.log('je passe ici')
        
        this._elProductInventaire = this._el.querySelectorAll('[data-js-id]');
        this._elProductName = this._el.querySelectorAll('[data-js-name]');
        this._elProductPrice = this._el.querySelectorAll('[data-js-price]');
        this._elProductImage = this._el.querySelectorAll('[data-js-image]');        
        this._elProduct = this._el.querySelector('[data-js-product]'); 
        this._allTiles = this._el.querySelectorAll('[data-js-product]');
        this._elBtnCommand = this._el.querySelector('[data-js-command]');


        for (let i = 0, l = this._allTiles.length; i < l; i++) {
            
            let productInventaire = this._elProductInventaire[i].value;
            
            console.log(productInventaire)

            if (productInventaire <= 0) {
            this._allTiles[i].disabled = true;
            this._allTiles[i].classList.add('btn--disabled');
            this._allTiles[i].classList.remove('grid-item');
            } else{ this._allTiles[i].disabled = false; } 
            
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

    showFirstList = () => {

        // déclaration de l'objet XMLHttpRequest
        var xhr;
        xhr = new XMLHttpRequest();
        // initialisation de la requête

        if(xhr) {	

            xhr.open("GET", "index.php?Boutique_AJAX&action=affichePremiereListe");

            //2ème étape - spécifier la fonction de callback
            xhr.addEventListener("readystatechange", () => {
              
                //console.log("État de la requête : " + xhr.readyState);
				//console.log("Code de status : " + xhr.status);
                if(xhr.readyState === 4) {							
                    if(xhr.status === 200) {
                        
                        //les données ont été reçues
                        this._elResults.innerHTML = xhr.response;
                        //console.log(this._elResults.innerHTML)//xhr.responseText;
                        console.log('je passe ici')
                        this.activeTiles();
                        
                    } else if (xhr.status === 404) {
                        //la page demandée n'existe pas
                    }
                }
            });
            
            //3ème étape - envoi de la requête
            xhr.send();
        }
    }

    showProductList = () => {

        // déclaration de l'objet XMLHttpRequest
        var xhr;
        xhr = new XMLHttpRequest();
        // initialisation de la requête

        if(xhr) {	
            
            let recherche = encodeURIComponent(this._elSelect.value),
                limit = 12;
            limit += 12;
            
            xhr.open("GET", "index.php?Boutique_AJAX&action=afficheListeProduits&tri=" + recherche + "&offset=" + limit);

            //2ème étape - spécifier la fonction de callback
            xhr.addEventListener("readystatechange", () => {

                //console.log("État de la requête : " + xhr.readyState);
				//console.log("Code de status : " + xhr.status);
                if(xhr.readyState === 4) {							
                    if(xhr.status === 200) {
                        
                        //les données ont été reçues
                        this._elResults.innerHTML = xhr.responseText;
                        //console.log('Ça passe par ici!')
                        this.activeTiles();
                    } else if (xhr.status === 404) {
                        //la page demandée n'existe pas
                    }
                }
            });
            
            //3ème étape - envoi de la requête
            xhr.send();
        }
    } 
}
