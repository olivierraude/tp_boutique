<?php
	class Modele_Boutique extends TemplateDAO
	{
		public function getTable()
		{
			return "produits";
		}	
		
		public function obtenirTous($tri = "nom ASC", $offset = 0) /* $tri = "nom ASC", offset = 0*/
		{
			try
			{
				$stmt = $this->connexion->prepare("SELECT *
														FROM produits
														ORDER BY " . $tri . "
														LIMIT " . $offset . ", 12 ");
				$stmt->execute();
				return $stmt->fetchAll();
			}	
			catch(PDOException $e)
			{
				trigger_error("Erreur lors de la requête: " . $e->getMessage());
				return 0;
			}
		}
	}
?>