export let ajouterSession = (nomProduit, prixProduit, imageProduit) => {
    let quantiteProduit = 0
    let produit = {
        'nom' : nomProduit,
        'prix' : prixProduit,
        'image' : imageProduit,
        'quantite' : quantiteProduit
    };
    
    let commande =  JSON.parse(sessionStorage.getItem('commande')) || [];
        commande.push(produit);
        console.log(commande)
        sessionStorage.setItem('commande', JSON.stringify(commande))

        console.log(sessionStorage.commande)
        //sessionStorage.clear();
}