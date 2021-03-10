<ul class="list-container_wrapper" <?= $data["data-js"] ?>>
	<?php

		foreach($data as $produit)
		{
		?>
			<li class="card"
				value="<?= $produit["produitInventaire"]?>" 
				data-js-product
				data-js-id 
				disabled>
				<article>
					<div class="card_img">
						<img src="<?= $produit["produitImage"]?>" alt="image de pichet" data-js-image >
					</div>
					<div class="card_content">
						<h3 data-js-name><?=$produit["produitNom"]?></h3>
						<h2 class="card_price" data-js-price><?=$produit["produitPrix"] . "$"?></h2>
						<button class="card_buy" data-js-buy>Ajouter au panier</button>
					</div>
				</article>
			</li>	
		<?php
		}
	?>
</ul>