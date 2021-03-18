import { ajaxRequest } from "./ajax.js"
import { Tuile } from "./Tuile.js"

export class ListeProduits {
  constructor(elt,panier) {
    this.elt = elt
    this.panier = panier
    this.items = elt.querySelectorAll("[data-js-product]")
    this.option_filtre = elt.querySelector("[data-js-select]")
    this.page_container = this.elt.querySelector(".page-container")
    this.liste_container = this.elt.querySelector(".page-container_wrapper")
    this.btn = elt.querySelector("[data-js-more]")

    this.liste_produit_Id = 0
    this.produits_par_page = 12
    this.paramAjax = []
    this.paramAjaxObjet = {}

    this.init()
  }

  init = () => {
    this.obtenirTotal()
    this.option_filtre.addEventListener("change", () => {
      this.liste_produit_Id = 0
      let listes = this.elt.querySelectorAll(".page-container_wrapper")

      //liste.innerHTML = ""
      for (let liste of listes) liste.parentNode.removeChild(liste)

      this.afficherListeProduits()
    })
    this.btn.addEventListener("click", () => {
      this.liste_produit_Id += 1
      this.afficherListeProduits()
    })
    this.creerTuiles(this.items)
  }

  creerTuiles = (items) => {
    for (let item of items) {
      new Tuile(item, this.panier)
    }
  }

  obtenirTotal() {
    this.paramAjax = {
      method: "GET",
      action: `index.php?Ajax&action=obtenirTotalProduits`,
    }

    ajaxRequest(this.paramAjax, (reponse_ajax) => {
      this.elt.dataset.totalProduit = reponse_ajax
      this.activerBtn()
    })
  }

  afficherListeProduits = () => {
    this.afficherProduit()
    this.activerBtn()
  }

  afficherProduit = () => {
    let offset = this.liste_produit_Id * this.produits_par_page,
      filtre = this.option_filtre.value
    console.log(offset)
    console.log(filtre)

    this.paramAjax = {
      method: "GET",
      action: `index.php?Ajax&action=afficheProduitsSuivants&offset=${offset}&filtre=${filtre}`,
    }

    ajaxRequest(this.paramAjax, (reponse_ajax) => {
      let items = this.afficherListe(reponse_ajax)
      this.creerTuiles(items)
    })
  }

  afficherListe = (items) => {
    let produits_suivants = document.createElement("div")
    produits_suivants.innerHTML = items
    produits_suivants = this.page_container.insertBefore(
      produits_suivants,
      document.querySelector(".load")
    )

    return produits_suivants.querySelectorAll("[data-js-product]")
  }

  activerBtn = () => {
    this.liste_Id_Max = Math.floor(
      this.elt.dataset.totalProduit / this.produits_par_page
    )
    this.btn.disabled =
      this.liste_produit_Id < this.liste_Id_Max ? false : true
  }
}