<?php
	class Controleur_Boutique_AJAX extends Controleur_Boutique
	{	
		//la fonction qui sera appelée par le routeur
		public function traite(array $params)
		{				
							
			if(isset($params["action"]))
			{
				
				//modèle et vue vides par défaut
				$data = array();
                $vue = "";					
                
				//switch en fonction de l'action qui nous est envoyée
				//ce switch détermine la vue $vue et obtient le modèle $data
				switch($params["action"])
				{
					case "affichePremiereListe":
						//var_dump('Ça load!aussi');
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
							//var_dump($params["tri"]);
							//var_dump($params["offset"]);
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