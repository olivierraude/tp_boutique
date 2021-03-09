<?php
	class Controleur_Boutique extends BaseControleur
	{
	
		//la fonction qui sera appelée par le routeur
		public function traite(array $params)
		{
			$this->afficheVue("Common/Head");
			$this->afficheVue("Common/Header");
			
			/* if (isset($param["action"])) {
				
				{
					//modèle et vue vides par défaut
					$data = array();
					
					//switch en fonction de l'action qui nous est envoyée
					//ce switch détermine la vue $vue et obtient le modèle $data
					switch($params["action"])
					{
	
	
						default:
							// $modeleBoutique = new Modele_Boutique();
							// $data = $modeleBoutique->obtenirTous();
							// $vue = "ListeBoutique";
							// $this->afficheVue($vue, $data);
						break;
					}			
				}
				else 
				{
	
					$modeleBoutique = new Modele_Boutique();
					$data = $modeleBoutique->obtenirTous();
					//var_dump($data);
		
					$this->afficheVue("Filtre", $data);
					$this->afficheVue("ListeProduits", $data);
					$this->afficheVue("BtnListe", $data);
				} 
			} */

			$modeleBoutique = new Modele_Boutique();
			$data = $modeleBoutique->obtenirTous();

			$this->afficheVue("Filtre", $data);
			$this->afficheVue("ListeProduits", $data);
			$this->afficheVue("BtnListe", $data);

			$this->afficheVue("Common/Footer");
		}
	}
?>

