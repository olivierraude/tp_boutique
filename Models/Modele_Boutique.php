<?php
	class Modele_Boutique extends TemplateDAO
	{
		public function getTable()
		{
			return "produits";
		}	
		
		public function obtenirProduits($tri, $offset)
		{
			try
			{
				$stmt = $this->connexion->prepare("SELECT produits.id as produitId, produits.nom as produitNom, produits.prix as produitPrix, produits.lienimage as produitImage, produits.inventaire as produitInventaire
													FROM produits
													ORDER BY $tri ASC
													LIMIT 0, $offset");
				$stmt->execute();
				return $stmt->fetchAll();
			}	
			catch(Exception $exc)
			{
				return 0;
			}
		}
	}
?>