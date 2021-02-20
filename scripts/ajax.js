/**
 * ajaxRequest 
 * @param {array} data : données nécessaire pour la requête AJAX
 * @param {function} callback : fonction à exécuter lors de la requête AJAX. Lors de la requête AJAX cette fonction est passée en fonction anonyme.
 */

 export let ajaxRequest = (data,callback) => {

    // Creation de l'objet XMLHttpRequest
    var xhr;
    xhr = new XMLHttpRequest();

    if (xhr) {
        // Définition du type de requête et des données
        xhr.open(data.method, data.action);
        if(data.method == "POST"){
            // Si les données sont du JSON, le retour sera un contenu json, sinon on renvoie une url.
            if (data.json){
                xhr.setREquestHeader("Content-Type", "application/json")
            } else xhr.setREquestHeader("Content-Type", "application/x-www-form-urlencoded")
        }

        // Envoi de la fonction de rappel : callback
        xhr.onreadystatechange = () => {

            if (xhr.readyState === 4) {

                if (xhr.status === 200) {
                    callback(xhr.responseText)

                } else if (xhr.status === 404) {
                    console.log('erreur 404')
                }
            }
        }
    }
 }

// Renvoi des données
let donnees = ""
// S'il y a des données à envoyer 
if (data.data_to_send){
    // Convertion du JSON en string
    donnees = JSON.stringify(data.data_to_send)
    // Renvoi de l'URL
    donnees = encodeURIComponent(donnees)
}
xhr.send(donnees)