<?php
	class Modele_Boutique extends TemplateDAO
	{
		public function getTable()
		{
			return "produits";
		}	
		
		public function obtenirTous($filtre = "nom ASC", $offset = 0) /* $tri = "nom ASC", offset = 0*/
		{
			try
			{
				$stmt = $this->connexion->prepare("SELECT *
														FROM produits
														ORDER BY " . $filtre . "
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

		public function obtenirTotalProduits()
		{
			try
			{
				$stmt = $this->connexion->prepare("SELECT COUNT(*) AS total FROM produits");
				$stmt->execute();
				return $stmt->fetch(PDO::FETCH_ASSOC);
			}
			catch(PDOException $e) 
			{
				trigger_error("Erreur de requête: " . $e->getMessage());
				return 0;
			}
		}
	}
?>