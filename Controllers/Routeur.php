<?php
	class Routeur
	{
		public static function route()
		{
			//obtenir le controleur qui devra traiter la requète
			
			//obtenir la query string
			$chaineRequete = $_SERVER["QUERY_STRING"];
			$posEperluette = strpos($chaineRequete, "&");
			$controleur = substr($chaineRequete, 0, $posEperluette);
			//var_dump("chaineRequete : " . $chaineRequete);
			//var_dump("posEperluette : " . $posEperluette);
			//var_dump("controleur : " . $controleur);
			
			if($controleur != "")
			{
				//chercher la classe du controleur
				$classe = "Controleur_" . $controleur;
			}
			else
			{	
				//controleur par défaut
				$classe = "Controleur_Boutique";
			}
			//var_dump("classe : " . $classe);
			
			//vérifier que la classe existe
			if(class_exists($classe))
			{
				//dans $classe se trouve le nom de la classe ex : "Controleur_Restaurants"
				$objetControleur = new $classe;
				$objetControleur->traite($_REQUEST);
			}
			else
			{
				die("Erreur 404! Le controleur n'existe pas.");
			}
		}
	}
?>