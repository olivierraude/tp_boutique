<?php
	class Controleur_boutique_AJAX extends BaseControleur
	{	
		//la fonction qui sera appelée par le routeur
		public function traite(array $params)
		{				
							
			if(isset($params["action"]))
			{
				
				//modèle et vue vides par défaut
				$data = array();					
                
				//switch en fonction de l'action qui nous est envoyée
				//ce switch détermine la vue $vue et obtient le modèle $data
				switch($params["action"])
				{
					case "affichePremiereListe":
						$modeleBoutique = new Modele_Boutique();
						$data = $modeleBoutique->obtenirProduits('id',12);
						$vue = "ListeProduits";		
						$this->afficheVue($vue, $data);
							
						break;

					case "afficheListeProduits":
						if ((isset($params["tri"]) && $params["offset"]))
                        {
							$modeleBoutique = new Modele_Boutique();
							$data = $modeleBoutique->obtenirProduits($params["tri"],$params["offset"]);
                        	$vue = "ListeProduits";
                        	$this->afficheVue($vue, $data);
						}
						break;	
          	
					default:
						echo "ERROR IN SWITCH";		
				}						
			}
			else
			{
				echo "ERROR dans affiche";				
			}	
		}	
	}
?>