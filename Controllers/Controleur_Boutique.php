<?php
	class Controleur_Boutique extends BaseControleur
	{
	
		//la fonction qui sera appelée par le routeur
		public function traite(array $params)
		{
			$this->afficheVue("Common/Head");

			//modèle et vue vides par défaut
			$data = array();

			$vue = "Common/Header";	
			$this->afficheVue($vue);
			$vue = "RechercheParOrdre";	
			$this->afficheVue($vue);
/*
			if(isset($params["action"]))
			{
				//modèle et vue vides par défaut
				$data = array();
				
				//switch en fonction de l'action qui nous est envoyée
				//ce switch détermine la vue $vue et obtient le modèle $data
				switch($params["action"])
				{
					case "RechercheType":
						//$vue = "Header";
						//$this->afficheVue($vue);	
										
						$modeleBoutique = new Modele_Boutique();
						$data = $modeleBoutique->obtenirTous();
						$vue = "Panier";
						$this->afficheVue($vue, $data);
						break;
					
	
					default:
						$modeleBoutique = new Modele_Boutique();
						$data = $modeleBoutique->obtenirTous();
						$vue = "ListeRestaurants";
						$this->afficheVue($vue, $data);
						break;
				}			
			}
			else
			{
				//action par défaut
				$modeleRestaurants = new Modele_Restaurants();							
				$vue = "Acceuil";		
				$this->afficheVue($vue);
			}
			
			/*
			//action par défaut
			$modeleBoutique = new Modele_Boutique();
			$data = $modeleBoutique->obtenirProduits('id', 0);
			$vue = "ListeProduits";		
			$this->afficheVue($vue, $data);
			*/
			$this->afficheVue("Common/Footer");
		}
	}
?>

