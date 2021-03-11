<?php
	class Controleur_Ajax extends BaseControleur
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
					case "afficheProduitsSuivants":
						if ((isset($params["offset"]) && $params["filtre"]))
                        {
							$modeleBoutique = new Modele_Boutique();
							$data = $modeleBoutique->obtenirTous($params["filtre"],$params["offset"]);
                        	$vue = "ListeProduits";
                        	$this->afficheVue($vue, $data);
						}
						break;	

					case "obtenirTotalProduits":
						$modeleBoutique = new Modele_Boutique();
						$data = $modeleBoutique->obtenirTotalProduits();	
						echo ($data['total']);
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