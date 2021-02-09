class FormValidation {
    constructor(el) {
        this._el = el;
        // récupère l'élément form
        this._elForm = this._el.querySelector('form');
        // récupère l'attribut action
        this._action = this._elForm.getAttribute('action');
        // met les paramètres dans un tableau
        this._actionParams = this._action.split('&')
        // récupère tous les input ayant data-js-param
        this._elParams = this._el.querySelectorAll('[data-js-param]');
        // initialise la string de paramètres
        this._params;

        // récupère tous les éléments required du formulaire
        this._allRequiredInputs = this._elForm.querySelectorAll("[required]");
        // booléen, vérifie si tous les inputs required sont remplis
        this._allRequiredFill;

        //this._elSelect = this._el.querySelector('[data-js-select]');
        // récupère les éléments select
        this._elSelect = this._el.querySelectorAll('select');
        // récupère l'élément button
        this._elSubmit = this._el.querySelector('[data-js-btn]');
        // récupère l'élément où seront injecté les résultats
        this._elResults = this._el.querySelector('[data-js-results]');


        this.init();
    }

    init = (e) => {

        this._elSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            this.validation();
        });

    }


    validation = () => {

        // initialise la codition à true
        this._allRequiredFill = true;

        // ré-initialise la string de paramètres, le premier paramètre est l'action
        this._params = this._actionParams[1];


        // validation des champs required
        for (let i = 0, l = this._allRequiredInputs.length; i < l; i++) {
            
            if (this._allRequiredInputs[i].value == '') {
                this._allRequiredInputs[i].classList.add('error');
                this._allRequiredFill = false;
            } else {
                if (this._allRequiredInputs[i].classList.contains('error')) this._allRequiredInputs[i].classList.remove('error');
            }
        }

        // si tous les champs required sont remplis
        if (this._allRequiredFill) {

            let inputValue = '';

            for (let i = 0, l = this._elParams.length; i < l; i++) {

                // si c'est un input text
                if (this._elParams[i].type == 'text') inputValue = this._elParams[i].value
    
                // si c'est un select
                if (this._elParams[i].nodeName === 'SELECT') inputValue = this._elParams[i].value;

                
                // reconstruit les paramètres avec leur valeur du formulaire
                this._params += `&${this._elParams[i].dataset.jsParam}${inputValue}`
            
            }

            //console.log(this._params)

            this.callAJAX(this._params)
        }
    }


    callAJAX = (params) => {

        //console.log(this._action)
        //console.log(params)

        // déclaration de l'objet XMLHttpRequest
        var xhr;
        xhr = new XMLHttpRequest();

        // initialisation de la requête
        if(xhr) {	

            // récupère l'index du caractère & (début des paramètres)
            let substringIndex = this._action.indexOf('&');
            // réécrit l'action sans ses paramètres initiaux
            this._action = this._action.substring(0, substringIndex + 1);

            //console.log(this._action)
            //console.log(params)
            
            // ouvre la requète avec l'action concaténé à ses paramètres
            xhr.open("GET", this._action + params);
            
            //2ème étape - spécifier la fonction de callback
            xhr.addEventListener("readystatechange", () => {

                if(xhr.readyState === 4) {							
                    if(xhr.status === 200) {

                        //les données ont été reçues
                        this._elResults.innerHTML = xhr.responseText;

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