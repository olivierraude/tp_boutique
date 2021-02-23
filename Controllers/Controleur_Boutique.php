<?php
	class Controleur_Boutique extends BaseControleur
	{
	
		//la fonction qui sera appelée par le routeur
		public function traite(array $params)
		{
			$this->afficheVue("Common/Head");
			$this->afficheVue("Common/Header");

			//modèle et vue vides par défaut
			$data = array();

			$vue = "Common/Header";	
			$this->afficheVue($vue);
			$vue = "RechercheParOrdre";	
			$this->afficheVue($vue);


			$this->afficheVue("Common/Footer");
		}
	}
?>

