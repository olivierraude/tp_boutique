class Form {
    constructor(el) {
        this._el = el;

        this.init();
    }

    init = () => {
        
        window.addEventListener("load", () => {
            //e.preventDefault();

            this.showNbItems();
            console.log('je me rend ici')
        });
    }

    showNbItems = () => {

        // déclaration de l'objet XMLHttpRequest
        var xhr;
        xhr = new XMLHttpRequest();
        // initialisation de la requête

        if(xhr) {	
        
            xhr.open("GET", "index.php?Boutique_AJAX&action=affichePremiereListe");

            //2ème étape - spécifier la fonction de callback
            xhr.addEventListener("readystatechange", () => {
            //xhr.onload = function() {
              
                //console.log("État de la requête : " + xhr.readyState);
				//console.log("Code de status : " + xhr.status);
                if(xhr.readyState === 4) {							
                    if(xhr.status === 200) {

                        this._elBtnCommand = this._el.querySelector('[data-js-command]');
                        this._elItems = this._el.querySelector('[data-js-items]');
                        this._elNbItems = this._el.querySelector('[data-js-nbItems]');
                        
                        if (sessionStorage.getItem('products')) this._elBtnCommand.classList.remove('btn--hidden')
                        else this._elBtnCommand.classList.add('btn--hidden');

                        if (sessionStorage.getItem('products')) this._elItems.classList.remove('btn--hidden')
                        else this._elItems.classList.add('btn--hidden');
                        
                        if (sessionStorage.getItem('products')) this._elNbItems.classList.remove('btn--hidden')
                        else this._elNbItems.classList.add('btn--hidden');
                        
/*
                        if (sessionStorage.getItem('products')) this._elBtnCommand.classList.remove('btn--hidden') && this._elItems.classList.remove('btn--hidden') && this._elNbItems.classList.remove('btn--hidden')
                        else this._elBtnCommand.classList.add('btn--hidden') && this._elItems.classList.add('btn--hidden') && this._elNbItems.classList.add('btn--hidden');
*/
                        let items = sessionStorage.getItem('products');
                        let commande =  JSON.parse(sessionStorage.getItem('products'));

                        if (items != null ){

                            this._elNbItems.innerHTML = commande.length;
                            console.log(commande.length);
                            
                        } else {
                            console.log('il n y a pas d items')
                        }

                        //this._elCart.innerHTML = xhr.response;
                        
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

