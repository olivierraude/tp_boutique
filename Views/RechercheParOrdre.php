<section data-component="ProductList">
	<select data-js-select="tri">

		<option action="index.php?Boutique_AJAX&action=afficheListeProduits" value="id">Trier par</option>
		<option action="index.php?Boutique_AJAX&action=afficheListeProduits" value="prix">Recherche par ordre de prix</option>
		<option action="index.php?Boutique_AJAX&action=afficheListeProduits" value="nom">Recherche par ordre alphabétique</option>

	</select>

	<div data-js-results></div>

	<div class="load">
		<button class="more" data-js-more></button>
	</div>
</section>