export let ajouterSession = (item) => {
    let quantiteProduit = 0

    let produit = {
        'nom' : item.dataset.itemNom,
        'quantite' : quantiteProduit
    };
    
    let commande =  JSON.parse(sessionStorage.getItem('commande')) || [];
        commande.push(produit);
        console.log(commande)
        sessionStorage.setItem('commande', JSON.stringify(commande))

        //console.log(sessionStorage.commande)
        //sessionStorage.clear();
}
