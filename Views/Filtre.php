<main  data-js-list>
	<div class="list-container">
		<div data-component="ProductList">
			<select class="filter" data-js-select="tri">

				<option action="index.php?Boutique_AJAX&action=afficheListeProduits" value="id">Trier par</option>
				<option action="index.php?Boutique_AJAX&action=afficheListeProduits" value="prix">Recherche par ordre de prix</option>
				<option action="index.php?Boutique_AJAX&action=afficheListeProduits" value="nom">Recherche par ordre alphabétique</option>

			</select>

			<div data-js-results></div>
		</div>
	